---
type: Component
title: Description
description: A label-over-value pair for read-only key/value metadata.
tags: [components, description, metadata, data]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/description.example.html
  - /components/description.wireframe.html
---

A read-only key/value pair: a muted `{typography.label-13}` label over its value. Stacked into a
`<dl>`, descriptions render the metadata blocks on deployment, domain, and settings detail views. See
[description.example.html](/components/description.example.html).

# Structure
A definition list where each pair is a block: term above value, not beside it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `dt` term | 1 | full width | `2px` | unchanged |
| `dd` value | 2 | full width | `{spacing.3}` | unchanged |

The tight `2px` between a term and its value against `{spacing.3}` between pairs is what binds each
pair into one unit; the rhythm, not a rule or a fill, does the grouping. Spacing comes from element
margins rather than a flex gap, so wrapping each pair in a `div` (as the example does) changes
nothing structurally. Values are not truncated, so a long value wraps and the row grows.

# Accessibility
Use a real `<dl>`/`<dt>`/`<dd>` so the label–value relationship is conveyed to assistive tech.

# Do & Don't
- **Do** use descriptions for read-only metadata.
- **Don't** use them for editable fields — that's an [input](/components/input.md) with a [label](/components/label.md).
