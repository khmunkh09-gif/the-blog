import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, bySlug, posts, recentPosts } from "@/data/posts";
import { Container } from "@/components/ui/Container";
import { TagList } from "@/components/ui/Tag";
import { PostCard } from "@/components/blog/PostCard";
import { GridArticle } from "@/components/blog/GridArticle";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: bySlug(params.slug)?.title ?? "Post" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = bySlug(params.slug);
  if (!post) notFound();
  const sidebar = [...recentPosts, ...allPosts].filter((p) => p.slug !== post.slug);
  const isGrid = post.slug.startsWith("grid-system");

  return (
    <>
      <Container className="grid gap-10 pt-4 lg:grid-cols-[230px_1fr] lg:gap-12">
        <article className="animate-fade-up lg:order-2">
          <Link href="/blog" className="text-[11px] text-muted transition hover:text-fg lg:hidden">← Back to blog</Link>
          <time className="mt-4 block text-[10px] font-medium text-accent lg:mt-0">{post.date}</time>
          <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{post.title}</h1>
          <TagList tags={post.tags} className="mt-4" />
          <div className="relative mt-6 aspect-[2.1/1] overflow-hidden bg-surface">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width:1024px) 70vw, 100vw" className="object-cover" />
          </div>
          {isGrid ? <GridArticle /> : <p className="mt-6 text-[11px] leading-relaxed text-fg/90 md:text-xs">{post.excerpt}</p>}
        </article>

        <aside className="lg:order-1" aria-label="Recent blog posts">
          <h2 className="text-[13px] font-medium">Recent blog posts</h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {sidebar.slice(0, 7).map((p) => (
              <PostCard key={p.slug} post={p} imageClass="aspect-[1.7/1]" titleClass="text-xs" excerptClass="line-clamp-3" />
            ))}
          </div>
        </aside>
      </Container>
      <div className="mt-6 border-t border-line/50"><NewsletterCta as="h2" /></div>
    </>
  );
}
