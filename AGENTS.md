<!-- agent-kit:start v1 · managed by agent-kit/install.sh · edit the kit master, then re-run install.sh -->
# Agent instructions

Three agents share this repo through Conductor, each in its own workspace (git worktree). This file says which work belongs to whom, how heavy a task is, and how work moves between agents. Codex, OpenCode and Antigravity CLI read it directly; Claude Code reads it through CLAUDE.md.

## 1. Lanes

| Lane | Agent | Owns | Hands off |
|---|---|---|---|
| **Strategy** | Codex | Briefs → plans and task cards · specs and acceptance criteria · copy drafts · copy verification · long, well-specified backend/logic runs · review of Claude's code | Final copy wording, visual/UI decisions |
| **Read** | Gemini (Antigravity CLI; OpenCode as paid fallback) | Whole-repo reading and `CODEMAP.md` · research across long docs, PDFs, screenshots · bulk mechanical edits (tests, fixtures, renames, i18n, lint) · visual QA against designs | Architecture calls, final copy, risky changes (R = 2) |
| **Craft** | Claude (Claude Code + Claude Design) | Design exploration and design systems · UI/front-end build · hard or ambiguous code · integration and merge conflicts · humanising copy · review of Codex's code | Bulk mechanical work, first-draft copy |

Know your lane: Claude models → Craft. GPT/Codex models → Strategy. Gemini models → Read.

## 2. Weigh every task

Score each factor 0–2, multiply by its weight, add them up. That's **W**.

| Factor | 0 | 1 | 2 | Weight |
|---|---|---|---|---|
| **S** Size | one file or screen | one feature, a few files | cross-cutting | ×1 |
| **A** Ambiguity | exact spec | a few decisions to make | open-ended | ×1 |
| **R** Risk | trivially reversible | shared code or data | auth, payments, data loss, deploys | ×1 |
| **C** Context | self-contained | one module | whole repo or big external docs | ×1 |
| **T** Taste | invisible plumbing | user-facing, conventional | brand, visual or voice-critical | ×1 |

| W | Tier | How to run it |
|---|---|---|
| 0–2 | **Light** | Lane's light model. No plan mode. Self-check. |
| 3–5 | **Standard** | Lane's standard model. Cross-vendor review if R ≥ 1. |
| 6–7 | **Heavy** | Plan mode first. Heavy model. Cross-vendor review always. |
| 8+ | **Split** | Don't execute. Strategy splits it into cards of W ≤ 5. |

Steering overrides beat the lane table. Check them in order; the first match wins:
1. **T = 2** → Craft.
2. **W ≤ 2, R ≤ 1 and not a copy card** → Read. Gemini runs on a prepaid subscription, so cheap work goes there first.
3. **C = 2 and A ≤ 1** → Read (lots to read, clear question).
4. **A = 2 and the question is *what* or *why*, not *how*** → Strategy.

Whatever the lane, **R = 2** needs a human checkpoint before merge.

## 3. Model map

Updated 2026-10-28 from Conductor's model picker. Retune keeps this current.

| Tier | Claude | Codex | Gemini |
|---|---|---|---|
| Light | Haiku 5.5 | GPT-6 Luna | newest Gemini Flash |
| Standard | Sonnet 5.5 | GPT-6.1 Sol | newest Gemini Flash |
| Heavy | Opus 5.5, high effort | GPT-6.1 Sol high · GPT-6 Astra for long autonomous runs | newest Gemini Pro, reading-heavy work only; otherwise escalate |

Fable 5.1 only for the rare W 8+ task that genuinely can't be split.

**Gemini runs through Antigravity CLI:** the human starts `agy` in the workspace terminal, signed in with their Google account, so it uses the subscription. Pick the model with `/model`. Gemini models under OpenCode in Conductor's picker bill the API key instead: use them only when the agy quota is used up.

**Git chores** (commit, push, open or update a PR) always run on the Light model: switch the chat to it first, or use a new chat on it. Resolving merge conflicts isn't a chore; that's Craft.

