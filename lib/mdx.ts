import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface MDXFrontmatter {
  title: string;
  slug: string;
  date: string;
  category?: string;
  excerpt?: string;
  keywords?: string[];
  author?: string;
  readTime?: string;
  ogImage?: string;
  featured?: boolean;
  pillar?: string;
  chapter?: number;
  totalChapters?: number;
  description?: string;
  [key: string]: unknown;
}

export function getMDXFiles(subDir: string): { slug: string; frontmatter: MDXFrontmatter; content: string }[] {
  const dir = path.join(contentDir, subDir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.mdx$/, "");
    return {
      slug,
      frontmatter: { slug, ...data } as MDXFrontmatter,
      content,
    };
  });
}

export function getMDXBySlug(subDir: string, slug: string) {
  const filePath = path.join(contentDir, subDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: { slug, ...data } as MDXFrontmatter,
    content,
  };
}
