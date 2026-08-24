---
type: Component
title: Show more
description: A fade-and-button control that expands clipped content to its full height.
tags: [components, show-more, disclosure, content]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/show-more.example.html
  - /components/show-more.wireframe.html
---

Clips long content to a set height with a gradient fade and a "Show more" button that expands it in
place — for changelogs, logs, and long descriptions. See
[show-more.example.html](/components/show-more.example.html).

# Structure
A clipped block with a fade over its foot, plus a trigger below it. The clip is a fixed height, so
the collapsed state is a known size regardless of content.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.clip` | 1 | full width, `max-height: 72px`, `overflow: hidden` | `{spacing.2}` | unchanged |
| Fade (`::after`) | 1.1 | absolutely pinned to the bottom, `40px` tall | none | unchanged |
| Trigger | 2 | content width | none | unchanged |

The fade is an absolutely positioned pseudo-element, so it overlays the last lines without
occupying space or shifting the trigger. `max-height` rather than `height` means short content is
not padded out to the ceiling. Expanding removes the cap, so the block grows and everything below
it moves down by the difference: this is the one component here whose state change reflows the page.

# Accessibility
The toggle is a real `<button>` with `aria-expanded`; expanding reveals the hidden content to assistive
tech (don't `display:none` it while collapsed if it must be searchable).

# Do & Don't
- **Do** fade the clip edge so it reads as truncated.
- **Don't** clip content users need without a way to expand it.
