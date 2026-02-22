"use client";

import { PasswordGate } from "@/components/PasswordGate";
import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { StrategySection } from "@/components/sections/StrategySection";
import { GrowthChartSection } from "@/components/sections/GrowthChartSection";
import { CapitalLogicSection } from "@/components/sections/CapitalLogicSection";
import { EquityChartSection } from "@/components/sections/EquityChartSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { ScrollProgress } from "@/components/ScrollProgress";

// SHA-256 Hash von "lohnoptimo26!"
const PASSWORD_HASH =
  "93a0b7c9acb2881ca3c2998f28309ee0fd116d9b52c929978d70f249815262d1";

export default function LohnoptimoPage() {
  return (
    <PasswordGate
      passwordHash={PASSWORD_HASH}
      storageKey="lohnoptimo-auth"
      title="Lohnoptimo Praesentation"
    >
      <main className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-100">
        <ScrollProgress />

        <HeroSection />

        <div className="relative">
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
    </PasswordGate>
  );
}
