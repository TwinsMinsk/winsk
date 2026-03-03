export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] mt-auto">
            <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-[var(--color-text-secondary)]">
                <p>
                    <span className="font-mono">{'> '}</span>
                    &copy; {year} Winsk.by. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono">
                    <a href="https://t.me/oleg_smirniy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-glow)] transition-colors">
                        Telegram
                    </a>
                    <span>//</span>
                    <a href="https://wa.me/375333231447" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-glow)] transition-colors">
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}
