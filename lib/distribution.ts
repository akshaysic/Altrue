// PLACEHOLDER RULE, edit me.
// How the prototype splits one monthly amount. It is a stand-in for the real allocation logic,
// not advice and not a recommendation. Change the rule here; /give and /confirm both read it.
//
// 1. "Let experts decide" on: 100% goes to the expert fund (GiveWell Top Charities Fund).
// 2. Otherwise: split equally across the picked causes, then equally across each cause's
//    featured charities. Animal welfare has one MVP charity (The Humane League), so it gets all
//    of that cause's share.
// 3. Every line is rounded down to whole cents; the leftover cents go to the first line, so the
//    lines always add up to exactly the amount.
// Money only: this function never computes impact (no "nets funded", no "lives saved").

import type { CuratedOrganization, MvpCategory } from "@/lib/types";

export type SplitLine = {
  organization: CuratedOrganization;
  category: MvpCategory;
  amountCents: number;
};

export type SplitInput = {
  amountCents: number;
  /** Picked causes, in display order. Duplicates are ignored. */
  causes: readonly MvpCategory[];
  expertsDecide: boolean;
  /** MVP records to split across, e.g. selectMvp(curatedOrganizations). */
  organizations: readonly CuratedOrganization[];
};

/** Which organizations take a cause's share. Featured charities, A to Z; the animal charity for Animal welfare. */
function recipientsFor(cause: MvpCategory, organizations: readonly CuratedOrganization[]) {
  const role = cause === "Animal welfare" ? "animal_charity" : "featured";
  return organizations
    .filter((org) => org.mvpStatus === "mvp" && org.category === cause && org.role === role)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function splitDonation({ amountCents, causes, expertsDecide, organizations }: SplitInput): SplitLine[] {
  if (!Number.isInteger(amountCents) || amountCents <= 0) return [];

  const shares: { organization: CuratedOrganization; category: MvpCategory; exact: number }[] = [];

  if (expertsDecide) {
    const fund = organizations.find((org) => org.mvpStatus === "mvp" && org.role === "expert_fund");
    if (fund) shares.push({ organization: fund, category: fund.category, exact: amountCents });
  } else {
    const picked = [...new Set(causes)]
      .map((cause) => ({ cause, recipients: recipientsFor(cause, organizations) }))
      .filter(({ recipients }) => recipients.length > 0);

    for (const { cause, recipients } of picked) {
      for (const organization of recipients) {
        shares.push({ organization, category: cause, exact: amountCents / picked.length / recipients.length });
      }
    }
  }

  if (shares.length === 0) return [];

  const lines = shares.map(({ organization, category, exact }) => ({ organization, category, amountCents: Math.floor(exact) }));
  const allocated = lines.reduce((sum, line) => sum + line.amountCents, 0);
  lines[0].amountCents += amountCents - allocated;
  return lines;
}
