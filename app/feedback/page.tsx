import { Screen } from "@/components/layout/Screen";
import { copy } from "@/lib/copy";

// Stub so the nav's feedback link never 404s. The real local form is T-35.
export default function FeedbackPage() {
  return (
    <Screen>
      <h1 className="font-ds text-ds-h1 text-ds-ink">{copy.feedback.title}</h1>
      <p className="mt-ds-md font-ds text-ds-body text-ds-ink">{copy.feedback.body}</p>
    </Screen>
  );
}
