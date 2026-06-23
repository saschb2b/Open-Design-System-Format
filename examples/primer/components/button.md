---
type: Component
title: Button
description: Default, the signature green primary, danger, and invisible variants.
tags: [components, button, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/button.example.html
tokens:
  button-default:
    background: "{colors.bgColor-muted}"
    color: "{colors.fgColor-default}"
    border: "{colors.borderColor-default}"
    radius: "{radius.medium}"
  button-primary:
    background: "{colors.bgColor-success-emphasis}"
    color: "{colors.fgColor-onEmphasis}"
  button-danger:
    color: "{colors.fgColor-danger}"
---

GitHub's most recognizable control, and a brand signal in itself: the **primary button is green**
(`{colors.bgColor-success-emphasis}` #1f883d), not blue — "primary" here means "the safe, affirmative
action." Every variant resolves to functional tokens, so the whole set re-themes light↔dark with no
markup change (the example shows both). Class contract in
[button.example.html](/components/button.example.html), styled by
[`/styles/components.css`](/styles/components.css).

# Anatomy
A `<button>` with base `.btn` plus an optional variant modifier. Height 32px (medium), padding
`0 {spacing.12}`, `{typography.body-medium}` at weight 500, radius `{radius.medium}`, 1px border.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `button-default.background` | `{colors.bgColor-muted}` |
| `button-primary.background` | `{colors.bgColor-success-emphasis}` (green) |
| `button-primary.color` | `{colors.fgColor-onEmphasis}` |
| `button-danger.color` | `{colors.fgColor-danger}` |

# Variants & States
| Variant | Use |
|---------|-----|
| `.btn` | Default neutral action. |
| `.btn.btn-primary` | The single affirmative action (green). One per view. |
| `.btn.btn-danger` | Destructive action — danger text, fills red on hover. |
| `.btn.btn-invisible` | Low-emphasis / icon-only action; fill appears on hover. |
| `.btn.btn-sm` | Compact size (28px). |

# Examples
- [button.example.html](/components/button.example.html) — every variant, rendered in **light and dark**.

# Behavior
- Keyboard focus follows [focus](/behaviors/focus.md).
- The whole set themes via [color modes](/behaviors/color-modes.md).

# Accessibility
Always a real `<button>`; an icon-only button needs an `aria-label`. Danger actions pair the red with
a word ("Delete"), never color alone — see [color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** use one green `.btn-primary` per view.
- **Don't** hard-code the green; reference `{colors.bgColor-success-emphasis}` so dark mode tracks it.
