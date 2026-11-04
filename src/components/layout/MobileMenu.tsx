"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu({ open, onClose, isActive }: { open: boolean; onClose: () => void; isActive: (href: string) => boolean }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex animate-fade-in flex-col items-center justify-center gap-7 bg-[rgb(var(--menu-bg))] text-fg"
    >
      <Link href="/" onClick={onClose} className="text-[13px] font-bold">
        {siteConfig.name}
      </Link>
      <nav className="flex flex-col items-center gap-6 text-[13px]">
        {siteConfig.nav.map((n) => (
          <Link key={n.href} href={n.href} onClick={onClose} aria-current={isActive(n.href) ? "page" : undefined}
            className={isActive(n.href) ? "font-semibold" : "text-fg/90 transition hover:text-fg"}>
            {n.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
      <button type="button" onClick={onClose} aria-label="Close menu" className="absolute bottom-8 p-3 transition hover:rotate-90">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <path d="M2 2l10 10M12 2L2 12" />
        </svg>
      </button>
    </div>
  );
}
