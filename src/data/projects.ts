import type { Tag } from "./posts";

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tags: Tag[];
}

const design: Tag = { label: "Design", color: "indigo" };
const research: Tag = { label: "Research", color: "blue" };
const presentation: Tag = { label: "Presentation", color: "pink" };

export const projects: Project[] = [
  {
    slug: "user-experience-design-dashboard-hotel-management",
    title: "User Experience Design Dashboard Hotel Management",
    excerpt: "A data-rich dashboard that helps hotel teams monitor bookings, occupancy and guest requests at a glance.",
    image: "/images/proj-dashboard.jpg",
    tags: [design, research, presentation],
  },
  {
    slug: "string-of-user-experience-design-to-policy-making",
    title: "String of User Experience Design to Policy Making, How to Impact Society",
    excerpt: "How user experience thinking can shape public policy and create a measurable impact on society.",
    image: "/images/proj-policy.jpg",
    tags: [design, presentation],
  },
  {
    slug: "bringing-design-process-to-teams",
    title: "Bringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designers",
    excerpt:
      "There are many different ways to approach a design process, but it's important to make sure that it's inclusive and collaborative. This project explores how data and inclusive collaboration help teams solve real user problems.",
    image: "/images/proj-collab.jpg",
    tags: [design, research, presentation, { label: "Collaboration", color: "green" }],
  },
  {
    slug: "icon-package-of-line-icon",
    title: "Icon Package of line icon",
    excerpt: "A consistent set of line icons designed for product interfaces, available in multiple sizes and weights.",
    image: "/images/proj-icons.jpg",
    tags: [design, { label: "Interface", color: "pink" }],
  },
  {
    slug: "ux-review-presentations",
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/proj-ux.jpg",
    tags: [design, research, presentation],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
