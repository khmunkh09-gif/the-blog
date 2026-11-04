import type { Metadata } from "next";
import { BlogPage } from "@/components/sections/BlogPage";
import { parsePage } from "@/lib/page";

export const metadata: Metadata = { title: "Blog" };

export default function Blog({ searchParams }: { searchParams: { page?: string } }) {
  return <BlogPage page={parsePage(searchParams.page)} />;
}
