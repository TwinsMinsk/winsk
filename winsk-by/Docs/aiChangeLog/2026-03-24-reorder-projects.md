# Reordering Projects on Main Page

## Date
2026-03-24

## Goal
Update the order of projects displayed in the Portfolio section on the main page.
Target order:
1. IQStocker AI Ecosystem
2. LMS «Lucy Nails»
3. ERP «LOMuebles»
4. CRM «Я и Ты»
5. LOMuebles.es
6. Prozub.by

## Changes Made
- **`src/data/projects.ts`**: Re-assigned the `order` field for top 4 projects globally. "IQStocker AI Ecosystem" is now `order: 1`, while LMS «Lucy Nails», ERP «LOMuebles», and CRM «Я и Ты» were shifted to 2, 3, and 4 respectively. This ensures flat grid correct ordering (e.g. when filtering by tags).
- **`src/components/sections/ProjectsGrid.tsx`**: Swapped the render blocks for TIER 2 (AI Ecosystem) and TIER 1 (Enterprise projects). Since AI Ecosystem is the only tier-2 project, rendering it first honors the exact display order requested while preserving the specific `isTier2` (Bento Large) responsive styles without conflating data tiers.

## Verification
- Ran `npx tsc --noEmit` and it completed with zero errors (Exit code: 0).
- Visual logic confirmed matching requirements.
