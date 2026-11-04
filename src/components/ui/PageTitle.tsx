import { Container } from "./Container";

/** Giant headline framed by two hairlines. `size` is in container-query width units. */
export function PageTitle({ text, size, className = "" }: { text: string; size: number; className?: string }) {
  return (
    <Container className="animate-fade-in">
      <div className="border-y border-line/70 py-2 md:py-4">
        <div className="fit-title">
          <h1 className={className} style={{ fontSize: `${size}cqw` }}>
            {text}
          </h1>
        </div>
      </div>
    </Container>
  );
}
