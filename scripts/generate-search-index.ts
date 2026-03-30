import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface SearchItem {
  id: string;
  type: "blog" | "knowledge" | "faq" | "glossary" | "service";
  title: string;
  excerpt: string;
  url: string;
  category?: string;
  pillar?: string;
}

const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");

function readMDXFiles(subDir: string): { slug: string; data: Record<string, unknown> }[] {
  const dir = path.join(contentDir, subDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return { slug: filename.replace(/\.mdx$/, ""), data };
    });
}

function readJSON(filePath: string): unknown[] {
  const full = path.join(contentDir, filePath);
  if (!fs.existsSync(full)) return [];
  return JSON.parse(fs.readFileSync(full, "utf-8"));
}

function generateIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Blog posts
  const blogs = readMDXFiles("blogs");
  for (const b of blogs) {
    items.push({
      id: `blog-${b.slug}`,
      type: "blog",
      title: (b.data.title as string) || b.slug,
      excerpt: (b.data.excerpt as string) || "",
      url: `/blog/${b.slug}`,
      category: b.data.category as string,
    });
  }

  // Knowledge Bank articles
  const pillars = ["income-tax", "gst", "ipo-handbook", "fema"];
  for (const pillar of pillars) {
    const articles = readMDXFiles(`knowledge/${pillar}`);
    for (const a of articles) {
      items.push({
        id: `kb-${pillar}-${a.slug}`,
        type: "knowledge",
        title: (a.data.title as string) || a.slug,
        excerpt: (a.data.description as string) || "",
        url: `/knowledge-bank/${pillar}/${a.slug}`,
        pillar,
      });
    }
  }

  // FAQs
  const faqs = readJSON("faq.json") as { id: string; question: string; answer: string; category: string }[];
  for (const faq of faqs) {
    items.push({
      id: `faq-${faq.id}`,
      type: "faq",
      title: faq.question,
      excerpt: faq.answer.slice(0, 150),
      url: `/resources/faq#${faq.id}`,
      category: faq.category,
    });
  }

  // Glossary
  const terms = readJSON("glossary.json") as { id: string; term: string; definition: string }[];
  for (const term of terms) {
    items.push({
      id: `glossary-${term.id}`,
      type: "glossary",
      title: term.term,
      excerpt: term.definition.slice(0, 150),
      url: `/resources/glossary#${term.term.toLowerCase().replace(/\s+/g, "-")}`,
    });
  }

  // Services
  const services = [
    { slug: "income-tax-advisory", title: "Income Tax Advisory", desc: "Expert tax planning, ITR filing, tax notice handling and NRI taxation services." },
    { slug: "audit-assurance", title: "Audit & Assurance", desc: "Statutory audit, internal audit, tax audit and due diligence services." },
    { slug: "gst-compliance", title: "GST Compliance", desc: "GST registration, returns, annual filing, notices and compliance advisory." },
    { slug: "global-accounting", title: "Global Accounting", desc: "Outsourced bookkeeping and accounting for businesses in USA, UK and Australia." },
    { slug: "fema-compliance", title: "FEMA Compliance", desc: "FDI, LRS, NRI banking, ODI and ECB compliance advisory." },
    { slug: "ipo-consultancy", title: "IPO Consultancy", desc: "End-to-end SME and mainboard IPO advisory including DRHP and SEBI compliance." },
    { slug: "cfo-services", title: "CFO Services", desc: "Virtual CFO support with MIS reporting, budgeting and financial planning." },
    { slug: "due-diligence", title: "Due Diligence", desc: "Financial and tax due diligence for M&A transactions and investments." },
    { slug: "startup-advisory", title: "Startup Advisory", desc: "Startup India recognition, ESOP structuring, funding compliance." },
    { slug: "company-incorporation", title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Section 8 company registration and ROC filing." },
  ];
  for (const s of services) {
    items.push({
      id: `service-${s.slug}`,
      type: "service",
      title: s.title,
      excerpt: s.desc,
      url: `/services/${s.slug}`,
    });
  }

  return items;
}

const index = generateIndex();
fs.writeFileSync(path.join(publicDir, "search-index.json"), JSON.stringify(index, null, 2));
console.log(`Search index generated: ${index.length} items`);
