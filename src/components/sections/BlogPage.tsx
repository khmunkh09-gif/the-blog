import { PageTitle } from "@/components/ui/PageTitle";
import { RecentPosts } from "./RecentPosts";
import { AllPosts } from "./AllPosts";
import { Pagination } from "@/components/blog/Pagination";
import { totalPages } from "@/data/posts";

export function BlogPage({ page }: { page: number }) {
  return (
    <>
      <PageTitle text="THE BLOG" size={20.5} />
      <RecentPosts />
      <AllPosts>
        <Pagination page={page} total={totalPages} />
      </AllPosts>
    </>
  );
}
