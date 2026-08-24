---
type: Component
title: Button
description: The inverted primary action and its secondary, tertiary, error, and ghost variants.
tags: [components, button, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/button.example.html
  - /components/button.wireframe.html
tokens:
  button-primary:
    background: "{colors.gray-1000}"
    color: "{colors.background-100}"
    radius: "{radius.medium}"
  button-secondary:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
  button-error:
    background: "{colors.red-700}"
---

Geist's button leads with its signature **inverted primary**: filled with `{colors.gray-1000}` and
labelled `{colors.background-100}` — black-on-white in light, white-on-black in dark. Secondary is a
bordered surface; tertiary/ghost are quiet; error fills red. Weight stays 400 (Geist is restrained),
radius `{radius.medium}`. The whole set re-themes via the tokens — the example shows light and dark.
See [button.example.html](/components/button.example.html).

# Structure
An inline flex row, centred on both axes, `{spacing.2}` between an optional icon and the label.
Height is fixed at 40px and width follows the content.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Icon (optional) | 1 | fixed | `{spacing.2}` | unchanged |
| Label | 2 | content width, `white-space: nowrap` | none | unchanged |

The label never wraps, so a long label widens the button rather than growing it taller. Three
variants change the box: `.btn-sm` is 40 down to 32px tall with `10px` side padding, `.btn-lg` goes
to 48px with `18px`, and `.btn-icon` pins the width to the height for a square. The border is a
`box-shadow` rather than a real border, so the primary variant can drop it without the button
changing size, which a real border would cause.

# Variants & sizes
`.btn-primary` (inverted) · `.btn` (secondary, bordered) · `.btn-ghost` · `.btn-error` · sizes
`.btn-sm` (32px) / default (40px) / `.btn-lg` (48px). See [split button](/components/split-button.md)
for a primary + menu trigger.

# Accessibility
Real `<button>`; icon-only buttons need an `aria-label`. Focus uses the `{colors.focus}` ring — see
[focus](/behaviors/focus.md).

# Do & Don't
- **Do** use one inverted `.btn-primary` per view.
- **Don't** hard-code the fill; reference `{colors.gray-1000}` so it themes.
