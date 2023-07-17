import type { MarkdownInstance } from "astro";

export function getUniqueTags(posts: MarkdownInstance<Record<string, any>>[]) {
  const tagsFlatMap = posts.flatMap((x) => x.frontmatter.tags);

  return Array.from(new Set(posts.flatMap((x) => x.frontmatter.tags))).map(
    (x) => ({
      text: x as string,
      count: tagsFlatMap.filter((y) => y === x).length,
    })
  );
}
