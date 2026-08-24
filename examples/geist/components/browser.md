---
type: Component
title: Browser
description: A browser-window frame for previewing web content in mockups.
tags: [components, browser, frame, mockup, media]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/browser.example.html
  - /components/browser.wireframe.html
---

A minimal browser chrome — traffic-light dots and a URL pill over a content area — for framing a
preview deployment or a web screenshot in marketing and dashboards. Part of Geist's device/frame set
with [phone](/components/phone.md) and [video](/components/video.md). See
[browser.example.html](/components/browser.example.html).

# Structure
A clipped frame of two stacked regions: a chrome bar and a content area.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.browser-bar` | 1 | full width; dots fixed, URL `flex: 1` | none | unchanged |
| `.browser-dots i` | 1.1 | three fixed 11px circles, `6px` apart | `8px` | unchanged |
| `.browser-url` | 1.2 | `flex: 1`, fixed 26px tall | none | unchanged |
| `.browser-body` | 2 | full width, `min-height: 120px`, `{spacing.6}` padding | none | unchanged |

`overflow: hidden` on the frame is what clips the bar and body to the outer radius, so neither
needs its own corner rules. The `flex: 1` URL field absorbs all the width the dots do not use, so
the frame is fluid and takes the width its container gives it. The body has a minimum height so an
empty mockup still reads as a window.

# Accessibility
Decorative chrome is `aria-hidden`; the URL is plain text; real embedded content keeps its own
semantics (use a labelled `<iframe>` when live).

# Do & Don't
- **Do** use the browser frame to give a screenshot context.
- **Don't** fake interactive chrome that doesn't work.
