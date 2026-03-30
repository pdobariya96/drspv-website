import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "re_placeholder");
}

export async function sendWelcomeEmail(email: string, firstName?: string) {
  const name = firstName || "there";
  await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL || "newsletters@drspv.in",
    to: email,
    subject: "Welcome to DRSPV & Associates Newsletter",
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #07101E; color: #F0EDE8; padding: 32px;">
        <h1 style="color: #C9A84C; font-size: 24px;">Welcome, ${name}!</h1>
        <p style="color: #8A93A8; line-height: 1.75;">
          Thank you for subscribing to the DRSPV & Associates newsletter.
          You'll receive weekly insights on taxation, GST, FEMA compliance,
          and IPO advisory — written by our qualified CAs.
        </p>
        <p style="color: #8A93A8; line-height: 1.75;">
          Have a question? Reply to this email or WhatsApp us for a quick response.
        </p>
        <p style="color: #4A5568; font-size: 12px; margin-top: 32px;">
          DRSPV & Associates · Chartered Accountants · Rajkot, Gujarat<br/>
          <a href="https://drspv.in" style="color: #C9A84C;">drspv.in</a>
        </p>
      </div>
    `,
  });
}

export async function sendDownloadEmail(
  email: string,
  firstName: string,
  downloadTitle: string,
  downloadUrl: string
) {
  await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL || "newsletters@drspv.in",
    to: email,
    subject: `Your Download: ${downloadTitle} — DRSPV & Associates`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #07101E; color: #F0EDE8; padding: 32px;">
        <h1 style="color: #C9A84C; font-size: 24px;">Hi ${firstName},</h1>
        <p style="color: #8A93A8; line-height: 1.75;">
          Here's your free download: <strong style="color: #F0EDE8;">${downloadTitle}</strong>
        </p>
        <a href="${downloadUrl}" style="display: inline-block; background: linear-gradient(135deg, #C9A84C, #E8C55A); color: #07101E; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; margin: 16px 0;">
          Download Now
        </a>
        <p style="color: #8A93A8; line-height: 1.75; margin-top: 16px;">
          Need help understanding this guide? WhatsApp our CAs for a quick consultation.
        </p>
        <p style="color: #4A5568; font-size: 12px; margin-top: 32px;">
          DRSPV & Associates · Chartered Accountants · Rajkot, Gujarat
        </p>
      </div>
    `,
  });
}

export async function sendNewsletterDigest(
  subscribers: { email: string; first_name?: string }[],
  blogTitle: string,
  blogExcerpt: string,
  blogSlug: string
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drspv.in";

  const batch = subscribers.map((sub) => ({
    from: process.env.RESEND_FROM_EMAIL || "newsletters@drspv.in",
    to: sub.email,
    subject: `New from DRSPV: ${blogTitle}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #07101E; color: #F0EDE8; padding: 32px;">
        <h1 style="color: #C9A84C; font-size: 22px;">Hi ${sub.first_name || "there"},</h1>
        <h2 style="color: #F0EDE8; font-size: 18px; margin-top: 16px;">${blogTitle}</h2>
        <p style="color: #8A93A8; line-height: 1.75;">${blogExcerpt}</p>
        <a href="${siteUrl}/blog/${blogSlug}" style="display: inline-block; background: linear-gradient(135deg, #C9A84C, #E8C55A); color: #07101E; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; margin: 16px 0;">
          Read Full Article
        </a>
        <p style="color: #4A5568; font-size: 12px; margin-top: 32px;">
          DRSPV & Associates · Chartered Accountants · Rajkot<br/>
          <a href="${siteUrl}/newsletter?unsubscribe=true" style="color: #C9A84C;">Unsubscribe</a>
        </p>
      </div>
    `,
  }));

  // Resend batch API supports up to 100 emails per batch
  for (let i = 0; i < batch.length; i += 100) {
    const chunk = batch.slice(i, i + 100);
    await getResend().batch.send(chunk);
  }
}
