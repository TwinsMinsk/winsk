# AI Change Log: Cursor & Terminal Animation Updates (2026-03-18)

## What Changed

1. **Custom Cursor Disabled**:
    - Removed `<NeuralCursor />` from `app/layout.tsx`.
    - Simplified `src/components/ui/NeuralCursor.tsx` to return `null`.
2. **Looping Terminal Animation**:
    - Refactored `src/components/animations/TerminalDecode.tsx`.
    - The terminal now cycles between `Location.ID: Minsk` and `Brand.ID: Winsk` indefinitely.
    - Added a 4-second pause at the resolved state and a 1-second glitch transition.
3. **Dynamic Navbar Active States**:
    - Implemented `IntersectionObserver` in `src/components/layout/Navbar.tsx` for dynamic highlighting.
    - Removed hardcoded "highlight" property for "Контакты".
    - Added animated underline and mobile active state support.

## Why

- User requested to remove the cursor animation.
- User requested a continuous loop for the Hero section text to keep the interface dynamic.

## Verification

- **TypeScript & Build**: `npm run build` passed successfully.
- **Manual**: Observed the loop and confirmed the cursor is back to default.

## Deviations from TechSpec/PRD

- TechSpec §4.1 describes a one-time "Terminal Decode" animation. This change evolves it into a looping component to meet new user requirements.
