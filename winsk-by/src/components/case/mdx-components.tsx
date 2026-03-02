import { ReactNode } from 'react';
import { SolutionsTable } from './SolutionsTable';
import { ArchDiagram } from './ArchDiagram';
import { Screenshots } from './Screenshots';
import { CodeSnippet } from './CodeSnippet';
import { CaseCTA } from './CaseCTA';

// Custom components mapped to HTML tags or directly imported in MDX
export const mdxComponents = {
    h2: ({ children }: { children?: ReactNode }) => (
        <h2 className="text-2xl font-bold mt-12 mb-6 text-[var(--color-text-primary)] relative items-center flex group">
            <span className="text-[var(--color-terminal-green)] font-mono text-xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-6">{'>'}</span>
            {children}
        </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
        <h3 className="text-xl font-semibold mt-8 mb-4 text-[var(--color-text-primary)]">
            {children}
        </h3>
    ),
    p: ({ children }: { children?: ReactNode }) => (
        <p className="text-[var(--color-text-secondary)] mb-6 text-lg leading-relaxed">
            {children}
        </p>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
        <ul className="list-none space-y-2 mb-6 text-[var(--color-text-secondary)]">
            {children}
        </ul>
    ),
    li: ({ children }: { children?: ReactNode }) => (
        <li className="flex items-start">
            <span className="text-[var(--color-accent-glow)] mr-2 mt-1">-</span>
            <span>{children}</span>
        </li>
    ),
    strong: ({ children }: { children?: ReactNode }) => (
        <strong className="font-semibold text-[var(--color-text-primary)]">{children}</strong>
    ),
    // Custom Components
    SolutionsTable,
    ArchDiagram,
    Screenshots,
    CodeSnippet,
    CaseCTA
};
