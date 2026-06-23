---
type: Component
title: Code block
description: A multi-line code surface with a header, syntax highlighting, and copy.
tags: [components, code-block, code, snippet]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/code-block.example.html
tokens:
  code-block:
    background: "{colors.background-200}"
    radius: "{radius.medium}"
---

A multi-line code surface: a header bar (filename / language + a [copy button](/components/copy-button.md))
over syntax-highlighted [Geist Mono](/foundations/typography.md) on `{colors.background-200}`. Syntax
tones come from the accent scales (keyword purple, string teal, function blue). See
[code-block.example.html](/components/code-block.example.html).

# Accessibility
The copy button is labelled and confirms; provide a text alternative when the code is decorative; keep
code selectable and horizontally scrollable on small screens.

# Do & Don't
- **Do** label the language and offer copy.
- **Don't** wrap long lines; scroll horizontally instead.
