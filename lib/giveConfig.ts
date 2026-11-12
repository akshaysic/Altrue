/** PLACEHOLDER: the monthly amount range for the prototype slider. Edit me. Whole euros. */
export const PLACEHOLDER_GIVE = {
  currency: "EUR",
  minAmount: 10,
  maxAmount: 50,
  defaultAmount: 20,
  step: 1
} as const;

/** Reads ?amount= from the URL. Anything missing, non-numeric or out of range falls back safely. */
export function parseAmount(param: string | string[] | undefined): number {
  const { minAmount, maxAmount, defaultAmount } = PLACEHOLDER_GIVE;
  const value = Number(Array.isArray(param) ? param[0] : param);
  if (!Number.isInteger(value) || value < minAmount || value > maxAmount) return defaultAmount;
  return value;
}
