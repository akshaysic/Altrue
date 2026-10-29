# Public API and impact data provider discovery

Checked: 2026-10-29. Researcher: Codex / GPT-6.1 Sol.
Scope: publicly documented APIs, donation intermediaries, statistics and impact-investment data providers relevant to Altrue. “Middlemen statistics” is interpreted as intermediary project/funding records, nonprofit financials and reported results.
Method: reviewed primary provider documentation and product/access pages. Documentation access is distinguished from access to the underlying dataset. No accounts or keys were created, authenticated API operations tested, donations initiated, or provider contacts sent.

## Donation and nonprofit platforms

| Provider | Data and useful capability | Access / pricing evidence | Fit and limits for Altrue |
|---|---|---|---|
| [GlobalGiving](https://www.globalgiving.org/api/overview/) | Global project/organization records, themes, country filters and project progress reports; operations listed in the [methods reference](https://www.globalgiving.org/api/methods/). | Account and API key required. [Developer terms](https://www.globalgiving.org/api/legal/terms-of-service/) say non-commercial API use has no license fee; commercial plans must be discussed with GlobalGiving and may incur fees. | Strong candidate for replacing project placeholders. Preserve the originating project's identity, report date and attribution. A project narrative or amount raised does not independently establish impact attributable to a donation. |
| [Every.org](https://docs.every.org/docs/intro) | Nonprofit search, cause browsing and profiles, focused on 501(c)(3) organizations; donor-facing donation links and completion webhooks. | [Public API keys](https://docs.every.org/docs/endpoints/authentication) for nonprofit reads. [Fee guidance](https://support.every.org/hc/en-us/articles/360061886773-Does-Every-org-charge-fees) specifies free non-commercial Charity API use and enterprise discussions for for-profit use. | Good candidate for US nonprofit discovery. Docs explicitly state that donations must be completed by the donor on Every.org; programmatic donations and disbursements are unavailable. Organization eligibility is distinct from an effectiveness assessment. |
| [Candid](https://developer.candid.org/) | Nonprofit profiles, financials, legal/compliance checks, grants and taxonomy. Portal advertises Essentials/Premier v4; consult the selected product's current reference before integration. | [Subscription key required](https://developer.candid.org/reference/getting-access); trial access is offered and production subscriptions go through Candid. [API license](https://candid.org/terms-of-service/api-license-agreement/) governs data use. | Useful for nonprofit validation, financial context and grant/funder analysis, especially US IRS-related records. Filing years and source dates matter; legal eligibility or financial ratios do not establish causal effectiveness. |
| [Goodstack](https://docs.goodstack.io/docs/api/organisations) | Organization search, registry-based lookup, profiles and validation services; broader donation/disbursement infrastructure is documented. | [API reference](https://docs.goodstack.io/docs/api/goodstack-services) requires account keys; endpoint permissions distinguish publishable and secret keys. No open/free production pricing was verified in this pass; confirm onboarding and commercial terms. | Candidate when global nonprofit validation and a giving intermediary are required. Select data products and read permissions separately from transaction functionality. |

## Open development and funding statistics

| Provider | Data and useful capability | Access | Fit and limits for Altrue |
|---|---|---|---|
| [IATI Datastore v3](https://reference.iatistandard.org/en/iati-tools-and-resources/iati-datastore/how-to-use-the-datastore-api/) | Query development/humanitarian activities, transactions and budgets; filter by organization, country and sector. JSON, XML and CSV outputs. Results are available where publishers report them in the standard. | Free account and subscription key. [Access guidance](https://reference.iatistandard.org/en/iati-tools-and-resources/iati-datastore/transitioning-to-iati-datastore-api/) distinguishes exploratory and full access. | Best match for intermediary funding-flow research. Activities, commitments, disbursements, expenditure and results must remain distinct. Reporting organizations determine data completeness and recency; check field coverage before designing UI. |
| [World Bank Indicators API v2](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) | Country/time-series indicators and metadata across development databases. [Call reference](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581) documents indicator, country and date filters. | Documentation says no API key or authentication is necessary. Dataset licensing and attribution still need checking for selected series. | Strong starting source for cause context across health, education, poverty and environment. Record observation year, source and unit; aggregated indicators do not describe an individual nonprofit's results. |

## Impact-investment data companies

| Provider | Offering verified in public material | Access evidence | Altrue relevance |
|---|---|---|---|
| [Clarity AI](https://developer.clarity.ai/docs/api-overview) | REST data for securities, companies, funds and portfolios, including sustainability/impact modules. | Access is granted per user/module. [Key provisioning](https://developer.clarity.ai/docs/getting-api-tokens-access-and-authentication) and [token authentication](https://developer.clarity.ai/docs/authentication) are documented. No free public dataset or price was established. | Relevant to a future investment product or portfolio comparison. Provider metrics/methodologies require assessment before applying them to donation outcomes. |
| [Impact Cubed](https://www.impactcubed.com/esgdata) | Corporate, climate, biodiversity and SDG-related investment data. A [provider article](https://www.impactcubed.com/post/the-what-where-and-how-the-power-of-proper-products-and-services-data-for-investors), updated 2024-04-16, explicitly advertises feed/API access. | Institutional offering with demo/contact flow. No public self-service endpoint reference, production price or current API access agreement verified. | Worth a vendor evaluation for investment analysis. API delivery is advertised, but its current contract, coverage and integration details need confirmation. |
| [Net Purpose](https://www.netpurpose.com/product) | Corporate social/environmental data, reported KPIs and modeled products/services impact; product page advertises Web App, Excel and API access. | Contact-led access; no public self-service API reference or price verified. Product page advertises monthly refreshes. | Relevant to investment impact measurement. Preserve the distinction between reported disclosures and modeled estimates. Its [homepage](https://www.netpurpose.com/) announces joining forces with SDI AOP; confirm the current contracting entity and product offering. |

## Freshness and operational findings

- GlobalGiving's overview advertises a separate IATI XML feed updated daily. That is not evidence of a guaranteed daily refresh for every REST field or nonprofit progress report.
- [IATI's datastore description](https://reference.iatistandard.org/en/iati-tools-and-resources/iati-datastore/) gives a target of processing new published data within 24 hours of availability. This concerns ingestion, not the age of the underlying activity/result.
- Every.org's donation-completion webhooks and Goodstack's event webhooks concern events. A webhook does not imply that organization profiles or reported outcomes have been independently refreshed.
- World Bank series have their own observation periods and revision cycles. No universal real-time data claim is appropriate.
- Net Purpose advertises monthly ingestion. Refresh frequency for individual Clarity AI and Impact Cubed datasets was not verified.
- WHO remains a useful statistics source, but its [official legacy notice](https://www.who.int/data/gho/legacy) labels Athena retired and describes a GHO OData migration/deprecation near end-2025. Do not implement an old GHO tutorial endpoint without confirming its current successor and field mapping. WHO is held outside the main integration shortlist in this pass.

## Suggested order for Altrue

This ordering is an assessment of the documented fit, not a completed vendor evaluation.

1. World Bank: start cause-context statistics with metadata and observation periods.
2. GlobalGiving: assess a small project catalog, theme mapping and dated source reports; establish permitted commercial use first if applicable.
3. IATI: assess funding-chain and reported-result coverage for the selected organizations/projects. Avoid counting the same money at multiple intermediaries as separate donations.
4. Every.org: evaluate for US nonprofit discovery and donor-completed checkout; compare against GlobalGiving using the intended geography.
5. Candid / Goodstack: evaluate when legal validation, richer profiles or intermediary services justify a commercial relationship.
6. Clarity AI / Impact Cubed / Net Purpose: evaluate for a future investment-specific requirement.

For any selected provider, retain provider ID, source URL, retrieved-at timestamp, reported/observation period, unit, currency where applicable, coverage and methodology. Label organization-reported results, official aggregate statistics and modeled estimates explicitly. Combining these APIs does not by itself establish a defensible donation-to-outcome conversion.

## Verification limits

- Documentation review only; availability, quotas, exact schemas and usable record coverage still require a small read-only evaluation with provider-issued access where needed.
- GlobalGiving's overview/method pages and Clarity AI's API overview were available in indexed provider content but direct rendering failed in the research tool. Their published claims are recorded; authenticated endpoint availability is untested.
- Net Purpose product pages supplied indexed provider content but their direct HTML rendering was empty in the research tool.
- Every.org's detailed introduction/auth/nonprofit documentation was retrieved directly after discovering its routes from its public sitemap.
- The quoted commercial-use distinction for GlobalGiving and Every.org comes from provider access/terms pages. No legal opinion, agreement acceptance or current transaction-fee comparison is made here.

No integration, runtime environment change, app copy change, commit or PR update is included.
