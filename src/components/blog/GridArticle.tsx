import { DoDontFigure, GridStructuresFigure } from "./GridFigures";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-8 text-sm font-semibold md:text-base">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-3 text-[11px] leading-relaxed text-fg/90 md:text-xs">{children}</p>
);

export function GridArticle() {
  return (
    <div>
      <P>
        A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a
        matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a
        consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
      </P>
      <P>
        A good grid creates the structure your interface needs to feel calm. Elements line up, spacing repeats, and the eye knows where to
        go next. Without it, even beautiful components can feel scattered.
      </P>

      <div className="mt-6"><GridStructuresFigure /></div>

      <H2>Breaking Down the Grid</H2>
      <P>
        Every grid is built from a few simple parts. <strong>Columns</strong> divide the page vertically and hold the content.{" "}
        <strong>Gutters</strong> are the spaces between columns. <strong>Margins</strong> are the spaces between the outer columns and the
        edge of the screen.
      </P>

      <H2>Examples of Grids in Web Design</H2>
      <P><strong>Example 1: Hierarchical Grid.</strong> News sites often rank stories by importance, giving the lead story the most space and
        smaller stories a share of what remains.</P>
      <P><strong>Example 2: Modular Grid.</strong> Product listings and galleries use repeating modules so users can scan and compare items
        quickly.</P>
      <P><strong>Example 3: Column Grid.</strong> Long-form content and blogs use a simple column grid to keep line lengths comfortable and
        content easy to read.</P>

      <H2>Benefits of Grid Systems</H2>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[11px] leading-relaxed text-fg/90 md:text-xs">
        <li>Consistency and alignment across every page</li>
        <li>Faster design and development decisions</li>
        <li>Responsive layouts that adapt cleanly to every screen size</li>
        <li>Better readability and visual hierarchy</li>
      </ul>

      <H2>Choosing and Designing Your Grid</H2>
      <P>Start with your content, then pick the grid that serves it. Choose a column count, set gutter and margin sizes, and test the
        layout at your key breakpoints.</P>

      <H2>Always place content within columns, not gutters</H2>
      <P>Content belongs inside the columns. Gutters are breathing room and should stay empty.</P>
      <div className="mt-4"><DoDontFigure /></div>

      <H2>Conclusion</H2>
      <P>Grids give designers a shared language and users a more predictable experience. Learn the rules, then learn when to break them.</P>
    </div>
  );
}
