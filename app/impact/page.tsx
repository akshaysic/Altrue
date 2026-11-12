import { redirect } from "next/navigation";

// Retired for the prototype: this scaffold screen showed the old demo causes, unsourced demo metrics or placeholder text.
// The data files stay; later cards rebuild these routes on sourced data.
export default function RetiredPage() {
  redirect("/causes");
}
