"use client";

import { motion } from "framer-motion";
import { Coins, TrendingUp, HandCoins } from "lucide-react";

export function CapitalLogicSection() {
    return (
        <section id="capital" className="relative py-32 px-4 flex flex-col items-center">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 z-0" />

            <div className="max-w-4xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Die Finanzlogik
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Die Reihenfolge ist klar: Zuerst läuft das Anfangsinvestment von 30.000 € vollständig zurück. Dann kommen faire Vergütung und gezielte Reinvestition ins Wachstum.
                    </p>
                </motion.div>

                {/* Flow Diagram — Linien gleiten von oben nach unten ins Bild */}
                <div className="relative flex flex-col items-center">

                    {/* Bruttoumsatz */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center relative shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            <Coins className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-lg text-white font-semibold tracking-wide mt-4">Bruttoumsatz fließt ein</h3>
                    </motion.div>

                    {/* Linie 1: Bruttoumsatz → Phase 1 */}
                    <div className="h-20 w-[2px] my-4 overflow-hidden">
                        <motion.div
                            initial={{ y: "-100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="w-full h-full bg-gradient-to-b from-emerald-500 to-sky-500"
                        />
                    </div>

                    {/* Phase 1: Rückzahlung */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex items-center space-x-6 w-full max-w-md"
                    >
                        <div className="flex-1 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
                        <div className="text-center">
                            <p className="text-sky-400 font-bold text-lg uppercase tracking-widest mb-1">Phase 1</p>
                            <p className="text-slate-300 text-base whitespace-nowrap">Rückzahlung von €30.000 Investorenkapital</p>
                        </div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent" />
                    </motion.div>

                    {/* Linie 2: Phase 1 → Split-Node */}
                    <div className="h-20 w-[2px] my-4 overflow-hidden">
                        <motion.div
                            initial={{ y: "-100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                            className="w-full h-full bg-gradient-to-b from-sky-500 to-indigo-500"
                        />
                    </div>

                    {/* Split-Node */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 2.0, type: "spring" }}
                        className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"
                    />

                    {/* Linie 3: Split-Node → Gabelung */}
                    <div className="h-10 w-[2px] overflow-hidden">
                        <motion.div
                            initial={{ y: "-100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
                            className="w-full h-full bg-indigo-500/60"
                        />
                    </div>

                    {/* Horizontale Gabelung (Desktop) */}
                    <div className="hidden md:block w-1/2 h-[2px] overflow-hidden mb-6">
                        <motion.div
                            initial={{ x: "-50%", scaleX: 0 }}
                            whileInView={{ x: "0%", scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
                            className="w-full h-full bg-gradient-to-r from-indigo-500/60 via-indigo-400/40 to-purple-500/60"
                        />
                    </div>

                    {/* Vertikale Gabelungslinie (Mobile) */}
                    <div className="md:hidden h-6 w-[2px] overflow-hidden mb-4">
                        <motion.div
                            initial={{ y: "-100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 2.5, ease: "easeOut" }}
                            className="w-full h-full bg-indigo-500/60"
                        />
                    </div>

                    {/* Phase 2 + Phase 3 */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full max-w-2xl">
                        {/* Phase 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2.8 }}
                            className="flex flex-col items-center flex-1"
                        >
                            <p className="text-indigo-400 font-bold text-lg uppercase tracking-widest mb-3">Phase 2</p>
                            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 transition-transform hover:scale-110">
                                <TrendingUp className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h4 className="text-base text-white font-semibold mb-2 text-center">Faire Vergütung</h4>
                            <p className="text-slate-500 text-base text-center max-w-[250px]">Mit wachsendem wiederkehrenden Umsatz steigt auch mein zeitliches Engagement — bis zur Vollzeit-Übernahme der operativen Leitung.</p>
                        </motion.div>

                        {/* Mobile: Verbindung Phase 2 → 3 */}
                        <div className="md:hidden h-6 w-[2px] overflow-hidden mx-auto">
                            <motion.div
                                initial={{ y: "-100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 3.0, ease: "easeOut" }}
                                className="w-full h-full bg-gradient-to-b from-indigo-400/50 to-purple-400/50"
                            />
                        </div>

                        {/* Phase 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 3.0 }}
                            className="flex flex-col items-center flex-1"
                        >
                            <p className="text-purple-400 font-bold text-lg uppercase tracking-widest mb-3">Phase 3</p>
                            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 transition-transform hover:scale-110">
                                <HandCoins className="w-8 h-8 text-purple-400" />
                            </div>
                            <h4 className="text-base text-white font-semibold mb-2 text-center">Marketing-Kreislauf</h4>
                            <p className="text-slate-500 text-base text-center max-w-[250px]">Überschüsse gehen direkt wieder ins Ads- & SEO-Budget, um noch schneller zu wachsen.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
