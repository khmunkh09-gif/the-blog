import { allPosts } from "@/data/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Container } from "@/components/ui/Container";

export function AllPosts({ children, heading = "All blog posts", limit }: { children?: React.ReactNode; heading?: string; limit?: number }) {
  const list = limit ? allPosts.slice(0, limit) : allPosts;
  return (
    <Container className="pt-12 md:pt-14">
      <h2 className="text-[13px] font-medium md:text-sm">{heading}</h2>
      <div className="reveal mt-6 grid gap-x-4 gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
        {list.map((p) => (
          <PostCard key={p.slug} post={p} imageClass="aspect-[1.6/1]" bodyClass="" />
        ))}
      </div>
      {children}
    </Container>
  );
}
