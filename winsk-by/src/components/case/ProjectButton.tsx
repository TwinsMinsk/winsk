import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';

interface ProjectButtonProps {
    href: string;
    label?: string;
    sublabel?: string;
}

export const ProjectButton: React.FC<ProjectButtonProps> = ({ 
    href, 
    label = "Посмотреть в действии",
    sublabel = "Live Application"
}) => {
    return (
        <div className="flex justify-center my-10">
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/60 transition-all duration-500 shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:shadow-[0_0_50px_rgba(124,58,237,0.3)] no-underline overflow-hidden"
            >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                {/* Cyberpunk Glow Lines */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#A78BFA]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#A78BFA]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Zap className="w-6 h-6 fill-current group-hover:animate-pulse" />
                </div>
                
                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A78BFA] opacity-80 group-hover:opacity-100 transition-opacity">
                        {sublabel}
                    </span>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--color-accent-glow)] transition-colors">
                        {label}
                    </span>
                </div>
                
                <div className="ml-4 p-2 rounded-lg bg-white/5 border border-white/10 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ExternalLink size={20} />
                </div>
            </a>
        </div>
    );
};
