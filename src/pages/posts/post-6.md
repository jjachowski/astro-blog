---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Rss feed function and adding react integration'
pubDate: 2023-07-08
description: 'In this post I describe my experience of adding rss feed functionality to astro application and react integration'
author: 'Jakub Jachowski'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'The full Astro logo.'
tags: ['astro', 'react', 'preact', 'integration', 'rss', 'blogging']
---

## RSS feed

Is there anything better than an RSS feed from your favorite website? Say goodbye to ads, weird designs, bugs, and all the other distractions. Unfortunately, RSS feeds seem to be on the decline these days.

Implementing a pseudo RSS feed was incredibly simple with Astro. It all came down to using `pagesGlobToRssItems` from the `"@astrojs/rss"` package. However, I must admit that the tutorial's explanation of this feature leaves much to be desired. The current feed only displays the post title, description, and some basic information. To provide a complete RSS experience where the actual blog post content is served to the user, a bit more work is required.

Since I doubt anyone is interested in subscribing to my feed at the moment, I'll postpone that task to the near future.

## React integration

When I came across the point in the Astro tutorial that mentioned installing _Preact_, I immediately thought, "Oh no, React is too heavy to maintain that sweet 100/100 Lighthouse score, so they're suggesting Preact."

To be honest, my knowledge about Preact was limited to its existence as a lightweight version of _React_. Out of curiosity, I decided to take a look at the Preact documentation. And then, I saw it — a true monstrosity. The first example featured a class component, with a paragraph mentioning something about `this.props`. I swiftly closed the browser tab to avoid any brain damage.

Anyway, I installed the React integration by using yarn astro add react, added JSX to my `tsconfig.json`, and created a simple component by pasting the Astro example code. After making these changes, I promptly pushed them to Github so that they would be deployed to my website. It was the moment of truth... I checked the developer tools, ran Lighthouse tests, and... yes, you guessed it, still 100/100. Cool, React works just fine.

Thanks for your attention. I still don't understand why Preact exists. Bye.

PS. I hope I didn't offend anyone with my comment about Preact. I want to clarify that my opinion was based solely on my own experience with the Preact documentation, which, to be honest, gave me quite a scare. If you happen to be a fan of Preact or actively working with it, please take the views expressed in this blog post with a pinch of salt. Let's keep an open mind and respect each other's choices.
