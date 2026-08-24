---
type: Component
title: Skeleton
description: Placeholder shapes that mirror content while it loads.
tags: [components, skeleton, loading, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/skeleton.example.html
  - /components/skeleton.wireframe.html
---

Low-contrast `{colors.gray-200}` placeholder shapes — bars and circles — that mirror the layout of
content while it loads, reducing layout shift. A gentle pulse signals loading and is removed under
reduced motion. See [skeleton.example.html](/components/skeleton.example.html).

# Structure
A placeholder that reproduces the box of the content it replaces, so nothing moves when the real
content arrives.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Avatar block | 1 | fixed 36px circle | `{spacing.3}` | unchanged |
| Line stack | 2 | `flex: 1`; lines `{spacing.2}` apart | `{spacing.4}` | unchanged |
| Text line | 2.1..n | fixed `12px` tall, percentage width | `{spacing.2}` | unchanged |
| Block placeholder | 3 | `width: 100%`, fixed height | none | unchanged |

Every dimension here is borrowed from the loaded state rather than chosen, which is the whole
point: the swap must cause no layout shift. `.skeleton` itself sets only a fill, a radius and the
pulse, so each instance is sized inline by the box it stands in for. Line widths are varied
percentages to suggest ragged text. The pulse is opacity only and changes no box.

# Accessibility
Mark the region `aria-busy="true"` while loading; remove the skeletons when content arrives.

# Do & Don't
- **Do** match the skeleton to the real content's shape.
- **Don't** leave skeletons up indefinitely; fall back to a message after a few seconds.
