import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageTitle } from "@/components/ui/PageTitle";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  const [a, b, wide, d, e] = projects;
  const card = (p: typeof a, aspect: string) => (
    <PostCard post={p} href={`/projects/${p.slug}`} showDate={false} imageClass={aspect}
      titleClass="text-[13px]" excerptClass="line-clamp-4" />
  );
  return (
    <>
      <PageTitle text="PROJECTS" size={18.6} />
      <Container className="pt-8 md:pt-10">
        <h2 className="text-[13px] font-medium md:text-sm">List Project</h2>
        <div className="reveal mt-6 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {card(a, "aspect-[1.9/1]")}
          {card(b, "aspect-[1.9/1]")}
          <div className="md:col-span-2">{card(wide, "aspect-[2.3/1]")}</div>
          {card(d, "aspect-[1.9/1]")}
          {card(e, "aspect-[1.9/1]")}
        </div>
      </Container>
    </>
  );
}
