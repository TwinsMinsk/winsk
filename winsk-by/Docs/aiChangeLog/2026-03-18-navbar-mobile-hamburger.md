# 2026-03-18 Implement Mobile Hamburger Menu in Navbar

## What changed
- Converted `src/components/layout/Navbar.tsx` into a Client Component.
- Added a mobile hamburger menu using `lucide-react` icons (`Menu`, `X`).
- Implemented an animated mobile overlay with Framer Motion (`AnimatePresence`, `motion.div`).
- Restructured navigation for mobile visibility: Logo and Hamburger stay in the fixed header, while links appear in a vertical list inside the dropdown.
- Applied terminal-themed markers (`>`) and hover effects consistent with the site's aesthetic.

## Why
- Improving mobile usability by hiding the navigation list behind a hamburger menu on small screens, preventing header overflow and providing a cleaner UI.

## Deviations from PRD/TechSpec
- None. Used standard Framer Motion for animations as per TechStack.

## Verification Result
- `npx tsc --noEmit` passed with 0 errors.
- Visual check: Navbar now shows hamburger on `< md` screens and keeps desktop layout on `md+` screens.
