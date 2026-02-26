"use client";

import { motion } from "framer-motion";
import { Handshake, CalendarCheck, FileText, Rocket, TrendingUp } from "lucide-react";

export function ClosingSection() {
    return (
        <section id="closing" className="relative py-32 px-4 flex flex-col items-center overflow-hidden">
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

                {/* Bento-Grid — asymmetrisch statt 3 gleiche Karten */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 mb-24"
                >
                    {/* Kleine Karte oben links — 90-Tage-Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-panel p-6 rounded-2xl flex flex-col gap-4"
                    >
                        <Rocket className="w-8 h-8 text-emerald-400 shrink-0" />
                        <div>
                            <h3 className="text-lg text-white font-semibold mb-2">90-Tage-Plan</h3>
                            <p className="text-slate-400 text-base leading-relaxed">Klare Roadmap von Fundament über Zündung bis zu messbaren Ergebnissen.</p>
                        </div>
                    </motion.div>

                    {/* Große Karte rechts — Partnerschaft (col-span-2, row-span-2) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="glass-panel p-8 rounded-2xl md:col-span-2 md:row-span-2 relative overflow-hidden flex flex-col justify-between"
                    >
                        {/* Accent-Border oben */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400/60 via-indigo-400/60 to-transparent" />
                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                                    <Handshake className="w-6 h-6 text-indigo-400" />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 uppercase tracking-wider">Das Ziel</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                Partnerschaft auf Augenhöhe
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Meine Beteiligung ist direkt an den Umsatz gekoppelt — kein Fixgehalt, keine leeren Versprechen. Je mehr wir gemeinsam aufbauen, desto größer mein Anteil. Volles Commitment von Tag 1.
                            </p>

                            {/* Equity-Meilensteine kompakt */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: "Start", value: "0 %", sub: "Heute" },
                                    { label: "Meilenstein", value: "25 %", sub: "bei €150k" },
                                    { label: "Maximum", value: "49 %", sub: "bei €300k" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-center">
                                        <p className="text-2xl font-black text-white mb-0.5">{m.value}</p>
                                        <p className="text-slate-400 text-sm">{m.label}</p>
                                        <p className="text-indigo-400 text-xs mt-1">{m.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-8 relative z-10">
                            <TrendingUp className="w-5 h-5 text-sky-400" />
                            <span className="text-sky-300 text-base font-medium">Wir wachsen gemeinsam — oder gar nicht.</span>
                        </div>
                    </motion.div>

                    {/* Kleine Karte unten links — Transparente Finanzen */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass-panel p-6 rounded-2xl flex flex-col gap-4"
                    >
                        <FileText className="w-8 h-8 text-sky-400 shrink-0" />
                        <div>
                            <h3 className="text-lg text-white font-semibold mb-2">Transparente Finanzen</h3>
                            <p className="text-slate-400 text-base leading-relaxed">Erst Kapitalrückführung, dann faire Vergütung, dann Reinvestition ins Wachstum.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Nächste Schritte */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-bold text-white mb-8">Nächste Schritte</h3>
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
                                <span className="text-slate-300 text-base font-medium">{step.text}</span>
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
                    className="text-center text-slate-500 text-base mt-20 tracking-wide"
                >
                    Lohnoptimo — der nächste Schritt beginnt jetzt.
                </motion.p>
            </div>
        </section>
    );
}
