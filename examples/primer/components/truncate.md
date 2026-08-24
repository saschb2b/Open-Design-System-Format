---
type: Component
title: Truncate
description: Shortens overflowing text to one line with a trailing ellipsis.
tags: [components, truncate, text, utility]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/truncate.example.html
  - /components/truncate.wireframe.html
---

A utility that clips a long single line of text with an ellipsis so it fits a constrained space — a
branch name in a row, a long title in a table cell. The full text stays available via `title` and to
assistive tech. See [truncate.example.html](/components/truncate.example.html).

# Anatomy
A `.Truncate` element with a `max-width`; it clips overflow to one line with `text-overflow: ellipsis`.

# Structure
A single inline-block box with a hard width ceiling. Truncation is the structure: the box is
bounded and the text is clipped to it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Truncate` | 1 | `max-width: 160px`, single line, ellipsis on overflow | none | unchanged |

`display: inline-block` is required for the width cap to apply at all, since a plain inline element
ignores `max-width`. `white-space: nowrap` forces one line, and `overflow: hidden` with
`text-overflow: ellipsis` clips the remainder. `vertical-align: top` keeps the box on the same
baseline as its neighbours, which it would otherwise drop below. The full value must stay available
in a `title` attribute, since the visible text is genuinely incomplete.

# Examples
- [truncate.example.html](/components/truncate.example.html) — a clipped vs. full string.
- [truncate.wireframe.html](/components/truncate.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Put the full text in a `title` (and don't hide it from assistive tech) so it stays available even when
visually clipped.

# Do & Don't
- **Do** truncate in tight rows where wrapping would break the layout.
- **Don't** truncate essential text without a way to read the full value.
