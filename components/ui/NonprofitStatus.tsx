import { Clock, ClipboardList } from "lucide-react";
import clsx from "clsx";

/** Who has looked at the organization. Altrue does not verify charities itself; it points to the evaluator. */
export type EvaluatorStatus = "givewell" | "ace" | "post-mvp";

const STATUS = {
  givewell: { label: "Evaluated by GiveWell", Icon: ClipboardList, iconClass: "text-ds-accent" },
  ace: { label: "Evaluated by Animal Charity Evaluators", Icon: ClipboardList, iconClass: "text-ds-accent" },
  "post-mvp": { label: "Post-MVP", Icon: Clock, iconClass: "text-ds-ink-2" }
} satisfies Record<EvaluatorStatus, { label: string; Icon: typeof Clock; iconClass: string }>;

/** An evaluator tag shown next to a recipient. It names the third party; it never says Altrue verified anything. */
export function NonprofitStatus({ status }: { status: EvaluatorStatus }) {
  const { label, Icon, iconClass } = STATUS[status];

  return (
    <span className="inline-flex items-center gap-1.5 font-ds text-ds-small font-medium text-ds-ink">
      <Icon aria-hidden size={16} strokeWidth={2.25} className={clsx("shrink-0", iconClass)} />
      {label}
    </span>
  );
}
