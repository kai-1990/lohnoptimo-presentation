"use client";

import { motion } from "framer-motion";
import { Handshake, CalendarCheck, FileText, Rocket } from "lucide-react";

export function ClosingSection() {
    return (
        <section id="closing" className="relative py-32 px-4 flex flex-col items-center overflow-hidden">
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
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-300 mb-6">
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
                        <h3 className="text-lg text-white font-semibold mb-2">90-Tage-Plan</h3>
                        <p className="text-slate-400 text-sm">Klare Roadmap von Positionierung über Aktivierung bis Skalierung — Monat für Monat.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <FileText className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                        <h3 className="text-lg text-white font-semibold mb-2">Transparente Finanzen</h3>
                        <p className="text-slate-400 text-sm">Erst Kapitalrückführung, dann faire Vergütung, dann Reinvestition ins Wachstum.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <Handshake className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-lg text-white font-semibold mb-2">Partnerschaft</h3>
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
                    <h3 className="text-lg font-bold text-white mb-8">Nächste Schritte</h3>
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
