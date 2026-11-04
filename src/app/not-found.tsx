import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-[10px] font-medium text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <Link href="/blog" className="mt-6 inline-block rounded-[3px] bg-accent px-4 py-2 text-xs font-medium text-white transition hover:brightness-110">
        Back to the blog
      </Link>
    </Container>
  );
}
