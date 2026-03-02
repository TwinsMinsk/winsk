import { Card } from '@/components/ui/Card';

interface ArchDiagramProps {
    src: string;
}

export function ArchDiagram({ src }: ArchDiagramProps) {
    return (
        <Card className="my-10 p-6 flex flex-col items-center justify-center border-[var(--color-accent)]/20 shadow-[0_0_30px_rgba(124,58,237,0.1)] relative">
            <div className="absolute top-4 left-4 text-[var(--color-terminal-green)] font-mono text-xs opacity-70">
                {'>'} loading_architecture_map
            </div>

            {/* TODO: Заменить на реальные SVG/Mermaid */}
            <div className="w-full h-[300px] flex items-center justify-center font-mono text-[var(--color-text-secondary)] border border-dashed border-[var(--color-border)] rounded-lg mt-6">
                [ Architecture Diagram Placeholder: {src} ]
            </div>
        </Card>
    );
}
