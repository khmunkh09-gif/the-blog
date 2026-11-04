import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { TagList } from "@/components/ui/Tag";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: projectBySlug(params.slug)?.title ?? "Project" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectBySlug(params.slug);
  if (!project) notFound();
  return (
    <Container className="max-w-[900px] animate-fade-up pt-6 md:pt-10">
      <Link href="/projects" className="text-[11px] text-muted transition hover:text-fg">← All projects</Link>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight md:text-4xl">{project.title}</h1>
      <TagList tags={project.tags} className="mt-4" />
      <div className="relative mt-8 aspect-[2/1] overflow-hidden bg-surface">
        <Image src={project.image} alt={project.title} fill priority sizes="900px" className="object-cover" />
      </div>
      <p className="mt-8 text-xs leading-relaxed text-fg/90 md:text-sm">{project.excerpt}</p>
    </Container>
  );
}
