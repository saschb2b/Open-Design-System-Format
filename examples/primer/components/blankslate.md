---
type: Component
title: Blankslate
description: The centered empty state — icon, heading, description, and a primary action.
tags: [components, blankslate, empty-state, content]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/blankslate.example.html
  - /components/blankslate.wireframe.html
tokens:
  Blankslate:
    icon: "{colors.fgColor-muted}"
    description: "{colors.fgColor-muted}"
---

The friendly empty state shown when a list or area has no content yet — no issues, no results, a new
repo. It centers a muted icon, a heading, a one-line description in `{colors.fgColor-muted}`, and a
single [primary action](/components/button.md) to move forward. Usually placed inside a
[Box](/components/box.md). See [blankslate.example.html](/components/blankslate.example.html).

# Anatomy
A `.Blankslate`: `.Blankslate-icon` → `.Blankslate-heading` → `.Blankslate-description` → an action
([button](/components/button.md)).

# Structure
A centred column inside `{spacing.32}` of padding. Spacing comes from element margins rather than
a flex gap, so the steps between parts are deliberately uneven.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Blankslate-icon` | 1 | fixed 40px square | `{spacing.16}` | unchanged |
| `.Blankslate-heading` | 2 | full width, centred | `{spacing.4}` | unchanged |
| `.Blankslate-description` | 3 | full width, centred | `{spacing.16}` | unchanged |
| Action button | 4 | content width | none | unchanged |

The tight `{spacing.4}` between heading and description binds them as one unit, while the
`{spacing.16}` above the heading and below the description separates icon, message, and action into
three beats. `text-align: center` is inherited by every child, which is why the button centres
without any flex alignment on the container.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Blankslate.icon` | `{colors.fgColor-muted}` |
| `Blankslate.description` | `{colors.fgColor-muted}` |

# Examples
- [blankslate.example.html](/components/blankslate.example.html) — an empty issues list.
- [blankslate.wireframe.html](/components/blankslate.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use a real heading; the action is the primary next step. If the icon is decorative, hide it from
assistive tech (`aria-hidden`).

# Do & Don't
- **Do** offer one clear next action.
- **Don't** fill an empty state with multiple competing buttons.
