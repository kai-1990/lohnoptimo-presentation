"use client";

import { motion } from "framer-motion";
import { Search, BrainCircuit, ArrowRight } from "lucide-react";

export function StrategySection() {
    const flowKeywords = ["Traffic", "Autorität", "Leads", "Consulting", "SaaS Upsell"];

    return (
        <section id="strategy" className="relative py-32 px-4 flex flex-col items-center">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-5xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                        Sichtbarkeit & System
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Lohnoptimo als erste Adresse in seiner Nische positionieren — dauerhaft sichtbar, klar differenziert und messbar wirksam.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    {/* SEO Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-8 rounded-3xl group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
                        <Search className="w-10 h-10 text-sky-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Technisches & Content SEO</h3>
                        <ul className="space-y-4 text-slate-400 text-base">
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-sky-500" />Technischer SEO-Neuaufbau</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-sky-500" />Autoritäts-Content-Pipelines</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-sky-500" />Fallstudien-Landingpages</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-sky-500" />Branchen-Keyword-Positionierung</li>
                        </ul>
                    </motion.div>

                    {/* GEO Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-8 rounded-3xl group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                        <BrainCircuit className="w-10 h-10 text-purple-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Smarte KI-Sichtbarkeit (GEO)</h3>
                        <ul className="space-y-4 text-slate-400 text-base">
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-purple-500" />Präsenz in KI-Suchmaschinen (ChatGPT, Perplexity)</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-purple-500" />Inhalte für KIs verständlich strukturieren</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-purple-500" />Als Branchenexperte zitiert werden</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-3 text-purple-500" />Vertrauen bei Kaltkontakten aufbauen</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Funnel Flow Visualization — Desktop: Horizontale Kette, Mobile: Vertikal */}
                <div className="pt-12">
                    {/* Desktop */}
                    <div className="hidden md:flex justify-center items-center gap-2">
                        {flowKeywords.map((word, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex items-center"
                            >
                                <div className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                    {word}
                                </div>
                                {idx < flowKeywords.length - 1 && (
                                    <ArrowRight className="w-5 h-5 text-slate-500 mx-2 flex-shrink-0" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col items-center gap-3 md:hidden">
                        {flowKeywords.map((word, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex flex-col items-center"
                            >
                                <div className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                    {word}
                                </div>
                                {idx < flowKeywords.length - 1 && (
                                    <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 mt-1" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] glow-separator opacity-40" />
        </section>
    );
}
