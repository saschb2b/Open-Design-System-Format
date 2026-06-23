---
type: Elevation
title: Elevation
description: Crisp 1px alpha borders first; soft shadows only for floating layers.
tags: [foundations, elevation, shadow, border, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  elevation:
    border: "0 0 0 1px var(--ds-gray-alpha-400)"
    small: "0 1px 2px var(--ds-gray-alpha-200)"
    medium: "0 4px 8px -2px var(--ds-gray-alpha-200), 0 2px 4px -1px var(--ds-gray-alpha-100)"
    menu: "0 0 0 1px var(--ds-gray-alpha-400), 0 4px 8px -4px var(--ds-gray-alpha-200), 0 16px 24px -8px var(--ds-gray-alpha-200)"
---

Geist gets its structure from **1px borders, not shadows**. The signature `border` token is a hairline
drawn as a `box-shadow: 0 0 0 1px` in `gray-alpha-400` (a translucent gray that adapts to either
theme). Resting cards and controls use only this border; soft shadows are reserved for genuinely
floating layers — [menus](/components/menu.md), [modals](/components/modal.md),
[tooltips](/components/tooltip.md). Projected as `--ds-shadow-border`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Use |
|-------|-----|
| `elevation.border` | The hairline on every resting surface ([card](/components/card.md), [input](/components/input.md), [button](/components/button.md)). |
| `elevation.small` | A faint lift (snippet, switch knob). |
| `elevation.medium` | Raised cards. |
| `elevation.menu` | Floating overlays: menus, modals, popovers (border ring + soft shadow). |

Because the shadows are built on the `gray-alpha-*` tokens, they adapt automatically light↔dark.

# Do & Don't
- **Do** use the `border` hairline for resting surfaces; reserve `menu` for floating layers.
- **Don't** stack heavy shadows; the look is flat, crisp, and high-contrast.
