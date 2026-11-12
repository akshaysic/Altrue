// PLACEHOLDER copy for the clickable prototype. Edit wording here, in one place.
// Everything in this file is placeholder, not reviewed copy (T-28 replaces it).
// Charity names, summaries, figures, evidence and sources come from lib/seed/sources.ts (copied from the source packet), not from here.
// Rule: no facts or numbers in this file.

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
    detailsLink: "Details"
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

  // Stub page only; the real local feedback form is T-35. No external form URL on purpose.
  feedback: {
    title: "Feedback",
    body: "The feedback form is not built yet. For now, tell the person who sent you this prototype."
  }
} as const;
