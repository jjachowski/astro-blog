---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Take on the Astro 'getStaticPaths' API
author: Jakub Jachowski
description: "blog author thoughs about getStaticPaths api of Astro js framework"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word “astro” against an illustration of planets and stars."
pubDate: 2023-07-07
tags: ["astro", "SSG", "my make on"]
---

Alright, let's talk about the `getStaticPaths`` API in Astro. Honestly, it reminds me a lot of how things used to be with SSR in older versions of _next.js_ before they brought in server components. Not gonna lie, I'm not a big fan of this approach. Dealing with object typing can be a pain, and the syntax is a bit complex and hard to remember.

But hey, once you get the hang of it, it actually works pretty smoothly. So I guess there's not much to complain about in the end.

Gotta give props to the Astro docs though, they're always on point. When I first saw all that _copy-paste_ code, I got a bit scared, I won't lie. Ended up coming up with my own solution to gather all the unique tags from those `.md` files for my posts. Fortunately, later on, they showed an example that pretty much achieved the same result. So that was a relief.

To summarize, this is a really important feature, and I wish they would update it to look more like how it's done in Next.js 13.
