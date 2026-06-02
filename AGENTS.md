<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Glenn Rodrigues Portfolio — Context

## Tech
- Next.js 16.2.6 (App Router, Turbopack)
- Tailwind v4 (`@import "tailwindcss"`, `@theme {}` with `--color-*` tokens)
- Framer Motion v12
- lucide-react v1.16 (brand icons like Github/Linkedin removed — use inline SVGs)
- React 19 purity rules (no `Math.random()` at render — use `useState` initializer)

## Layout Constants
- Section wrapper: `py-20 relative overflow-hidden`
- Background: two gradient orbs (`absolute inset-0 pointer-events-none`)
- Content container: `relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section header: `motion.div text-center mb-14` with fade-up animation
- Badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6`
- Title: `text-4xl md:text-5xl font-bold` (one line, gradient on key word)
- Subtitle: `text-lg text-muted-foreground mt-4 max-w-2xl mx-auto`

## Section Order (layout.tsx)
Hero → About → Experience → Projects → Tech Stack → Process → Playground → Contact → Footer

## Progress

### Done
- Fixed globals.css: Tailwind v4 syntax, @theme with --color-* tokens, removed @layer directives
- Fixed button.tsx: added gradient variant and lg size
- Fixed cursor.tsx: RAF lerp (0.15 factor), no CSS transitions
- Replaced Github/Linkedin lucide imports with inline SVGs in footer.tsx and projects.tsx
- Removed unused imports across all files
- Moved Math.random() to useState initializers
- Removed setMounted hydration guard from layout.tsx
- All sections have id attributes for smooth scroll nav
- Hero: split layout with photo placeholder, navbar, working CTAs, counter stats, floating icons
- Trust section removed from layout
- Experience: reduced to Agaetis only, compact card layout
- Projects: side-by-side grid, CLC Abroad project added
- **Project links**: CLC → https://clcabroad.in/ (no github), all others set to null
- **Tech stack**: React, Next.js, JS, HTML, CSS, SCSS, Tailwind, Bootstrap, WordPress, Elementor, Opencart, Python, Supabase, SQL, Git, GitHub Actions, Claude, Codex, Opencode, OpenRouter, Prompt Engineering — tag chip layout, no cards
- **Process**: 4-step AI workflow timeline (Plan → Build → Iterate → Ship), numbered circles, whileInView staggered entrance, static gradient connecting line
- **Playground**: 6 mini-apps in Mac terminal (Todo with funny defaults, Guess Game, Story Game, Coin Flip, RPS, Magic 8-Ball). Stable terminal chrome, tab bar with overflow detection, hidden scrollbar, right-side fade gradient overlay
- **Testimonials**: removed entirely

### User Preferences
- No glass-effect cards everywhere (vary layouts per section)
- All entities: `&apos;`, `&ldquo;`, `&rdquo;`
- gradient-text, glass-effect, hero-gradient, glow-effect — plain CSS classes (not @apply)

## Relevant Files
- src/components/layout/layout.tsx — imports all sections in order
- src/components/sections/hero.tsx — hero with navbar, photo placeholder, CTAs, counters
- src/components/sections/experience.tsx — single-company card (Agaetis)
- src/components/sections/projects.tsx — side-by-side project cards with links
- src/components/sections/tech-stack.tsx — tag chips, no cards
- src/components/sections/process.tsx — AI workflow timeline
- src/components/sections/playground.tsx — 6 mini-apps, Mac terminal
- src/components/sections/about.tsx — untouched
- src/components/sections/contact.tsx — untouched
- src/app/globals.css — Tailwind v4 theme tokens, utility classes
- src/components/ui/button.tsx — CVA button variants
- src/components/cursor/cursor.tsx — RAF-lerp cursor follower

## Known Issues
- Hero photo placeholder uses "GR" initials — user to replace with actual image later
- About, Contact sections untouched (not yet reviewed)
