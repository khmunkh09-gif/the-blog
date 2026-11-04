export type TagColor =
  | "indigo" | "blue" | "pink" | "orange" | "teal" | "green" | "purple" | "slate";

export interface Tag { label: string; color: TagColor }

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: Tag[];
}

const DATE = "Sunday , 1 Jan 2023";

export const posts: Post[] = [
  {
    slug: "ux-review-presentations",
    title: "UX review presentations",
    date: DATE,
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/ux-review.jpg",
    tags: [
      { label: "Design", color: "indigo" },
      { label: "Research", color: "blue" },
      { label: "Presentation", color: "pink" },
    ],
  },
  {
    slug: "migrating-to-linear-101",
    title: "Migrating to Linear 101",
    date: DATE,
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/images/linear.jpg",
    tags: [
      { label: "Design", color: "blue" },
      { label: "Research", color: "pink" },
    ],
  },
  {
    slug: "building-your-api-stack",
    title: "Building your API Stack",
    date: DATE,
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: "/images/api-stack.jpg",
    tags: [
      { label: "Design", color: "green" },
      { label: "Research", color: "pink" },
    ],
  },
  {
    slug: "grid-system-for-better-design-user-interface",
    title: "Grid system for better Design User Interface",
    date: DATE,
    excerpt:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    image: "/images/grid-system.jpg",
    tags: [
      { label: "Design", color: "indigo" },
      { label: "Interface", color: "pink" },
    ],
  },
  {
    slug: "bill-walsh-leadership-lessons",
    title: "Bill Walsh leadership lessons",
    date: DATE,
    excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/bill-walsh.jpg",
    tags: [
      { label: "Leadership", color: "indigo" },
      { label: "Management", color: "slate" },
      { label: "Presentation", color: "pink" },
    ],
  },
  {
    slug: "pm-mental-models",
    title: "PM mental models",
    date: DATE,
    excerpt: "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/pm-mental-models.jpg",
    tags: [
      { label: "Product", color: "teal" },
      { label: "Research", color: "blue" },
      { label: "Frameworks", color: "orange" },
    ],
  },
  {
    slug: "what-is-wireframing",
    title: "What is Wireframing?",
    date: DATE,
    excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/wireframing.jpg",
    tags: [
      { label: "Design", color: "indigo" },
      { label: "Research", color: "blue" },
      { label: "Presentation", color: "pink" },
    ],
  },
  {
    slug: "how-collaboration-makes-us-better-designers",
    title: "How collaboration makes us better designers",
    date: DATE,
    excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/collaboration.jpg",
    tags: [
      { label: "Design", color: "indigo" },
      { label: "Research", color: "blue" },
      { label: "Presentation", color: "pink" },
    ],
  },
  {
    slug: "our-top-10-javascript-frameworks-to-use",
    title: "Our top 10 Javascript frameworks to use",
    date: DATE,
    excerpt: "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/javascript.jpg",
    tags: [
      { label: "Software Development", color: "green" },
      { label: "Tools", color: "green" },
      { label: "SaaS", color: "pink" },
    ],
  },
  {
    slug: "podcast-creating-a-better-cx-community",
    title: "Podcast: Creating a better CX Community",
    date: DATE,
    excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/podcast.jpg",
    tags: [
      { label: "Podcasts", color: "purple" },
      { label: "Customer Success", color: "slate" },
      { label: "Presentation", color: "pink" },
    ],
  },
];

export const bySlug = (slug: string) => posts.find((p) => p.slug === slug);
const pick = (...s: string[]) => s.map((x) => bySlug(x)!) ;

export const recentPosts = pick(
  "ux-review-presentations",
  "migrating-to-linear-101",
  "building-your-api-stack",
  "grid-system-for-better-design-user-interface",
);
export const allPosts = pick(
  "bill-walsh-leadership-lessons",
  "pm-mental-models",
  "what-is-wireframing",
  "how-collaboration-makes-us-better-designers",
  "our-top-10-javascript-frameworks-to-use",
  "podcast-creating-a-better-cx-community",
);
export const totalPages = 10;
