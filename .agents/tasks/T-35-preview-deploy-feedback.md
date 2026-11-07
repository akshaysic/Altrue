# T-35 · Publish a preview and local feedback form
Status: Blocked until T-33–T-34 mobile QA is complete
Model: Strategy — GPT-6.1 Sol / high; human checkpoint required for R2
Weight: S1 A2 R2 C1 T0 = 6
Goal: Prepare an approved shareable preview with a feedback form that does not transmit data externally.
Inputs: .agents/PLAN.md; package.json; next.config.mjs; .gitignore; app/layout.tsx.
Deliverable: Add app/feedback/page.tsx and `vercel.json` with an `X-Robots-Tag: noindex` header; deploy an unlisted Vercel preview only after T-33–T-34 pass (2 files).
Out of scope: Real analytics, external feedback submission, payment provider, or public release beyond the approved preview.
Acceptance:
- [ ] Preview builds from the approved branch and has a shareable URL; document status and rollback path.
- [ ] Vercel preview is unlisted and every response carries `X-Robots-Tag: noindex`.
- [ ] Feedback form saves locally and tells the tester how to share their response; no third-party call occurs.
- [ ] Use the approved Vercel preview scope; deploy only after T-33–T-34 pass, under the authorization already given.
Decisions needed: None; Vercel and post-QA publishing are approved. Wait for T-33–T-34; keep the preview unlisted and noindex.
Handoff note: Record provider, exact preview URL, access scope, and feedback-storage behavior.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
