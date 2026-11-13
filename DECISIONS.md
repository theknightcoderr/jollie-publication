@'
# Architectural & Design Decisions — Jollie Publication (Phase 1, v2)

## 1. Technology & Tooling (§2.1, §4)
- **Typography Delivery**: Chose to self-host `Playfair Display` (weights 500, 600, 700) and `Inter` (weights 400, 500, 600) via `@fontsource` npm packages rather than Google Fonts CDN. This prevents external network requests, eliminates Flash of Unstyled Text (FOUT), and guarantees offline reliability during review.
- **Strict Dependencies**: Installed only the permitted libraries (`react`, `react-dom`, `react-router-dom`, `lucide-react`, `framer-motion`, `tailwindcss`). No state management or form libraries added.
- **Path Aliasing**: Configured `@/` mapped to `./src/` across `tsconfig.app.json` and `vite.config.ts`.

## 2. Design System & Accessibility (§5)
- **Colour Tokens**: Centralised all brand and derived neutral colours as CSS custom properties in `src/styles/globals.css` and mirrored them in `tailwind.config.js`.
- **WCAG AA Contrast Enforcement**: Restricted `gold` (#D6B45C) and `orange` (#F47732) strictly to decorative rules, status dots (paired with text labels), and dark-background accents. Never used as text on light (`paper`, `cream`, `white`) backgrounds.
- **Fallback Visuals**: Built deterministic SVG/CSS components (`<BookCover />`, `<Avatar />`, `<EditorialImage />`) so zero external stock URLs or broken image links exist in the repo.
- **Reduced Motion**: Added a global `@media (prefers-reduced-motion: reduce)` rule in `globals.css` plus Framer Motion reduced-motion checks to disable non-essential transitions.

## 3. Data Integrity & Privacy by Design (§2.2, §2.3, §6)
- **Organisational Placeholders**: Centralised all unknown Jollie facts (contact email, address, social links, founding details, service specifics) in `src/data/siteConfig.ts` marked with `TODO (Jollie): provide`.
- **Mock Content Traceability**: Every mock data file begins with `/* MOCK DATA - replace before launch */` and every record carries `isMock: true`.
- **Draft Separation**: Created `src/types/drafts.ts` strictly isolated from all UI components to enforce privacy-by-design between public writer profiles and Phase 2 private drafts.
- **Async Service Layer**: Components never import `src/data/*` directly; all reads go through `src/services/dataAccess.ts` with a simulated <=250ms Promise delay to showcase genuine loading and empty states.
'@ | Set-Content -Path "DECISIONS.md" -Encoding UTF8