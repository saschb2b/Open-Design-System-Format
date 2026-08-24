---
type: Component
title: Text with copy button
description: An inline value paired with a copy button — a token, ID, or URL.
tags: [components, copy, text, inline]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/text-with-copy-button.example.html
  - /components/text-with-copy-button.wireframe.html
---

A read-only value — a deployment URL, an ID, a token — shown inline with a trailing
[copy button](/components/copy-button.md). Lighter than a [snippet](/components/snippet.md) (no
surface), for values that live within other UI. See
[text-with-copy-button.example.html](/components/text-with-copy-button.example.html).

# Structure
An inline flex pair sized by its content: a value and a fixed square button.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Value text | 1 | content width, no truncation | `6px` | unchanged |
| Copy button | 2 | fixed 32px square | none | unchanged |

Unlike [snippet](/components/snippet.md) this has no shell, no border and no width cap, so it sits
inline in a sentence or a table cell. The value is not truncated, so it grows the row: combine it
with [middle truncate](/components/middle-truncate.md) when the value is an unbounded URL. The
button must not resize in its success state or the value beside it would shift.

# Accessibility
The copy button is labelled and confirms; the value is selectable and may be truncated with
[middle truncate](/components/middle-truncate.md) while staying fully copyable.

# Do & Don't
- **Do** keep the full value copyable even when visually truncated.
- **Don't** make the user hand-select a long token to copy it.
