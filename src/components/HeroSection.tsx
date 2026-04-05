import { Heart } from "lucide-react";

const HeroSection = ({ metrics }) => (
    <section className="relative overflow-hidden py-20 px-6 text-center" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent p-4">
                <Heart className="h-10 w-10 text-primary" fill="hsl(0 72% 51% / 0.2)" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Blood Donation</p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {metrics[0].date}
            </h1>
            <p className="mb-6 text-xl font-medium text-muted-foreground">
                This donation helped impact <span className="font-bold text-primary">2 lives</span>.
            </p>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
                Every donation includes a routine health screening snapshot—a quick look at key vitals that helps ensure donor safety while saving lives.
            </p>
        </div>
    </section>
);

export default HeroSection;
