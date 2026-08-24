---
type: Component
title: Code
description: Inline monospace code on a subtle fill.
tags: [components, code, inline, text]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/code.example.html
  - /components/code.wireframe.html
tokens:
  code:
    background: "{colors.gray-100}"
    radius: "{radius.small}"
---

Inline `<code>` in [Geist Mono](/foundations/typography.md) on a `{colors.gray-100}` fill with the
`border` hairline — for variable names, flags, and paths within running text. For a multi-line block
use [code block](/components/code-block.md). See [code.example.html](/components/code.example.html).

# Structure
An inline chip in the text flow, sized by its content, with `1px 6px` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.code` | inline | content width; wraps with the sentence | none | unchanged |

The vertical padding is deliberately `1px` so the chip does not increase line height in running
prose; the border is a `box-shadow`, which adds no height either. Both choices keep a paragraph
with several inline code chips on an even baseline. The chip does not truncate, so a long literal
widens it and breaks with the line.

# Accessibility
Use a real `<code>` element; keep code text selectable.

# Do & Don't
- **Do** use inline code for short literals in prose.
- **Don't** put multi-line code inline; use a [code block](/components/code-block.md).