## 4. Before you start

1. If the prompt names a card (`Do T-07`), open `.agents/tasks/T-07-*.md`. That card is your whole brief.
2. **Lane check.** If the card's lane isn't yours, reply with one line: "T-07 is routed to <lane>. Run it there, or say *override*." Then stop. Running work on the wrong agent is the main way tokens get wasted.
3. **Model check.** If the card's model is lighter than the one you're running on, reply with one line ("T-07 is Light: GPT-6 Luna is enough. Switch, or say *override*.") and stop. For git chores on a heavier model, mention it once and carry on.
4. Read `.agents/CODEMAP.md` before exploring. Open only the files the card or the map points to. If the map is missing or wrong, say so instead of crawling the whole repo.
5. Conductor saves attachments, handoff bundles and plans in `.context/` (gitignored). Anything that should outlive the workspace goes in `.agents/`.

Ad-hoc requests with no card: score silently. W ≤ 3 → just do it, whatever the lane. W 4–7 and not your lane → one line naming the better lane, then do it if told to go. W 8+ → propose a split.

## 5. While working

- Stay inside the card's scope. Note anything else under "Found, not done" in the receipt.
- Two failed attempts at the same fix → stop and report what you tried. Don't loop.
- Save long logs and output to a file and point to it; don't paste them into chat.
- Don't spawn internal subagents for work the plan already split across workspaces. That's paying twice.
- Never launch another agent's CLI (`agy`, `codex`, `claude`, `opencode`) from inside your session. The human runs each agent; Google's terms don't allow driving `agy` from other tools.
- Dev servers: use `$CONDUCTOR_PORT` (Conductor gives each workspace ten ports from there).
- Never commit secrets. Never deploy, publish or send anything external unless the card says so.

## 6. Handoffs

Anything that crosses agents goes through files, never chat memory.

| From → to | File |
|---|---|
| Strategy → everyone | `.agents/PLAN.md` · `.agents/tasks/T-<nn>-<slug>.md` |
| Read → everyone | `.agents/CODEMAP.md` · `.agents/research/<topic>.md` |
| Copy stages | `.agents/copy/<slug>/` → `draft.md` → `final.md` + `notes.md` → `verify.md` |
| Design → build | `/design-sync`, or the handoff bundle in `.context/` · decisions in `.agents/design/<slug>.md` |

## 7. Copy double-check (always two vendors)

1. **Draft** · Codex writes `draft.md` in the voice of `.agents/VOICE.md`, ending with a numbered list of every claim, number and promise.
2. **Humanise** · Claude follows `.agents/prompts/humanise.md` → `final.md` + `notes.md`. Every claim survives; any it had to change is flagged ⚠.
3. **Verify** · Codex, in a fresh chat, follows `.agents/prompts/verify-copy.md` → `verify.md` saying PASS or FIX. It checks meaning, not style.
4. FIX → Claude applies only the listed fixes. Two loops at most, then the human decides.
5. Only text from `final.md` ships. If Codex is unavailable, Gemini drafts and verifies. Claude never verifies its own humanising.

## 8. Design flow

1. **Explore** · Claude Design (claude.ai/design, or `/design` inside Claude Code). If the repo already has a design system, pull it in first with `/design-sync`.
2. **Hand off** · `/design-sync` into the workspace, or attach the handoff bundle to the Claude chat.
3. **Build** · Claude, Standard or Heavy, using the existing components and tokens.
4. **Visual QA** · Gemini, Light: compare screenshots at mobile, tablet and desktop widths against the design export. List deviations only.
5. **Review** · Codex.

## 9. Review

Reviews follow the tiers in §2: Light cards self-check, Standard cards get a review when R ≥ 1, Heavy cards always do. The planner can add one where taste or risk calls for it, and copy always gets its two-vendor check (§7). When there is a review, author and reviewer are different vendors: Claude ↔ Codex, and Gemini's work goes to either. Use Conductor's review action, or open a second chat in the same workspace with the other agent. The reviewer follows `.agents/prompts/review.md`.

