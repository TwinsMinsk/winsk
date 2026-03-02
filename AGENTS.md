# AGENTS.md — Repository-Specific Engineering Spec

## Project: Winsk.by Portfolio

A Cyberpunk/Terminal-aesthetic portfolio site for a Full-Stack & AI Engineer.
Target audiences: Recruiters (Engineering Managers) and B2B clients.
Brand core: Terminal Decode animation — `> Location: Minsk` → glitch → `> Status: Winsk_`.

**Key docs (always read before major changes):**
- `./Docs/PRD-Winsk-by.md` — Product requirements, personas, KPIs
- `./Docs/TechSpec-Winsk-by.md` — Architecture, data types, animation specs
- `./Docs/master-claude-portfolio.md` — Content source for all 6 project cases

---

## Strict Tech Stack

> Deviating from this stack requires explicit user approval and a changelog entry.

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Framework** | Next.js | `^16` | App Router **only**. Pages Router is forbidden. |
| **Runtime** | React | `^19` | Server Components by default. |
| **Language** | TypeScript | `^5` | `strict: true`. `any` is forbidden. |
| **Styling** | Tailwind CSS | `^4` | CSS-first config (`@theme` in `globals.css`). No `tailwind.config.js` unless extending keyframes. |
| **Animations** | Framer Motion | `^12` | Scroll, layout, page transitions, micro-interactions. |
| **Animations** | Custom hooks | — | `useScrambleText`, `useTypewriter`, `useGlitch`, `useCountUp` (see TechSpec §4). |
| **Content** | next-mdx-remote | `^6` | MDX files in `src/content/projects/`. Metadata in `src/data/projects.ts`. |
| **Forms** | react-hook-form + Zod | `^7` / `^4` | Client validation. Submit via `/api/contact` → Telegram Bot API. |
| **Images** | next/image + sharp | — | `avif`/`webp` formats. `priority` prop on LCP images. |
| **Analytics** | @vercel/analytics | `^1` | Injected in root `layout.tsx`. |
| **Hosting** | Vercel | — | `vercel.json` for headers/redirects if needed. |

**Forbidden:**
- `GSAP` (replaced by Framer Motion — see TechSpec §1.3)
- `Contentful`, `Sanity`, or any SaaS CMS (MDX covers all 6 cases)
- `Vanilla CSS` files beyond `globals.css` (use Tailwind utilities)
- Light mode code of any kind (Forced Dark Mode is absolute)

---

## Architecture Rules

### Component Model
```
src/
├── app/              # Next.js App Router — pages & layouts only
├── components/
│   ├── layout/       # Header, Footer, Section, Container
│   ├── ui/           # Atomic: Button, Badge, MetricCard, Card, GlassCard
│   ├── sections/     # Page sections: Hero, ProjectsGrid, AiEcosystem...
│   ├── case/         # Case page components: CaseHero, SolutionsTable...
│   └── animations/   # TerminalDecode, GlitchText, ScrollReveal, CountUp...
├── content/projects/ # *.mdx — case content only (no metadata here)
├── data/             # projects.ts, techStack.ts, services.ts (typed, static)
├── hooks/            # Custom animation & util hooks
├── lib/              # mdx.ts, fonts.ts, telegram.ts, metadata.ts
└── types/            # project.ts, contact.ts
```

### Server vs. Client Components
- **Default: Server Component.** No `'use client'` unless the file uses `useState`, `useEffect`, `useRef`, or Framer Motion animation hooks.
- **Animations always need `'use client'`** — `TerminalDecode`, `ScrollReveal`, `GlitchText` etc.
- **Forms always need `'use client'`** — `ContactForm` with react-hook-form.
- Never add `'use client'` to page-level files (`page.tsx`) — extract client islands instead.

### TypeScript Strictness
```typescript
// ✅ CORRECT
interface ProjectMeta { slug: string; tier: Tier; /* ... */ }
function getProject(slug: string): ProjectMeta | undefined { ... }

// ❌ FORBIDDEN
const project: any = ...
function getProject(slug) { ... }
```

