import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import { TagList } from "@/components/ui/Tag";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";

interface Props {
  post: Pick<Post, "title" | "excerpt" | "image" | "tags"> & { slug: string; date?: string };
  href?: string;
  /** flex direction / gaps of the card, per breakpoint */
  layoutClass?: string;
  /** size/aspect of the image wrapper, per breakpoint */
  imageClass?: string;
  /** body wrapper classes */
  bodyClass?: string;
  titleClass?: string;
  excerptClass?: string;
  showDate?: boolean;
  priority?: boolean;
}

export function PostCard({
  post, href, layoutClass = "flex-col", imageClass = "aspect-[1.6/1]", bodyClass = "",
  titleClass = "text-[13px]", excerptClass = "", showDate = true, priority,
}: Props) {
  return (
    <article className={cn("card group relative flex gap-4", layoutClass)}>
      <div className={cn("relative shrink-0 overflow-hidden bg-surface", imageClass)}>
        <Image src={post.image} alt={post.title} fill sizes="(min-width:1024px) 40vw, 100vw" priority={priority}
          className="card-img object-cover" />
      </div>
      <div className={cn("flex min-w-0 flex-1 flex-col", bodyClass)}>
        {showDate && post.date && <time className="text-[10px] font-medium text-accent">{post.date}</time>}
        <h3 className={cn("mt-2.5 flex items-start justify-between gap-3 font-semibold leading-snug", titleClass)}>
          <Link href={href ?? `/blog/${post.slug}`} className="card-title after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
          <ArrowIcon className="card-arrow mt-1 shrink-0" />
        </h3>
        <p className={cn("mt-2 text-[11px] leading-relaxed text-muted", excerptClass)}>{post.excerpt}</p>
        <TagList tags={post.tags} className="mt-3 md:mt-4" />
      </div>
    </article>
  );
}
