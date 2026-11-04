import { recentPosts } from "@/data/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Container } from "@/components/ui/Container";

export function RecentPosts() {
  const [featured, linear, api, grid] = recentPosts;
  return (
    <Container className="pt-8 md:pt-10">
      <h2 className="text-[13px] font-medium md:text-sm">Recent blog posts</h2>

      <div className="reveal mt-6 grid gap-8 md:gap-6 lg:grid-cols-[0.9fr_1fr] lg:gap-x-10 lg:gap-y-14">
        <PostCard post={featured} priority
          imageClass="aspect-[1.7/1] md:aspect-[3.5/1] lg:aspect-[2.3/1]"
          titleClass="text-[13px] md:text-sm" bodyClass="md:mt-0" />

        <div className="flex flex-col gap-8 md:gap-6 lg:gap-8">
          {[linear, api].map((p) => (
            <PostCard key={p.slug} post={p}
              layoutClass="flex-col md:flex-row md:gap-5"
              imageClass="aspect-[1.7/1] md:aspect-auto md:w-[42%] md:min-h-[100px] lg:w-[54%]"
              titleClass="text-xs" excerptClass="line-clamp-3" />
          ))}
        </div>

        <div className="lg:col-span-2">
          <PostCard post={grid}
            layoutClass="flex-col lg:flex-row lg:gap-10"
            imageClass="aspect-[2.46/1] lg:aspect-[2.46/1] lg:w-[52%]"
            titleClass="text-[13px] md:text-sm lg:text-[13px]" />
        </div>
      </div>
    </Container>
  );
}
