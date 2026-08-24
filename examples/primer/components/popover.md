---
type: Component
title: Popover
description: A small pointed overlay anchored to an element, for tips and lightweight callouts.
tags: [components, popover, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/popover.example.html
  - /components/popover.wireframe.html
tokens:
  Popover:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    shadow: "{elevation.floating-small}"
---

A small overlay with a caret pointing at the element it is anchored to — for onboarding hints,
feature callouts, or contextual help. Richer than a [tooltip](/components/tooltip.md) (it can hold
headings, body text, and a [button](/components/button.md)) and dismissible. See
[popover.example.html](/components/popover.example.html).

# Anatomy
A `.Popover` ([`{colors.bgColor-default}`], `{colors.borderColor-default}` border,
`{elevation.floating-small}`) with a CSS caret (`::before`/`::after`) pointing at the anchor; holds a
heading, body, and an optional action.

# Structure
A fixed `260px` panel with `{spacing.16}` of padding, stacking its content in DOM order. Spacing
between parts comes from element margins, not a gap.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Heading | 1 | full width | `{spacing.4}` | unchanged |
| Body text | 2 | full width, wraps | `{spacing.12}` | unchanged |
| Action | 3 | content width | none | unchanged |
| Arrow | n/a | `8px` triangle, absolutely positioned at `left: 24px` | none | unchanged |

The arrow is drawn with two stacked pseudo-element triangles outside the panel box, so it costs no
layout space and the panel measures a clean `260px`. Its `24px` offset is fixed, which means the
panel must be positioned so its left edge lands under the trigger rather than centred on it.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Popover.background` | `{colors.bgColor-default}` |
| `Popover.shadow` | `{elevation.floating-small}` |

# Examples
- [popover.example.html](/components/popover.example.html) — a callout with a caret.
- [popover.wireframe.html](/components/popover.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Manage focus and dismissal (Escape / outside click); reference the popover from its trigger. Don't put
essential-only content in a popover, and show it on focus as well as click.

# Do & Don't
- **Do** use a popover for opt-in, dismissible guidance.
- **Don't** use it for blocking tasks — that is a [dialog](/components/dialog.md).
