---
type: Component
title: Code block
description: A multi-line code surface with a header, syntax highlighting, and copy.
tags: [components, code-block, code, snippet]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/code-block.example.html
  - /components/code-block.wireframe.html
tokens:
  code-block:
    background: "{colors.background-200}"
    radius: "{radius.medium}"
---

A multi-line code surface: a header bar (filename / language + a [copy button](/components/copy-button.md))
over syntax-highlighted [Geist Mono](/foundations/typography.md) on `{colors.background-200}`. Syntax
tones come from the accent scales (keyword purple, string teal, function blue). See
[code-block.example.html](/components/code-block.example.html).

# Structure
Two stacked regions: a filename bar and a scrolling code pane.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.code-block-head` | 1 | full width; filename `flex: 1`, copy button fixed | none | unchanged |
| `pre` | 2 | full width, `14px` padding, height driven by line count | none | unchanged |

`overflow: auto` on the block means long lines scroll horizontally instead of wrapping or widening
the container. That is deliberate: wrapped code loses the alignment that makes indentation
readable. The head is divided by an inset `box-shadow` rather than a border, so it adds no height.
The block sets no width and takes its container width.

# Accessibility
The copy button is labelled and confirms; provide a text alternative when the code is decorative; keep
code selectable and horizontally scrollable on small screens.

# Do & Don't
- **Do** label the language and offer copy.
- **Don't** wrap long lines; scroll horizontally instead.
