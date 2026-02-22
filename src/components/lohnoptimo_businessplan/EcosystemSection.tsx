"use client";

import { motion, Variants } from "framer-motion";
import { MonitorSmartphone, Users, RefreshCw, Smartphone } from "lucide-react";

export function EcosystemSection() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="ecosystem" className="relative min-h-screen py-32 px-4 flex flex-col justify-center items-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-sky-300">
                        Unsere Umsatz-Hebel
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Wir bauen auf dem auf, was heute schon da ist, und fügen neue skalierbare Erlösquellen hinzu. Kein leeres Buzzword-Bingo, sondern konkrete Potenziale.
                    </p>
                </motion.div>

                {/* Desktop: Horizontales Grid mit Verbindungslinien */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:grid grid-cols-7 items-start gap-0 relative"
                >
                    {/* Reihe 1: Kreise (Spalten 1,3,5,7) und Linien (Spalten 2,4,6) */}

                    {/* Node 1: Software Light */}
                    <motion.div variants={item} className="flex flex-col items-center relative z-10 group col-span-1">
                        <div className="w-36 h-36 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                            <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                            <Smartphone className="w-11 h-11 text-emerald-400" />
                        </div>
                        {/* NEU Badge */}
                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 1.0, type: "spring" }}
                            className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        >
                            Neu
                        </motion.span>
                        <div className="mt-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">Software<br />Lightversion</h3>
                            <p className="text-emerald-400 font-mono text-[10px] tracking-wider mb-2">EINSTIEG</p>
                            <p className="text-slate-400 text-sm max-w-[170px]">Neue Erlösquelle: Self-Service-Tool zur Prämienberechnung ohne 1:1-Beratung.</p>
                        </div>
                    </motion.div>

                    {/* Linie 1→2 */}
                    <div className="flex items-center justify-center col-span-1 h-36 relative overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            className="w-full h-[2px] bg-gradient-to-r from-emerald-400/50 to-sky-400/50"
                        />
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.0 }}
                            className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-sky-300 shadow-[0_0_10px_#38bdf8] rounded-full"
                        />
                    </div>

                    {/* Node 2: Software Premium */}
                    <motion.div variants={item} className="flex flex-col items-center relative z-10 group col-span-1">
                        <div className="w-28 h-28 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] mt-4">
                            <MonitorSmartphone className="w-9 h-9 text-sky-400" />
                        </div>
                        <div className="mt-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-white mb-1 leading-tight">Software<br />Premium</h3>
                            <p className="text-sky-400 font-mono text-[10px] tracking-wider mb-2">UPGRADE</p>
                            <p className="text-slate-500 text-sm max-w-[160px]">Dashboards, Analysen & API-Schnittstellen für große Kunden.</p>
                        </div>
                    </motion.div>

                    {/* Linie 2→3 */}
                    <div className="flex items-center justify-center col-span-1 h-36 relative overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            className="w-full h-[2px] bg-gradient-to-r from-sky-400/50 to-indigo-400/50"
                        />
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.4 }}
                            className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-indigo-300 shadow-[0_0_10px_#818cf8] rounded-full"
                        />
                    </div>

                    {/* Node 3: Consulting */}
                    <motion.div variants={item} className="flex flex-col items-center relative z-10 group col-span-1">
                        <div className="w-36 h-36 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(129,140,248,0.3)]">
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]" />
                            <Users className="w-11 h-11 text-indigo-400" />
                        </div>
                        <div className="mt-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">Lohnoptimierung<br />Projekte</h3>
                            <p className="text-indigo-400 font-mono text-[10px] tracking-wider mb-2">KERNBERATUNG</p>
                            <p className="text-slate-400 text-sm max-w-[170px]">Unser Kerngeschäft. Software als Einstieg, Beratung als Upsell.</p>
                        </div>
                    </motion.div>

                    {/* Linie 3→4 */}
                    <div className="flex items-center justify-center col-span-1 h-36 relative overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                            className="w-full h-[2px] bg-gradient-to-r from-indigo-400/50 to-purple-400/50"
                        />
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.8 }}
                            className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-purple-300 shadow-[0_0_10px_#a855f7] rounded-full"
                        />
                    </div>

                    {/* Node 4: Digital Academy */}
                    <motion.div variants={item} className="flex flex-col items-center relative z-10 group col-span-1">
                        <div className="w-28 h-28 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] mt-4">
                            <RefreshCw className="w-9 h-9 text-purple-400" />
                        </div>
                        <div className="mt-5 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-white mb-1 leading-tight">Digitale<br />Akademie</h3>
                            <p className="text-purple-400 font-mono text-[10px] tracking-wider mb-2">SKALIERUNG</p>
                            <p className="text-slate-500 text-sm max-w-[160px]">Seminare und Web-Trainings. Bindet Kunden ohne 1:1 Aufwand.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile: Vertikales Layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center gap-4 md:hidden"
                >
                    {/* Node 1: Software Light */}
                    <motion.div variants={item} className="flex flex-col items-center relative group">
                        <div className="w-36 h-36 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                            <Smartphone className="w-11 h-11 text-emerald-400" />
                        </div>
                        <span className="absolute -top-1 right-[10%] bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Neu</span>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-bold text-white mb-1">Software Lightversion</h3>
                            <p className="text-emerald-400 font-mono text-[10px] tracking-wider mb-2">EINSTIEG</p>
                            <p className="text-slate-400 text-sm max-w-[200px]">Neue Erlösquelle: Self-Service-Tool zur Prämienberechnung ohne 1:1-Beratung.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="w-[1px] h-10 bg-gradient-to-b from-emerald-400/50 to-sky-400/50" />

                    {/* Node 2: Software Premium */}
                    <motion.div variants={item} className="flex flex-col items-center group">
                        <div className="w-28 h-28 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center">
                            <MonitorSmartphone className="w-9 h-9 text-sky-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-white mb-1">Software Premium</h3>
                            <p className="text-sky-400 font-mono text-[10px] tracking-wider mb-2">UPGRADE</p>
                            <p className="text-slate-500 text-sm max-w-[180px]">Dashboards, Analysen & API-Schnittstellen für große Kunden.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="w-[1px] h-10 bg-gradient-to-b from-sky-400/50 to-indigo-400/50" />

                    {/* Node 3: Consulting */}
                    <motion.div variants={item} className="flex flex-col items-center group">
                        <div className="w-36 h-36 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]" />
                            <Users className="w-11 h-11 text-indigo-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-bold text-white mb-1">Lohnoptimierung Projekte</h3>
                            <p className="text-indigo-400 font-mono text-[10px] tracking-wider mb-2">KERNBERATUNG</p>
                            <p className="text-slate-400 text-sm max-w-[200px]">Unser Kerngeschäft. Software als Einstieg, Beratung als Upsell.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="w-[1px] h-10 bg-gradient-to-b from-indigo-400/50 to-purple-400/50" />

                    {/* Node 4: Akademie */}
                    <motion.div variants={item} className="flex flex-col items-center group">
                        <div className="w-28 h-28 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center">
                            <RefreshCw className="w-9 h-9 text-purple-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-white mb-1">Digitale Akademie</h3>
                            <p className="text-purple-400 font-mono text-[10px] tracking-wider mb-2">SKALIERUNG</p>
                            <p className="text-slate-500 text-sm max-w-[180px]">Seminare und Web-Trainings. Bindet Kunden ohne 1:1 Aufwand.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </section>
    );
}