## 10. Receipts (how the routing learns)

Fill the Receipt section of the card before the PR, for every card and for any ad-hoc task with W ≥ 4 (create a card from `.agents/tasks/_TEMPLATE.md` if there isn't one). Be honest: "wrong lane" is useful data, not a failure. The reviewer updates `Outcome` and `Review caught`. Every ~15 receipts, the human runs `.agents/prompts/retune.md`.

## 11. Budget and parallel caps

- At most **2 Claude, 2 Codex and 3 Gemini** workspaces at once. The planner schedules waves to fit.
- Subscriptions first. Gemini via `agy` is prepaid, so it takes Light work from any lane before anything bills per token.
- **Gemini off:** if the Project section says `Gemini: off`, the Read lane moves. Visual work (images, screenshots, visual QA) goes to Claude Sonnet 5.5, and text-only bulk work to Codex GPT-6 Luna. Lane checks count these as the Read lane, so they don't stop.
- When the human says a vendor is running low, reroute: Light work from any lane → Gemini · non-visual Craft code → Codex · Strategy plans → Claude Sonnet · Read work → Codex Luna. Visual and voice work waits for Claude unless the human says otherwise. Never drop the two-vendor rule for copy and review.
- Use the lightest model the tier allows. Context is the expensive part: read the map, not the repo.

### Routing changelog
- 2026-10-28 · v1 · initial lanes, weights, model map.
- 2026-10-28 · v1.1 · git chores always run on the Light model.
- 2026-10-28 · v1.2 · model check before starting a card.
- 2026-10-28 · v1.3 · Light non-copy cards with R ≤ 1 go to Gemini via agy (subscription first); agents never launch other agents' CLIs; reviews follow the tier table.
- 2026-10-29 · v1.4 · "Gemini: off" switch: the Read lane moves to Sonnet (visual) and Luna (text).
<!-- agent-kit:end -->

## Project

Gemini: off

### Project routing override · Sonnet fallback

- When Gemini is disabled, unavailable, out of quota, unable to read required inputs, or otherwise blocks continuation, use **Claude Sonnet 5.5 / normal** for its Read-lane work, including text reading, bulk work, image reading and visual QA. This overrides the text-only Luna fallback in §11 and permits Sonnet for these Light Read tasks.
- Keep the card in the **Read** lane. Claude performing this fallback counts as Read for lane checks; do not stop because Claude normally owns Craft. Record the fallback in the receipt and resume from existing handoff files.
- Count fallback work against the **2 Claude** workspace cap, alongside Craft work. Preserve the two-vendor copy and review rules: Codex reviews Claude-authored work when review is required; Sonnet cannot review or verify its own work. Git chores still use a Light model.

<!-- Fill this in per project. Every agent reads it together with the block above. -->
- What this is: Altrue, a meta-charity microdonation app. Donors split recurring or one-time donations across high-impact causes, guided by an AI donation assistant, and see modest, caveated impact estimates (nets funded, children educated). Donor-side MVP; product source of truth is `docs/` (start with `docs/ALTRUE_PRODUCT_CONTEXT.md` and `docs/MVP_REQUIREMENTS.md`).
- Stack: Next.js 16 (App Router) · React 18 · TypeScript · Tailwind 3 · lucide-react. Seed data in `lib/seed/`, shared types in `lib/types/`. Payments and AI are mocked for now.
- Install / dev / test / lint: `npm install` · `npm run dev -- --port $CONDUCTOR_PORT` · no test suite yet · `npm run lint` and `npm run typecheck` (`npm run build` for a full check).
- Off-limits paths: none yet.
- Deploy and publish rules: no deploys or payment-provider calls without the human's say-so. The AI assistant may only use approved app data (seed, DB, verified sources); never invent impact numbers.
