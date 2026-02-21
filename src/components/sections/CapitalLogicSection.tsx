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
                        Wir arbeiten wirtschaftlich sicher: Erst holen wir das Anfangsinvestment von 30.000 € wieder rein. Danach skalieren wir profitabel und investieren weiter ins Wachstum.
                    </p>
                </motion.div>

                {/* Animated Flow Diagram Without Boxes */}
                <div className="relative flex flex-col items-center">

                    {/* Incoming Revenue */}
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
                        <h3 className="text-white font-semibold tracking-wide mt-4">Bruttoumsatz fließt ein</h3>
                    </motion.div>

                    {/* Flow Line 1 */}
                    <div className="h-20 w-[1px] relative my-4">
                        <motion.div
                            initial={{ scaleY: 0, transformOrigin: "top" }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-sky-500"
                        />
                        {/* Particle */}
                        <motion.div
                            animate={{ y: ["0%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute left-1/2 -translate-x-1/2 w-[3px] h-8 bg-white shadow-[0_0_8px_#fff] rounded-full"
                        />
                    </div>

                    {/* Step 1: Repayment */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex items-center space-x-6 w-full max-w-md"
                    >
                        <div className="flex-1 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
                        <div className="text-center">
                            <p className="text-sky-400 font-bold text-xl uppercase tracking-widest mb-1">Phase 1</p>
                            <p className="text-slate-300 text-sm whitespace-nowrap">Rückzahlung von €30.000 Investorenkapital</p>
                        </div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent" />
                    </motion.div>

                    {/* Flow Line 2 */}
                    <div className="h-24 w-[1px] relative my-4">
                        <motion.div
                            initial={{ scaleY: 0, transformOrigin: "top" }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-b from-sky-500 to-indigo-500"
                        />
                        {/* Particle */}
                        <motion.div
                            animate={{ y: ["0%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 1, ease: "linear" }}
                            className="absolute left-1/2 -translate-x-1/2 w-[3px] h-8 bg-sky-300 shadow-[0_0_10px_#38bdf8] rounded-full"
                        />
                    </div>

                    {/* Split Path Node */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1] mb-8"
                    />

                    {/* Step 2: Post-Payback Logic */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full relative">
                        {/* Connecting horizontal line for desktop */}
                        <motion.div
                            initial={{ scaleX: 0, transformOrigin: "center" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                            className="hidden md:block absolute top-[28px] left-[20%] right-[20%] h-[1px] bg-indigo-500/30 -z-10"
                        />

                        {/* Salary Scales */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                            className="flex flex-col items-center flex-1"
                        >
                            <div className="flex flex-col items-center mb-4">
                                <p className="text-indigo-400 font-bold text-lg uppercase tracking-widest mb-2">Phase 2</p>
                                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center transition-transform hover:scale-110">
                                    <TrendingUp className="w-8 h-8 text-indigo-400" />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2 text-center">Faire Vergütung</h4>
                            <p className="text-slate-500 text-sm text-center">Mit wachsendem wiederkehrenden Umsatz steigt auch mein zeitliches Engagement — bis zur Vollzeit-Übernahme der operativen Leitung.</p>
                        </motion.div>

                        {/* Marketing Reinvestment */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2.4 }}
                            className="flex flex-col items-center flex-1"
                        >
                            <div className="flex flex-col items-center mb-4">
                                <p className="text-purple-400 font-bold text-lg uppercase tracking-widest mb-2">Phase 3</p>
                                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center transition-transform hover:scale-110">
                                    <HandCoins className="w-8 h-8 text-purple-400" />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2 text-center">Marketing-Kreislauf</h4>
                            <p className="text-slate-500 text-sm text-center">Überschüsse gehen direkt wieder ins Ads- & SEO-Budget, um noch schneller zu wachsen.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
