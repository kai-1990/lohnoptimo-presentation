"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Target } from "lucide-react";

const roadmapData = [
    {
        month: "Monat 1",
        title: "Fundament legen",
        priority: "Analyse & Planung",
        accentColor: "emerald",
        badge: "Setup",
        badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        nodeBorder: "border-emerald-500/50",
        nodeGlow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
        nodeText: "text-emerald-400",
        checkColor: "text-emerald-500/60",
        titleColor: "text-emerald-400",
        items: [
            "Technischer SEO-Audit & Keyword-Strategie ausarbeiten",
            "Landingpage überarbeiten — Conversion-Optimierung",
            "Technischer SEO-Neuaufbau: Struktur, Meta, Schema, Speed",
            "Funnel-Architektur konzipieren & Content-Plan erstellen",
            "Software Light: Anforderungen definieren, Entwicklung starten",
            "Positionierung als Lohnoptimierungs-Experte schärfen",
        ],
    },
    {
        month: "Monat 2",
        title: "Zündung",
        priority: "Sichtbarkeit & erste Leads",
        accentColor: "sky",
        badge: "Live",
        badgeBg: "bg-sky-500/15 border-sky-500/30 text-sky-300",
        nodeBorder: "border-sky-500/50",
        nodeGlow: "shadow-[0_0_20px_rgba(56,189,248,0.4)]",
        nodeText: "text-sky-400",
        checkColor: "text-sky-500/70",
        titleColor: "text-sky-400",
        items: [
            "Erste SEO-Inhalte & Lead-Magneten live schalten",
            "Social-Media-Präsenz aufbauen, erste Anzeigen starten",
            "GEO: Strukturierte Inhalte für ChatGPT & Perplexity",
            "Software Light: Beta intern testen, Feedback einholen",
            "Erste Beratungsanfragen über neue digitale Kanäle",
            "Anzeigen-Performance täglich auswerten & optimieren",
        ],
    },
    {
        month: "Monat 3",
        title: "Messbare Ergebnisse",
        priority: "Routinen & Zahlen",
        accentColor: "indigo",
        badge: "Ergebnisse",
        badgeBg: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
        nodeBorder: "border-indigo-500/60",
        nodeGlow: "shadow-[0_0_24px_rgba(99,102,241,0.5)]",
        nodeText: "text-indigo-400",
        checkColor: "text-indigo-400",
        titleColor: "text-indigo-400",
        items: [
            "Ziel: 2–3 neue Beratungsmandate über digitale Kanäle",
            "Software Light: Launch — erste 3–5 zahlende Pilotkunden",
            "Erste echte Fallstudie veröffentlichen",
            "GEO: In 5+ KI-Antworten als Quelle zitiert werden",
            "Digitale Akademie: Webinar-Konzept & Vorverkauf starten",
            "Monatlicher Umsatz: Ziel €10.000+",
        ],
        highlightLast: true,
    },
];

export function RoadmapSection() {
    return (
        <section id="roadmap" className="relative py-32 px-4 flex flex-col items-center">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center md:text-left"
                >
                    <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
                        <span className="text-emerald-400 text-base tracking-widest uppercase font-semibold">
                            Fahrplan
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 pb-2">
                        Die ersten 90 Tage im Detail
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Zeitstrahl-Hinterlinie */}
                    <div className="absolute top-[28px] left-0 w-full h-[1px] bg-slate-800 hidden md:block" />
                    <motion.div
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-[28px] left-0 w-[calc(100%-12px)] h-[2px] bg-gradient-to-r from-emerald-500 via-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                        className="absolute top-[28px] right-0 -translate-y-1/2 hidden md:block"
                    >
                        <ChevronRight className="w-6 h-6 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                    </motion.div>

                    {/* Karten — unterschiedliche visuelle Gewichtung */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">
                        {roadmapData.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.25 }}
                                className="relative flex flex-col"
                            >
                                {/* Timeline-Node — Farbe je Monat */}
                                <div className={`w-14 h-14 rounded-full bg-slate-950 border-2 ${phase.nodeBorder} ${phase.nodeGlow} flex flex-col justify-center items-center z-10 mb-8 mx-auto md:mx-0 transition-all duration-500`}>
                                    <span className={`text-sm font-bold uppercase tracking-wider ${phase.nodeText}`}>M{idx + 1}</span>
                                </div>

                                {/* Monat-Badge */}
                                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                    <h3 className={`text-xl font-bold ${phase.titleColor}`}>
                                        {phase.month}
                                    </h3>
                                    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${phase.badgeBg}`}>
                                        {phase.badge}
                                    </span>
                                </div>

                                {/* Titel */}
                                <p className="text-white font-semibold text-lg mb-3 text-center md:text-left">
                                    {phase.title}
                                </p>

                                {/* Prio-Badge */}
                                <div className="mb-6 text-center md:text-left">
                                    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full border ${phase.badgeBg}`}>
                                        Prio: {phase.priority}
                                    </span>
                                </div>

                                {/* Items */}
                                <ul className="space-y-3">
                                    {phase.items.map((item, itemIdx) => {
                                        const isLastAndHighlighted = phase.highlightLast && itemIdx === phase.items.length - 1;
                                        return (
                                            <motion.li
                                                key={itemIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: (idx * 0.25) + (itemIdx * 0.08) }}
                                                className={`flex items-start ${isLastAndHighlighted ? "mt-2" : ""}`}
                                            >
                                                {isLastAndHighlighted ? (
                                                    <Target className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                                                ) : (
                                                    <CheckCircle2 className={`w-5 h-5 ${phase.checkColor} mr-3 mt-0.5 flex-shrink-0`} />
                                                )}
                                                <span className={`text-base leading-relaxed ${isLastAndHighlighted ? "text-indigo-300 font-semibold" : "text-slate-400"}`}>
                                                    {item}
                                                </span>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] glow-separator opacity-50" />
        </section>
    );
}
