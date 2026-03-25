# Change Log: Update Hard Skills Narrative

**Date:** 2026-03-25
**Author:** Antigravity (AI)

## Description
Updated the Hard Skills and Meta Skills sections on the home page (BentoSkills component) to shift the narrative from "Expert/Senior" to a more authentic "AI-Native / Continuous Learner" focus. This aligns better with the user's actual background and strengths.

## Changes
- **src/components/about/BentoSkills.tsx**:
    - Renamed "Hard Skills | AI-Driven Development" to "Stack | Работаю с тем, что нужно".
    - Updated description to emphasize learning on demand, problem-solving, and using AI as a multiplier.
    - Simplified technical claims (removed "scalable backends" and "CI/CD pipelines" which were overstatements).
    - Updated Meta Skills from "Эволюция" to "Учусь в процессе".
    - Updated `MiniTerminal` content to reflect the "Engineer.learn" narrative.

## Rationale
The user specifically requested to avoid sounding like an expert in every technology and instead highlight their ability to learn quickly and solve problems as they arise.

## Verification
- Verified with `npx tsc --noEmit`.
- Code changes committed and pushed to `main`.
