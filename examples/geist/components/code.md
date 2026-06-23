---
type: Component
title: Code
description: Inline monospace code on a subtle fill.
tags: [components, code, inline, text]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/code.example.html
tokens:
  code:
    background: "{colors.gray-100}"
    radius: "{radius.small}"
---

Inline `<code>` in [Geist Mono](/foundations/typography.md) on a `{colors.gray-100}` fill with the
`border` hairline — for variable names, flags, and paths within running text. For a multi-line block
use [code block](/components/code-block.md). See [code.example.html](/components/code.example.html).

# Accessibility
Use a real `<code>` element; keep code text selectable.

# Do & Don't
- **Do** use inline code for short literals in prose.
- **Don't** put multi-line code inline; use a [code block](/components/code-block.md).
