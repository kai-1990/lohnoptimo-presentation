"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
    { id: "hero", label: "Start" },
    { id: "ecosystem", label: "Umsatz-Hebel" },
    { id: "roadmap", label: "Fahrplan" },
    { id: "strategy", label: "Strategie" },
    { id: "growth", label: "Wachstum" },
    { id: "capital", label: "Finanzen" },
    { id: "equity", label: "Anteile" },
    { id: "closing", label: "Abschluss" },
];

export function ScrollProgress() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTIONS.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-4">
            {SECTIONS.map((section, idx) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="group flex items-center gap-3"
                    aria-label={`Zu ${section.label} scrollen`}
                >
                    <span
                        className={`text-xs tracking-wide transition-all duration-300 ${
                            idx === activeIndex
                                ? "opacity-100 text-sky-400 translate-x-0"
                                : "opacity-0 text-slate-500 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                    >
                        {section.label}
                    </span>
                    <motion.div
                        className={`rounded-full transition-all duration-300 ${
                            idx === activeIndex
                                ? "w-3 h-3 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                : "w-2 h-2 bg-slate-600 group-hover:bg-slate-400"
                        }`}
                    />
                </button>
            ))}
        </nav>
    );
}
