// PLACEHOLDER copy for the clickable prototype. Edit wording here, in one place.
// Everything in this file is placeholder, not reviewed copy (T-28 replaces it).
// Charity names, summaries, figures, evidence and sources come from lib/seed/sources.ts (copied from the source packet), not from here.
// Rule: no facts or numbers in this file.

/** PLACEHOLDER: where the footer's feedback link goes. Swap for a mailto: or a form URL when there is one. */
export const PLACEHOLDER_FEEDBACK_HREF = "/feedback";

export const PLACEHOLDER_COPY = {
  demoBanner: "Demo: no money moves",

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
    setAmount: "Set a monthly amount"
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
    amountCaption: "every month",
    sliderLabel: "Monthly amount",
    causesLabel: "Your causes",
    changeCauses: "Change causes",
    expertsLabel: "Let experts decide",
    expertsNote: "Put the whole amount in one fund chosen by experts.",
    splitHeading: "Illustrative split, demo only",
    splitNote: "A simple equal split. Placeholder rule, not advice.",
    total: "Total each month",
    continue: "Review (demo)"
  },

  confirm: {
    eyebrow: "Step 4",
    title: "Demo confirmation",
    notice: "Demo: no money moves",
    noticeBody: "Nothing was charged and nothing was sent. This is a pretend gift to try the flow.",
    summary: (amount: string) => `Pretend monthly gift: ${amount}`,
    splitHeading: "Illustrative split, demo only",
    sourcesNote: "Each line links to its source. Figures on the charity pages are estimates in USD, as sourced. They are not applied to your amount.",
    changeAmount: "Change amount",
    startAgain: "Start again"
  },

  footer: {
    feedback: "Send feedback"
  },

  // Stub page only; the real local feedback form is T-35. No external form URL on purpose.
  feedback: {
    title: "Feedback",
    body: "The feedback form is not built yet. For now, tell the person who sent you this prototype."
  }
} as const;
