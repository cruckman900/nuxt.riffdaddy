## 🌌 Nuxt Frontier — fanTABulous Scaffold — Oct 1, 2025 @ 3:52 PM EDT

Ventured into Nuxt territory to build fanTABulous frontend:
- Tab uploads, parsing, previews, and changelogs scaffolded
- ThemeSwitcher prepped for public release
- Dynamic routing and SVG manipulation supported
- Backend integration via server/api proxies

Status: Frontend scaffold complete. Ready to wire up endpoints and riff across the Vueverse.  

## 🎨 Frontend Magic Begins — Oct 1, 2025 @ 6:01 PM EDT

Created minimal Nuxt project with:
- `npm create nuxt@latest`
- No UI framework, no modules—just raw Vue/Nuxt power
- Dev server running at `localhost:3000`

Status: Frontend canvas ready. Vue journey begins. Backend on pause.  

## 🚀 First Git Push — Frontend Riff Begins — Oct 1, 2025 @ 6:05 PM EDT

Ran `git init` to start local repo  
Staged and committed Nuxt scaffold  
Created remote repo on GitHub  
Linked with `git remote add origin`  
Pushed with `git push -u origin main`

Status: Repo live. Frontend journey officially versioned.  

## 🔐 Licensing Lockdown — Oct 1, 2025 @ 6:08 PM EDT

Goal: Prevent unauthorized use or cloning of fanTABulous  
Chosen model: Proprietary License + optional EULA  
- Full ownership retained
- Access granted only via purchase or explicit permission
- License terms can be customized to restrict usage, distribution, and modification

Status: Code protected. Showcase possible, cloning forbidden.  

## 📜 License Terms Expanded — Oct 1, 2025 @ 6:14 PM EDT

Added legal clauses to proprietary license:
- Jurisdiction: governed by Ohio law, enforced in Jefferson County courts
- Enforcement: breach triggers legal action, damages, and termination
- Licensing tiers: Personal, Commercial, Enterprise — each with defined scope

Status: License now legally binding, scalable, and ready for business.  

## 📜 License Clauses — Audit, Termination, Survivability — Oct 1, 2025 @ 6:16 PM EDT

Added key legal protections to proprietary license:
- Audit Rights: Licensor may inspect usage records with notice
- Termination Clause: Immediate revocation upon breach
- Survivability: IP, confidentiality, and audit rights persist post-termination

Status: License now fortified for enforcement, compliance, and long-term protection.  

## 🎯 Badge to Favicon Conversion — Oct 1, 2025 @ 6:47 PM EDT

Converted badge image into favicon using favicon.io  
Downloaded full package: `.ico`, `.png`, `manifest`  
Placed in `public/` folder of Nuxt project  
Updated `<head>` tags in `app.vue` for browser compatibility

Status: Brand now visible in browser tabs. fanTABulous identity locked in.  

## 🎯 Favicon Config in nuxt.config.ts — Oct 1, 2025 @ 6:52 PM EDT

Defined favicon and meta tags in `nuxt.config.ts`:
- Linked PNGs and manifest from `public/`
- Added theme color and description
- Ensures consistent branding across all pages

Status: Head metadata locked in. fanTABulous now tabbed with style.  

## 🎨 OG Metadata + Image Styling — Oct 1, 2025 @ 7:01 PM EDT

Added Open Graph and Twitter meta tags to `nuxt.config.ts`  
Designed OG image with:
- 1200×630 dimensions
- fanTABulous badge + tagline
- Dark theme with glowing fretboard

Placed images in `public/` folder  
Linked via absolute URLs in metadata

Status: Link previews now riff with style. Social sharing ready.  

## 🖼️ OG Image Saved + Linked — Oct 1, 2025 @ 7:10 PM EDT

Saved OG image as `og-image.png` in `public/` folder  
Referenced in `nuxt.config.ts` for:
- Facebook (Open Graph)
- Twitter (summary_large_image)

Status: Social previews now riff with style. fanTABulous branding locked in.  

## 🎛️ Module Selection — Nuxt Init — Oct 1, 2025 @ 7:23 PM EDT

Evaluated official Nuxt modules during project init  
Selected:
- `@nuxt/ui` for styling
- `@nuxt/image` for optimized assets
- `@nuxt/eslint` for clean code
- `@nuxt/devtools` for debugging

Status: Project initialized with power pedals. Ready to riff.  

## 🎨 UI Direction — Custom Components — Oct 1, 2025 @ 7:26 PM EDT

Decided to skip prefab UI modules  
Building custom components from scratch:
- Full control over layout and styling
- Scoped CSS or Tailwind (optional)
- Auto-import via Nuxt’s component magic

Status: UI stack now hand-built. Every riff, every pixel, fully yours.

## 🎸 Tab Preview Layout + Tailwind Jam — Oct 1, 2025 @ 7:38 PM EDT

Created `layouts/default.vue` with dark theme and slot  
Built `pages/preview.vue` to display tab snippet  
Used Tailwind for layout, scoped CSS for custom flair  
Strategy: Learn Tailwind by riffing, not by doctrine

Status: Layout live. Tab preview ready to shred.  

## 🎛️ ESLint Override — default.vue — Oct 1, 2025 @ 7:44 PM EDT

ESLint flagged `default.vue` for single-word component name  
Added exception in `.eslintrc.js`:
- `'vue/multi-word-component-names': ['error', { ignores: ['default'] }]`

Status: Squiggle silenced. Layout name preserved. Nuxt harmony restored.  

