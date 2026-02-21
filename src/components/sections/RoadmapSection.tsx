"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roadmapData = [
    {
        month: "Monat 1",
        title: "Fundament & Positionierung",
        priority: "Landingpage & Angebot",
        items: [
            "Überarbeitung der Landingpage",
            "Das Angebot klar kommunizieren",
            "Technischer SEO-Neuaufbau",
            "Neue Funnel-Architektur aufsetzen"
        ]
    },
    {
        month: "Monat 2",
        title: "Aktivierung",
        priority: "Sichtbarkeit & Leads",
        items: [
            "Social-Media-Funnel geht live",
            "Testing von neuen Anzeigen",
            "Erste Lead-Magneten einbauen",
            "Erste neue Consulting-Abschlüsse"
        ]
    },
    {
        month: "Monat 3",
        title: "Skalierung",
        priority: "Konstante Routine",
        items: [
            "Laufende Funnel-Optimierung",
            "Echte Fallstudien veröffentlichen",
            "Verbesserung des SaaS-Onboardings",
            "Ziel: 1–2 Projekte im Monat erreichen"
        ]
    }
];

export function RoadmapSection() {
    return (
        <section id="roadmap" className="relative py-32 px-4 flex flex-col items-center">
            {/* Background ambient glow */}
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
                        <span className="text-emerald-400 text-sm tracking-widest uppercase font-semibold">
                            Fahrplan
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Die ersten 90 Tage im Detail
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Main animated horizontal line */}
                    <div className="absolute top-[28px] left-0 w-full h-[1px] bg-slate-800 hidden md:block" />
                    <motion.div
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 via-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {roadmapData.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.3 }}
                                className="relative flex flex-col"
                            >
                                {/* Timeline node */}
                                <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-800 flex flex-col justify-center items-center z-10 mb-8 mx-auto md:mx-0 shadow-[0_0_20px_rgba(15,23,42,0.8)]">
                                    <span className="text-xs uppercase tracking-wider text-slate-500">M{idx + 1}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">
                                    {phase.month}
                                </h3>
                                <p className="text-emerald-400 text-sm tracking-wide font-medium text-center md:text-left">
                                    {phase.title}
                                </p>
                                <div className="mt-2 mb-6 text-center md:text-left">
                                    <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full border border-sky-400/30">
                                        Prio: {phase.priority}
                                    </span>
                                </div>

                                <ul className="space-y-4">
                                    {phase.items.map((item, itemIdx) => (
                                        <motion.li
                                            key={itemIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: (idx * 0.3) + (itemIdx * 0.1) }}
                                            className="flex items-start text-slate-400"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
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
