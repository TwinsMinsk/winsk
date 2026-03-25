import React from 'react';

interface TelegramLinkProps {
    href: string;
    label?: string;
}

export const TelegramLink: React.FC<TelegramLinkProps> = ({ 
    href, 
    label = "Посмотреть бота в Telegram" 
}) => {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 my-8 rounded-2xl bg-[#24A1DE]/10 border border-[#24A1DE]/30 text-[#24A1DE] hover:bg-[#24A1DE]/20 hover:border-[#24A1DE]/50 transition-all duration-300 group shadow-[0_0_20px_rgba(36,161,222,0.1)] no-underline"
        >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#24A1DE] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 fill-current"
                >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                </svg>
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-wider opacity-70">Live Demo</span>
                <span className="text-lg font-bold tracking-tight">{label}</span>
            </div>
            <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        </a>
    );
};
