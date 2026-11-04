# Personal blog site (Next.js + React + Tailwind)

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

Routes: `/` and `/blog` (paged via `?page=N`), `/blog/[slug]`, `/projects`, `/projects/[slug]`, `/about`, `/newsletter`, `/rss.xml`.

- `src/data/` – all content (posts, projects, about, nav/footer links)
- `src/components/` – `layout/`, `blog/`, `sections/`, `ui/`
- `src/styles/custom.css` – theme tokens (dark/light), animations; `public/images/` – photos
