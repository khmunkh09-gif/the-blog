import { posts } from "@/data/posts";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const items = posts
    .map((p) => `<item><title>${esc(p.title)}</title><link>${origin}/blog/${p.slug}</link><description>${esc(p.excerpt)}</description></item>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>The Blog</title><link>${origin}/blog</link><description>Blog by Your Name</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
