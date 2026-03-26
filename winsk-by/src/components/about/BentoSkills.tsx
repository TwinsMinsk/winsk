// Time: O(n) for render, Space: O(1)
"use client";

import { motion, Variants, useMotionValue, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { FileCode, Sparkles, Rocket } from "lucide-react";

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

function AIPipelineVisualizer() {
    return (
        <div className="mt-6 py-6 sm:py-0 sm:h-32 relative rounded-xl border border-white/5 bg-black/40 overflow-hidden flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 md:px-10 shadow-inner gap-2 sm:gap-0" aria-hidden="true">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />

            {/* Node 1: Context / Specs */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg group-hover:border-white/20 transition-all duration-300">
                    <FileCode className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-mono text-slate-300 uppercase tracking-tighter whitespace-nowrap">Context / Specs</span>
                </div>
            </div>

            {/* Connection 1 (Mobile) */}
            <div className="relative z-10 flex sm:hidden h-6 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>

            {/* Connection 1 (Desktop) */}
            <div className="relative z-10 flex-1 items-center mx-2 px-2 overflow-hidden h-full min-w-[30px] hidden sm:flex">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent relative">
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 blur-[2px] shadow-[0_0_8px_#10b981]"
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Node 2: AI Orchestrator (Pulsing) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            "0 0 0px rgba(16,185,129,0)",
                            "0 0 20px rgba(16,185,129,0.3)",
                            "0 0 0px rgba(16,185,129,0)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-xl px-4 py-3 flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/50 transition-all duration-300"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400 fill-emerald-400/20 shrink-0" />
                    <span className="text-[10px] font-mono text-slate-300 uppercase tracking-tighter whitespace-nowrap">AI Orchestrator</span>
                </motion.div>
            </div>

            {/* Connection 2 (Mobile) */}
            <div className="relative z-10 flex sm:hidden h-6 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>

            {/* Connection 2 (Desktop) */}
            <div className="relative z-10 flex-1 items-center mx-2 px-2 overflow-hidden h-full min-w-[30px] hidden sm:flex">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent relative">
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 blur-[2px] shadow-[0_0_8px_#10b981]"
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </div>
            </div>

            {/* Node 3: Production */}
            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg group-hover:border-white/20 transition-all duration-300">
                    <Rocket className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-mono text-slate-300 uppercase tracking-tighter whitespace-nowrap">Production</span>
                </div>
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
        { type: "command", text: "Engineer.learn(task, --on-demand)" },
        { type: "success", label: "[OK]", text: "Obstacle detected → research → solution found." },
        { type: "success", label: "[OK]", text: "New stack? Time-to-productive: ~hours, not weeks." },
        { type: "status", text: "Iterating..." }
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
        <section id="profile" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
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
                    «Через пару лет код будут писать исключительно машины. Я уже сегодня тот, кто ими управляет».
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
                        title="Hard Skills | Технический стек"
                        description="Python, Node.js, TypeScript, Next.js — не список для резюме, а инструменты из живых проектов. Подключаю модели к данным через API и RAG, выстраиваю AI-агентные цепочки, разворачиваю фронтенд и backend под задачу."
                        tags={["Python", "Node.js", "TypeScript", "Next.js", "API Integrations", "RAG", "MCP", "Git"]}
                        className="h-full"
                        accentColor="#10B981"
                    >
                        <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mt-4 mb-2">
                            Умею строить рабочие решения из доступных инструментов: от простых скриптов до многокомпонентных архитектур. Подход прост: сначала понять задачу, потом найти правильный технологический путь — и дойти до результата.
                        </p>
                        <AIPipelineVisualizer />
                    </SkillCard>
                </motion.div>

                <motion.div style={{ y: y2 }} className="md:col-span-1">
                    <SkillCard
                        title="Digital Skills | AI-Дирижер"
                        description="Использую AI как основной рабочий инструмент: пишу код с помощью AI-агентов, проверяю результат через несколько моделей и прототипирую интерфейсы через генеративный UI. Меняются тулы — подход остаётся."
                        tags={["Cursor", "Antigravity", "Claude Code", "Codex", "Agent Skills", "Prompt Engineering"]}
                        className="h-full"
                        accentColor="#2563EB"
                    />
                </motion.div>

                <motion.div style={{ y: y3 }} className="md:col-span-1">
                    <SkillCard
                        title="Soft Skills | Product Vision"
                        description="Помогаю клиентам понять, где AI принесёт реальную пользу. Разбираю задачу на части, предлагаю план внедрения и веду проект от первого прототипа до готового решения."
                        tags={["Client Communication", "Problem Solving", "AI Consulting", "Product Strategy"]}
                        className="h-full"
                        accentColor="#10B981"
                    />
                </motion.div>

                <motion.div style={{ y: y4 }} className="md:col-span-2">
                    <SkillCard
                        title="Meta Skills | Учусь в процессе"
                        description="Сильна не база, а скорость разбора новых вводных: не знаю всё — знаю, как найти и применить. Встретил незнакомое — исследовал, интегрировал, пошёл дальше. Это мой основной рычаг: время от «не слышал о таком» до «развернул решение» составляет часы, а не недели."
                        tags={["Fast Learning", "Problem Decomposition", "Adaptability", "Agentic Workflows"]}
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
