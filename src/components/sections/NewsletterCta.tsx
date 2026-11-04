import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterCta({ as: Tag = "h1" }: { as?: "h1" | "h2" }) {
  return (
    <Container className="animate-fade-up py-12 text-center md:py-16">
      <p className="text-[10px] font-medium text-accent">Newsletter</p>
      <Tag className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Stories and interviews</Tag>
      <p className="mx-auto mt-4 max-w-[480px] text-[11px] text-muted md:text-xs">
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
      </p>
      <NewsletterForm />
    </Container>
  );
}
