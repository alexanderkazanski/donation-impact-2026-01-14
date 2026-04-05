import type { LucideIcon } from "lucide-react";
import { Activity, Droplets, Thermometer, HeartPulse, Gauge } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HealthCards from "@/components/HealthCards";
import ImpactSection from "@/components/ImpactSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";

export interface MetricCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
}


const metrics: MetricCardProps[][] = [

    // 2019-01-12
    [
        { date: 'January 12, 2019', icon: Droplets, label: "Cholesterol", value: "104" },
        { date: 'January 12, 2019', icon: Gauge, label: "Blood Pressure", value: "135/89" },
        { date: 'January 12, 2019', icon: HeartPulse, label: "Pulse", value: "83 bpm" },
        { date: 'January 12, 2019', icon: Thermometer, label: "Temperature", value: "99.1°F" },
    ],

    // 2020-02-17
    [
        { date: 'Feburary 17, 2020', icon: Droplets, label: "Cholesterol", value: "112" },
        { date: 'Feburary 17, 2020', icon: Activity, label: "Iron Count", value: "15.4" },
        { date: 'Feburary 17, 2020', icon: Gauge, label: "Blood Pressure", value: "138/85" },
        { date: 'Feburary 17, 2020', icon: HeartPulse, label: "Pulse", value: "63 bpm" },
        { date: 'Feburary 17, 2020', icon: Thermometer, label: "Temperature", value: "99.2°F" },
    ],

    // 2025-02-01
    [
        { date: 'Feburary 01, 2025', icon: Activity, label: "Iron Count", value: "11.3" },
        { date: 'Feburary 01, 2025', icon: Gauge, label: "Blood Pressure", value: "121/82" },
        { date: 'Feburary 01, 2025', icon: HeartPulse, label: "Pulse", value: "58 bpm" },
        { date: 'Feburary 01, 2025', icon: Thermometer, label: "Temperature", value: "97.6°F" },
    ],

    // 2025-09-20
    [
        { date: 'September 20, 2025', icon: Droplets, label: "Cholesterol", value: "201" },
        { date: 'September 20, 2025', icon: Activity, label: "Iron Count", value: "14.9" },
        { date: 'September 20, 2025', icon: Gauge, label: "Blood Pressure", value: "119/77" },
        { date: 'September 20, 2025', icon: HeartPulse, label: "Pulse", value: "71 bpm" },
        { date: 'September 20, 2025', icon: Thermometer, label: "Temperature", value: "98.3°F" },
    ],

    // 2026-01-14
    [
        { date: 'January 14 2026', icon: Droplets, label: "Cholesterol", value: "279" },
        { date: 'January 14 2026', icon: Activity, label: "Iron Count", value: "14.9" },
        { date: 'January 14 2026', icon: Gauge, label: "Blood Pressure", value: "129/93" },
        { date: 'January 14 2026', icon: HeartPulse, label: "Pulse", value: "58 bpm" },
        { date: 'January 14 2026', icon: Thermometer, label: "Temperature", value: "97.4°F" },
    ],

    // 2026-03-11
    [
        { date: 'March 11, 2026', icon: Droplets, label: "Cholesterol", value: "148" },
        { date: 'March 11, 2026', icon: Gauge, label: "Blood Pressure", value: "130/84" },
        { date: 'March 11, 2026', icon: Activity, label: "Iron Count", value: "14.3" },
        { date: 'March 11, 2026', icon: HeartPulse, label: "Pulse", value: "70 bpm" },
        { date: 'March 11, 2026', icon: Thermometer, label: "Temperature", value: "98.1°F" },
    ]

][4];

const Index = () => (
    <div className="min-h-screen bg-background">
        <HeroSection metrics={metrics} />
        <HealthCards metrics={metrics} />
        <ImpactSection />
        <TimelineSection />
        <FooterSection />
    </div>
);

export default Index;
