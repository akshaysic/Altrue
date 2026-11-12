import type { SourcedCharity } from "@/lib/types";

// Copied verbatim from .agents/research/charity-shortlist-2026-11-07.json (T-05 source packet).
// Do not edit figures here by hand: change the packet, then re-copy.
// The packet's data gate (human skim, T-17/T-18) is still open, so treat these as prototype data.
export const charities: SourcedCharity[] = [
  {
    "id": "givedirectly",
    "name": "GiveDirectly",
    "type": "charity",
    "impact_area": "Poverty relief",
    "region": "Kenya, Uganda, Rwanda, Malawi, DRC, Mozambique, US",
    "summary": "Sends cash straight to people living in extreme poverty by mobile money, no strings attached. Recipients choose how to spend it.",
    "key_figures": [
      {
        "value": "85%",
        "label": "of funds directly delivered to people in need",
        "basis": "GiveDirectly homepage headline; the site also says more than 87% for its flagship program"
      },
      {
        "value": "48%",
        "label": "lower infant mortality in a Kenya randomised study of $1,000 transfers",
        "basis": "As reported by GiveDirectly on its own site"
      },
      {
        "value": "2,248,119",
        "label": "people reached worldwide",
        "basis": "GiveDirectly homepage counter"
      }
    ],
    "evidence": "Cash transfers are heavily studied (GiveDirectly cites 1,000+ studies). Long-term effects and spillovers are still being researched.",
    "evaluator": "GiveWell (top charity 2012 to 2022, not on the current list); Charity Navigator 99% four-star; CharityWatch Top Rated (as shown by GiveDirectly)",
    "donate_url": "https://donate.givedirectly.org",
    "source_url": "https://www.givedirectly.org/",
    "source_name": "GiveDirectly homepage; GiveWell GiveDirectly review page",
    "source_as_of": "retrieved 2026-11-07",
    "retrieved": "2026-11-07",
    "notes": "Honesty note: GiveWell removed GiveDirectly from its top charities list in Aug 2022 after changing its criteria, and says this did not reflect a change in its view of the program. GiveWell says it still has a very high view of GiveDirectly. Monthly giving is offered. Strong candidate for the featured anchor."
  },
  {
    "id": "malaria-consortium",
    "name": "Malaria Consortium: seasonal malaria chemoprevention",
    "type": "charity",
    "impact_area": "Global health",
    "region": "Sub-Saharan Africa",
    "summary": "Gives children preventive malaria medicine during the four months of the year when infections peak.",
    "key_figures": [
      {
        "value": "$7",
        "label": "to protect a child from malaria",
        "basis": "GiveWell"
      },
      {
        "value": "~$4,000",
        "label": "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        "basis": "GiveWell estimate"
      }
    ],
    "evidence": "Exceptionally strong (GiveWell rating).",
    "evaluator": "GiveWell top charity; Giving What We Can recommended",
    "donate_url": "https://www.givingwhatwecan.org/charities/malaria-consortium",
    "source_url": "https://www.givewell.org/charities/top-charities",
    "source_name": "GiveWell Our Top Charities (last updated Oct 2026)",
    "source_as_of": "October 2026",
    "retrieved": "2026-11-07",
    "notes": "Malaria kills around 600,000 people a year, mostly children under 5 in sub-Saharan Africa (GiveWell)."
  },
  {
    "id": "against-malaria-foundation",
    "name": "Against Malaria Foundation",
    "type": "charity",
    "impact_area": "Global health",
    "region": "Sub-Saharan Africa",
    "summary": "Funds insecticide-treated nets that people sleep under, so they are not bitten by malaria-carrying mosquitoes.",
    "key_figures": [
      {
        "value": "$6",
        "label": "to provide one net",
        "basis": "GiveWell"
      },
      {
        "value": "~$5,500",
        "label": "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        "basis": "GiveWell estimate"
      }
    ],
    "evidence": "Exceptionally strong (GiveWell rating).",
    "evaluator": "GiveWell top charity; Giving What We Can recommended",
    "donate_url": "https://www.givingwhatwecan.org/charities/against-malaria-foundation",
    "source_url": "https://www.givewell.org/charities/top-charities",
    "source_name": "GiveWell Our Top Charities (last updated Oct 2026)",
    "source_as_of": "October 2026",
    "retrieved": "2026-11-07",
    "notes": "Giving What We Can states $6 buys a net for 2 people for 2 years."
  },
  {
    "id": "helen-keller-intl",
    "name": "Helen Keller Intl: vitamin A supplementation",
    "type": "charity",
    "impact_area": "Global health",
    "region": "Areas modelled by GiveWell (country list not captured)",
    "summary": "Provides vitamin A supplements to children under 5. Deficiency leaves children open to infections that can be fatal.",
    "key_figures": [
      {
        "value": "$2",
        "label": "to give a child vitamin A for one year",
        "basis": "GiveWell"
      },
      {
        "value": "~$3,500",
        "label": "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        "basis": "GiveWell estimate"
      },
      {
        "value": "28%",
        "label": "of children in modelled areas have vitamin A deficiency",
        "basis": "GiveWell estimate"
      }
    ],
    "evidence": "Very strong (GiveWell rating); results vary by study.",
    "evaluator": "GiveWell top charity; Giving What We Can recommended",
    "donate_url": "https://www.givingwhatwecan.org/charities/helen-keller-international",
    "source_url": "https://www.givewell.org/charities/top-charities",
    "source_name": "GiveWell Our Top Charities (last updated Oct 2026)",
    "source_as_of": "October 2026",
    "retrieved": "2026-11-07",
    "notes": ""
  },
  {
    "id": "new-incentives",
    "name": "New Incentives",
    "type": "charity",
    "impact_area": "Global health",
    "region": "Northern Nigeria",
    "summary": "Pays cash to caregivers who bring babies to clinics for routine childhood vaccines.",
    "key_figures": [
      {
        "value": "$146",
        "label": "to vaccinate an infant",
        "basis": "GiveWell"
      },
      {
        "value": "~$4,500",
        "label": "per life saved (estimated average for GiveWell funding in 2022 to 2024)",
        "basis": "GiveWell estimate"
      },
      {
        "value": "38%",
        "label": "of infants in Nigeria did not get all recommended vaccines in 2025",
        "basis": "GiveWell"
      }
    ],
    "evidence": "Exceptionally strong (GiveWell rating), based on one high-quality study of the program.",
    "evaluator": "GiveWell top charity; Giving What We Can recommended",
    "donate_url": "https://www.givingwhatwecan.org/charities/new-incentives",
    "source_url": "https://www.givewell.org/charities/top-charities",
    "source_name": "GiveWell Our Top Charities (last updated Oct 2026)",
    "source_as_of": "October 2026",
    "retrieved": "2026-11-07",
    "notes": ""
  },
  {
    "id": "givewell-top-charities-fund",
    "name": "GiveWell Top Charities Fund",
    "type": "fund",
    "impact_area": "Global health",
    "region": "Multiple (GiveWell chooses)",
    "summary": "One gift that GiveWell grants to the top charities it thinks will help most, at zero fees. You are told which programs it chose.",
    "key_figures": [
      {
        "value": "0%",
        "label": "fees taken by the fund",
        "basis": "GiveWell"
      }
    ],
    "evidence": "Allocation follows GiveWell's latest research.",
    "evaluator": "GiveWell",
    "donate_url": "https://www.givewell.org/top-charities-fund",
    "source_url": "https://www.givewell.org/charities/top-charities",
    "source_name": "GiveWell Our Top Charities (last updated Oct 2026)",
    "source_as_of": "October 2026",
    "retrieved": "2026-11-07",
    "notes": "Good fit for the 'let experts decide' option in the split preview."
  },
  {
    "id": "the-humane-league",
    "name": "The Humane League",
    "type": "charity",
    "impact_area": "Animal welfare",
    "region": "Worldwide",
    "summary": "Campaigns to get companies to drop the worst confinement practices for farmed chickens, and supports groups worldwide through the Open Wing Alliance.",
    "key_figures": [],
    "evidence": "High cost effectiveness through corporate commitments (ACE assessment). Recommended by ACE since 2014.",
    "evaluator": "Animal Charity Evaluators",
    "donate_url": "https://animalcharityevaluators.org/donate/the-humane-league/",
    "source_url": "https://animalcharityevaluators.org/recommended-charities/",
    "source_name": "ACE Recommended Charities (page modified 2026-11-04)",
    "source_as_of": "2026-11-04",
    "retrieved": "2026-11-07",
    "notes": ""
  }
];

export const FEATURED_CHARITY_IDS = ["givedirectly", "malaria-consortium", "against-malaria-foundation", "helen-keller-intl", "new-incentives"] as const;
export const EXPERTS_DECIDE_ID = "givewell-top-charities-fund";
export const ANIMAL_CHARITY_ID = "the-humane-league";

/** The three MVP onboarding areas, using the packet's impact_area names. */
export const MVP_IMPACT_AREAS = ["Global health", "Poverty relief", "Animal welfare"] as const;
export type MvpImpactArea = (typeof MVP_IMPACT_AREAS)[number];

export function getCharityById(id: string) {
  return charities.find((charity) => charity.id === id);
}

/** "Global health" → "global-health", for the ?areas= query string. */
export function toAreaSlug(area: string) {
  return area.toLowerCase().replaceAll(" ", "-");
}

/** Reads ?areas=a,b back into MVP area names. Unknown values are dropped; empty means "all". */
export function parseAreas(param: string | string[] | undefined): MvpImpactArea[] {
  const raw = Array.isArray(param) ? param.join(",") : param ?? "";
  const slugs = new Set(raw.split(",").filter(Boolean));
  return MVP_IMPACT_AREAS.filter((area) => slugs.has(toAreaSlug(area)));
}
