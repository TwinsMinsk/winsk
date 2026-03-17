# 2026-03-18 Fix Mobile Horizontal Scroll for Services Tabs

## What changed
- Updated CSS classes in `src/components/sections/ServicesSection.tsx` for the mobile layout of the Services tabs.
- **Left column (Tab Container):** Added explicit overflow-x (`overflow-x-auto overflow-y-hidden`), scroll snapping (`snap-x snap-mandatory`), hidden scrollbars (`[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`), and smooth scrolling (`scroll-smooth`).
- **Tab Buttons:** Added `shrink-0`, `snap-start`, and `whitespace-nowrap` to prevent buttons from squishing or breaking text lines on small screens. Adjusted internal paddings and border-radius (`p-4 md:p-5 rounded-2xl`).

## Why
- On mobile devices, the left column was truncating content, lacking native horizontal swipe gesture support, and forcing buttons to shrink and warp out of shape, degrading the responsive experience.

## Deviations from PRD/TechSpec
- None. Preserved existing Desktop behaviors (`lg:` variants).

## Verification Result
- Adjusted Tailwind classes for container and individual `.map()` buttons seamlessly.
- Did not modify Framer Motion's `AnimatePresence` or any right-column content.
- `npx tsc --noEmit` completed successfully with zero type errors.
