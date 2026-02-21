# Lohnoptimo Präsentation — Polishing Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Die Lohnoptimo-Businessplan-Präsentation inhaltlich, visuell und technisch für das 3. Investoren-Gespräch perfektionieren.

**Architecture:** Scroll-basierte Single-Page Next.js Präsentation mit 7 Sektionen + neue Abschluss-Sektion. Alle Änderungen in bestehenden Dateien, eine neue Komponente (ClosingSection).

**Tech Stack:** Next.js 16, React 19, Framer Motion, Recharts, Tailwind 4, Lucide Icons

**Kontext:** Der Investor hat Lohnoptimo selbst aufgebaut, hatte aber keine Zeit mehr. Kai übernimmt den operativen Wiederaufbau. Die Präsentation wird live gezeigt UND als Link verschickt. Es ist das 3. Gespräch — Ziel: Konkretheit und Strategie zeigen.

---

## Task 1: Sprachliche Überarbeitung HeroSection

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: "rauszuhauen" professionell formulieren**

Zeile 49, ändern von:
```
Wir wachsen gemeinsam. Priorität hat zunächst das Investorenkapital rauszuhauen.
```
zu:
```
Wir wachsen gemeinsam. Erste Priorität: das eingesetzte Kapital zurückführen.
```

**Step 2: Verifizieren, dass der Dev-Server keine Fehler zeigt**

---

## Task 2: Sprachliche Überarbeitung EcosystemSection

**Files:**
- Modify: `src/components/sections/EcosystemSection.tsx`

**Step 1: "Cashcow" ersetzen**

Zeile 106, ändern von:
```
Die Cashcow. Durch die Software als Einstieg gewinnen wir neue Mandanten viel leichter.
```
zu:
```
Unser Kerngeschäft. Durch die Software als Einstieg gewinnen wir neue Mandanten deutlich leichter.
```

---

## Task 3: Sprachliche Überarbeitung GrowthChartSection

**Files:**
- Modify: `src/components/sections/GrowthChartSection.tsx`

**Step 1: Titel überarbeiten**

Zeile 65-66, ändern von:
```
ROI & Gehaltswachstumsvektor
```
zu:
```
Umsatzentwicklung über 12 Monate
```

**Step 2: Untertitel anpassen**

Zeile 68, ändern von:
```
Visualisierung des Zinseszinseffekts von hybridem Umsatz über 12 Monate.
```
zu:
```
Kombinierter Umsatz aus SaaS und Beratung — konservative Projektion.
```

**Step 3: Phase-Label "Beratergehalts-Skalierung" überarbeiten**

Zeile 91, ändern von:
```
Phase der Beratergehalts-Skalierung
```
zu:
```
Wachstumsphase
```

---

## Task 4: Sprachliche Überarbeitung CapitalLogicSection

**Files:**
- Modify: `src/components/sections/CapitalLogicSection.tsx`

**Step 1: "scale ich zeitlich komplett" klarer formulieren**

Zeile 130, ändern von:
```
Mit wachsendem wiederkehrenden Umsatz scale ich auch zeitlich komplett in Lohnoptimo hinein.
```
zu:
```
Mit wachsendem wiederkehrenden Umsatz steigt auch mein zeitliches Engagement — bis zur Vollzeit-Übernahme der operativen Leitung.
```

---

## Task 5: ClosingSection erstellen

**Files:**
- Create: `src/components/sections/ClosingSection.tsx`
- Modify: `src/app/page.tsx`

**Step 1: ClosingSection Komponente erstellen**

Neue Datei `src/components/sections/ClosingSection.tsx` mit:
- Überschrift: "Zusammenfassung & nächste Schritte"
- 3-4 Kernpunkte als kompakte Zusammenfassung (90-Tage-Plan, Equity-Modell, Finanzlogik)
- 2-3 konkrete nächste Schritte (z.B. "Vertragliche Rahmenbedingungen klären", "Starttermin festlegen", "Erste Maßnahmen definieren")
- Framer Motion Animationen konsistent mit den anderen Sektionen
- Glass-Panel Styling passend zum Rest

```tsx
"use client";

import { motion } from "framer-motion";
import { Handshake, CalendarCheck, FileText, Rocket } from "lucide-react";

export function ClosingSection() {
    return (
        <section className="relative py-32 px-4 flex flex-col items-center overflow-hidden">
            {/* Hintergrund-Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-300 mb-6">
                        Zusammenfassung
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Die wichtigsten Punkte auf einen Blick — und wie es jetzt weitergeht.
                    </p>
                </motion.div>

                {/* Kernpunkte */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                >
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <Rocket className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">90-Tage-Plan</h3>
                        <p className="text-slate-400 text-sm">Klare Roadmap von Positionierung über Aktivierung bis Skalierung — Monat für Monat.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <FileText className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">Transparente Finanzen</h3>
                        <p className="text-slate-400 text-sm">Erst Kapitalrückführung, dann faire Vergütung, dann Reinvestition ins Wachstum.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <Handshake className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">Partnerschaft</h3>
                        <p className="text-slate-400 text-sm">Equity-Modell gebunden an reale Umsätze — wir wachsen gemeinsam.</p>
                    </div>
                </motion.div>

                {/* Nächste Schritte */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-8">Nächste Schritte</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {[
                            { icon: FileText, text: "Rahmenbedingungen klären" },
                            { icon: CalendarCheck, text: "Starttermin festlegen" },
                            { icon: Rocket, text: "Erste Maßnahmen umsetzen" },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
                                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800"
                            >
                                <step.icon className="w-5 h-5 text-sky-400" />
                                <span className="text-slate-300 font-medium">{step.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Abschluss-Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-center text-slate-500 text-sm mt-20 tracking-wide"
                >
                    Lohnoptimo — gemeinsam auf das nächste Level.
                </motion.p>
            </div>
        </section>
    );
}
```

