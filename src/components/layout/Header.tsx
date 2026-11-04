"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = useCallback(
    (href: string) =>
      href === "/blog" ? pathname === "/" || pathname.startsWith("/blog") : pathname.startsWith(href),
    [pathname],
  );

  useEffect(() => setOpen(false), [pathname]);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header>
      <Container className="flex h-[60px] items-center justify-between md:h-[72px]">
        <Link href="/" className="text-[13px] font-semibold md:text-xs md:font-medium">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-5 text-xs md:flex" aria-label="Main">
          {siteConfig.nav.map((n) => (
            <Link key={n.href} href={n.href} className={`nav-link ${isActive(n.href) ? "font-semibold" : "text-fg/80 hover:text-fg"}`}
              aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu"
          className="-mr-2 p-2 md:hidden">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
            <path d="M2 4h12M2 8h12M2 12h12" />
          </svg>
        </button>
      </Container>
      <MobileMenu open={open} onClose={close} isActive={isActive} />
    </header>
  );
}
