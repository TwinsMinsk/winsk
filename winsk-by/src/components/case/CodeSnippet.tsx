interface CodeSnippetProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeSnippet({ code, language = 'bash', filename }: any) {
    const rawCode = typeof code === 'string' ? code : '';
    return (
        <div className="my-8 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[#0d1117] font-mono text-sm shadow-2xl">
            {filename && (
                <div className="px-4 py-2 border-b border-gray-800 flex items-center bg-[#161b22]">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-gray-400 text-xs">{filename}</span>
                    <span className="ml-auto text-gray-500 text-xs">{language}</span>
                </div>
            )}
            <div className="p-4 overflow-x-auto text-gray-300">
                <pre className="!m-0 p-0 bg-transparent">
                    <code className={`language-${language}`}>{code?.trim() || ''}</code>
                </pre>
            </div>
        </div>
    );
}
