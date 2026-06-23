---
type: Elevation
title: Elevation
description: Color-block first, shadow rare — depth comes from the cream-vs-dark surface contrast.
tags: [foundations, elevation, depth, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  elevation:
    flat: "none"
    soft: "0 1px 3px rgba(20, 20, 19, 0.08)"
---

Claude's depth philosophy is **color-block first, shadow rare**. Most layering comes not from
shadows but from the contrast between cream surfaces and dark navy product surfaces — the
cream-to-dark alternation *is* the depth. Shadows appear only as a faint hover lift. Projected as
`--elevation-soft` in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `elevation.flat` | `none` | Body sections, top nav, hero bands, most cards. |
| `elevation.soft` | `0 1px 3px rgba(20,20,19,.08)` | The rare hover-lift on interactive cards. |

# Levels (by treatment, not shadow)
| Level | Treatment |
|-------|-----------|
| Flat | No shadow, no border — body sections, hero. |
| Hairline | 1px `{colors.hairline}` border — inputs, pricing/model cards. |
| Cream card | `{colors.surface-card}` background, no shadow — [feature cards](/components/feature-card.md). |
| Dark surface | `{colors.surface-dark}` background, no shadow — [code mockups](/components/code-window-card.md). |

Dark mockups carry their own internal chrome (editor scrollbars, line numbers, syntax highlight)
that supplies detail without external shadow.

# Do & Don't
- **Do** get depth from the surface ladder (cream → card → dark), not from drop shadows.
- **Don't** add shadows to flush, in-flow elements; reserve `elevation.soft` for genuine hover lift.
