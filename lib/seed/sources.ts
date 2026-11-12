import type { CuratedOrganization } from "@/lib/types";

/**
 * The 7 MVP records, copied from .agents/research/charity-shortlist-2026-11-07.json.
 * source_name, source_url, as_of, figure text and basis are the packet's own words: do not paraphrase.
 * The packet also holds GiveWell All Grants Fund, the other animal entries, Risks and Resilience Fund and
 * GlobalGiving; those stay in the packet only (post-MVP) and are not loaded here.
 * No tax-deductibility claims: the packet says they are not verified.
 */
export const curatedOrganizations: CuratedOrganization[] = [
  {
    id: "givedirectly",
    name: "GiveDirectly",
    type: "charity",
    category: "Poverty relief",
    role: "featured",
    mvpStatus: "mvp",
    region: "Kenya, Uganda, Rwanda, Malawi, DRC, Mozambique, US",
    summary: "Sends cash straight to people living in extreme poverty by mobile money, no strings attached. Recipients choose how to spend it.",
    evidence: "Cash transfers are heavily studied (GiveDirectly cites 1,000+ studies). Long-term effects and spillovers are still being researched.",
    evaluator: "GiveWell (top charity 2012 to 2022, not on the current list); Charity Navigator 99% four-star; CharityWatch Top Rated (as shown by GiveDirectly)",
    donateUrl: "https://donate.givedirectly.org",
    source_name: "GiveDirectly homepage; GiveWell GiveDirectly review page",
    source_url: "https://www.givedirectly.org/",
    as_of: "retrieved 2026-11-07",
    retrieved: "2026-11-07",
    notes: "Honesty note: GiveWell removed GiveDirectly from its top charities list in Aug 2022 after changing its criteria, and says this did not reflect a change in its view of the program. GiveWell says it still has a very high view of GiveDirectly. Monthly giving is offered. Strong candidate for the featured anchor.",
    figures: [
      {
        value: "85%",
        label: "of funds directly delivered to people in need",
        basis: "GiveDirectly homepage headline; the site also says more than 87% for its flagship program",
        figureLabel: "estimate",
        source_name: "GiveDirectly homepage; GiveWell GiveDirectly review page",
        source_url: "https://www.givedirectly.org/",
        as_of: "retrieved 2026-11-07"
      },
      {
        value: "48%",
        label: "lower infant mortality in a Kenya randomised study of $1,000 transfers",
        basis: "As reported by GiveDirectly on its own site",
        figureLabel: "estimate",
        source_name: "GiveDirectly homepage; GiveWell GiveDirectly review page",
        source_url: "https://www.givedirectly.org/",
        as_of: "retrieved 2026-11-07"
      },
      {
        value: "2,248,119",
        label: "people reached worldwide",
        basis: "GiveDirectly homepage counter",
        figureLabel: "estimate",
        source_name: "GiveDirectly homepage; GiveWell GiveDirectly review page",
        source_url: "https://www.givedirectly.org/",
        as_of: "retrieved 2026-11-07"
      }
    ]
  },
  {
    id: "malaria-consortium",
    name: "Malaria Consortium: seasonal malaria chemoprevention",
    type: "charity",
    category: "Global health",
    role: "featured",
    mvpStatus: "mvp",
    region: "Sub-Saharan Africa",
    summary: "Gives children preventive malaria medicine during the four months of the year when infections peak.",
    evidence: "Exceptionally strong (GiveWell rating).",
    evaluator: "GiveWell top charity; Giving What We Can recommended",
    donateUrl: "https://www.givingwhatwecan.org/charities/malaria-consortium",
    source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
    source_url: "https://www.givewell.org/charities/top-charities",
    as_of: "October 2026",
    retrieved: "2026-11-07",
    notes: "Malaria kills around 600,000 people a year, mostly children under 5 in sub-Saharan Africa (GiveWell).",
    figures: [
      {
        value: "$7",
        label: "to protect a child from malaria",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "~$4,000",
        label: "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        basis: "GiveWell estimate",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      }
    ]
  },
  {
    id: "against-malaria-foundation",
    name: "Against Malaria Foundation",
    type: "charity",
    category: "Global health",
    role: "featured",
    mvpStatus: "mvp",
    region: "Sub-Saharan Africa",
    summary: "Funds insecticide-treated nets that people sleep under, so they are not bitten by malaria-carrying mosquitoes.",
    evidence: "Exceptionally strong (GiveWell rating).",
    evaluator: "GiveWell top charity; Giving What We Can recommended",
    donateUrl: "https://www.givingwhatwecan.org/charities/against-malaria-foundation",
    source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
    source_url: "https://www.givewell.org/charities/top-charities",
    as_of: "October 2026",
    retrieved: "2026-11-07",
    notes: "Giving What We Can states $6 buys a net for 2 people for 2 years.",
    figures: [
      {
        value: "$6",
        label: "to provide one net",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "~$5,500",
        label: "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        basis: "GiveWell estimate",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      }
    ]
  },
  {
    id: "helen-keller-intl",
    name: "Helen Keller Intl: vitamin A supplementation",
    type: "charity",
    category: "Global health",
    role: "featured",
    mvpStatus: "mvp",
    region: "Areas modelled by GiveWell (country list not captured)",
    summary: "Provides vitamin A supplements to children under 5. Deficiency leaves children open to infections that can be fatal.",
    evidence: "Very strong (GiveWell rating); results vary by study.",
    evaluator: "GiveWell top charity; Giving What We Can recommended",
    donateUrl: "https://www.givingwhatwecan.org/charities/helen-keller-international",
    source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
    source_url: "https://www.givewell.org/charities/top-charities",
    as_of: "October 2026",
    retrieved: "2026-11-07",
    notes: "",
    figures: [
      {
        value: "$2",
        label: "to give a child vitamin A for one year",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "~$3,500",
        label: "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        basis: "GiveWell estimate",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "28%",
        label: "of children in modelled areas have vitamin A deficiency",
        basis: "GiveWell estimate",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      }
    ]
  },
  {
    id: "new-incentives",
    name: "New Incentives",
    type: "charity",
    category: "Global health",
    role: "featured",
    mvpStatus: "mvp",
    region: "Northern Nigeria",
    summary: "Pays cash to caregivers who bring babies to clinics for routine childhood vaccines.",
    evidence: "Exceptionally strong (GiveWell rating), based on one high-quality study of the program.",
    evaluator: "GiveWell top charity; Giving What We Can recommended",
    donateUrl: "https://www.givingwhatwecan.org/charities/new-incentives",
    source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
    source_url: "https://www.givewell.org/charities/top-charities",
    as_of: "October 2026",
    retrieved: "2026-11-07",
    notes: "",
    figures: [
      {
        value: "$146",
        label: "to vaccinate an infant",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "~$4,500",
        label: "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        basis: "GiveWell estimate",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      },
      {
        value: "38%",
        label: "of infants in Nigeria did not get all recommended vaccines in 2025",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      }
    ]
  },
  {
    id: "givewell-top-charities-fund",
    name: "GiveWell Top Charities Fund",
    type: "fund",
    category: "Global health",
    role: "expert_fund",
    mvpStatus: "mvp",
    region: "Multiple (GiveWell chooses)",
    summary: "One gift that GiveWell grants to the top charities it thinks will help most, at zero fees. You are told which programs it chose.",
    evidence: "Allocation follows GiveWell's latest research.",
    evaluator: "GiveWell",
    donateUrl: "https://www.givewell.org/top-charities-fund",
    source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
    source_url: "https://www.givewell.org/charities/top-charities",
    as_of: "October 2026",
    retrieved: "2026-11-07",
    notes: "Good fit for the 'let experts decide' option in the split preview.",
    figures: [
      {
        value: "0%",
        label: "fees taken by the fund",
        basis: "GiveWell",
        figureLabel: "estimate",
        source_name: "GiveWell Our Top Charities (last updated Oct 2026)",
        source_url: "https://www.givewell.org/charities/top-charities",
        as_of: "October 2026"
      }
    ]
  },
  {
    id: "the-humane-league",
    name: "The Humane League",
    type: "charity",
    category: "Animal welfare",
    role: "animal_charity",
    mvpStatus: "mvp",
    region: "Worldwide",
    summary: "Campaigns to get companies to drop the worst confinement practices for farmed chickens, and supports groups worldwide through the Open Wing Alliance.",
    evidence: "High cost effectiveness through corporate commitments (ACE assessment). Recommended by ACE since 2014.",
    evaluator: "Animal Charity Evaluators",
    donateUrl: "https://animalcharityevaluators.org/donate/the-humane-league/",
    source_name: "ACE Recommended Charities (page modified 2026-11-04)",
    source_url: "https://animalcharityevaluators.org/recommended-charities/",
    as_of: "2026-11-04",
    retrieved: "2026-11-07",
    notes: "",
    figures: []
  }
];

/** Keeps MVP records only. Post-MVP records can stay stored elsewhere but never reach MVP results. */
export function selectMvp<T extends { mvpStatus: "mvp" | "post-mvp" }>(records: readonly T[]): T[] {
  return records.filter((record) => record.mvpStatus === "mvp");
}

/** The five equally featured charities, alphabetical so no order implies a top pick. */
export function getFeaturedOrganizations(): CuratedOrganization[] {
  return selectMvp(curatedOrganizations)
    .filter((org) => org.role === "featured")
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** GiveWell Top Charities Fund, shown as the separate "let experts decide" option. */
export function getExpertFund(): CuratedOrganization | undefined {
  return selectMvp(curatedOrganizations).find((org) => org.role === "expert_fund");
}

/** The Humane League, the only MVP animal-welfare charity. */
export function getMvpAnimalCharity(): CuratedOrganization | undefined {
  return selectMvp(curatedOrganizations).find((org) => org.role === "animal_charity");
}
