# DRSPV & Associates — Chartered Accountants Website

Production URL: **https://drspv.in**

A full-featured professional website for DRSPV & Associates, a Chartered Accountancy firm based in Rajkot, Gujarat, serving clients across India, USA, UK, and Australia.

---

## Table of Contents

1. [Project Overview & Tech Stack](#1-project-overview--tech-stack)
2. [Prerequisites](#2-prerequisites)
3. [Local Development Setup](#3-local-development-setup)
4. [Supabase Database Setup](#4-supabase-database-setup)
5. [How to Add a New Blog Post](#5-how-to-add-a-new-blog-post)
6. [How to Add a Knowledge Bank Chapter](#6-how-to-add-a-knowledge-bank-chapter)
7. [How to Add a FAQ Question](#7-how-to-add-a-faq-question)
8. [How to Add a Glossary Term](#8-how-to-add-a-glossary-term)
9. [How to Add a Tax Deadline](#9-how-to-add-a-tax-deadline)
10. [How to Set Up Resend (Email)](#10-how-to-set-up-resend-email)
11. [How to Set Up Buffer API (LinkedIn)](#11-how-to-set-up-buffer-api-linkedin)
12. [How to Deploy to Vercel](#12-how-to-deploy-to-vercel)
13. [How to Connect BigRock Domain to Vercel](#13-how-to-connect-bigrock-domain-to-vercel)
14. [Daily Automation (GitHub Actions)](#14-daily-automation-github-actions)
15. [Webhooks & Local Testing](#15-webhooks--local-testing)
16. [SEO Checklist (Post-Deployment)](#16-seo-checklist-post-deployment)
17. [Monthly Maintenance Tasks](#17-monthly-maintenance-tasks)
18. [Troubleshooting Common Issues](#18-troubleshooting-common-issues)
19. [How to Add a New Service Page](#19-how-to-add-a-new-service-page)
20. [How the Search Index Works](#20-how-the-search-index-works)
21. [File Structure Overview](#21-file-structure-overview)

---

## 1. Project Overview & Tech Stack

### What the site includes

- **10 service pages** (Income Tax Advisory, Audit & Assurance, GST Compliance, Global Accounting, FEMA Compliance, IPO Consultancy, CFO Services, Due Diligence, Startup Advisory, Company Incorporation)
- **10 blog posts** with MDX content, reading progress, table of contents, and article feedback
- **35+ Knowledge Bank articles** across 4 pillars (Income Tax, GST, IPO Handbook, FEMA)
- **4 case studies** (IT Scrutiny Resolved, SME IPO Success, Global Accounting UK, FEMA NRI Repatriation)
- **7 "I Need Help With" problem pages** (GST Notice, ITR Filing, Missed Deadline, NRI Taxes, Planning an IPO, Starting a Business, Tax Notice)
- **Resource centre**: FAQ, Glossary, Tax Calendar, Downloads (email-gated)
- **Newsletter** with welcome emails and weekly digests
- **Global search overlay** with 223 searchable items
- **Cookie consent banner**, floating WhatsApp CTA, breadcrumbs
- **52 React components**, 31 pages, 7 API routes

### Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | MDX (gray-matter + next-mdx-remote) |
| Database | Supabase (PostgreSQL) |
| Email | Resend (transactional + batch newsletters) |
| LinkedIn | Buffer API |
| Forms | React Hook Form + Zod validation |
| Animations | Framer Motion |
| Icons | Lucide React |
| Sitemap | next-sitemap |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
| Domain | BigRock (drspv.in) |

---

## 2. Prerequisites

Before starting, ensure you have:

- **Node.js 18+** and **npm** installed (`node -v` to check)
- A **GitHub** account (for the repository and Actions)
- A **Vercel** account (free tier works) at https://vercel.com
- A **Supabase** account (free tier works) at https://supabase.com
- A **Resend** account at https://resend.com (for sending emails)
- A **Buffer** account at https://buffer.com (for LinkedIn automation, optional)

---

## 3. Local Development Setup

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/drspv.git
cd drspv
```

### Step 2 — Create the environment file

Create a `.env.local` file in the project root:

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_role_key

# Resend (Email)
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=newsletters@drspv.in

# Buffer (LinkedIn — optional)
BUFFER_ACCESS_TOKEN=your_buffer_token
BUFFER_PROFILE_ID=your_linkedin_profile_id

# Webhooks (optional)
WEBHOOK_SECRET=a_random_secret_string
WEBHOOK_CONTACT_URL=https://your-webhook-endpoint.com/contact
WEBHOOK_NEWSLETTER_URL=https://your-webhook-endpoint.com/newsletter
```

### Step 3 — Install dependencies

```bash
npm install
```

### Step 4 — Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Note:** The `prebuild` script automatically generates the search index before every build. During local development, the search index is generated from the previous build. To regenerate it manually:

```bash
npx tsx scripts/generate-search-index.ts
```

---

## 4. Supabase Database Setup

### Step 1 — Create a new Supabase project

Go to https://supabase.com/dashboard and create a new project. Copy the **Project URL**, **anon key**, and **service_role key** into your `.env.local`.

### Step 2 — Run the table creation SQL

Open the **SQL Editor** in your Supabase dashboard and run:

```sql
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  service text,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  first_name text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE downloads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  first_name text,
  download_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE article_feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL,
  vote text NOT NULL CHECK (vote IN ('yes', 'no')),
  type text NOT NULL CHECK (type IN ('blog', 'knowledge')),
  created_at timestamptz DEFAULT now()
);
```

### What each table does

| Table | Purpose |
|---|---|
| `leads` | Contact form submissions (name, phone, email, service, message) |
| `subscribers` | Newsletter subscribers (email, first name, active/unsubscribed status) |
| `downloads` | Tracks email-gated resource downloads |
| `article_feedback` | "Was this helpful?" micro-feedback on blog and knowledge bank articles |

### Step 3 — Enable Row Level Security (recommended)

```sql
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_feedback ENABLE ROW LEVEL SECURITY;
```

All API routes use the `supabaseAdmin` client (service role key), which bypasses RLS. No additional RLS policies are needed for the website to function, but you may add read policies if you build an admin dashboard later.

---

## 5. How to Add a New Blog Post

### Step 1 — Create the MDX file

Create a new `.mdx` file in `content/blogs/`:

```
content/blogs/your-blog-slug.mdx
```

The filename becomes the URL slug: `/blog/your-blog-slug`

### Step 2 — Add frontmatter

Every blog post must start with this frontmatter block:

```yaml
---
title: "Your Blog Post Title"
slug: "your-blog-slug"
date: "2026-04-01"
category: "Income Tax"
excerpt: "A short 1-2 sentence summary that appears in cards, search results, and meta descriptions."
keywords: ["keyword one", "keyword two", "keyword three"]
author: "CA Vrajkishor Changani"
readTime: "6 min"
ogImage: "/images/blog/your-blog-slug.jpg"
featured: false
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Full title, used in page heading and meta title |
| `slug` | Yes | Must match the filename (without `.mdx`) |
| `date` | Yes | ISO format `YYYY-MM-DD`. Determines sort order. |
| `category` | Yes | One of: Income Tax, GST, IPO, FEMA, Business, International |
| `excerpt` | Yes | 1-2 sentences. Used in blog cards, OG description, and search index |
| `keywords` | Yes | Array of SEO keywords |
| `author` | Yes | Author name |
| `readTime` | Yes | Estimated read time string (e.g. "8 min") |
| `ogImage` | Yes | Path to the Open Graph image in `/public/images/blog/` |
| `featured` | No | Set to `true` to display in the featured section at the top of `/blog` |

### Step 3 — Write the content

Write standard MDX after the frontmatter. You can use:

- Standard Markdown (`##`, `###`, `-`, `**bold**`, etc.)
- JSX components inside the content (callout boxes, tips, etc.)
- Code blocks with syntax highlighting

### Step 4 — Add the OG image

Place the Open Graph image at `public/images/blog/your-blog-slug.jpg` (recommended size: 1200x630).

### Step 5 — Rebuild the search index

The search index rebuilds automatically on `npm run build`. For local testing:

```bash
npx tsx scripts/generate-search-index.ts
```

---

## 6. How to Add a Knowledge Bank Chapter

The Knowledge Bank has 4 pillars, each with its own subfolder:

| Pillar | Folder | URL pattern |
|---|---|---|
| Income Tax | `content/knowledge/income-tax/` | `/knowledge-bank/income-tax/[chapter]` |
| GST | `content/knowledge/gst/` | `/knowledge-bank/gst/[module]` |
| IPO Handbook | `content/knowledge/ipo-handbook/` | `/knowledge-bank/ipo-handbook/[part]` |
| FEMA | `content/knowledge/fema/` | `/knowledge-bank/fema/[module]` |

### Step 1 — Create the MDX file

Follow the naming convention of the pillar. Examples:
- `ch-11-assessment-procedures.mdx` (Income Tax)
- `gst-09-refunds.mdx` (GST)
- `ipo-10-investor-relations.mdx` (IPO Handbook)
- `fema-09-gift-remittance.mdx` (FEMA)

### Step 2 — Add frontmatter

```yaml
---
title: "Chapter Title - Sections X & Y | Short Description"
slug: "chapter-slug"
pillar: "income-tax"
chapter: 11
totalChapters: 11
description: "A 1-2 sentence description of what this chapter covers. Used in meta tags and search."
date: "2026-04-01"
author: "CA Vrajkishor Changani"
readTime: "10 min"
keywords: ["keyword one", "keyword two"]
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Full chapter title |
| `slug` | Yes | URL-friendly slug |
| `pillar` | Yes | One of: `income-tax`, `gst`, `ipo-handbook`, `fema` |
| `chapter` | Yes | Chapter number (integer). Determines sidebar order. |
| `totalChapters` | Yes | Total chapters in the pillar. Update existing chapters if this increases. |
| `description` | Yes | Short description for meta tags and search index |
| `date` | Yes | ISO date |
| `author` | Yes | Author name |
| `readTime` | Yes | Estimated reading time |
| `keywords` | Yes | SEO keywords array |

### Step 3 — Write the content

Use the same MDX format as blog posts. Knowledge Bank articles can also use custom components like `<ExpertTip>`, `<WorkedExample>`, `<AmendmentBanner>`, and `<LandmarkJudgement>`.

### Step 4 — Update the search index and pillar page

Remember to update `totalChapters` in existing chapters if needed. The search index rebuilds automatically on build.

---

## 7. How to Add a FAQ Question

FAQs are stored in `content/faq.json` (the canonical data file is also mirrored to `data/faq.json`).

### Schema

Add a new object to the JSON array:

```json
{
  "id": 25,
  "category": "Income Tax",
  "question": "Your question here?",
  "answer": "Your detailed answer here. Can include specific section references, amounts, and dates."
}
```

| Field | Type | Notes |
|---|---|---|
| `id` | Number | Unique integer. Use the next sequential number. |
| `category` | String | One of: `Income Tax`, `GST`, `FEMA`, `Company Law`, `IPO`, `General` |
| `question` | String | The full question text |
| `answer` | String | Plain text answer. No HTML or Markdown. |

The FAQ page at `/resources/faq` renders all questions grouped by category with an accordion UI. Each FAQ is also included in the global search index.

---

## 8. How to Add a Glossary Term

Glossary terms are stored in `content/glossary.json` (also mirrored to `data/glossary.json`).

### Schema

Add a new object to the JSON array (maintain alphabetical order):

```json
{
  "term": "Your Term",
  "definition": "Clear, concise definition of the term. Can reference amounts, sections, or acts.",
  "related": "/services/relevant-service-slug"
}
```

| Field | Type | Notes |
|---|---|---|
| `term` | String | The term name. Keep it title-cased. |
| `definition` | String | 1-3 sentence definition. Plain text only. |
| `related` | String | URL path to a related page on the site. Used as a "Learn more" link. |

The glossary page at `/resources/glossary` renders all terms in alphabetical order with a letter-based browser. Each term is included in the global search index.

---

## 9. How to Add a Tax Deadline

Tax deadlines are stored in `content/tax-calendar.json` (also mirrored to `data/tax-calendar.json`).

### Schema

Add a new object to the JSON array (maintain chronological order):

```json
{
  "date": "2026-07-31",
  "act": "Income Tax",
  "name": "ITR Filing - Individuals (non-audit)",
  "appliesTo": "Salaried individuals, freelancers (non-audit)",
  "penalty": "Rs 5,000 late fee u/s 234F (Rs 1,000 if income < Rs 5 lakh)"
}
```

| Field | Type | Notes |
|---|---|---|
| `date` | String | ISO date `YYYY-MM-DD` |
| `act` | String | One of: `Income Tax`, `GST`, `Company Law`, `TDS` |
| `name` | String | Short name of the deadline/return |
| `appliesTo` | String | Who this deadline applies to |
| `penalty` | String | Penalty description for missing the deadline |

The tax calendar page at `/resources/tax-calendar` displays deadlines in a filterable timeline. The `DeadlineCountdowns` component on the homepage shows the next 3 upcoming deadlines automatically.

---

## 10. How to Set Up Resend (Email)

Resend handles all transactional and newsletter emails.

### Step 1 — Create a Resend account

Sign up at https://resend.com and verify your sending domain.

### Step 2 — Verify your domain

In the Resend dashboard:
1. Go to **Domains** and click **Add Domain**
2. Enter `drspv.in`
3. Add the DNS records Resend provides (SPF, DKIM, DMARC) to your BigRock DNS
4. Wait for verification (usually 5-30 minutes)

### Step 3 — Create an API key

Go to **API Keys** in Resend, create a new key, and add it to your environment variables:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=newsletters@drspv.in
```

### Step 4 — Set up an audience (optional)

If you want to manage subscribers through Resend Audiences:
1. Go to **Audiences** in Resend
2. Create an audience named "DRSPV Newsletter"
3. Note the audience ID for future use

### How emails are sent

The site sends emails in three scenarios:
- **Welcome email**: Sent when someone subscribes to the newsletter (`lib/newsletter.ts` > `sendWelcomeEmail`)
- **Download email**: Sent when someone requests a gated download (`lib/newsletter.ts` > `sendDownloadEmail`)
- **Newsletter digest**: Batch-sent to all active subscribers by the daily automation script (`scripts/send-newsletter.ts`)

---

## 11. How to Set Up Buffer API (LinkedIn)

Buffer automates LinkedIn posting when a new blog is published.

### Step 1 — Create a Buffer account

Sign up at https://buffer.com and connect your LinkedIn company page or personal profile.

### Step 2 — Get your access token

1. Go to https://buffer.com/developers
2. Create a new application or use the existing access token from your Buffer settings
3. Copy the access token

### Step 3 — Find your profile ID

Use the Buffer API to list your profiles:

```bash
curl https://api.bufferapp.com/1/profiles.json?access_token=YOUR_TOKEN
```

Copy the `id` value for your LinkedIn profile.

### Step 4 — Add to environment variables

```env
BUFFER_ACCESS_TOKEN=your_access_token
BUFFER_PROFILE_ID=your_linkedin_profile_id
```

### How it works

The script `scripts/post-to-linkedin.ts` runs daily via GitHub Actions. It:
1. Reads all blog posts from `content/blogs/`
2. Finds the most recent post by date
3. Generates a formatted LinkedIn post with key points, category-specific hashtags, and the article URL
4. Schedules it via the Buffer API

---

## 12. How to Deploy to Vercel

### Step 1 — Import the project

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js — no framework configuration needed

### Step 2 — Set environment variables

In your Vercel project settings, go to **Settings > Environment Variables** and add all variables from your `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://drspv.in
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_role_key
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=newsletters@drspv.in
BUFFER_ACCESS_TOKEN=your_buffer_token
BUFFER_PROFILE_ID=your_linkedin_profile_id
WEBHOOK_SECRET=your_webhook_secret
```

### Step 3 — Deploy

Click **Deploy**. Vercel will:
1. Run `npm install`
2. Run `prebuild` (generates the search index)
3. Run `next build`
4. Run `postbuild` (generates sitemap and robots.txt)
5. Deploy the output

Every push to `main` triggers a new deployment automatically.

### Build commands (for reference)

```
Build Command: npm run build (default, includes prebuild and postbuild)
Output Directory: .next (default)
Install Command: npm install (default)
Node.js Version: 18.x
```

---

## 13. How to Connect BigRock Domain to Vercel

### Step 1 — Add domain in Vercel

1. In your Vercel project, go to **Settings > Domains**
2. Add `drspv.in`
3. Also add `www.drspv.in` (Vercel will auto-redirect www to apex or vice versa)

### Step 2 — Configure DNS records in BigRock

Log in to your BigRock control panel and update DNS records:

**For the apex domain (`drspv.in`):**

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 600 |

**For the www subdomain:**

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME | www | cname.vercel-dns.com | 600 |

### Step 3 — Wait for propagation

DNS propagation takes 5 minutes to 48 hours. You can check status with:

```bash
dig drspv.in
dig www.drspv.in
```

### Step 4 — Verify in Vercel

Once DNS propagates, Vercel automatically provisions an SSL certificate. The domain status will show as "Valid Configuration" in your Vercel dashboard.

### Troubleshooting DNS

- If the A record does not work, try adding all Vercel A records: `76.76.21.21`
- Remove any conflicting A records or CNAME records for `@` or `www`
- BigRock sometimes has a "Manage DNS" and "Advanced DNS" section — use whichever lets you edit A and CNAME records directly

---

## 14. Daily Automation (GitHub Actions)

The file `.github/workflows/daily-automation.yml` runs automated tasks on a schedule.

### Schedule

- **Cron**: `30 3 * * 1-6` (UTC) = **9:00 AM IST, Monday through Saturday**
- Can also be triggered manually via the **Actions** tab > **Run workflow**

### What it does

1. **Posts to LinkedIn** via Buffer (`scripts/post-to-linkedin.ts`): Finds the latest blog post and schedules a LinkedIn post with key points and hashtags
2. **Sends newsletter digest** (`scripts/send-newsletter.ts`): Fetches all active subscribers from Supabase and sends the latest blog post as a newsletter

### Required GitHub Secrets

Go to your repo **Settings > Secrets and variables > Actions** and add:

| Secret | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://drspv.in` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_KEY` | Your Supabase service role key |
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_FROM_EMAIL` | `newsletters@drspv.in` |
| `BUFFER_ACCESS_TOKEN` | Your Buffer access token |
| `BUFFER_PROFILE_ID` | Your Buffer LinkedIn profile ID |

### Testing locally

You can run the scripts manually:

```bash
npx tsx scripts/post-to-linkedin.ts
npx tsx scripts/send-newsletter.ts
```

---

## 15. Webhooks & Local Testing

### How webhooks work

When certain events happen (contact form submission, newsletter signup), the API routes fire outgoing webhooks to external services via `lib/webhooks.ts`.

Each webhook sends a POST request with:
- A JSON body containing event data, a `timestamp`, and `source: "drspv.in"`
- An `X-Webhook-Secret` header for authentication (if `WEBHOOK_SECRET` is set)

Incoming webhook endpoints (`/api/webhook/linkedin` and `/api/webhook/newsletter-send`) validate the secret before processing.

### Environment variables

```env
WEBHOOK_SECRET=your_shared_secret
WEBHOOK_CONTACT_URL=https://your-endpoint.com/contact
WEBHOOK_NEWSLETTER_URL=https://your-endpoint.com/newsletter
```

### Local testing with ngrok

To test webhooks locally:

**Step 1 — Install ngrok**

```bash
npm install -g ngrok
```

**Step 2 — Start your dev server**

```bash
npm run dev
```

**Step 3 — Start ngrok**

```bash
ngrok http 3000
```

ngrok gives you a public URL like `https://abc123.ngrok-free.app`.

**Step 4 — Use the ngrok URL**

Update your webhook URLs to point to the ngrok URL:

```env
WEBHOOK_CONTACT_URL=https://abc123.ngrok-free.app/api/webhook/contact
```

Or test incoming webhooks with curl:

```bash
curl -X POST https://abc123.ngrok-free.app/api/webhook/linkedin \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: your_shared_secret" \
  -d '{"action": "post"}'
```

---

## 16. SEO Checklist (Post-Deployment)

After deploying to production, verify the following:

### Automated (handled by the build)

- [x] `sitemap.xml` generated at `/sitemap.xml` (via next-sitemap)
- [x] `robots.txt` generated at `/robots.txt` with `Allow: /`
- [x] Meta titles use the template `%s | DRSPV & Associates`
- [x] Open Graph meta tags set for all pages
- [x] Security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: origin-when-cross-origin`
- [x] Images served as WebP format

### Manual verification

- [ ] Submit `https://drspv.in/sitemap.xml` to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify all blog posts have unique `ogImage` files
- [ ] Verify structured data with Google's Rich Results Test for FAQ pages
- [ ] Test all pages with Google PageSpeed Insights (target: 90+ on mobile)
- [ ] Verify canonical URLs are correct on all pages
- [ ] Check that `www.drspv.in` redirects properly to `drspv.in` (or vice versa)
- [ ] Verify all Knowledge Bank chapters have proper `description` meta tags
- [ ] Set up Google Analytics or Vercel Analytics
- [ ] Register the site with Google Business Profile for local SEO (Rajkot)

### Ongoing SEO

- Keep blog publishing frequency at 1-2 posts per week
- Ensure each blog targets a primary keyword in the title, excerpt, and first paragraph
- Internal links: Blog posts should link to relevant Knowledge Bank chapters and service pages
- Update `tax-calendar.json` annually to keep deadline pages fresh

---

## 17. Monthly Maintenance Tasks

### Content

- [ ] Publish 4-8 new blog posts
- [ ] Review and update any outdated Knowledge Bank chapters (especially after budget or GST council meetings)
- [ ] Update `tax-calendar.json` with upcoming quarter deadlines
- [ ] Add new FAQ questions based on client enquiries

### Technical

- [ ] Check Supabase dashboard for lead volume and subscriber growth
- [ ] Review Resend dashboard for email delivery rates and bounces
- [ ] Check Buffer dashboard for LinkedIn post engagement
- [ ] Run `npm audit` and update dependencies if security patches are available
- [ ] Review Vercel deployment logs for any build warnings
- [ ] Check Google Search Console for crawl errors or indexing issues

### Annual

- [ ] Update tax slabs and rates after Union Budget (February)
- [ ] Update all `totalChapters` values if new Knowledge Bank chapters were added
- [ ] Review and refresh the services data in `app/services/[slug]/page.tsx`
- [ ] Renew domain registration on BigRock
- [ ] Rotate API keys (Supabase, Resend, Buffer) if needed
- [ ] Review and update the Privacy Policy and Terms pages if applicable

---

## 18. Troubleshooting Common Issues

### Build fails with "Cannot find module"

```
Error: Cannot find module '@/lib/supabase'
```

Ensure the `tsconfig.json` path alias `@/*` points to the project root. This project does not use a `src/` directory.

### Search returns no results

The search index (`public/search-index.json`) is generated at build time by the `prebuild` script. If it is missing or empty:

```bash
npx tsx scripts/generate-search-index.ts
```

Then restart the dev server.

### Supabase "relation does not exist" error

You have not created the database tables. Run the SQL from [Section 4](#4-supabase-database-setup) in the Supabase SQL Editor.

### Emails not sending

1. Check that `RESEND_API_KEY` is set correctly
2. Verify your sending domain is verified in the Resend dashboard
3. Check the Resend logs for delivery failures
4. Ensure `RESEND_FROM_EMAIL` uses a verified domain (e.g. `newsletters@drspv.in`)

### LinkedIn posts not appearing

1. Verify `BUFFER_ACCESS_TOKEN` and `BUFFER_PROFILE_ID` are correct
2. Check the Buffer dashboard for queued or failed posts
3. Run `npx tsx scripts/post-to-linkedin.ts` locally to see error output
4. Buffer tokens can expire — regenerate if needed

### Environment variables not loading on Vercel

- Variables prefixed with `NEXT_PUBLIC_` are available client-side
- Variables without the prefix are server-side only
- After adding new variables in Vercel, you must **redeploy** for them to take effect
- Check that variables are set for the correct environment (Production / Preview / Development)

### "Hydration mismatch" errors

Usually caused by date formatting or browser-specific rendering. Ensure any date logic uses consistent formatting between server and client renders. The `DeadlineCountdowns` component uses client-side rendering to avoid this.

### Webhook requests return 401

The `X-Webhook-Secret` header must match the `WEBHOOK_SECRET` environment variable exactly. Check for trailing whitespace in your secret.

### next-sitemap not generating

Ensure the `postbuild` script is defined in `package.json`:

```json
"postbuild": "next-sitemap"
```

And that `next-sitemap.config.js` exists in the project root with `siteUrl` set.

---

## 19. How to Add a New Service Page

Service pages are driven by the `servicesData` object in `app/services/[slug]/page.tsx`. No new files are needed.

### Step 1 — Add the service data

Open `app/services/[slug]/page.tsx` and add a new entry to the `servicesData` record:

```typescript
"your-service-slug": {
  title: "Your Service Name",
  slug: "your-service-slug",
  metaTitle: "Your Service Name — DRSPV & Associates",
  metaDesc: "Meta description for SEO (150-160 characters).",
  color: "blue",
  description: "A 2-3 sentence overview of the service.",
  whoNeeds: [
    "Description of who needs this service",
    "Another target audience",
  ],
  steps: [
    { title: "Step 1 Title", desc: "What happens in step 1" },
    { title: "Step 2 Title", desc: "What happens in step 2" },
  ],
  faq: [
    { q: "Common question?", a: "Detailed answer." },
  ],
  relatedKB: [
    { title: "Related Article Title", href: "/knowledge-bank/pillar/slug" },
  ],
  keywords: ["keyword1", "keyword2"],
},
```

### Step 2 — Add to the search index

Open `scripts/generate-search-index.ts` and add your service to the `services` array:

```typescript
{ slug: "your-service-slug", title: "Your Service Name", desc: "Short description for search." },
```

### Step 3 — Rebuild and test

```bash
npx tsx scripts/generate-search-index.ts
npm run dev
```

Navigate to `/services/your-service-slug` to verify.

---

## 20. How the Search Index Works

### Overview

The site uses a static JSON-based search index generated at build time. There is no external search service.

### How it is built

The script `scripts/generate-search-index.ts` runs as the `prebuild` step before every `next build`. It:

1. Reads all MDX blog posts from `content/blogs/` and extracts title, excerpt, category
2. Reads all MDX Knowledge Bank articles from `content/knowledge/` (all 4 pillars) and extracts title, description, pillar
3. Reads all FAQs from `content/faq.json` and extracts question and answer
4. Reads all glossary terms from `content/glossary.json` and extracts term and definition
5. Reads the hardcoded services list and extracts title and description
6. Writes the combined index to `public/search-index.json`

### How search works at runtime

1. The user types in the `SearchOverlay` component (triggered by clicking the search icon in the Nav or pressing Cmd/Ctrl+K)
2. The overlay calls `GET /api/search?q=query`
3. The API route loads `public/search-index.json` into memory (cached after first load)
4. It performs a case-insensitive substring match on `title` and `excerpt` fields
5. Results are grouped by type (blogs, knowledge, faqs, glossary, services) with max 5 per type and 10 total
6. Results are returned to the client and displayed in categorized sections

### Regenerating the index

```bash
npx tsx scripts/generate-search-index.ts
```

The index is always regenerated before production builds. You only need to run it manually during local development after adding new content.

---

## 21. File Structure Overview

```
drspv/
├── .github/
│   └── workflows/
│       └── daily-automation.yml      # GitHub Actions: LinkedIn + newsletter
│
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                    # Root layout (Nav, Footer, WhatsApp, Cookie, Search)
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles (Tailwind)
│   ├── about/page.tsx                # About page
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/page.tsx           # Individual blog post
│   ├── contact/
│   │   ├── page.tsx                  # Contact page
│   │   └── ContactForm.tsx           # Contact form component
│   ├── i-need-help-with/
│   │   ├── page.tsx                  # Problem pages hub
│   │   ├── gst-notice/page.tsx
│   │   ├── itr-filing/page.tsx
│   │   ├── missed-deadline/page.tsx
│   │   ├── nri-taxes/page.tsx
│   │   ├── planning-an-ipo/page.tsx
│   │   ├── starting-a-business/page.tsx
│   │   └── tax-notice/page.tsx
│   ├── knowledge-bank/
│   │   ├── page.tsx                  # Knowledge Bank hub
│   │   ├── income-tax/
│   │   │   ├── page.tsx              # Income Tax pillar
│   │   │   └── [chapter]/page.tsx    # Individual chapter
│   │   ├── gst/
│   │   │   ├── page.tsx
│   │   │   └── [module]/page.tsx
│   │   ├── ipo-handbook/
│   │   │   ├── page.tsx
│   │   │   └── [part]/page.tsx
│   │   └── fema/
│   │       ├── page.tsx
│   │       └── [module]/page.tsx
│   ├── newsletter/page.tsx           # Newsletter subscribe/unsubscribe
│   ├── resources/
│   │   ├── page.tsx                  # Resources hub
│   │   ├── case-studies/page.tsx
│   │   ├── downloads/
│   │   │   ├── page.tsx
│   │   │   └── DownloadsClient.tsx
│   │   ├── faq/
│   │   │   ├── page.tsx
│   │   │   └── FAQClient.tsx
│   │   ├── glossary/
│   │   │   ├── page.tsx
│   │   │   └── GlossaryClient.tsx
│   │   └── tax-calendar/
│   │       ├── page.tsx
│   │       └── TaxCalendarClient.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services listing
│   │   └── [slug]/page.tsx           # Individual service (data-driven)
│   └── api/
│       ├── contact/route.ts          # POST: Save lead + fire webhook
│       ├── newsletter/route.ts       # POST: Subscribe + welcome email
│       ├── download-gate/route.ts    # POST: Gate download + email link
│       ├── feedback/route.ts         # POST: Article micro-feedback
│       ├── search/route.ts           # GET: Global search
│       └── webhook/
│           ├── linkedin/route.ts     # POST: Incoming webhook trigger
│           └── newsletter-send/route.ts
│
├── components/                       # 52 React components
│   ├── blog/                         # Blog-specific components
│   │   ├── ArticleFeedback.tsx
│   │   ├── ArticleHero.tsx
│   │   ├── ArticleSidebar.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── BlogSidebar.tsx
│   │   ├── BlogToolbar.tsx
│   │   ├── FeaturedPost.tsx
│   │   ├── ReadingProgress.tsx
│   │   └── TableOfContents.tsx
│   ├── home/                         # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProblemGrid.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── DeadlineCountdowns.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── KnowledgeBankPreview.tsx
│   │   └── OfficesGrid.tsx
│   ├── knowledge/                    # Knowledge Bank components
│   │   ├── ArticleLayout.tsx
│   │   ├── ChapterSidebar.tsx
│   │   ├── PillarCard.tsx
│   │   ├── AmendmentBanner.tsx
│   │   ├── ChapterFAQ.tsx
│   │   ├── ExpertTip.tsx
│   │   ├── LandmarkJudgement.tsx
│   │   ├── SectionInterconnect.tsx
│   │   └── WorkedExample.tsx
│   ├── layout/                       # Global layout components
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── CookieBanner.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── SearchOverlay.tsx
│   ├── problem-pages/                # "I Need Help With" components
│   │   ├── ProblemHero.tsx
│   │   ├── ProblemSwitcher.tsx
│   │   ├── NoticeTypes.tsx
│   │   ├── ConsequenceBand.tsx
│   │   ├── ProcessTimeline.tsx
│   │   └── MiniCaseStudy.tsx
│   ├── resources/                    # Resource page components
│   │   ├── CaseStudyCard.tsx
│   │   ├── DeadlineCountdown.tsx
│   │   ├── DownloadCard.tsx
│   │   ├── EmailGate.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── GlossaryBrowser.tsx
│   │   └── TaxCalendar.tsx
│   └── shared/                       # Reusable shared components
│       ├── CategoryTag.tsx
│       ├── CTAStrip.tsx
│       ├── GoldTopBorder.tsx
│       ├── LiveDot.tsx
│       ├── NewsletterForm.tsx
│       └── WhatsAppCTA.tsx
│
├── content/                          # All MDX and JSON content
│   ├── blogs/                        # 10 blog posts (.mdx)
│   ├── knowledge/
│   │   ├── income-tax/               # 10 chapters (.mdx)
│   │   ├── gst/                      # 8 modules (.mdx)
│   │   ├── ipo-handbook/             # 9 parts (.mdx)
│   │   └── fema/                     # 8 modules (.mdx)
│   ├── case-studies/                 # 4 case studies (.mdx)
│   ├── faq.json
│   ├── glossary.json
│   ├── tax-calendar.json
│   └── downloads.json
│
├── data/                             # Mirrored JSON data files
│   ├── faq.json
│   ├── glossary.json
│   ├── tax-calendar.json
│   └── downloads.json
│
├── lib/                              # Shared utilities
│   ├── supabase.ts                   # Supabase client (anon + admin)
│   ├── newsletter.ts                 # Resend email functions
│   ├── webhooks.ts                   # Webhook fire + validate
│   ├── blog.ts                       # Blog MDX helpers
│   ├── knowledge.ts                  # Knowledge Bank MDX helpers
│   └── mdx.ts                        # MDX parsing utilities
│
├── scripts/                          # CLI scripts (run via tsx)
│   ├── generate-search-index.ts      # Build search index JSON
│   ├── post-to-linkedin.ts           # Buffer API LinkedIn poster
│   └── send-newsletter.ts            # Batch newsletter sender
│
├── public/                           # Static assets
│   └── search-index.json             # Generated search index
│
├── next.config.mjs                   # Next.js configuration
├── next-sitemap.config.js            # Sitemap generation config
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
└── package.json                      # Dependencies and scripts
```

---

## Quick Reference — npm Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Production build (includes prebuild search index + postbuild sitemap) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsx scripts/generate-search-index.ts` | Rebuild search index manually |
| `npx tsx scripts/post-to-linkedin.ts` | Post latest blog to LinkedIn via Buffer |
| `npx tsx scripts/send-newsletter.ts` | Send newsletter digest to all subscribers |

---

## License

This is a private project for DRSPV & Associates. All rights reserved.