### Data Flow: Two-Layer Content Architecture
```
Layer 1: src/data/projects.ts (TypeScript)
  → Metadata: slug, tier, tags, techStack, metrics, thumbnail
  → Used by: ProjectCard, ProjectsGrid, generateStaticParams

Layer 2: src/content/projects/*.mdx
  → Rich content: business problem, solutions table, code snippets, screenshots
  → Used by: /case/[slug] page via compileMDX (server-side)
```
**Never duplicate data between layers.** Metadata lives in `projects.ts` only.

### Routing
| Route | Type | Notes |
|-------|------|-------|
| `/` | SSG | Static generation at build time |
| `/case/[slug]` | SSG | `generateStaticParams` from `projects.ts` |
| `/about` | SSG | Static |
| `/api/contact` | Route Handler | POST only, no auth needed |
| `not-found.tsx` | Static | Terminal-themed 404 |

### Design System Constants
```
Background Primary:  #0A0E1A  (Deep Navy)
Background Cards:    #111827  (Dark Slate)
Accent Primary:      #7C3AED  (Electric Violet)
Accent Glow:         #A78BFA
Success/Terminal:    #10B981  (Emerald)
Text Primary:        #F8FAFC
Text Secondary:      #94A3B8
Font UI:             Inter (--font-inter)
Font Code/Terminal:  JetBrains Mono (--font-mono)
```

### Animation Conventions
- **Terminal Decode:** Always uses `useTypewriter` → `useScrambleText` hooks. See TechSpec §4.1 for exact timing spec.
- **Scroll reveal:** Wrap with `<ScrollReveal>` component (Framer Motion `whileInView`, `once: true`).
- **Micro-glitch on hover:** Use `useGlitch()` hook returning `[controls, trigger]`. Apply `onHoverStart={trigger}` + `animate={controls}`.
- **Count-up metrics:** Use `useCountUp` with Intersection Observer. Monospace font, `output:` prefix styling.
- **Scanline:** `<ScanlineOverlay />` renders only in `resolved` phase of TerminalDecode and as background element in Hero.

### Performance Rules
- Lighthouse Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90.
- LCP ≤ 2.5s: Always set `priority` on hero images. Use `next/image` — never raw `<img>`.
- CLS ≤ 0.1: Set explicit `width`/`height` or `fill` on every `<Image>`.
- Total page weight (main, excl. video): ≤ 2 MB.
- Fonts: self-hosted via `next/font/google`, `display: 'swap'`.

### SEO Rules
- Every `page.tsx` must export a `generateMetadata` function with unique `title`, `description`, and OG tags.
- Case pages: include `schema.org/CreativeWork` JSON-LD.
- Root layout: include `schema.org/Person` JSON-LD.
- `sitemap.xml`: auto-generated by Next.js.

---

## Spec-Driven Development Workflow

For any **new major feature** (new page, new animation system, new third-party integration):

```
1. READ the PRD and TechSpec sections relevant to the feature.
2. CREATE a Task List artifact with:
   - Goal & acceptance criteria
   - List of files to create/modify
   - TypeScript interfaces needed
   - Verification steps
3. PRESENT to user → wait for approval.
4. EXECUTE the plan, step by step.
5. VERIFY (tsc, build, browser check).
6. LOG in Docs/aiChangeLog/.
```

**Do not skip step 3.** Even if the plan seems obvious.

---

## MDX Case Files

Each case file (`src/content/projects/<slug>.mdx`) uses JSX components inline.
The available MDX component set is defined in `src/components/case/mdx-components.tsx`.

When writing MDX, follow the structure from TechSpec §3.4:
1. `## Business Problem` — prose
2. `<SolutionsTable data={[...]} />` — task/solution/complexity rows
3. `<ArchDiagram src="..." />` — SVG or Mermaid
4. `<Screenshots images={[...]} />` — carousel
5. `<CodeSnippet language="..." filename="..." code={...} />` — highlighted snippets (optional)

**All metadata (slug, title, tier, tags, metrics, thumbnail, URLs) lives in `src/data/projects.ts` only.**
Refer to the `mdx-portfolio-integration` skill for the canonical MDX authoring algorithm.