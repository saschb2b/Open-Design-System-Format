---
type: Component
title: Snippet
description: A single-line copyable command in a bordered mono surface.
tags: [components, snippet, code, copy]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/snippet.example.html
---

A one-line copyable command — `npm i geist`, an install or CLI line — in
[Geist Mono](/foundations/typography.md) on a bordered surface with a trailing
[copy button](/components/copy-button.md). The compact cousin of the
[code block](/components/code-block.md). See [snippet.example.html](/components/snippet.example.html).

# Accessibility
The copy button is labelled and confirms; the command text is selectable.

# Do & Don't
- **Do** use a snippet for a single copyable command.
- **Don't** put multi-line code in a snippet; use a [code block](/components/code-block.md).
