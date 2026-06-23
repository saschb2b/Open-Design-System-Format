---
type: Shape
title: Shape
description: A hierarchical corner-radius scale — buttons 8, cards 12, hero 16, pills round.
tags: [foundations, shape, radius, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  radius:
    xs: "4px"
    sm: "6px"
    md: "8px"
    lg: "12px"
    xl: "16px"
    pill: "9999px"
    full: "9999px"
---

Radius is **hierarchical** — it scales with the element it wraps. Controls round modestly,
containers round more, the hero rounds most. Projected as `--radius-md`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `radius.xs` | `4px` | Badge accents, tiny dropdowns. |
| `radius.sm` | `6px` | Small inline buttons, dropdown items. |
| `radius.md` | `8px` | [Buttons](/components/button.md), [inputs](/components/text-input.md), category tabs. |
| `radius.lg` | `12px` | Content cards: feature, pricing, code-window, model-comparison. |
| `radius.xl` | `16px` | Hero illustration container, marquee components. |
| `radius.pill` | `9999px` | [Badge pills](/components/badge.md), NEW tags. |
| `radius.full` | `9999px` | Avatars, circular icon buttons. |

# Usage
Match radius to element scale: a `lg` card holds `md` buttons. Borders are a single hairline in
`{colors.hairline}`; the system avoids heavy or multi-color borders.

# Do & Don't
- **Do** keep radius consistent across sibling controls in a view.
- **Don't** mix `sm` and `xl` on elements of the same size.
