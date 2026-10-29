# Cause descriptions and evidence

Checked live: 2026-10-29 (UTC). Researcher: Codex / GPT-6.1 Sol.
Scope confirmed by the user: cause descriptions and evidence for the three proposed `/demo` causes. Charity selection and donation-to-impact estimates follow separately.
Status: primary-source research with findings against the existing seed wording; no application data or approval status changed.

## Sources checked

| Cause ID | Primary source | Dates observed | Candidate coverage and limits |
|---|---|---|---|
| `global-health` | WHO, [World health statistics 2026](https://www.who.int/publications/i/item/9789240122482) | Published 2026-05-13. Underlying indicator years vary; check each selected indicator before using a figure. | Global health indicators, premature mortality and immunization inequalities. Good starting context for the cause; does not establish the effectiveness or cost of a named charity or every listed intervention. |
| `education-opportunity` | UNESCO, [2026 Global Education Monitoring Report: Access and equity](https://www.unesco.org/reports/gem-report/en/2026) | Report release 2026-03-25, confirmed in the [publisher's release](https://www.unesco.org/en/articles/more-children-out-school-7th-year-row-273-million). That release was updated 2026-10-14. Headline enrolment/out-of-school figures refer to 2024; other indicators have different periods. | School participation, completion, inequality and barriers to access. Intervention claims about tutoring, scholarships or digital learning still need evidence matched to the intervention and setting. |
| `climate-environment` | UNEP, [Emissions Gap Report 2026](https://www.unep.org/en/publications/report/emissions-gap-report-2026), with [repository metadata](https://wedocs.unep.org/entities/publication/87c02cac-8da8-4c28-ba61-c846ee68ea70) | Repository issue date 2026-10-13; the [series index](https://www.unep.org/en/publication-series/emissions-gap-report) lists 2026-10-14. Keep those labels distinct. | Climate mitigation pathways and emissions-policy gaps. Scenario projections are conditional; this report alone does not substantiate conservation outcomes or donor-level emissions reductions. |
| `climate-environment` | CBD Secretariat, [State of Biodiversity Action](https://www.cbd.int/globalreview/report2026) | Landing page dated 2026-09-24; the [publisher's homepage](https://www.cbd.int/) identifies formal launch as 2026-10-15. Underlying national-report periods require checking for any specific claim. | Conservation, ecosystem protection and progress against biodiversity targets. Complements the climate source; does not establish a particular nonprofit's results or cost per outcome. |

These dates were read from publisher pages. Search-engine crawl/publish labels were not used as publication dates. Publisher pages and HTML summaries were inspected; the full PDFs and underlying datasets have not been audited in this pass.

## Focused supporting sources

| Reference | Source, date and locator | Evidence use and freshness |
|---|---|---|
| H-access | WHO, [Universal health coverage](https://www.who.int/news-room/fact-sheets/detail/universal-health-coverage-%28uhc%29), dated 2025-12-05; sections “Overview” and “Progress towards UHC”. | Defines coverage across prevention, treatment and other essential services; discusses access inequalities. Service-coverage observations extend to 2023 and financial-hardship observations to 2022. Live page checked 2026-10-29. |
| H-medicines | WHO, [Essential medicines](https://www.who.int/news-room/fact-sheets/detail/essential-medicines), dated 2026-01-26; “Key facts” and “Overview”. | Supports essential-medicine access as a health focus. WHO's [current-list index](https://www.who.int/groups/expert-committee-on-selection-and-use-of-essential-medicines/essential-medicines-lists/) identifies the September 2025 model lists as current. This is guidance, not an observation of access in 2026. |
| H-maternal | WHO, [Maternal mortality](https://www.who.int/news-room/fact-sheets/detail/maternal-mortality), dated 2025-04-07; “How can women's lives be saved?” and “Why do women not get the care they need?”. | Supports maternal care and barriers to skilled care as health concerns. Statistical observations on the page refer principally to 2023; no mortality figure is proposed for the demo. |
| C-energy | IEA and SDG 7 custodian agencies, [Tracking SDG7: The Energy Progress Report, 2026](https://www.iea.org/reports/tracking-sdg7-the-energy-progress-report-2026), published 2026-06-24; “About this report”. | Supports energy access and renewable energy as topics. The [joint publisher release](https://www.who.int/news/item/24-06-2026-655-million-people-still-living-without-electricity-underscore-urgent-need-to-deliver-on-universal-energy-access-target) identifies 2023/2024 as new data years. Access to electricity alone should not be equated with renewable energy or an emissions reduction. |
| C-adaptation-pending | UNEP [publication index](https://www.unep.org/en/whats-new/publications), listing Adaptation Gap Report 2026 on 2026-10-28. | Index confirms a new adaptation assessment and its advertised scope. The linked report page failed to open in this pass. Detailed findings and project-level resilience claims remain unverified; exclude this entry from the supported findings below. |

## Findings against the existing descriptions

Inspected fields: `shortDescription`, `longDescription`, `userFacingExplanation` and intervention examples for the three cause IDs in `lib/seed/causes.ts`. These are research findings for copy preparation, not final product wording.

| Cause / existing element | Finding | Evidence locator or remaining gap |
|---|---|---|
| `global-health`: prevention, treatment and basic care access | Supported as cause topics. | H-access, “Overview”; access disparities in “Progress towards UHC”. |
| `global-health`: essential medicine and maternal health | Supported as cause topics. | H-medicines, “Overview”; H-maternal, sections on care and access barriers. |
| `global-health`: “supports proven health interventions”; `evidence-backed` tag | Not established as an Altrue operational or funding claim. | General health evidence does not identify an Altrue-supported intervention, recipient or evaluation. The current app has placeholder organizations. Evaluate specific interventions before using a blanket effectiveness label. |
| `education-opportunity`: school access and learning opportunities | Supported as cause topics. | UNESCO 2026 GEM Report, introduction, access/completion discussion and financing section. The report emphasizes local context and combinations of policies. |
| `education-opportunity`: tutoring, scholarships, supplies and digital learning | Individual examples are not fully verified by this pass. | GEM discusses educational resources and financing, but that does not establish every named example or its effectiveness in every setting. A broad description of access and barriers is better supported by the reviewed evidence; retain specific examples only with a matching source passage. |
| `education-opportunity`: improved long-term life outcomes | Requires qualification and evidence matched to an intervention and setting. | The reviewed GEM material concerns education participation, completion and policy. It does not establish downstream life outcomes attributable to Altrue or an unspecified donation. |
| `climate-environment`: climate mitigation | Supported as a cause topic. | UNEP Emissions Gap Report 2026 publisher summary: mitigation pathways and policy action. Scenario findings are conditional. |
| `climate-environment`: conservation and ecosystem protection | Supported as cause topics. | CBD State of Biodiversity Action publisher overview: implementation of biodiversity targets and protection/restoration of nature. |
| `climate-environment`: clean energy access | Supported as a cause topic. | C-energy, “About this report”; energy access and renewable energy have distinct indicators. |
| `climate-environment`: “builds resilience over time”; all results are long-term/estimate-heavy | Broad outcome or timing generalizations need narrower evidence. | C-adaptation-pending is not yet a reviewed basis for these claims. Project-specific resilience, timescales and modeled outcomes require their own evidence. |

Research conclusion: the reviewed primary sources support all three broad cause areas. They do not verify every existing sentence, intervention example or claim about Altrue's activity. Any eventual causal claim should identify the intervention, setting and outcome it concerns.

## Keeping the research current

Proposed source record: stable ID, publisher, title, edition, canonical URL, publication date, page-update date when available, underlying data period, supported claim, section/table locator, caveat, checked-at date and review status.

- Check publisher series/index pages for newer editions; retain the exact edition supporting each accepted claim.
- Recheck a claim before publishing it and after a relevant source revision. A monthly check for new editions is a starting proposal, not a configured schedule.
- Record the data period alongside statistics. Retrieving a report today does not make its underlying observations current-year measurements.
- Treat source availability, claim support and product approval as separate states. Mark superseded or unreviewed records explicitly.
- For live crisis-related claims, choose an appropriate situation-report source and a shorter refresh interval separately.

## Next research decisions

1. Base initial copy preparation on the supported cause topics in the findings table; follow the repository's draft/humanise/verify process when writing product copy.
2. Decide whether the education intervention examples and broad outcome claims are needed in the first demo. If retained, research matching evidence before treating them as verified.
3. Research actual nonprofits and their evaluations separately before replacing placeholder organizations or making donation-to-impact estimates.
4. Resolve how the reviewed source records enter T-05's local data contract before clearing its provenance gate. This research does not amend the card or remove that gate.

No app code, seed records, final product copy, automation, commit or PR change is part of this research note.
