import type { MarkdownInstance } from "astro";

export function getUniqueTags(
	posts: MarkdownInstance<Record<string, any>>[]
): string[] {
	return Array.from(new Set(posts.flatMap((x) => x.frontmatter.tags)));
}
