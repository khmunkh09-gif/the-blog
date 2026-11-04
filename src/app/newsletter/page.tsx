import type { Metadata } from "next";
import { NewsletterCta } from "@/components/sections/NewsletterCta";
import { AllPosts } from "@/components/sections/AllPosts";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Newsletter" };

export default function Newsletter() {
  return (
    <>
      <Container><div className="border-t border-line/70" /></Container>
      <NewsletterCta />
      <AllPosts limit={3} />
    </>
  );
}
