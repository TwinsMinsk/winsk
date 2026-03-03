'use client';

import React from "react";
import { motion } from "framer-motion";

export default function SaasDashboardDemo() {
    return (
        <div className="bg-[#0a0b14] min-h-screen text-slate-100 font-['Space_Grotesk'] selection:bg-[#2547f4] selection:text-white">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{
                __html: `
        .neon-glow-green { box-shadow: 0 0 15px rgba(0, 255, 157, 0.2); }
        .neon-glow-blue { box-shadow: 0 0 15px rgba(0, 209, 255, 0.2); }
        .neon-glow-purple { box-shadow: 0 0 15px rgba(189, 0, 255, 0.2); }
      `}} />

            {/* Global Ambient Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2547f4]/10 via-transparent to-transparent pointer-events-none z-0"></div>

            <div className="relative flex min-h-screen md:h-screen w-full flex-col md:flex-row overflow-hidden max-w-[1600px] mx-auto z-10">
                {/* Sidebar (Desktop) */}
                <aside className="hidden md:flex flex-col w-72 flex-shrink-0 bg-[#0a0b14]/40 backdrop-blur-2xl border-r border-white/5 h-full p-8 z-20 overflow-y-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="size-10 rounded-xl bg-gradient-to-br from-[#2547f4] to-[#00f2ff] p-[1px] shadow-[0_0_20px_rgba(37,71,244,0.3)]">
                            <div className="w-full h-full bg-[#0a0b14] rounded-[11px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br from-[#2547f4] to-[#00f2ff] text-xl">rocket_launch</span>
                            </div>
                        </div>
                        <span className="font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase text-sm font-jb-mono">Deep Space</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a className="group flex items-center gap-3 text-white bg-white/5 p-4 rounded-xl transition-all border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" href="#">
                            <span className="material-symbols-outlined fill-[1] text-xl text-[#2547f4] group-hover:scale-110 transition-transform">dashboard</span>
                            <span className="text-sm font-bold tracking-wide">Overview</span>
                        </a>
                        <a className="group flex items-center gap-3 text-slate-400 hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all" href="#">
                            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">analytics</span>
                            <span className="text-sm font-medium tracking-wide">Insights</span>
                        </a>
                        <a className="group flex items-center gap-3 text-slate-400 hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all mt-4" href="#">
                            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">group</span>
                            <span className="text-sm font-medium tracking-wide">Users</span>
                        </a>
                        <a className="group flex items-center gap-3 text-slate-400 hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all" href="#">
                            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">settings</span>
                            <span className="text-sm font-medium tracking-wide">Settings</span>
                        </a>
                    </div>
                    <div className="mt-auto pt-8">
                        <button className="w-full py-4 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-all group">
                            <span className="material-symbols-outlined text-slate-400 text-sm group-hover:text-white transition-colors">description</span>
                            <span className="text-sm text-slate-400 font-bold group-hover:text-white transition-colors">Documentation</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                    {/* Top Header */}
                    <header className="flex items-center justify-between px-8 pt-10 pb-6 bg-[#0a0b14]/60 backdrop-blur-2xl sticky top-0 z-30 border-b border-white/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <div className="size-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-[1px]">
                                <div className="w-full h-full bg-[#0a0b14] rounded-[11px] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#2547f4] text-2xl">analytics</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white font-jb-mono">SYSTEM_OVERVIEW</h1>
                                <p className="text-sm text-slate-400 tracking-wide mt-1">Deep Space Analytics Module</p>
                            </div>
                        </motion.div>
                        <div className="flex items-center gap-6">
                            <button className="relative size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-slate-300">notifications</span>
                                <span className="absolute top-3 right-3 size-2 bg-[#bd00ff] rounded-full shadow-[0_0_10px_#bd00ff]"></span>
                            </button>
                            <div className="size-12 rounded-full p-[2px] bg-gradient-to-br from-[#2547f4] to-[#bd00ff]">
                                <img className="w-full h-full object-cover rounded-full border-2 border-[#0a0b14]" alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB39ZflvlI3mdpQFZ7NPep9UOxbE6Cg3rubENtN8ADqpqWz1qG8jvTnitev9gmBHS7bOujLjU3k0x9mI8Ph-QzHJGckPtIls5TxWk7GHr14tVElakDIzUmapFN11G7fZ5AFkO2htocWrUICSsy3DtLF8FfEL6sGhvRQABxBBLS8PnRjZSHY0iya0E8PAgpCu9Wty6-0HrrdBSy_5iajpWXSfEFFTIuCXpMhIZPkh2nWBzT9D-4ENQ8xl_6rgoeaByQBuFcgJ0g23bxu" />
                            </div>
                        </div>
                    </header>

                    {/* Main Scrollable Content */}
                    <main className="flex-1 overflow-y-auto pb-32">
                        {/* Quick Action Tabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex gap-3 px-8 py-6 overflow-x-auto no-scrollbar"
                        >
                            <button className="px-5 py-2.5 rounded-full bg-[#2547f4] text-white text-sm font-bold whitespace-nowrap shadow-[0_0_20px_rgba(37,71,244,0.3)]">Real-time</button>
                            <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold whitespace-nowrap hover:bg-white/10 transition-colors">Last 7 Days</button>
                            <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold whitespace-nowrap hover:bg-white/10 transition-colors">Current Month</button>
                            <div className="hidden md:block ml-auto">
                                <button className="px-6 py-2.5 rounded-xl bg-white text-[#0a0b14] text-sm font-black tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform hover:scale-105 font-jb-mono">Export Data</button>
                            </div>
                        </motion.div>
                        {/* Metric Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-4">
                            {/* Revenue Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative overflow-hidden flex flex-col gap-4 rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff9d]/5 blur-2xl rounded-full group-hover:bg-[#00ff9d]/10 transition-colors duration-500"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Revenue</p>
                                        <p className="text-4xl md:text-5xl font-black mt-2 text-white font-jb-mono tracking-tighter">$128.5k</p>
                                    </div>
                                    <span className="flex items-center text-[#00ff9d] text-xs font-black bg-[#00ff9d]/10 px-3 py-1.5 rounded-full border border-[#00ff9d]/20">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+12.5%
                                    </span>
                                </div>
                                <div className="h-12 w-full mt-4 relative z-10">
                                    <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <path d="M0 15 Q 10 5, 20 12 T 40 8 T 60 14 T 80 5 T 100 10" fill="transparent" stroke="#00ff9d" strokeWidth="2.5"></path>
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Active Users Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative overflow-hidden flex flex-col gap-4 rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d1ff]/5 blur-2xl rounded-full group-hover:bg-[#00d1ff]/10 transition-colors duration-500"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Active Users</p>
                                        <p className="text-4xl md:text-5xl font-black mt-2 text-white font-jb-mono tracking-tighter">12,402</p>
                                    </div>
                                    <span className="flex items-center text-[#00d1ff] text-xs font-black bg-[#00d1ff]/10 px-3 py-1.5 rounded-full border border-[#00d1ff]/20">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+8.2%
                                    </span>
                                </div>
                                <div className="flex -space-x-3 mt-4 relative z-10">
                                    <img className="size-10 rounded-full border-2 border-[#161929]" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdc_XpibXHWyhPm2qwQx7Zx8TC9oJPNiSS_d1V1GfyL1_lORCaZtbL0xbVQYgPtxYtpWeeCVnmqIxoFhjd7hq3yMLpZdEEo_tN38R6QuZA2F4mGYBcND7eaAmXkCiXY4Q45-l_AlZao8Dt6AhmIVF_YVW6yFshlPw-GKvJK4iwGCrorizx4HPypnWJdKcZm_xdItINv_B--4Dc8Ae0I3Z0hL1DicmKLJe9V6LzXuSMkFac5Vx9OkbsTuQ_Ft8uPTlForPGn6u-AOZ" />
                                    <img className="size-10 rounded-full border-2 border-[#161929]" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDigX5p_T-TU7_PyLUbqo_WOJAzI2KUlyB88SqR2ef0zGDB0JQRNmzZ5IBa4LCnVQQ43KQ19WYEYAuNpaSgKyux5ffoZgVl93RJwFkN01NtuJlo_A3_unmQy692grAbCsHSp1ZYQV4AT0jpBSrUfGJdA-TsK-7pG3MTQyk7tTe5fvFwkIzMf3NYxlG7wuFEa43a7UYps2ssHgtIgXYirFjgxoWfAMqN77g0PVQxIVxL1F9Qftu03yuuQvGzSyLgm25Ot3FIpizYrrml" />
                                    <img className="size-10 rounded-full border-2 border-[#161929]" alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKpil-nVVergS2sLtv5L3ckEN5Jc_Ye9_eQ49PW61YZCoeFttLnihMSV43TF0gnjNhGSeF9MgW9ZBxveAsoczdJ4y_MOr6nboozJVfkldhR_RBYeAMCagOvIRWrx7V5uKbbAOR1HDBLP3tuhC4YE7ET0qVpRUz7j0CH0YJcrJ4IA0XP_zJtztJjrXznD07xLfWVsrn73o8i4o7YZxyLR04UeFaRX78dGnCKWwkCQpqBpwkDgJEdPNq39DbAiOwhb6IkBL5WjWeTdAj" />
                                    <div className="size-10 rounded-full border-2 border-[#161929] bg-[#0a0b14] flex items-center justify-center text-xs font-bold text-white shadow-inner">+8k</div>
                                </div>
                            </motion.div>

                            {/* Conversion Rate Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative overflow-hidden flex flex-col gap-4 rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#bd00ff]/5 blur-2xl rounded-full group-hover:bg-[#bd00ff]/10 transition-colors duration-500"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Conversion</p>
                                        <p className="text-4xl md:text-5xl font-black mt-2 text-white font-jb-mono tracking-tighter">3.2%</p>
                                    </div>
                                    <span className="flex items-center text-rose-500 text-xs font-black bg-rose-500/10 px-3 py-1.5 rounded-full border border-rose-500/20">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_down</span>-1.1%
                                    </span>
                                </div>
                                <div className="flex gap-2 mt-4 relative z-10 items-center">
                                    <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full bg-[#bd00ff] w-2/3 shadow-[0_0_15px_#bd00ff]"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Revenue Growth Chart */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="px-8 mt-12 mb-12"
                        >
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2547f4]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Revenue Growth</p>
                                        <div className="flex items-baseline gap-4">
                                            <h3 className="text-5xl font-black tracking-tighter text-white font-jb-mono">$842,000</h3>
                                            <span className="text-[#00ff9d] text-base font-black px-3 py-1 bg-[#00ff9d]/10 border border-[#00ff9d]/20 rounded-full">+24.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm transition-colors text-white font-bold">1M</button>
                                        <button className="px-4 py-2 bg-[#2547f4] rounded-lg text-sm text-white font-bold shadow-[0_0_15px_rgba(37,71,244,0.3)]">6M</button>
                                        <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm transition-colors text-white font-bold">1Y</button>
                                    </div>
                                </div>
                                <div className="relative h-[280px] w-full">
                                    <svg className="w-full h-full drop-shadow-[0_10px_10px_rgba(37,71,244,0.3)]" preserveAspectRatio="none" viewBox="0 0 400 150">
                                        <defs>
                                            <linearGradient id="neonGradientLine" x1="0" x2="1" y1="0" y2="0">
                                                <stop offset="0%" stopColor="#2547f4"></stop>
                                                <stop offset="100%" stopColor="#00f2ff"></stop>
                                            </linearGradient>
                                            <linearGradient id="neonGradientFill" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#2547f4" stopOpacity="0.4"></stop>
                                                <stop offset="100%" stopColor="#2547f4" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 120 C 50 110, 80 40, 120 50 S 180 130, 240 80 S 320 20, 400 40 V 150 H 0 Z" fill="url(#neonGradientFill)"></path>
                                        <path className="animate-[dash_3s_linear_infinite]" d="M0 120 C 50 110, 80 40, 120 50 S 180 130, 240 80 S 320 20, 400 40" fill="none" stroke="url(#neonGradientLine)" strokeWidth="4" strokeLinecap="round"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex items-end justify-between px-2 pt-2 text-xs text-slate-500 font-bold uppercase tracking-widest font-jb-mono">
                                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Recent Activity Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="px-8 mb-12"
                        >
                            <h2 className="text-xl font-bold mb-6 font-jb-mono tracking-wide text-white">Recent Customers_</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-xl bg-[#00d1ff]/10 flex items-center justify-center border border-[#00d1ff]/20 group-hover:bg-[#00d1ff]/20 transition-colors">
                                            <span className="material-symbols-outlined text-[#00d1ff]">rocket_launch</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-base text-white">Stellar SaaS</p>
                                            <p className="text-sm text-slate-400 font-jb-mono">Enterprise Plan</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-lg text-white font-jb-mono">+$2,400</p>
                                        <p className="text-xs text-slate-500 font-jb-mono">2 mins ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-xl bg-[#bd00ff]/10 flex items-center justify-center border border-[#bd00ff]/20 group-hover:bg-[#bd00ff]/20 transition-colors">
                                            <span className="material-symbols-outlined text-[#bd00ff]">diamond</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-base text-white">Nebula Co.</p>
                                            <p className="text-sm text-slate-400 font-jb-mono">Pro Plus Plan</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-lg text-white font-jb-mono">+$1,200</p>
                                        <p className="text-xs text-slate-500 font-jb-mono">1 hour ago</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </main>

                    {/* Bottom NavBar */}
                    <nav className="fixed bottom-0 w-full bg-[#0a0b14]/80 backdrop-blur-2xl border-t border-white/5 px-6 pb-8 pt-4 md:hidden z-50 pb-safe">
                        <div className="flex items-center justify-between">
                            <a className="flex flex-col items-center gap-1 text-[#2547f4]" href="#">
                                <span className="material-symbols-outlined fill-[1]">dashboard</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase">Home</span>
                            </a>
                            <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                                <span className="material-symbols-outlined">analytics</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase">Insights</span>
                            </a>
                            <div className="relative -mt-10">
                                <button className="size-14 rounded-full bg-[#2547f4] flex items-center justify-center shadow-[0_0_20px_rgba(37,71,244,0.5)] border-4 border-[#0a0b14] hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-3xl">add</span>
                                </button>
                            </div>
                            <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                                <span className="material-symbols-outlined">group</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase">Users</span>
                            </a>
                            <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                                <span className="material-symbols-outlined">settings</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase">Settings</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

