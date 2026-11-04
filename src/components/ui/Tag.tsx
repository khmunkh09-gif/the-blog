import type { Tag as TagType, TagColor } from "@/data/posts";
import { cn } from "@/lib/cn";

const colors: Record<TagColor, string> = {
  indigo: "text-indigo-700",
  blue: "text-blue-600",
  pink: "text-pink-600",
  orange: "text-orange-600",
  teal: "text-teal-600",
  green: "text-green-600",
  purple: "text-purple-600",
  slate: "text-slate-800",
};

export function Tag({ tag }: { tag: TagType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full bg-white px-2 py-[3px] text-[10px] font-medium leading-none ring-1 ring-black/10 dark:ring-0",
        colors[tag.color],
      )}
    >
      {tag.label}
    </span>
  );
}

export function TagList({ tags, className }: { tags: TagType[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((t) => (
        <li key={t.label}>
          <Tag tag={t} />
        </li>
      ))}
    </ul>
  );
}
