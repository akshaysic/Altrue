import { PLACEHOLDER_AMOUNT_EUR } from "@/lib/copy";
import type { MvpCategory } from "@/lib/types";
import { toAreaSlug } from "./areas";

export type SearchParam = string | string[] | undefined;

const first = (param: SearchParam) => (Array.isArray(param) ? param[0] : param);

/** ?amount= is whole euros. Anything missing, non-numeric or out of range falls back or clamps. */
export function parseAmountCents(param: SearchParam) {
  const { min, max } = PLACEHOLDER_AMOUNT_EUR;
  const euros = Math.round(Number(first(param)));
  if (!Number.isFinite(euros) || first(param) === undefined) return PLACEHOLDER_AMOUNT_EUR.default * 100;
  return Math.min(max, Math.max(min, euros)) * 100;
}

export function parseExperts(param: SearchParam) {
  return first(param) === "1";
}

/** Builds a URL that carries the donor's picks between screens. No backend, no storage. */
export function flowHref(path: string, state: { causes: readonly MvpCategory[]; amountCents?: number; expertsDecide?: boolean }) {
  const params = new URLSearchParams();
  if (state.causes.length > 0) params.set("areas", state.causes.map(toAreaSlug).join(","));
  if (state.amountCents !== undefined) params.set("amount", String(state.amountCents / 100));
  if (state.expertsDecide) params.set("experts", "1");
  const query = params.toString().replaceAll("%2C", ",");
  return query ? `${path}?${query}` : path;
}
