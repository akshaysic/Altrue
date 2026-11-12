// PLACEHOLDER copy for the clickable prototype. Edit wording here, in one place.
// Everything in this file is placeholder, not reviewed copy (T-28 replaces it).
// Charity names, summaries, figures, evidence and sources come from lib/seed/sources.ts (copied from the source packet), not from here.
// Rule: no facts or impact numbers in this file. The amount range below is a prototype setting, not a fact.

/** PLACEHOLDER: the human fills in the real feedback form URL. Shown on every screen.
 *  Until then it points at the in-app /feedback stub, so the link never 404s. A full https:// URL opens in a new tab. */
export const FEEDBACK_URL = "/feedback";

/** PLACEHOLDER: monthly amount slider range on /give, in whole euros. */
export const PLACEHOLDER_AMOUNT_EUR = { min: 10, max: 50, default: 20, step: 1 } as const;

export const PLACEHOLDER_COPY = {
  demoBanner: "Demo: no money moves",
  feedbackLink: "Feedback",

  onboarding: {
    eyebrow: "Step 1",
    title: "What do you want to support?",
    body: "Pick up to 3.",
    pickedCount: (picked: number, max: number) => `${picked} of ${max} picked`,
    continue: "See charities"
  },

  causeList: {
    eyebrow: "Step 2",
    title: "Charities for your causes",
    editCauses: "Change causes",
    showAll: "Show all",
    featuredHeading: "Featured",
    featuredNote: "Listed A to Z, not ranked.",
    expertsHeading: "Let experts decide",
    expertsNote: "One gift, split by an evaluator.",
    animalHeading: "Animal welfare",
    noFigure: "No figure sourced yet.",
    sourceLink: "Source",
    detailsLink: "Details",
    giveCta: "Plan a monthly gift"
  },

  detail: {
    back: "Back to charities",
    figuresHeading: "Key figures",
    noFigures: "No figures sourced yet.",
    evidenceHeading: "Evidence",
    evaluatorHeading: "Evaluated by",
    regionHeading: "Where",
    sourceHeading: "Source",
    asOfLabel: "As of",
    retrievedLabel: "Retrieved",
    externalHint: "opens in a new tab"
  },

  give: {
    eyebrow: "Step 3",
    title: "How much each month?",
    back: "Back to charities",
    amountCaption: "per month, in euros",
    sliderLabel: "Monthly amount",
    sliderValueText: (amount: string) => `${amount} per month`,
    expertsLabel: "Let experts decide",
    expertsHint: "Sends the whole amount to the GiveWell Top Charities Fund instead of the split below.",
    splitHeading: "Illustrative split, demo only",
    splitNote: "Equal shares, using a placeholder rule. Not advice.",
    noCauses: "No causes picked yet.",
    pickCauses: "Pick causes",
    continue: "Review"
  },

  confirm: {
    eyebrow: "Step 4",
    title: "Demo: no money moves",
    body: "This is what your monthly gift would look like. Nothing was charged and nothing was saved.",
    splitHeading: "Illustrative split, demo only",
    totalLabel: "Total per month",
    figureNote: "Estimate",
    figureNoteUsd: "Estimate, in USD as sourced",
    asOfLabel: "As of",
    changeAmount: "Change amount",
    startAgain: "Start again"
  },

  // Stub page at /feedback; the real local feedback form is T-35. FEEDBACK_URL points here until the human sets a real URL.
  feedback: {
    title: "Feedback",
    body: "The feedback form is not built yet. For now, tell the person who sent you this prototype."
  }
} as const;
