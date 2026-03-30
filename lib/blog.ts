import { getMDXFiles, getMDXBySlug, type MDXFrontmatter } from "./mdx";

export interface BlogPost {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const posts = getMDXFiles("blogs");
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getMDXBySlug("blogs", slug);
}

export function getBlogCategories(): { name: string; count: number }[] {
  const posts = getAllBlogPosts();
  const cats: Record<string, number> = {};
  posts.forEach((p) => {
    const cat = p.frontmatter.category || "General";
    cats[cat] = (cats[cat] || 0) + 1;
  });
  return Object.entries(cats).map(([name, count]) => ({ name, count }));
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.frontmatter.featured);
}
