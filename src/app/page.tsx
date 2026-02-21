"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { StrategySection } from "@/components/sections/StrategySection";
import { GrowthChartSection } from "@/components/sections/GrowthChartSection";
import { CapitalLogicSection } from "@/components/sections/CapitalLogicSection";
import { EquityChartSection } from "@/components/sections/EquityChartSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-100">
      <ScrollProgress />

      {/*
        The cinematic scroll container.
        Background gradients and global glows are handled per section to maintain the 'frameless' aesthetic.
      */}

      <HeroSection />

      <div className="relative">
        {/* Subtle unified vertical connecting line behind all sections */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-sky-900/10 via-slate-800/20 to-indigo-900/10 -z-20 hidden md:block" />

        <EcosystemSection />
        <RoadmapSection />
        <StrategySection />
        <GrowthChartSection />
        <CapitalLogicSection />
        <EquityChartSection />
        <ClosingSection />
      </div>

    </main>
  );
}
