import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
	return rss({
		title: "Jakub Jachowski | Blog | Learning",
		description: "My journey learning Astro and other stuff",
		site: "https://jachowski.dev",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,
	});
}
