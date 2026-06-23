---
type: Component
title: Icon button
description: A square, icon-only button for compact actions and toolbars.
tags: [components, button, icon, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/icon-button.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `btn-icon.background` | `{colors.bgColor-muted}` |
| `btn-icon.color` | `{colors.fgColor-muted}` |

# Variants & States
`.btn.btn-icon` (default) · with `.btn-invisible` for a borderless toolbar button · `.btn-sm` (28px).

# Examples
- [icon-button.example.html](/components/icon-button.example.html) — default and invisible.

# Accessibility
Always set `aria-label`; pair with a [tooltip](/components/tooltip.md) for sighted users. Focus
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** give every icon button an `aria-label`.
- **Don't** use one where the action is ambiguous without a label.
