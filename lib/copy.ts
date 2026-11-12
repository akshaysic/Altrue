/**
 * Every line of UI text that did NOT come from the source packet lives here, so it can be edited in one place.
 * All of it is PLACEHOLDER copy (T-28 will replace it with reviewed copy). Facts, figures, names, summaries,
 * evidence notes and sources are never written here: they come from lib/seed/sources.ts.
 */
export const copy = {
  brand: "Altrue",
  demoBanner: "Demo: no money moves",
  footer: "Prototype for testing. No real donations are made.",

  nav: {
    causes: "Charities",
    feedback: "Feedback",
    start: "Start giving"
  },

  onboarding: {
    title: "What do you want to support?",
    hint: "Pick up to 3.",
    limitReached: "You have picked 3.",
    next: "See charities"
  },

  charities: {
    title: "Charities",
    intro: "One key figure per charity, with where it comes from. Figures are estimates.",
    changeCauses: "Change causes",
    featuredHint: "Shown in alphabetical order. None is pre-selected.",
    expertHeading: "Let experts decide",
    estimate: "Estimate",
    noFigure: "No sourced figure yet.",
    source: "Source",
    details: "Details",
    empty: "No charities to show for this choice."
  },

  detail: {
    back: "Back to charities",
    figuresHeading: "Figures",
    figuresHint: "Each figure is an estimate from the source shown with it.",
    evidenceHeading: "Evidence",
    sourceHeading: "Source",
    asOf: "As of",
    basis: "Basis",
    region: "Where"
  },

  feedback: {
    title: "Feedback",
    body: "The feedback form is not built yet. For now, tell the person who sent you this prototype."
  },

  notFound: {
    title: "Not found",
    back: "Back to charities"
  }
} as const;
