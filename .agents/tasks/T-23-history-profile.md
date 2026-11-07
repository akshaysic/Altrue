# T-23 · Build local history and profile
Status: Ready after T-16 and T-21
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Let donors review their simulated activity and basic local preferences.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/donations/page.tsx; app/settings/page.tsx; lib/store/donorState.ts.
Deliverable: Update app/donations/page.tsx and app/settings/page.tsx; create app/donations/page.stories.tsx and app/settings/page.stories.tsx (4 files).
Out of scope: Accounts, payment methods, real history, sensitive data, or backend sync.
Acceptance:
- [ ] Show only locally stored simulated donations and clearly label them as demo.
- [ ] Settings expose the approved local preferences and give a working reset path.
Decisions needed: None; use the browser-local state from T-16.
Handoff note: Record history fields and reset behavior.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
