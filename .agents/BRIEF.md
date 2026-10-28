# Brief

## Goal
Get Altrue's MVP running end to end as a clickable demo: pick causes, see the suggested split, "donate", see the impact summary.

## Who it's for
People I walk through it in five minutes. Nobody donates real money.

## Done looks like
- The full flow works locally with no errors or dead ends
- Payments are mocked and clearly labelled as a demo
- Cause and impact data come from a small sample dataset in the repo, with sources noted
- It looks good at mobile and desktop widths

## Constraints
- No real payment gateway, deploys or external calls without my approval
- The AI never decides cause selection or fund distribution on its own, and never invents impact numbers
- Keep the current stack (Next.js 16, Tailwind)

## Out of scope
- Real fund-distribution algorithm, accounts, gamification, partner data

## This first plan is a test run
- Plan only the first slice of the goal that can be shown working, in at most 5 new cards
- Use all three vendors: Gemini for the CODEMAP card in wave 0, then Codex and Claude
- Give every card the cheapest model its weight allows, per the AGENTS.md model map
- Include one tiny copy card (the demo-mode banner text) that runs the full chain: Codex drafts, Claude humanises, Codex verifies in a fresh chat
- Every card ends with a filled Receipt, so I can see which agent and model did what

## Already exists
- If .agents/tasks/T-01-npm-audit.md exists, number new cards from T-02 and put T-01 in wave 1
- If README.md still has merge-conflict markers, include a small card to resolve them
