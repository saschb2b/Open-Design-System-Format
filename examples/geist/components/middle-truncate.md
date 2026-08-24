---
type: Component
title: Middle truncate
description: Truncates a string in the middle, keeping both ends visible.
tags: [components, truncate, text, utility]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/middle-truncate.example.html
  - /components/middle-truncate.wireframe.html
---

Clips a long string in the **middle** with an ellipsis, keeping the start and the end visible — ideal
for hashes, file paths, and URLs where both ends carry meaning (`design-…-7a1b9c3.vercel.app`). The
full value stays available via `title` and copy. See
[middle-truncate.example.html](/components/middle-truncate.example.html).

# Structure
A two-part flex row with a hard width ceiling, where only the first part is allowed to shrink.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.start` | 1 | shrinks; single line, ellipsis on overflow | none | unchanged |
| `.end` | 2 | fixed; `white-space: nowrap`, never shrinks | none | unchanged |

This is the whole mechanism: split the string yourself, let the head clip and pin the tail. A
single element with `text-overflow: ellipsis` can only clip the end, which is exactly the part that
identifies a hostname or a file extension. Because the tail never shrinks, the head absorbs all the
loss, so the ceiling must leave room for the longest expected tail. The complete value has to stay
in a `title` attribute, since the visible text is genuinely incomplete.

# Accessibility
Keep the full text in a `title` and reachable to assistive tech; the visible clip is presentational.

# Do & Don't
- **Do** middle-truncate identifiers where the end matters.
- **Don't** end-truncate a hash or URL — the meaningful suffix is lost.
