import Image from 'next/image';

interface ScreenshotsProps {
    images: Array<{ src: string; alt: string }>;
}

export function Screenshots(props: any) {
    let images = props.images;
    if (typeof images === 'string') {
        try {
            images = JSON.parse(images);
        } catch (e) {
            console.error('Error parsing screenshots data', e);
        }
    }
    return (
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {images?.map((img: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--color-border)] shadow-xl relative group bg-[var(--color-bg-elevated)]">
                    <div className="aspect-[16/10] relative">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-white text-sm font-mono">{img.alt}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
