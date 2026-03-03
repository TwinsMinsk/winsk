'use client';

import React from "react";
import { motion } from "framer-motion";

export default function EcommerceDemo() {
    return (
        <div className="dark min-h-screen">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{
                __html: `
        .neon-glow-primary { box-shadow: 0 0 15px rgba(37, 71, 244, 0.4); }
        .neon-border-cyan { border: 1px solid rgba(0, 242, 255, 0.3); }
      `}} />
            <div className="relative flex min-h-screen flex-col w-full">
                {/* Global Ambient Glare */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2547f4]/20 via-[#0a0b14]/0 to-transparent pointer-events-none z-0"></div>

                <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0a0b14]/60 backdrop-blur-2xl px-6 py-5 border-b border-white/5 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#2547f4] text-3xl">terminal</span>
                        <h1 className="text-xl font-bold tracking-tighter text-slate-100">NEON-X</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6 mr-4 text-xs font-bold tracking-widest uppercase text-slate-400">
                            <a href="#" className="hover:text-white transition-colors">Home</a>
                            <a href="#" className="text-[#2547f4] transition-colors">Drops</a>
                            <a href="#" className="hover:text-white transition-colors">Saved</a>
                        </nav>
                        <button className="flex items-center justify-center size-10 rounded-full bg-[#161826] border border-[#2547f4]/20 hidden md:flex">
                            <span className="material-symbols-outlined text-slate-100">search</span>
                        </button>
                        <button className="relative flex items-center justify-center size-10 rounded-full bg-[#161826] border border-[#2547f4]/20">
                            <span className="material-symbols-outlined text-slate-100">shopping_bag</span>
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#2547f4] text-[10px] font-bold">3</span>
                        </button>
                    </div>
                </header>
                <main className="flex-1">
                    <section className="@container">
                        <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center border-b border-white/5 md:h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-[#0a0b14]/20 to-transparent z-10 md:hidden"></div>

                            <div className="relative order-2 md:order-1 z-20 flex flex-col justify-end p-6 md:p-12 w-full md:w-1/2 gap-4 h-[50vh] md:h-full md:justify-center">
                                <div className="space-y-1">
                                    <span className="inline-block px-2 py-1 bg-[#2547f4]/20 border border-[#2547f4]/40 rounded text-[10px] font-bold tracking-widest text-[#2547f4] uppercase">Limited Drop</span>
                                    <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter text-white">
                                        CYBER<br />RUNNER <span className="text-[#2547f4]">2077</span>
                                    </h2>
                                    <p className="text-slate-400 text-sm md:text-base max-w-[280px] md:max-w-[400px] leading-relaxed pt-2">
                                        Reactive neural mesh with haptic gravity soles. Built for the high-speed streets of Neo-Tokyo.
                                    </p>
                                </div>
                                <div className="flex gap-3 md:pt-4 w-full md:w-auto">
                                    <button className="flex-1 bg-[#2547f4] hover:bg-[#2547f4]/90 text-white font-bold py-4 rounded-lg neon-glow-primary transition-all flex items-center justify-center gap-2">
                                        <span>SHOP NOW</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="size-14 bg-[#161826] border border-white/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">bookmark</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto order-1 md:order-2 h-[50vh] md:h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b14] via-transparent to-transparent z-10 hidden md:block"></div>
                                <img className="h-full w-full object-cover object-center grayscale-[0.2] brightness-75" alt="Glow-in-the-dark neon green cybernetic sneaker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCmufpIl_f5j8flCzyrlwG76jtQmkgEDwWvVveY7n_nbFjKpvDvMx5IrBFcqbhaqDa6mr_TgH2lFnImisYtvv9woc4QBpoZ5ra4UGnBqf9BYCLCnF4lKYgU0pJ5FBtUu0priH-JZch-CL1NPtepWilxuib4i7eoOACWIcH7BK_zmrAQgZY5mUNAiY28r2oTkKOUDZL2Kj3jLAiebuOwYExL_pi0bBLxIq-LIwag6MC_bNNPnMa6LUAe3fxsgt0hl0KSeQZbb_BrBYx" />
                            </div>
                        </div>
                    </section>
                    <section className="px-4 py-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold tracking-tight border-l-2 border-[#2547f4] pl-3">FEATURED TECH</h3>
                            <a className="text-xs font-bold text-[#2547f4] tracking-widest uppercase" href="#">View All</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[{
                                title: "STREAK V.1", price: "$289.00", badge: "Plasma-Series", color1: "bg-red-500", color2: "bg-slate-700", textAccent: "text-[#00f2ff]", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj_jIlf_gbSHRK3GQORW4edJbz9kOia1dtFAI5YcDfkQ6o4cQ8SAv2vny762HiSbXHiMPHwFAhHE0wX4egsjKujc9tFQhRKbfW6PSa0hIqBTxBx-PKNBYMSBS2Mfg7FbXkD8SBDSKrrul87bC5G4MlmBeExo2Xt2i75bSmQBPQBrcnT3EqG7tmeEhqFhRIUwnNq6ZzXAfug8a_gER1EpbblYupZB4Ew6QCj06oogm_UELOMMOsAnJRfmObokMFSACCi5YNoP_WZa0o"
                            }, {
                                title: "WALKER X", price: "$345.00", badge: "Void-Series", color1: "bg-purple-500", color2: "bg-white", textAccent: "text-[#ff00e5]", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvSAFW-DRgmosK_JyR9JJjEO0USfFqx8TOjbPZraqRpyMgcjJCXiLEFMB36gekJ3pXfjyupWRyyHFIPBoQVUHaPXRzwiaV0MnkF48arXSgQrsLgKpWIoBNtZPPYs8JiSFlGVQiMTPhIi7FIFk0XveWxOxet6_37ZeBwmWHNaFUbOG8Kd2MjkjJK7bHrLAWmgZ-mNPBObByCDMpDV52kcmfIAXslCkDUwwJljBkCT6yoQahjl7PSTENge6m5fXMHVeC-JkHmbz3uBUD"
                            }, {
                                title: "PHANTOM 01", price: "$410.00", badge: "Stealth-Series", color1: "bg-black", color2: "", textAccent: "text-slate-500", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN-PoYH5aTKxU8VRdEptHlUmChkJCLmCaxsHsGUDZhJSFxdMJWAqcaU2prxFcnxOCVqv7zr4tlrfqoMVv8ScVm6TOJ4zH5E_i_jM73spwEQyMGKNsEtWzGopqYfL5lxzEWAlPvZew7zGtFg5S-RRzhiNc0nr5DYVuQe-rjW-s_EYuFOwO_SxH9UymVB5rJYJ98lA9vVau9R8IDfv3o47IGHhmQpTC3UAa3MxFT6qoe25OzI0Jsvp89-He45dQ04Rt7_GlFHXp2mtTO"
                            }].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="group relative bg-[#0a0b14]/40 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="w-full h-48 bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] to-transparent z-10 opacity-50"></div>
                                            <img className="relative z-20 w-[120%] h-auto object-cover group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700 brightness-110 saturate-150 mix-blend-lighten" alt={item.title} src={item.image} />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <p className={`text-xs font-bold font-jb-mono ${item.textAccent} tracking-widest uppercase mb-2`}>[{item.badge}]</p>
                                                <h4 className="text-2xl font-bold text-white uppercase font-jb-mono mb-2">{item.title}</h4>
                                                <p className="text-slate-400 font-jb-mono text-lg">{item.price}</p>
                                            </div>
                                            <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                                                <div className={`size-4 rounded-full ${item.color1} border-2 border-[#0a0b14] ring-1 ring-white/20`}></div>
                                                {item.color2 && <div className={`size-4 rounded-full ${item.color2} border-2 border-[#0a0b14] ring-1 ring-white/20`}></div>}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="absolute bottom-6 right-6 size-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-[#2547f4] group-hover:border-[#2547f4] group-hover:shadow-[0_0_20px_rgba(37,71,244,0.5)] transition-all duration-300">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="px-6 py-24 mb-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-12 text-center flex flex-col items-center gap-6"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2547f4]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none -mt-40 -mr-40"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00f2ff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none -mb-40 -ml-40"></div>

                            <span className="material-symbols-outlined text-4xl text-[#00f2ff]">blur_on</span>
                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase font-jb-mono">JOIN THE NEURAL NETWORK</h3>
                            <p className="text-slate-400 text-lg max-w-xl">Get early access to drops and exclusive digital collectibles.</p>

                            <div className="flex w-full max-w-md gap-2 mt-4 relative z-10">
                                <input className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#2547f4] focus:ring-1 focus:ring-[#2547f4] outline-none font-jb-mono transition-colors" placeholder="user@neo-tokyo.net" type="email" />
                                <button className="bg-[#2547f4] hover:bg-[#2547f4]/80 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-jb-mono transition-colors shadow-[0_0_20px_rgba(37,71,244,0.3)]">Join</button>
                            </div>
                        </motion.div>
                    </section>
                </main>

                <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0b14]/80 backdrop-blur-2xl border-t border-white/10 px-6 pb-8 pt-4 md:hidden pb-safe">
                    <div className="flex items-center justify-between max-w-md mx-auto">
                        <a className="flex flex-col items-center gap-1 text-[#2547f4]" href="#">
                            <span className="material-symbols-outlined fill-[1]">home</span>
                            <span className="text-[10px] font-bold tracking-widest">HOME</span>
                        </a>
                        <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                            <span className="material-symbols-outlined">explore</span>
                            <span className="text-[10px] font-bold tracking-widest">DROPS</span>
                        </a>
                        <div className="relative -mt-12">
                            <button className="size-16 bg-[#2547f4] rounded-full shadow-[0_0_20px_rgba(37,71,244,0.5)] border-4 border-[#0a0b14] flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-3xl">bolt</span>
                            </button>
                        </div>
                        <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                            <span className="material-symbols-outlined">favorite</span>
                            <span className="text-[10px] font-bold tracking-widest">SAVED</span>
                        </a>
                        <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
                            <span className="material-symbols-outlined">person</span>
                            <span className="text-[10px] font-bold tracking-widest">ID</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

