import { Card } from '@/components/ui/Card';

interface TaskSolution {
    task: string;
    solution: string;
    complexity: string;
}

interface SolutionsTableProps {
    data: TaskSolution[];
}

export function SolutionsTable(props: any) {
    let data = props.data;
    if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (e) { }
    }
    return (
        <div className="overflow-x-auto my-8">
            <Card className="min-w-[800px] w-full text-left border-collapse overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] font-mono border-b border-[var(--color-border)]">
                        <tr>
                            <th className="p-4 font-semibold w-[25%]">Задача</th>
                            <th className="p-4 font-semibold w-[45%]">Решение</th>
                            <th className="p-4 font-semibold w-[30%]">Сложность</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--color-border)] text-[var(--color-text-secondary)]">
                        {data?.map((row: any, index: number) => (
                            <tr key={index} className="hover:bg-[var(--color-bg-primary)]/50 transition-colors">
                                <td className="p-4 align-top">
                                    <span className="font-semibold text-[var(--color-text-primary)]">{row.task}</span>
                                </td>
                                <td className="p-4 align-top leading-relaxed" dangerouslySetInnerHTML={{ __html: parseMarkdownLinks(row.solution) }} />
                                <td className="p-4 align-top font-mono text-xs opacity-80">{row.complexity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

// Упрощенный парсер для **жирного** текста в строках таблицы (переданных из MDX props)
function parseMarkdownLinks(str: string) {
    return str.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--color-text-primary)] font-semibold">$1</strong>');
}