## 🧠 Global Types Fix — Vue Extension — Oct 1, 2025 @ 7:55 PM EDT

Error: Failed to write global types file  
Resolved by:
- Installing Vue directly with `npm install vue`
- Ensuring `node_modules/` exists
- Restarting Vue and TS servers in VS Code
- Optionally setting `vueCompilerOptions.globalTypesPath` in `tsconfig.json`

Status: IDE harmony restored. Type hints riffing again.  

## 🎸 Dynamic Tab Route — [id].vue Fixed — Oct 1, 2025 @ 8:25 PM EDT

Error: `[plugin:vite:vue] At least one <template> or <script> is required`  
Cause: `app/pages/tabs/[id].vue` was empty  
Fix: Added minimal `<template>` and `<script setup>` block  
Confirmed route renders at `/tabs/:id`

Status: Dynamic tab route now riffing. Ready to wire backend next.  

## 🎨 Tailwind v4 PostCSS Error — Purged & Rewired — Oct 1, 2025 @ 8:56 PM EDT

Error: `tailwindcss used directly as PostCSS plugin`  
Cause: Tailwind v4 requires `@tailwindcss/postcss` unless using Nuxt module  
Fix:
- Removed manual PostCSS config
- Uninstalled raw Tailwind packages
- Installed via `nuxi module add tailwindcss`
- Confirmed `@nuxtjs/tailwindcss` in `nuxt.config.ts`

Status: Nuxt boots clean. Tailwind styles active. PostCSS pipeline restored.  

## 🎨 Tailwind v4 Init Error — Explained & Resolved — Oct 1, 2025 @ 9:05 PM EDT

Error: `npx tailwindcss init -p` failed with “could not determine executable to run”  
Cause: Tailwind v4 removed the `init` command  
Fix:
- Option 1: Use default config with Nuxt module (recommended)
- Option 2: Downgrade to Tailwind v3 for manual config generation

Status: Tailwind now styling correctly. Config optional unless customizing theme.  

## 🎸 Tailwind v4 Blues — Downgraded to v3.4.1 — Oct 1, 2025 @ 9:18 PM EDT

Error: `tailwindcss used directly as PostCSS plugin`  
Cause: Tailwind v4 requires `@tailwindcss/postcss`, which conflicts with Nuxt module  
Fix:
- Uninstalled Tailwind v4
- Installed Tailwind v3.4.1 with PostCSS and Autoprefixer
- Cleaned up `nuxt.config.ts`
- Restarted dev server

Status: Nuxt boots clean. Tailwind styles active. Tab preview riffing again.  

## 🎛️ Tailwind Path Resolved — Styles Still Missing — Oct 1, 2025 @ 10:05 PM EDT

Nuxt resolved Tailwind CSS from `~/../assets/css/tailwind.css`  
Confirmed: path points to root-level `assets/css/tailwind.css`  
Issue: Styles still not applying  
Next steps:
- Drop test block with Tailwind classes
- Inspect DOM and network tab for CSS injection
- Confirm Tailwind directives in CSS file

Status: Tailwind file found. Injection pending.  

## 🎨 Fallback Style Block Injected — CSS Pipeline Check — Oct 1, 2025 @ 10:08 PM EDT

Issue: Tailwind styles not applying  
Fix: Injected raw CSS via `<style>` block in `pages/preview.vue`  
Confirmed:
- If styled: browser is applying CSS, Tailwind injection is broken
- If not styled: layout or CSS pipeline is blocked

Status: Fallback test deployed. Awaiting visual confirmation.  

## 🎛️ Style Tag Relocated — Vite Warning Silenced — Oct 1, 2025 @ 10:10 PM EDT

Error: `<style>` tag inside `<template>` block  
Cause: Vue SFCs require `<style>` at root level  
Fix: Moved `<style>` outside `<template>` in `pages/index.vue`  
Confirmed fallback styles still render

Status: Warning gone. Styles clean. Layout riffing.  

## 🎨 Tailwind Directives Found — PostCSS Rewired — Oct 1, 2025 @ 10:15 PM EDT

Confirmed: `assets/css/tailwind.css` contains valid Tailwind directives  
Issue: File found, but styles not compiling  
Fix:
- Installed Tailwind v3.4.1, PostCSS, and Autoprefixer
- Created `postcss.config.js` with Tailwind plugin
- Updated `nuxt.config.ts` to use absolute path
- Restarted dev server

Status: Tailwind directives now compiling. Styles rendering.  

## 🎨 Vuetify Installed — Material Design Activated — Oct 1, 2025 @ 10:25 PM EDT

Decision: Switch from Tailwind to Vuetify for Material Design consistency  
Fix:
- Installed `vuetify`, `vite-plugin-vuetify`, and `@mdi/font`
- Updated `nuxt.config.ts` with Vuetify plugin and CSS
- Created `plugins/vuetify.ts` to initialize Vuetify
- Dropped test button using `<v-btn>`

Status: Vuetify now active. Layout styled with Material Design.  

## 🎨 Vuetify Merge — Tailwind Retired — Oct 1, 2025 @ 10:30 PM EDT

Action: Swapped Tailwind for Vuetify (Material Design)  
Fix:
- Preserved Vuetify setup and branding metadata
- Removed Tailwind module, CSS file, and PostCSS config
- Merged `modules` array cleanly
- Replaced Tailwind classes with Vuetify components

Status: Styling pipeline rebooted. fanTABulous now riffing with Material Design.  
