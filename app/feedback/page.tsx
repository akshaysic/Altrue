import { MobileShell } from "@/components/layout/MobileShell";
import { PLACEHOLDER_COPY } from "@/lib/copy";

// Stub so a feedback link never 404s. The real local form is T-35.
export default function FeedbackPage() {
  return (
    <MobileShell>
      <h1 className="font-ds text-ds-h1">{PLACEHOLDER_COPY.feedback.title}</h1>
      <p className="mt-ds-md font-ds text-ds-body">{PLACEHOLDER_COPY.feedback.body}</p>
    </MobileShell>
  );
}