**Step 2: ClosingSection in page.tsx einbinden**

In `src/app/page.tsx`:
- Import hinzufügen: `import { ClosingSection } from "@/components/sections/ClosingSection";`
- Nach `<EquityChartSection />` einfügen: `<ClosingSection />`

---

## Task 6: Navigation/Progress-Dots hinzufügen

**Files:**
- Create: `src/components/ScrollProgress.tsx`
- Modify: `src/app/page.tsx`

**Step 1: ScrollProgress Komponente erstellen**

Datei `src/components/ScrollProgress.tsx`:
- Fixierte vertikale Dot-Navigation am rechten Rand (nur Desktop)
- 8 Dots für 8 Sektionen
- Aktiver Dot wird per Intersection Observer erkannt
- Klick auf Dot scrollt zur Sektion
- Subtiles Design passend zum Glass-Panel Stil

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
    { id: "hero", label: "Start" },
    { id: "ecosystem", label: "Umsatz-Hebel" },
    { id: "roadmap", label: "Fahrplan" },
    { id: "strategy", label: "Strategie" },
    { id: "growth", label: "Wachstum" },
    { id: "capital", label: "Finanzen" },
    { id: "equity", label: "Anteile" },
    { id: "closing", label: "Abschluss" },
];

export function ScrollProgress() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTIONS.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-4">
            {SECTIONS.map((section, idx) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="group flex items-center gap-3"
                    aria-label={`Zu ${section.label} scrollen`}
                >
                    <span
                        className={`text-xs tracking-wide transition-all duration-300 ${
                            idx === activeIndex
                                ? "opacity-100 text-sky-400 translate-x-0"
                                : "opacity-0 text-slate-500 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                    >
                        {section.label}
                    </span>
                    <motion.div
                        className={`rounded-full transition-all duration-300 ${
                            idx === activeIndex
                                ? "w-3 h-3 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                : "w-2 h-2 bg-slate-600 group-hover:bg-slate-400"
                        }`}
                    />
                </button>
            ))}
        </nav>
    );
}
```

**Step 2: IDs zu allen Sektionen hinzufügen**

Jede Section-Komponente braucht eine `id` auf dem `<section>`-Element:
- HeroSection: `id="hero"`
- EcosystemSection: `id="ecosystem"`
- RoadmapSection: `id="roadmap"`
- StrategySection: `id="strategy"`
- GrowthChartSection: `id="growth"`
- CapitalLogicSection: `id="capital"`
- EquityChartSection: `id="equity"`
- ClosingSection: `id="closing"`

**Step 3: ScrollProgress in page.tsx einbinden**

Import + direkt nach `<main>` rendern.

---

## Task 7: Equity-Chart Mobile Labels sichtbar machen

**Files:**
- Modify: `src/components/sections/EquityChartSection.tsx`

**Step 1: `hidden md:flex` durch responsive Alternative ersetzen**

Die 3 Floating Labels (Zeilen 133-145) sind mit `hidden md:flex` nur auf Desktop sichtbar.

Ansatz: Auf Mobile die Labels unterhalb des Charts als einfache horizontale Reihe anzeigen, statt als absolute positionierte Overlays.

Neuen Block nach dem Chart-Container hinzufügen:
```tsx
{/* Mobile Milestone Labels */}
<div className="flex md:hidden justify-between mt-6 px-2">
    <div className="text-center">
        <span className="text-emerald-400 font-bold text-sm">10%</span>
        <span className="text-slate-500 text-xs block mt-1">50k € Umsatz</span>
    </div>
    <div className="text-center">
        <span className="text-emerald-400 font-bold text-sm">25%</span>
        <span className="text-slate-500 text-xs block mt-1">150k € Umsatz</span>
    </div>
    <div className="text-center">
        <span className="text-purple-400 font-bold text-sm">49%</span>
        <span className="text-slate-500 text-xs block mt-1">300k € Umsatz</span>
    </div>
</div>
```

---

## Task 8: Technische Bugs fixen

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/sections/GrowthChartSection.tsx`
- Modify: `src/components/sections/EquityChartSection.tsx`

**Step 1: Sprache auf Deutsch setzen**

`layout.tsx` Zeile 26: `lang="en"` → `lang="de"`

**Step 2: Leeren useEffect entfernen**

`page.tsx`: Den `useEffect`-Import und den leeren Hook (Zeilen 1, 3, 14-16) entfernen.

**Step 3: any-Types in Tooltips fixen**

Beide CustomTooltip-Komponenten: `any` durch richtige Recharts-Typen ersetzen oder `unknown` mit Type Guards verwenden.

**Step 4: Ungenutzte Default-Assets aufräumen**

Die Dateien `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` löschen — sie sind Next.js-Defaults und werden nirgends verwendet.

---

## Task 9: Funnel-Pfeile mobil sichtbar machen

**Files:**
- Modify: `src/components/sections/StrategySection.tsx`

**Step 1: Mobile Pfeil-Alternative**

Zeile 87: Die Pfeile zwischen Funnel-Keywords sind `hidden md:block`. Für Mobile stattdessen einen vertikalen Pfeil (↓) zwischen den Keywords rendern.

---

## Task 10: Build prüfen und Commit

**Step 1: Build ausführen**

```bash
npm run build
```

**Step 2: Eventuelle Build-Fehler fixen**

**Step 3: Commit erstellen**

```bash
git add -A
git commit -m "polish: Präsentation professionell überarbeitet — Sprache, Abschluss, Navigation, Mobile, Bugfixes"
```
