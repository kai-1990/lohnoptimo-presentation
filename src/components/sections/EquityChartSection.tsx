"use client";

import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot,
    ReferenceLine
} from "recharts";

const equityData = [
    { revenue: 0, equity: 0 },
    { revenue: 10, equity: 2 },
    { revenue: 20, equity: 4 },
    { revenue: 30, equity: 6 },
    { revenue: 40, equity: 8 },
    { revenue: 50, equity: 10, label: "Meilenstein 1" },
    { revenue: 75, equity: 13.75 },
    { revenue: 100, equity: 17.5 },
    { revenue: 125, equity: 21.25 },
    { revenue: 150, equity: 25, label: "Meilenstein 2" },
    { revenue: 180, equity: 28 },
    { revenue: 210, equity: 32 },
    { revenue: 240, equity: 37 },
    { revenue: 270, equity: 42 },
    { revenue: 300, equity: 49, label: "Maximales Ziel" },
    { revenue: 350, equity: 49 },
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: {
            revenue: number;
            equity: number;
            label?: string;
        };
    }>;
    label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-panel p-4 rounded-xl border border-slate-800 shadow-2xl">
                <p className="text-sky-400 font-bold mb-1">
                    Umsatz: {payload[0].payload.revenue}k € / Jahr
                </p>
                <div className="w-full h-[1px] bg-slate-700 my-2" />
                <p className="text-emerald-400 text-lg font-bold">
                    Anteile: {payload[0].value}%
                </p>
                {payload[0].payload.label && (
                    <p className="text-purple-400 text-xs mt-2 uppercase tracking-wider font-semibold">
                        {payload[0].payload.label}
                    </p>
                )}
            </div>
        );
    }
    return null;
};

export function EquityChartSection() {
    return (
        <section id="equity" className="relative py-32 px-4 flex flex-col items-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 translate-x-1/4 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center space-x-2 justify-center mb-4">
                        <span className="text-emerald-400 text-sm tracking-widest uppercase font-semibold">
                            Die Perspektive
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Skin in the Game
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Wir bauen Lohnoptimo gemeinsam auf. Ich übernehme das Risiko und den Aufbau – als Gegenleistung steigen meine Firmenanteile fair und transparent gebunden an die realen Jahresumsätze.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-[500px] relative glass-panel rounded-3xl p-4 md:p-8"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={equityData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis
                                dataKey="revenue"
                                stroke="#64748b"
                                tickFormatter={(val) => `${val}k €`}
                                tick={{ fill: "#94a3b8" }}
                                dy={10}
                            />
                            <YAxis
                                stroke="#64748b"
                                tickFormatter={(val) => `${val}%`}
                                tick={{ fill: "#94a3b8" }}
                                dx={-10}
                                domain={[0, 60]}
                            />
                            <Tooltip content={<CustomTooltip />} />

                            {/* Max Cap Line */}
                            <ReferenceLine y={49} stroke="#a855f7" strokeDasharray="3 3" />

                            <Line
                                type="monotone"
                                dataKey="equity"
                                stroke="#38bdf8"
                                strokeWidth={4}
                                dot={false}
                                activeDot={{ r: 8, fill: "#0ea5e9", stroke: "#0f172a", strokeWidth: 3 }}
                            />

                            {/* Milestones Dots */}
                            <ReferenceDot x={50} y={10} r={6} fill="#10b981" stroke="none" />
                            <ReferenceDot x={150} y={25} r={6} fill="#10b981" stroke="none" />
                            <ReferenceDot x={300} y={49} r={8} fill="#a855f7" stroke="#fff" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>

                    {/* Floating Milestone Labels for larger screens */}
                    <div className="absolute top-[75%] left-[22%] hidden md:flex flex-col items-center">
                        <span className="text-emerald-400 font-bold text-sm">10%</span>
                        <span className="text-slate-500 text-xs mt-1">50.000 € Umsatz</span>
                    </div>
                    <div className="absolute top-[52%] left-[45%] hidden md:flex flex-col items-center">
                        <span className="text-emerald-400 font-bold text-sm">25%</span>
                        <span className="text-slate-500 text-xs mt-1">150.000 € Umsatz</span>
                    </div>
                    <div className="absolute top-[16%] left-[82%] hidden md:flex flex-col items-center">
                        <span className="text-purple-400 font-bold text-lg drop-shadow-lg">49%</span>
                        <span className="text-slate-400 text-xs mt-1 font-semibold">300.000 € Umsatz</span>
                        <span className="text-slate-500 text-[10px]">Partnerschaft auf Augenhöhe</span>
                    </div>

                </motion.div>

                {/* Mobile Milestone Labels */}
                <div className="flex md:hidden justify-between mt-6 px-2">
                    <div className="text-center">
                        <span className="text-emerald-400 font-bold text-sm">10%</span>
                        <span className="text-slate-500 text-xs block mt-1">50k € Umsatz</span>
                    </div>
                    <div className="text-center">
                        <span className="text-emerald-400 font-bold text-sm">25%</span>
                        <span className="text-slate-500 text-xs block mt-1">150k € Umsatz</span>
                    </div>
                    <div className="text-center">
                        <span className="text-purple-400 font-bold text-sm">49%</span>
                        <span className="text-slate-500 text-xs block mt-1">300k € Umsatz</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent opacity-40" />
        </section>
    );
}
