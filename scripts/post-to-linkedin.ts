import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BUFFER_ACCESS_TOKEN = process.env.BUFFER_ACCESS_TOKEN;
const BUFFER_PROFILE_ID = process.env.BUFFER_PROFILE_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://drspv.in";

interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  keywords: string[];
}

function getLatestBlog(): { frontmatter: BlogFrontmatter; content: string } | null {
  const blogsDir = path.join(process.cwd(), "content", "blogs");
  if (!fs.existsSync(blogsDir)) return null;

  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".mdx"));
  if (files.length === 0) return null;

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(blogsDir, filename), "utf-8");
    const { data, content } = matter(raw);
    return { frontmatter: data as BlogFrontmatter, content };
  });

  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  return posts[0];
}

function extractKeyPoints(content: string): string[] {
  const lines = content.split("\n");
  const points: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") && trimmed.length > 10 && points.length < 3) {
      points.push(trimmed.replace(/^- /, "").replace(/\*\*/g, ""));
    }
  }
  return points.length > 0 ? points : ["Expert insights from our CA team", "Practical examples included", "Budget 2025-26 updated"];
}

const categoryEmojis: Record<string, string> = {
  "Income Tax": "💰",
  GST: "🧾",
  IPO: "📈",
  FEMA: "🌍",
  Business: "🏢",
  International: "🌐",
};

const categoryHashtags: Record<string, string> = {
  "Income Tax": "#IncomeTax #TaxPlanning #ITR",
  GST: "#GST #GSTIndia #IndirectTax",
  IPO: "#IPO #StockMarket #SEBI",
  FEMA: "#FEMA #NRI #ForeignExchange",
  Business: "#Business #Startup #Entrepreneurship",
  International: "#GlobalAccounting #Outsourcing",
};

async function postToLinkedIn() {
  if (!BUFFER_ACCESS_TOKEN || !BUFFER_PROFILE_ID) {
    console.log("Buffer credentials not configured. Skipping LinkedIn post.");
    return;
  }

  const blog = getLatestBlog();
  if (!blog) {
    console.log("No blog posts found.");
    return;
  }

  const { frontmatter } = blog;
  const emoji = categoryEmojis[frontmatter.category] || "📊";
  const keyPoints = extractKeyPoints(blog.content);
  const hashtags = categoryHashtags[frontmatter.category] || "#Finance #Tax";
  const url = `${SITE_URL}/blog/${frontmatter.slug}`;

  const postText = `${emoji} ${frontmatter.title}

${frontmatter.excerpt}

Key points:
✅ ${keyPoints[0]}
✅ ${keyPoints[1]}
✅ ${keyPoints[2]}

Full analysis with examples 👇
🔗 ${url}

———
CA Vrajkishor Changani | DRSPV & Associates
📍 Rajkot, Gujarat | 🌍 India · USA · UK · Australia

${hashtags} #CA #Taxation #India #Rajkot #DRSPV #CharteredAccountants #Finance`;

  const response = await fetch("https://api.bufferapp.com/1/updates/create.json", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      access_token: BUFFER_ACCESS_TOKEN,
      profile_ids: BUFFER_PROFILE_ID,
      text: postText,
    }),
  });

  const result = await response.json();
  if (result.success) {
    console.log(`LinkedIn post scheduled: ${frontmatter.title}`);
  } else {
    console.error("Failed to post:", result);
  }
}

postToLinkedIn().catch(console.error);
