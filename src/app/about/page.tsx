import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/about";
import { PageTitle } from "@/components/ui/PageTitle";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "About" };

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xs font-semibold md:text-sm">{title}</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[11px] leading-relaxed text-fg/90 md:text-xs">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageTitle text={about.name} size={14.5} className="!font-bold !tracking-[-0.03em]" />
      <Container className="pt-8 md:pt-10">
        <div className="relative aspect-[2.3/1] overflow-hidden bg-surface animate-fade-up">
          <Image src={about.image} alt={about.name} fill priority sizes="100vw" className="object-cover" />
        </div>
        <section className="mt-8">
          <h2 className="text-xs font-semibold md:text-sm">About Me</h2>
          <p className="mt-3 text-[11px] leading-relaxed text-fg/90 md:text-xs">{about.intro}</p>
        </section>
        <Section title="Skills:" items={about.skills} />
        <Section title="Experience:" items={about.experience} />
        <Section title="Education:" items={about.education} />
      </Container>
    </>
  );
}
