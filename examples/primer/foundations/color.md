---
type: Color
title: Color
description: Primer's functional, theme-able color system — foreground, background, and border roles that re-skin light↔dark.
tags: [foundations, color, tokens, theming]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  colors:
    fgColor-default: "#1f2328"
    fgColor-muted: "#59636e"
    fgColor-onEmphasis: "#ffffff"
    fgColor-accent: "#0969da"
    fgColor-success: "#1a7f37"
    fgColor-danger: "#d1242f"
    fgColor-attention: "#9a6700"
    fgColor-done: "#8250df"
    bgColor-default: "#ffffff"
    bgColor-muted: "#f6f8fa"
    bgColor-inset: "#f6f8fa"
    bgColor-emphasis: "#25292e"
    bgColor-accent-emphasis: "#0969da"
    bgColor-accent-muted: "#ddf4ff"
    bgColor-success-emphasis: "#1f883d"
    bgColor-success-muted: "#dafbe1"
    bgColor-danger-emphasis: "#cf222e"
    bgColor-danger-muted: "#ffebe9"
    bgColor-attention-muted: "#fff8c5"
    bgColor-neutral-muted: "#818b981f"
    bgColor-neutral-emphasis: "#6e7781"
    bgColor-done-emphasis: "#8250df"
    borderColor-default: "#d1d9e0"
    borderColor-muted: "#d1d9e0b3"
    borderColor-accent-emphasis: "#0969da"
---

Primer's color system is **functional**, not literal. A component never references a hex or a hue;
it references a **role** — `fgColor-default` for body text, `bgColor-default` for a surface,
`borderColor-default` for a hairline, `fgColor-accent` for a link. Because every component speaks in
roles, the entire UI re-themes by swapping the value behind each role — that is how Primer ships
**light, dark, dark-dimmed, and high-contrast** modes from one set of components. See
[color modes](/behaviors/color-modes.md).

The values below were read from the live primer.style DOM
([@primer/primitives](/references/primer-style.md)); they are the **light** mode. This bundle ships
Primer's own variable names verbatim (`--fgColor-default`, not the `--colors-*` projection) so code
generated from it matches real Primer — see [`/styles/tokens.css`](/styles/tokens.css), which also
carries the dark values under `[data-color-mode="dark"]`.

# Roles

## Foreground (text & icons)
| Token | Light | Role |
|-------|-------|------|
| `fgColor-default` | `#1f2328` | Primary text. |
| `fgColor-muted` | `#59636e` | Secondary text, icons, placeholders. |
| `fgColor-onEmphasis` | `#ffffff` | Text on an emphasis surface (primary button, badge). |
| `fgColor-accent` | `#0969da` | Links and accents. |
| `fgColor-success` | `#1a7f37` | Success text and icons. |
| `fgColor-danger` | `#d1242f` | Error text and icons. |
| `fgColor-attention` | `#9a6700` | Warning text. |
| `fgColor-done` | `#8250df` | "Done"/merged (purple). |

## Background (surfaces)
| Token | Light | Role |
|-------|-------|------|
| `bgColor-default` | `#ffffff` | Default surface. |
| `bgColor-muted` | `#f6f8fa` | Subtle fills: [Box](/components/box.md) headers, insets. |
| `bgColor-emphasis` | `#25292e` | High-contrast surface (tooltips, primary [labels](/components/label.md)). |
| `bgColor-accent-emphasis` | `#0969da` | Solid accent fill. |
| `bgColor-accent-muted` | `#ddf4ff` | Tinted accent fill ([banner](/components/banner.md) info). |
| `bgColor-success-emphasis` | `#1f883d` | The green of the [primary button](/components/button.md). |
| `bgColor-danger-muted` | `#ffebe9` | Tinted danger fill. |
| `bgColor-attention-muted` | `#fff8c5` | Tinted warning fill. |
| `bgColor-neutral-muted` | `#818b981f` | Translucent neutral fill ([Counter](/components/label.md)). |

## Border
`borderColor-default` (#d1d9e0) hairlines · `borderColor-muted` (translucent) in-surface dividers ·
`borderColor-accent-emphasis` (#0969da) focused/active edges.

# Usage
- Pick the role, never the value. A success message is `fgColor-success` because it *means* success.
- Always pair a foreground role with its intended background (`fgColor-default` on `bgColor-default`);
  the pairs are contrast-checked for WCAG AA in both modes.

# Do & Don't
- **Do** reference roles so the component themes for free. See
  [use functional tokens](/guidelines/use-functional-tokens.md).
- **Don't** hard-code a hex — it will look right in light mode and break in dark.

# Citations
[1] [Primer — live token verification](/references/live-verification.md)
[2] [primer.style](/references/primer-style.md)
