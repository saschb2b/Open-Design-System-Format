---
type: Token Set
title: Materials
description: Geist's layered surface materials — the background steps and translucent grays that build depth.
tags: [foundations, materials, surface, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  materials:
    base: "var(--ds-background-200)"
    surface: "var(--ds-background-100)"
    subtle: "var(--ds-gray-100)"
    translucent: "var(--ds-gray-alpha-200)"
---

"Materials" is how Geist names its **layered surfaces** — the small set of background and translucent
gray steps that stack to build depth without color. The app sits on `base` (`background-200`); raised
surfaces use `surface` (`background-100`); subtle fills use `subtle` (`gray-100`); and translucent
overlays (hover states, scrims) use the `gray-alpha-*` materials, which tint by the foreground so they
work on any surface in either theme. Projected from the `--ds-background-*` and `--ds-gray-alpha-*`
tokens in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Material | Resolves to | Use |
|----------|-------------|-----|
| `base` | `--ds-background-200` | The app floor. |
| `surface` | `--ds-background-100` | Cards, menus, inputs. |
| `subtle` | `--ds-gray-100` | Hover fills, code, inset areas. |
| `translucent` | `--ds-gray-alpha-200` | Overlays and scrims that adapt to any background. |

# Do & Don't
- **Do** layer `base` → `surface` → `subtle` for depth; pair with the `border` hairline.
- **Don't** invent opaque grays for overlays; use the `gray-alpha-*` materials so they theme.
