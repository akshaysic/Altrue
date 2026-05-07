import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export default function SignInPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-xl px-5 py-10">
        <PageHeader eyebrow="Mock auth" title="Sign in" description="Authentication is not implemented in this scaffold." />
        <div className="mt-8">
          <PlaceholderCard title="Placeholder sign-in form">
            <p>A future pass can add real auth or a local demo-user session here.</p>
          </PlaceholderCard>
        </div>
      </section>
    </PublicLayout>
  );
}
