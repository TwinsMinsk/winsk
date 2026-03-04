# Services Section: Typography-Led Redesign

**Date:** 2026-03-04
**Component:** `winsk-by/src/components/sections/ServicesSection.tsx`

## What changed
- Transitioned `ServicesSection` from an image-based layout to a purely typography-led design.
- **Data Cleanup**: Removed the `image` field from `servicesData`.
- **Imports Cleanup**: Removed `next/image` import.
- **Right Column (Content) Adjustments**:
  - Removed the `Image` wrapper taking up the top 60% of the active pane height.
  - Placed the entire active item wrapper in `motion.div` with inner padding updated to `p-8 lg:p-12`.
  - Added an inner background gradient (`bg-gradient-to-br from-white/10 to-transparent`) and kept it glassmorphic (`backdrop-blur-md border border-white/10`).
  - Added a strong absolute blurred green sphere in the upper right corner inside the content pane to add neon depth (`bg-emerald-500/10 blur-3xl rounded-full`).
  - Typography sizes adjusted: Title is `text-3xl lg:text-4xl`, body text is `text-lg`.
  - Feature items (What's included list) styled as dark mini-cards with inner padding (`p-4 bg-black/20 rounded-xl border border-white/5`), separated by gaps.

## Why
- The strategy pivots to "Typography-led design" to ensure clean, premium aesthetics with an emphasis on readable content and forced dark mode styling rather than relying on external imagery for emphasis.

## Verification
- Checked animations with `<AnimatePresence>` – the layout keeps its fluid transitions.
- Type checks passed cleanly via `npx tsc --noEmit`. No regression in types.
