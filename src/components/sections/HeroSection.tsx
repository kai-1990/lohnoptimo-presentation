"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Briefcase, Zap } from "lucide-react";

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto z-10 w-full">
                {/* Sub-label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center space-x-2 mb-6"
                >
                    <div className="w-8 h-[1px] bg-sky-400" />
                    <span className="text-sky-400 text-sm tracking-widest uppercase font-semibold">
                        GEMEINSAMER NEUSTART
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
                >
                    Lohnoptimo <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                        Das nächste Level
                    </span>
                </motion.h1>

                {/* Subpoints */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400 text-base md:text-lg max-w-5xl"
                >
                    <div className="flex flex-col items-start space-y-3">
                        <Zap className="w-6 h-6 text-sky-400 shrink-0" />
                        <p>Wir wachsen gemeinsam. Erste Priorität: das eingesetzte Kapital zurückführen.</p>
                    </div>
                    <div className="flex flex-col items-start space-y-3">
                        <BarChart2 className="w-6 h-6 text-sky-400 shrink-0" />
                        <p>90-Tage-Plan für die operative Weiterführung der Lohnoptimo.</p>
                    </div>
                    <div className="flex flex-col items-start space-y-3">
                        <Briefcase className="w-6 h-6 text-sky-400 shrink-0" />
                        <p>Ziel: Deutlich mehr digitale Sichtbarkeit, moderne Prozesse, schlank und KI-unterstützt.</p>
                    </div>
                </motion.div>

                {/* Subtle scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
                >
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Entdecken</p>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowRight className="w-4 h-4 text-sky-400 rotate-90" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Glow separator at the bottom of hero */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        </section>
    );
}
