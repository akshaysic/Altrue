import { BadgeCheck, CircleAlert, Clock } from "lucide-react";
import clsx from "clsx";
import type { VerificationStatus } from "@/lib/types";

const STATUS = {
  verified: { label: "Verified", Icon: BadgeCheck, iconClass: "text-ds-accent" },
  pending_review: { label: "Pending review", Icon: Clock, iconClass: "text-ds-ink-2" },
  data_incomplete: { label: "Data incomplete", Icon: CircleAlert, iconClass: "text-ds-notice-ink" }
} satisfies Record<VerificationStatus, { label: string; Icon: typeof BadgeCheck; iconClass: string }>;

/** A nonprofit's verification status, shown next to the recipient (proposed addition from the Google Pay reference). */
export function NonprofitStatus({ status }: { status: VerificationStatus }) {
  const { label, Icon, iconClass } = STATUS[status];

  return (
    <span className="inline-flex items-center gap-1.5 font-ds text-ds-small font-medium text-ds-ink">
      <Icon aria-hidden size={16} strokeWidth={2.25} className={clsx("shrink-0", iconClass)} />
      {label}
    </span>
  );
}
