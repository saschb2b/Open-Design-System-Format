---
type: Shape
title: Shape
description: A small, consistent corner-radius scale anchored on the 6px Geist radius.
tags: [foundations, shape, radius, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  radius:
    small: "4px"
    medium: "6px"
    large: "8px"
    full: "9999px"
---

Geist rounds tightly and consistently. The standard is **`medium` (6px)** — buttons, inputs, cards,
menus. Nested or small elements use `small` (4px); larger surfaces `large` (8px); pills and avatars
are fully round. The restraint keeps the UI crisp and geometric. Projected as `--ds-radius-medium`,
etc., in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `radius.small` | `4px` | Nested controls, menu items, code. |
| `radius.medium` | `6px` | [Buttons](/components/button.md), [inputs](/components/input.md), [menus](/components/menu.md). |
| `radius.large` | `8px` | [Cards](/components/card.md), [modals](/components/modal.md). |
| `radius.full` | `9999px` | [Badges](/components/badge.md), [avatars](/components/avatar.md), switches. |

# Do & Don't
- **Do** default to `medium` (6px) for interactive controls.
- **Don't** introduce off-scale radii; consistency is the look.
