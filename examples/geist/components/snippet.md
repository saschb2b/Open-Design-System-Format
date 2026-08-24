---
type: Component
title: Snippet
description: A single-line copyable command in a bordered mono surface.
tags: [components, snippet, code, copy]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/snippet.example.html
  - /components/snippet.wireframe.html
---

A one-line copyable command — `npm i geist`, an install or CLI line — in
[Geist Mono](/foundations/typography.md) on a bordered surface with a trailing
[copy button](/components/copy-button.md). The compact cousin of the
[code block](/components/code-block.md). See [snippet.example.html](/components/snippet.example.html).

# Structure
A centred flex row with asymmetric padding: roomier on the left where the text starts, tighter on
the right where the copy button sits.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.grow` command text | 1 | `flex: 1`, `min-width: 0`, scrolls on overflow | `10px` | unchanged |
| Copy button | 2 | fixed 32px square | none | unchanged |

Padding is `8px 8px 8px 14px`: the button carries its own optical space, so a symmetric inset would
look right-heavy. `min-width: 0` plus `overflow: auto` on the text is what makes a long command
scroll inside the row rather than pushing the button out of it. The copy button must not change
size in its success state or the text region would resize with it.

# Accessibility
The copy button is labelled and confirms; the command text is selectable.

# Do & Don't
- **Do** use a snippet for a single copyable command.
- **Don't** put multi-line code in a snippet; use a [code block](/components/code-block.md).
