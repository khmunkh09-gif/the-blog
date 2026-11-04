import Link from "next/link";
import { cn } from "@/lib/cn";

const pagesShown = (total: number): Array<number | "…"> => [1, 2, 3, "…", total - 2, total - 1, total];

export function Pagination({ page, total }: { page: number; total: number }) {
  const href = (p: number) => (p === 1 ? "/blog" : `/blog?page=${p}`);
  const prev = page > 1;
  const next = page < total;
  const arrow = "text-[11px] transition";
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-between border-t border-line/70 pt-4">
      {prev ? (
        <Link href={href(page - 1)} className={cn(arrow, "hover:text-accent")}>← Previous</Link>
      ) : (
        <span className={cn(arrow, "opacity-40")} aria-disabled>← Previous</span>
      )}
      <ul className="flex items-center gap-1 text-[11px]">
        {pagesShown(total).map((p, i) =>
          p === "…" ? (
            <li key={`e${i}`} className="px-2 text-muted">…</li>
          ) : (
            <li key={p}>
              <Link href={href(p)} aria-current={p === page ? "page" : undefined}
                className={cn("flex h-6 min-w-6 items-center justify-center rounded px-1.5 transition",
                  p === page ? "bg-white font-medium text-[#0b0e23] ring-1 ring-black/10 dark:ring-0" : "hover:bg-fg/10")}>
                {p}
              </Link>
            </li>
          ),
        )}
      </ul>
      {next ? (
        <Link href={href(page + 1)} className={cn(arrow, "hover:text-accent")}>Next →</Link>
      ) : (
        <span className={cn(arrow, "opacity-40")} aria-disabled>Next →</span>
      )}
    </nav>
  );
}
