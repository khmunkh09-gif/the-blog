import { BlogPage } from "@/components/sections/BlogPage";
import { parsePage } from "@/lib/page";

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  return <BlogPage page={parsePage(searchParams.page)} />;
}
