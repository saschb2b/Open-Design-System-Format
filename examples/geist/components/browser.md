---
type: Component
title: Browser
description: A browser-window frame for previewing web content in mockups.
tags: [components, browser, frame, mockup, media]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/browser.example.html
---

A minimal browser chrome — traffic-light dots and a URL pill over a content area — for framing a
preview deployment or a web screenshot in marketing and dashboards. Part of Geist's device/frame set
with [phone](/components/phone.md) and [video](/components/video.md). See
[browser.example.html](/components/browser.example.html).

# Accessibility
Decorative chrome is `aria-hidden`; the URL is plain text; real embedded content keeps its own
semantics (use a labelled `<iframe>` when live).

# Do & Don't
- **Do** use the browser frame to give a screenshot context.
- **Don't** fake interactive chrome that doesn't work.
