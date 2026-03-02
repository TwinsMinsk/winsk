interface ScreenshotsProps {
    images: Array<{ src: string; alt: string }>;
}

export function Screenshots(props: any) {
    let images = props.images;
    if (typeof images === 'string') {
        try { images = JSON.parse(images); } catch (e) { console.error('Error parsing screenshots data', e); }
    }
    return (
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {images?.map((img: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--color-border)] shadow-xl relative group">
                    <div className="aspect-[4/3] bg-[var(--color-bg-elevated)] flex items-center justify-center relative">
                        {/* Картинка мокап */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-elevated)]" />
                        <span className="font-mono text-[var(--color-text-muted)] z-10">{img.alt}</span>
                    </div>
                    <div className="absolute inset-0 bg-[var(--color-accent-glow)]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
            ))}
        </div>
    );
}
