import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-16 pb-10 md:mt-20">
      <Container>
        <div className="flex flex-col items-center gap-3 text-[11px] md:flex-row md:gap-4">
          <span>© {siteConfig.year}</span>
          <ul className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            {siteConfig.footerLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition hover:text-accent">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="transition hover:text-accent">{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
