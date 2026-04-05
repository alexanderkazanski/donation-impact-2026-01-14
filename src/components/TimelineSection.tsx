import { CalendarCheck } from "lucide-react";

const TimelineSection = () => (
  <section className="mx-auto max-w-2xl px-6 py-16">
    <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Timeline</h2>
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-primary p-2">
          <CalendarCheck className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="mt-2 h-full w-px bg-border" />
      </div>
      <div className="pb-8">
        <p className="text-sm font-semibold text-primary">March 11, 2026</p>
        <p className="mt-1 text-base text-foreground font-medium">Blood donation completed</p>
        <p className="mt-1 text-sm text-muted-foreground">Health screening recorded and vitals snapshot captured.</p>
      </div>
    </div>
  </section>
);

export default TimelineSection;
