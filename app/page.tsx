import { redirect } from "next/navigation";

// The prototype opens on onboarding. The old home page showed the 8 demo causes.
export default function HomePage() {
  redirect("/onboarding");
}
