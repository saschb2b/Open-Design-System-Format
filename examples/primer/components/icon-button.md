---
type: Component
title: Icon button
description: A square, icon-only button for compact actions and toolbars.
tags: [components, button, icon, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/icon-button.example.html
  - /components/icon-button.wireframe.html
tokens:
  btn-icon:
    background: "{colors.bgColor-muted}"
    border: "{colors.borderColor-default}"
    color: "{colors.fgColor-muted}"
---

A square (32×32) icon-only action, used in toolbars and table rows where a label would crowd the
layout. It is a [button](/components/button.md) with the `.btn-icon` modifier and **requires an
`aria-label`**, since there is no visible text. See
[icon-button.example.html](/components/icon-button.example.html).

# Structure
A fixed square with its icon centred on both axes. Padding is removed so the icon centres on the
box rather than on its text box.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.btn.btn-icon` | 1 | fixed 32px square (28px with `.btn-sm`) | none | unchanged |
| Icon | 1.1 | fixed 16px, centred | none | unchanged |

The square matches the 32px height of a standard [button](/components/button.md), which is what
lets an icon button sit in a [button group](/components/button-group.md) or a toolbar row without
changing the row height. It is the same `.btn` box with its width pinned and its padding zeroed.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `btn-icon.background` | `{colors.bgColor-muted}` |
| `btn-icon.color` | `{colors.fgColor-muted}` |

# Variants & States
`.btn.btn-icon` (default) · with `.btn-invisible` for a borderless toolbar button · `.btn-sm` (28px).

# Examples
- [icon-button.example.html](/components/icon-button.example.html) — default and invisible.
- [icon-button.wireframe.html](/components/icon-button.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Always set `aria-label`; pair with a [tooltip](/components/tooltip.md) for sighted users. Focus
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** give every icon button an `aria-label`.
- **Don't** use one where the action is ambiguous without a label.
