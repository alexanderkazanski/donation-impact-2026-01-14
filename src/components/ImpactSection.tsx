import { Users } from "lucide-react";

const ImpactSection = () => (
  <section className="bg-accent py-16 px-6 text-center">
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">One Donation. Real Impact.</h2>
      <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
        A single blood donation can be separated into red cells, platelets, and plasma—supporting multiple patients and strengthening community health.
      </p>
      <div className="inline-flex flex-col items-center rounded-2xl border border-border bg-card px-10 py-8" style={{ boxShadow: "var(--card-shadow)" }}>
        <Users className="mb-3 h-8 w-8 text-primary" />
        <span className="text-5xl font-extrabold text-primary">2</span>
        <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Lives Impacted</span>
      </div>
    </div>
  </section>
);

export default ImpactSection;
