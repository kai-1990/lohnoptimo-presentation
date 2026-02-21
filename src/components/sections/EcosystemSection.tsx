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
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-sky-300">
                        Unsere Umsatz-Hebel
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Wir bauen auf dem auf, was heute schon da ist, und fügen neue skalierbare Erlösquellen hinzu. Kein leeres Buzzword-Bingo, sondern konkrete Potenziale.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row items-center justify-between gap-12 relative"
                >
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden md:block absolute top-[64px] left-[5%] right-[5%] h-[1px] -translate-y-1/2 z-0">
                        <motion.div
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
                        />
                        {/* Animated particles on the line */}
                        <motion.div
                            animate={{ x: ["-10%", "110%"] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 w-32 h-[2px] bg-sky-300 shadow-[0_0_15px_#38bdf8] rounded-full"
                        />
                    </div>

                    {/* Node 1: Software Light */}
                    <motion.div variants={item} className="flex flex-col items-center flex-1 relative z-10 group">
                        <div className="w-32 h-32 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                            <Smartphone className="w-10 h-10 text-slate-400" />
                        </div>
                        <div className="mt-6 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-white mb-2 leading-tight min-h-[56px] flex items-center">Software<br />Lightversion</h3>
                            <p className="text-slate-400 font-mono text-xs tracking-wider mb-2">EINSTIEG</p>
                            <p className="text-slate-500 text-sm max-w-[180px]">Reines Self-Service-Tool zur automatisierten Prämienberechnung. Ideal für KMUs ohne Beratungsbedarf.</p>
                        </div>
                    </motion.div>

                    {/* Connection Line (Mobile) */}
                    <motion.div variants={item} className="md:hidden w-[1px] h-12 bg-gradient-to-b from-slate-400/50 to-sky-400/50" />

                    {/* Node 2: Software Premium */}
                    <motion.div variants={item} className="flex flex-col items-center flex-1 relative z-10 group">
                        <div className="w-32 h-32 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                            <MonitorSmartphone className="w-10 h-10 text-sky-400" />
                        </div>
                        <div className="mt-6 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-white mb-2 leading-tight min-h-[56px] flex items-center">Software<br />Premium</h3>
                            <p className="text-sky-400 font-mono text-xs tracking-wider mb-2">UPGRADE</p>
                            <p className="text-slate-500 text-sm max-w-[180px]">Zusätzliche Dashboards, Analysen & API-Schnittstellen für bestehende und große Kunden.</p>
                        </div>
                    </motion.div>

                    {/* Connection Line (Mobile) */}
                    <motion.div variants={item} className="md:hidden w-[1px] h-12 bg-gradient-to-b from-sky-400/50 to-indigo-400/50" />

                    {/* Node 3: Consulting */}
                    <motion.div variants={item} className="flex flex-col items-center flex-1 relative z-10 group mt-8 md:mt-0">
                        <div className="w-40 h-40 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(129,140,248,0.3)]">
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]" />
                            <Users className="w-12 h-12 text-indigo-400" />
                        </div>
                        <div className="mt-6 flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight min-h-[56px] flex items-center">Lohnoptimierung<br />Projekte</h3>
                            <p className="text-indigo-400 font-mono text-xs tracking-wider mb-2">KERNBERATUNG</p>
                            <p className="text-slate-400 text-sm max-w-[200px]">Unser Kerngeschäft. Durch die Software als Einstieg gewinnen wir neue Mandanten deutlich leichter.</p>
                        </div>
                    </motion.div>

                    {/* Connection Line (Mobile) */}
                    <motion.div variants={item} className="md:hidden w-[1px] h-12 bg-gradient-to-b from-indigo-400/50 to-purple-400/50" />

                    {/* Node 4: Digital Academy */}
                    <motion.div variants={item} className="flex flex-col items-center flex-1 relative z-10 group mt-4 md:mt-0">
                        <div className="w-32 h-32 rounded-full glass-panel bg-slate-900/90 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                            <RefreshCw className="w-10 h-10 text-purple-400" />
                        </div>
                        <div className="mt-6 flex flex-col items-center text-center">
                            <h3 className="text-lg font-semibold text-white mb-2 leading-tight min-h-[56px] flex items-center">Digitale<br />Akademie</h3>
                            <p className="text-purple-400 font-mono text-xs tracking-wider mb-2">SKALIERUNG</p>
                            <p className="text-slate-500 text-sm max-w-[180px]">Seminare und Web-Trainings zur Lohnoptimierung. Bindet Kunden ohne 1:1 Zeitaufwand.</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </section>
    );
}
