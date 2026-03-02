import { TerminalDecode } from '@/components/animations/TerminalDecode';
import { GooeyGradientBackground } from '@/components/ui/GooeyGradientBackground';

export function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
            <GooeyGradientBackground>
                <div className="h-full flex flex-col items-center justify-center px-6 pointer-events-none">
                    <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10">
                        <div className="h-[80px] md:h-[100px] flex items-center justify-center w-full">
                            <TerminalDecode />
                        </div>

                        <h2 className="mt-8 text-xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight">
                            Independent Tech Expert
                            <span className="text-[var(--color-text-muted)] mx-3 font-light hidden md:inline-block">|</span>
                            <br className="md:hidden" />
                            <span className="text-[var(--color-text-secondary)] mt-2 md:mt-0 inline-block font-normal">Full-Stack &amp; AI Engineer</span>
                        </h2>
                    </div>
                </div>
            </GooeyGradientBackground>
        </section>
    );
}
