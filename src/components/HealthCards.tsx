import { Activity, Droplets, Thermometer, HeartPulse, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const MetricCard = ({ icon: Icon, label, value }: MetricCardProps) => (
  <div
    className="group rounded-xl border border-border bg-card p-6 transition-shadow duration-200"
    style={{ boxShadow: "var(--card-shadow)" }}
    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
  >
    <div className="mb-3 inline-flex rounded-lg bg-accent p-2">
      <Icon className="h-5 w-5 text-accent-foreground" />
    </div>
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
  </div>
);

const metrics: MetricCardProps[] = [
  { icon: Droplets, label: "Cholesterol", value: "148" },
  { icon: Gauge, label: "Blood Pressure", value: "130/84" },
  { icon: Activity, label: "Iron Count", value: "14.3" },
  { icon: HeartPulse, label: "Pulse", value: "70 bpm" },
  { icon: Thermometer, label: "Temperature", value: "98.1°F" },
];

const HealthCards = () => (
  <section className="mx-auto max-w-4xl px-6 py-16">
    <h2 className="mb-2 text-center text-2xl font-bold text-foreground">Health Screening Snapshot</h2>
    <p className="mb-10 text-center text-muted-foreground">Key vitals recorded during your donation</p>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {metrics.map((m) => (
        <MetricCard key={m.label} {...m} />
      ))}
    </div>
  </section>
);

export default HealthCards;
