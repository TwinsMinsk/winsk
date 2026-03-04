// Time: O(n) for render, Space: O(1)
"use client";

import { motion, Variants, useMotionValue, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Laptop, Server, Database } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1
        }
    },
};

interface SkillCardProps {
    title: string;
    description: string;
    tags: string[];
    className?: string;
    accentColor?: string;
    children?: React.ReactNode;
}

function SkillCard({ title, description, tags, className, accentColor = "var(--color-accent)", children, index = 0 }: SkillCardProps & { index?: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        if (!e.touches[0]) return;
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.touches[0].clientX - left);
        mouseY.set(e.touches[0].clientY - top);
    }

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
            whileHover={{ scale: 1.01, y: -5 }}
            className={`bento-glass-card group relative p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 rounded-xl hover:shadow-2xl ${className}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            ${accentColor}15,
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Border Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            ${accentColor}40,
                            transparent 80%
                        )
                    `,
                    maskImage: "linear-gradient(white, white), linear-gradient(white, white)",
                    WebkitMaskImage: "linear-gradient(white, white), linear-gradient(white, white)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "destination-out",
                    padding: "1px",
                }}
            />

            <div className="relative z-10 mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--color-text-primary)] font-mono group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>
                {children}
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 md:gap-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 md:px-4 md:py-1.5 bg-white/5 text-[var(--color-text-secondary)] border border-white/10 rounded-md text-xs md:text-sm font-mono group-hover:border-white/20 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function ArchitectureVisualizer() {
    return (
        <div className="mt-6 h-28 relative rounded-lg border border-white/5 bg-black/40 overflow-hidden flex items-center justify-between px-2 md:px-8 shadow-inner" aria-hidden="true">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:12px_12px]" />

            {/* Left Node: Client */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:border-purple-500/50 transition-colors duration-300">
                    <Laptop className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-mono tracking-wider">CLIENT</span>
            </div>

            {/* Connecting Line 1 */}
            <div className="relative z-10 flex-1 flex items-center px-4">
                <div className="w-full h-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/40 to-blue-500/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]"
                        animate={{ left: ["-20%", "120%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Middle Node: Server */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-blue-500/50 transition-colors duration-300">
                    <Server className="w-6 h-6 md:w-7 md:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-mono tracking-wider">API_GATEWAY</span>
            </div>

            {/* Connecting Line 2 */}
            <div className="relative z-10 flex-1 flex items-center px-4">
                <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/20 via-emerald-500/40 to-emerald-500/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px]"
                        animate={{ left: ["-20%", "120%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                    />
                </div>
            </div>

            {/* Right Node: DB */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/50 transition-colors duration-300">
                    <Database className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </div>
                <span className="text-[9px] md:text-[10px] text-gray-400 font-mono tracking-wider">DATABASE</span>
            </div>
        </div>
    );
}

function MiniTerminal() {
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const terminalLines = [
        { type: "command", text: "System.update_knowledge(--force)" },
        { type: "success", label: "[OK]", text: "Core_Focus: AI-Agent Orchestration, Multi-Agent Systems." },
        { type: "success", label: "[OK]", text: "Protocols: MCP (Model Context Protocol), Advanced RAG." },
        { type: "status", text: "Integrating neural pathways..." }
    ];

    return (
        <div className="mt-6 p-4 rounded-lg bg-black/60 border border-white/5 font-mono text-xs md:text-sm overflow-hidden shadow-inner ring-1 ring-white/5" aria-hidden="true">
            <div className="flex gap-1.5 mb-3 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
            </div>
            <div className="space-y-1.5 leading-relaxed">
                {terminalLines.map((line, idx) => (
                    <div key={idx} className="flex flex-wrap items-start">
                        {line.type === "command" && (
                            <span className="text-emerald-500 mr-2 shrink-0">{">"}</span>
                        )}
                        {line.type === "success" && (
                            <span className="text-emerald-400/90 font-bold mr-2 shrink-0">{line.label}</span>
                        )}
                        {line.type === "status" && (
                            <span className="text-emerald-500 mr-2 shrink-0">{">"}</span>
                        )}

                        <span className={`${line.type === "success" ? "text-slate-300" : "text-slate-400"}`}>
                            {line.text}
                            {line.type === "status" && (
                                <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} ml-1 text-emerald-500`}>█</span>
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BentoSkills() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic: each card moves slightly differently
    const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const y4 = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
            <div className="flex items-center gap-4 mb-4 w-full overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap">
                    <span className="text-emerald-400 mr-2">{'>'}</span>
                    Профиль_
                </h2>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent flex-1 mt-2"></div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl font-mono leading-relaxed mt-4">
                    «Через 5 лет код будут писать исключительно машины. Я уже сегодня тот, кто ими управляет».
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div style={{ y: y1 }} className="md:col-span-2">
                    <SkillCard
                        title="Hard Skills | Архитектура и Инженерия"
                        description="Я не просто пишу код — я проектирую системы. Мой подход основан на глубоком ресерче: я анализирую задачу и вместе с AI подбираю идеальный стек и архитектуру под бизнес-запрос."
                        tags={["System Architecture", "Python", "API Integrations"]}
                        className="h-full"
                        accentColor="#7C3AED"
                    >
                        <ArchitectureVisualizer />
                    </SkillCard>
                </motion.div>

                <motion.div style={{ y: y2 }} className="md:col-span-1">
                    <SkillCard
                        title="Digital Skills | AI-Дирижер"
                        description="Владею передовым инструментарием AI-разработки. Мой воркфлоу — это кросс-валидация решений через разные LLM."
                        tags={["Cursor", "Antigravity", "Claude Code"]}
                        className="h-full"
                        accentColor="#2563EB"
                    />
                </motion.div>

                <motion.div style={{ y: y3 }} className="md:col-span-1">
                    <SkillCard
                        title="Soft Skills | Product Vision"
                        description="Беру размытые идеи заказчика, декомпозирую их с помощью AI и возвращаюсь с четким планом."
                        tags={["Client Communication", "Problem Solving"]}
                        className="h-full"
                        accentColor="#10B981"
                    />
                </motion.div>

                <motion.div style={{ y: y4 }} className="md:col-span-2">
                    <SkillCard
                        title="Meta Skills | Эволюция"
                        description="Скорость изменений в AI феноменальна, и я живу в этом ритме. Непрерывный тест новых тулзов и обучение."
                        tags={["Continuous Learning", "Adaptability"]}
                        className="h-full"
                        accentColor="#F1F5F9"
                    >
                        <MiniTerminal />
                    </SkillCard>
                </motion.div>
            </motion.div>
        </section>
    );
}
