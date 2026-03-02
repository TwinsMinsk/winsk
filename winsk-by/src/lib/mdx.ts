import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import { mdxComponents } from '@/components/case/mdx-components';

export async function getProjectContent(slug: string) {
    try {
        const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.mdx`);
        const source = await readFile(filePath, 'utf-8');

        const { content } = await compileMDX({
            source,
            components: mdxComponents,
            options: { parseFrontmatter: false }
        });

        return content;
    } catch (error) {
        console.error(`Error reading MDX file for ${slug}:`, error);
        return null;
    }
}
