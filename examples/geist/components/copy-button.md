---
type: Component
title: Copy button
description: A quiet icon button that copies a value and flips to a check on success.
tags: [components, button, copy, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/copy-button.example.html
  - /components/copy-button.wireframe.html
---

A small ghost [icon button](/components/button.md) that copies a value to the clipboard and briefly
swaps its copy icon for a check to confirm. The atom behind [snippet](/components/snippet.md) and
[text with copy button](/components/text-with-copy-button.md). See
[copy-button.example.html](/components/copy-button.example.html).

# Structure
A fixed square icon button, identical in both its resting and copied states.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.btn-icon.btn-sm` | 1 | fixed 32px square | none | unchanged |
| Icon | 1.1 | fixed, centred | none | unchanged |

The success state swaps the glyph inside an unchanged box, so the button does not resize at the
moment of feedback and nothing around it moves. That is the whole structural requirement of this
component: it usually sits at the end of a [snippet](/components/snippet.md) or code block head,
where a size change would shift the content beside it.

# Accessibility
Give it an `aria-label` ("Copy"); announce success via `aria-live` or by toggling the label to
"Copied". Focus follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** confirm the copy with the check flip.
- **Don't** rely on color alone for the confirmation — change the icon too.
