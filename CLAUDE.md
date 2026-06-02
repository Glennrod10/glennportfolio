# Glenn Rodrigues Portfolio

## Tech Stack
- **Framework**: Next.js 16.2.6 (App Router)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5
- **CSS**: Tailwind CSS v4
- **Animations**: Framer Motion 12, GSAP 3.15
- **Scroll**: Lenis 1.3
- **3D**: Three.js 0.184, @react-three/fiber 9.6
- **Icons**: Lucide React 1.16

## Project Structure
```
src/
├── app/
│   ├── globals.css        # Tailwind v4 setup with @theme tokens
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Home page renders <Layout />
├── components/
│   ├── command-palette/   # Ctrl+K command palette navigation
│   ├── cursor/            # Custom animated cursor with glow follower
│   ├── layout/
│   │   ├── footer.tsx     # Footer with social links, contact info
│   │   └── layout.tsx     # Main layout composing all sections
│   ├── sections/
│   │   ├── about.tsx      # About section with skills grid
│   │   ├── contact.tsx    # Terminal-style contact form + social links
│   │   ├── experience.tsx # Work experience timeline
│   │   ├── hero.tsx       # Hero: navbar, name, photo placeholder, CTA, counter stats, particles
│   │   ├── playground.tsx # Interactive experiments showcase
│   │   ├── process.tsx    # 6-step development process
│   │   ├── projects.tsx   # Featured projects with challenges/metrics
│   │   ├── tech-stack.tsx # Tech categories with skill bars + parallax
│   │   └── testimonials.tsx # Client testimonials carousel
│   └── ui/
│       └── button.tsx     # CVA button with gradient variant
└── lib/
    └── utils.ts           # cn() utility (clsx + tailwind-merge)
```

## Design System
- **Theme**: Dark-first with light mode via `[data-theme="light"]`
- **Colors**: Defined in globals.css `@theme` block (background, surface, card, primary, secondary, accent, etc.)
- **Key classes**: `gradient-text`, `glass-effect`, `hero-gradient`, `glow-effect`, `cursor-follower`, `cursor-glow`
- **Custom cursor**: Hidden native cursor over interactive elements, shows custom glow/follower. Uses `requestAnimationFrame` lerp (0.15 factor) for smooth tracking — no CSS transitions on cursor elements.
- **Navbar**: Fixed glass-effect nav with desktop links + mobile hamburger menu. Hero section CTA buttons scroll to sections.
- **Section IDs**: All sections have `id` attributes (e.g. `projects-section`, `contact-section`) for smooth scroll navigation.
- **Counter animation**: Stats animate counting up via `useInView` + `setInterval` when scrolled into view.
- **Hero layout**: Split grid (text left, visual right). Floating tech icons scattered in background rather than around image.

## Key Conventions
- All components use `"use client"` directive (client components)
- Framer Motion `whileInView` for scroll-triggered animations with `viewport={{ once: true }}`
- Path alias `@/` maps to `./src/*`
- Components are PascalCase named exports, not default exports
- Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- CSS theme tokens use `--color-*` naming convention in `@theme {}`

## Build & Run
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm start` - Production server
