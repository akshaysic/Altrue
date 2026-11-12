import { redirect } from "next/navigation";

// Retired for the prototype: this scaffold screen showed the old demo causes and unsourced demo metrics.
// The data files stay; T-21/T-22 rebuild these routes on sourced data.
export default function RetiredPage() {
  redirect("/causes");
}
