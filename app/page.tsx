import { redirect } from "next/navigation";

// The prototype opens on onboarding.
export default function HomePage() {
  redirect("/onboarding");
}
