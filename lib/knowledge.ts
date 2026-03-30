import { getMDXFiles, getMDXBySlug, type MDXFrontmatter } from "./mdx";

export interface KnowledgeArticle {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

export type Pillar = "income-tax" | "gst" | "ipo-handbook" | "fema";

export const pillarConfig = {
  "income-tax": {
    title: "Income Tax",
    shortTitle: "IT",
    color: "#3B82F6",
    gradient: "linear-gradient(90deg, #3B82F6, #60A5FA, transparent)",
    description: "Complete guide to Income Tax Act, 2025 — all sections, rules, forms, notifications and circulars with landmark judgements, worked examples and quick analysis summary.",
    icon: "FileText",
    chapters: 26,
  },
  gst: {
    title: "GST",
    shortTitle: "GST",
    color: "#10B981",
    gradient: "linear-gradient(90deg, #10B981, #34D399, transparent)",
    description: "Everything about GST — registration, ITC, returns, e-invoicing, composition scheme, audits and penalty provisions with case laws.",
    icon: "Receipt",
    chapters: 8,
  },
  "ipo-handbook": {
    title: "IPO Handbook",
    shortTitle: "IPO",
    color: "#F59E0B",
    gradient: "linear-gradient(90deg, #F59E0B, #FCD34D, transparent)",
    description: "From pre-IPO preparation to post-listing compliance — the complete guide to SME and mainboard IPOs in India.",
    icon: "TrendingUp",
    chapters: 9,
  },
  fema: {
    title: "FEMA",
    shortTitle: "FEMA",
    color: "#A855F7",
    gradient: "linear-gradient(90deg, #A855F7, #C084FC, transparent)",
    description: "Foreign Exchange Management Act decoded — FDI, LRS, NRI banking, ODI, ECB and export-import regulations simplified.",
    icon: "Globe",
    chapters: 8,
  },
} as const;

export function getKnowledgeArticles(pillar: Pillar): KnowledgeArticle[] {
  const articles = getMDXFiles(`knowledge/${pillar}`);
  return articles.sort((a, b) => {
    const aNum = a.frontmatter.chapter || 0;
    const bNum = b.frontmatter.chapter || 0;
    return aNum - bNum;
  });
}

export function getKnowledgeArticle(pillar: Pillar, slug: string): KnowledgeArticle | null {
  return getMDXBySlug(`knowledge/${pillar}`, slug);
}

export function getAllKnowledgeArticles(): KnowledgeArticle[] {
  const pillars: Pillar[] = ["income-tax", "gst", "ipo-handbook", "fema"];
  return pillars.flatMap((p) => getKnowledgeArticles(p));
}
