import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY || ""
);
const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://drspv.in";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "newsletters@drspv.in";

interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

function getLatestBlog(): BlogFrontmatter | null {
  const blogsDir = path.join(process.cwd(), "content", "blogs");
  if (!fs.existsSync(blogsDir)) return null;

  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".mdx"));
  if (files.length === 0) return null;

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(blogsDir, filename), "utf-8");
    const { data } = matter(raw);
    return data as BlogFrontmatter;
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts[0];
}

async function sendNewsletter() {
  const blog = getLatestBlog();
  if (!blog) {
    console.log("No blog posts found.");
    return;
  }

  const { data: subscribers, error } = await supabase
    .from("subscribers")
    .select("email, first_name")
    .eq("status", "active");

  if (error || !subscribers || subscribers.length === 0) {
    console.log("No active subscribers found.");
    return;
  }

  console.log(`Sending newsletter to ${subscribers.length} subscribers...`);
  const articleUrl = `${SITE_URL}/blog/${blog.slug}`;

  const emails = subscribers.map((sub) => ({
    from: FROM_EMAIL,
    to: sub.email,
    subject: `📊 ${blog.category} | ${blog.title}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #07101E; color: #F0EDE8;">
        <div style="padding: 24px 32px; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <h1 style="color: #C9A84C; font-size: 18px; margin: 0;">DRSPV & Associates</h1>
          <p style="color: #4A5568; font-size: 11px; margin: 4px 0 0;">Chartered Accountants · Weekly Insights</p>
        </div>
        <div style="padding: 32px;">
          <p style="color: #8A93A8; font-size: 14px;">Hi ${sub.first_name || "there"},</p>
          <h2 style="color: #F0EDE8; font-size: 20px; line-height: 1.4; margin: 16px 0 8px;">${blog.title}</h2>
          <p style="color: #8A93A8; font-size: 14px; line-height: 1.75;">${blog.excerpt}</p>
          <a href="${articleUrl}" style="display: inline-block; background: linear-gradient(135deg, #C9A84C, #E8C55A); color: #07101E; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; margin: 20px 0;">
            Read Full Article →
          </a>
        </div>
        <div style="padding: 20px 32px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="color: #4A5568; font-size: 11px; margin: 0;">
            DRSPV & Associates · Rajkot, Gujarat · Mon-Sat 09AM-09PM IST<br/>
            <a href="${SITE_URL}/newsletter?unsubscribe=true" style="color: #C9A84C; text-decoration: underline;">Unsubscribe</a>
          </p>
        </div>
      </div>
    `,
  }));

  for (let i = 0; i < emails.length; i += 100) {
    const batch = emails.slice(i, i + 100);
    try {
      await resend.batch.send(batch);
      console.log(`Sent batch ${Math.floor(i / 100) + 1}: ${batch.length} emails`);
    } catch (err) {
      console.error(`Failed batch ${Math.floor(i / 100) + 1}:`, err);
    }
  }

  console.log(`Newsletter sent: ${blog.title} → ${subscribers.length} subscribers`);
}

sendNewsletter().catch(console.error);
