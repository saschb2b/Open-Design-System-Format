---
type: Component
title: Separator
description: A 1px hairline that divides content horizontally or vertically.
tags: [components, separator, divider, layout]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/separator.example.html
  - /components/separator.wireframe.html
tokens:
  separator:
    color: "{colors.gray-alpha-400}"
---

The 1px hairline (`{colors.gray-alpha-400}`) that divides content — between list rows, toolbar groups,
or sections. The atom of Geist's border-led structure (see [grid](/foundations/grid.md)). Horizontal
by default; a vertical variant divides inline groups. See
[separator.example.html](/components/separator.example.html).

# Structure
A one-pixel rule in one of two orientations. The horizontal form owns vertical margin; the vertical
form stretches to its row.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.separator` | between blocks | full width, `1px` tall, `{spacing.4}` margin above and below | n/a | unchanged |
| `.separator--v` | between inline items | `1px` wide, `align-self: stretch`, `{spacing.2}` side margin | n/a | unchanged |

The vertical variant uses `align-self: stretch` with `height: auto` rather than a fixed height, so
it matches whatever the tallest item in the row happens to be and stays correct when that changes.
Both variants carry their own margin, which means the space around a separator belongs to the
separator and not to the elements it divides. Do not add a gap as well or the rhythm doubles.

# Accessibility
Use `role="separator"` (or a semantic `<hr>`); a purely decorative divider can be `aria-hidden`.

# Do & Don't
- **Do** use a hairline separator instead of heavy rules or shadows.
- **Don't** overuse separators where whitespace already groups content.
