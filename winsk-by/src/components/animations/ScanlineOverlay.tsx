'use client';

export function ScanlineOverlay() {
    return (
        <div
            className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <div
                className="w-full h-[2px] bg-[var(--color-accent)] opacity-20 relative"
                style={{
                    animation: 'scanline 4s linear infinite',
                    boxShadow: '0 0 10px 2px var(--color-accent-glow)'
                }}
            />
        </div>
    );
}
