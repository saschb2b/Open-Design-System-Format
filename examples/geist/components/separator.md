---
type: Component
title: Separator
description: A 1px hairline that divides content horizontally or vertically.
tags: [components, separator, divider, layout]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/separator.example.html
tokens:
  separator:
    color: "{colors.gray-alpha-400}"
---

The 1px hairline (`{colors.gray-alpha-400}`) that divides content — between list rows, toolbar groups,
or sections. The atom of Geist's border-led structure (see [grid](/foundations/grid.md)). Horizontal
by default; a vertical variant divides inline groups. See
[separator.example.html](/components/separator.example.html).

# Accessibility
Use `role="separator"` (or a semantic `<hr>`); a purely decorative divider can be `aria-hidden`.

# Do & Don't
- **Do** use a hairline separator instead of heavy rules or shadows.
- **Don't** overuse separators where whitespace already groups content.
