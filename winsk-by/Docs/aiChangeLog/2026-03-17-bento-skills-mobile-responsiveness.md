# AI Change Log - 2026-03-17

## Task: Mobile Responsiveness for AIPipelineVisualizer

### What Changed
- Updated `AIPipelineVisualizer` in `winsk-by/src/components/about/BentoSkills.tsx`.
- Changed the main container from a fixed-height row (`h-32 flex items-center`) to a responsive flex layout (`flex-col sm:flex-row`).
- Node containers now stack vertically on mobile screens and align horizontally on desktop (`sm` breakpoint and above).
- Added vertical connecting lines (`h-6 w-[1px] bg-gradient-to-b`) that are only visible on mobile (`flex sm:hidden`).
- Kept the animated horizontal connecting lines visible only on desktop (`hidden sm:flex`).
- Added `shrink-0` to icons and `whitespace-nowrap` to texts within nodes to prevent any internal component squishing.

### Rationale
The previous layout forced a horizontal row even on mobile screens (viewport width ~375px), causing the "AI-Driven Development" visualizer to shrink, text to overflow, and the right side to be cut off. Stacking the nodes vertically with appropriate spacing and vertical connectors ensures a polished, readable, and premium appearance across all devices.

### Verification Results
- **Visual:** Layout gracefully flows from a single central column on mobile to the full diagram row on tablet/desktop. Connections and animations persist correctly in both states.
- **Log:** Created this log entry.
