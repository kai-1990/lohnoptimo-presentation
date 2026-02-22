"use client";

import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const data = [
    { month: "M1", revenue: 2000, saas: 500, consulting: 1500 },
    { month: "M2", revenue: 5000, saas: 1000, consulting: 4000 },
    { month: "M3", revenue: 10000, saas: 2000, consulting: 8000 },
    { month: "M4", revenue: 18000, saas: 3500, consulting: 14500 },
    { month: "M5", revenue: 25000, saas: 5000, consulting: 20000 },
    { month: "M6", revenue: 35000, saas: 7000, consulting: 28000 }, // Crosses 30k
    { month: "M7", revenue: 42000, saas: 9500, consulting: 32500 },
    { month: "M8", revenue: 50000, saas: 12000, consulting: 38000 },
    { month: "M9", revenue: 62000, saas: 15000, consulting: 47000 },
    { month: "M10", revenue: 75000, saas: 18500, consulting: 56500 },
    { month: "M11", revenue: 85000, saas: 22000, consulting: 63000 },
    { month: "M12", revenue: 100000, saas: 26000, consulting: 74000 },
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: {
            month: string;
            revenue: number;
            saas: number;
            consulting: number;
        };
    }>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-panel p-4 rounded-xl border border-slate-800 shadow-2xl">
                <p className="text-slate-300 font-semibold mb-2">{label}</p>
                <p className="text-sky-400 text-sm">
                    SaaS MRR: €{payload[0].payload.saas.toLocaleString()}
                </p>
                <p className="text-indigo-400 text-sm mb-2">
                    Consulting: €{payload[0].payload.consulting.toLocaleString()}
                </p>
                <div className="w-full h-[1px] bg-slate-700 my-2" />
                <p className="text-white font-bold">
                    Kumuliert: €{payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

export function GrowthChartSection() {
    return (
        <section id="growth" className="relative py-32 px-4 flex flex-col items-center">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Umsatzentwicklung über 12 Monate
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Kombinierter Umsatz aus SaaS und Beratung — konservative Projektion.
                    </p>
                </motion.div>

                {/* Phase Indicators */}
                <div className="flex justify-between items-end mb-8 px-4 md:px-12 text-sm uppercase tracking-wider font-semibold">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-500"
                    >
                        Investoren-Rückzahlungsphase
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sky-400 flex items-center"
                    >
                        Wachstumsphase
                    </motion.div>
                </div>

                {/* Chart Container - Frameless */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-[500px] relative"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#64748b", fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#64748b", fontSize: 12 }}
                                tickFormatter={(value) => `€${value / 1000}k`}
                                dx={-10}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(56,189,248,0.2)', strokeWidth: 2 }} />

                            {/* The €30k Payback Line */}
                            <ReferenceLine
                                y={30000}
                                stroke="#818cf8"
                                strokeDasharray="4 4"
                                label={{ position: 'insideTopLeft', value: '€30.000 Break-Even / Payback', fill: '#818cf8', fontSize: 12, className: 'tracking-wider drop-shadow-lg font-mono' }}
                            />

                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#38bdf8"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                                activeDot={{ r: 8, fill: "#0ea5e9", stroke: "#020617", strokeWidth: 3 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] glow-separator opacity-40" />
        </section>
    );
}
