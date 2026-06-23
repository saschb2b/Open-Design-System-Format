---
type: Color
title: Color
description: Claude's warm cream-and-coral palette with dark navy product surfaces, and the role each color plays.
tags: [foundations, color, tokens, brand]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  colors:
    primary: "#cc785c"
    primary-active: "#a9583e"
    primary-disabled: "#e6dfd8"
    accent-teal: "#5db8a6"
    accent-amber: "#e8a55a"
    canvas: "#faf9f5"
    surface-soft: "#f5f0e8"
    surface-card: "#efe9de"
    surface-cream-strong: "#e8e0d2"
    surface-dark: "#181715"
    surface-dark-elevated: "#252320"
    surface-dark-soft: "#1f1e1b"
    hairline: "#e6dfd8"
    hairline-soft: "#ebe6df"
    ink: "#141413"
    body-strong: "#252523"
    body: "#3d3d3a"
    muted: "#6c6a64"
    muted-soft: "#8e8b82"
    on-primary: "#ffffff"
    on-dark: "#faf9f5"
    on-dark-soft: "#a09d96"
    success: "#5db872"
    warning: "#d4a017"
    error: "#c64545"
---

The palette is a **trinity**: warm cream canvas, signature coral accent, and dark navy product
surfaces. The cream-and-coral pairing is the brand's voltage — a deliberate counter-position to the
cool slate/blue/cyan of every other AI product. `canvas` (#faf9f5) and `ink` (#141413) were
verified against the live claude.com DOM; see [Anthropic brand](/references/anthropic-brand.md).
The runnable projection of every token is in [`/styles/tokens.css`](/styles/tokens.css)
(`colors.primary` → `--colors-primary`).

# Roles

## Brand & accent
| Token | Value | Role |
|-------|-------|------|
| `colors.primary` | `#cc785c` | The signature Anthropic coral. Primary CTAs, the brand wordmark accent, full-bleed [coral callouts](/components/callout-card-coral.md). |
| `colors.primary-active` | `#a9583e` | The press/darker variant — the only state change a primary makes. |
| `colors.primary-disabled` | `#e6dfd8` | Desaturated cream-tinted disabled fill. |
| `colors.accent-teal` | `#5db8a6` | Sparse: terminal status dots, "active connection" indicators. |
| `colors.accent-amber` | `#e8a55a` | Sparse: category badges, inline code-number highlights. |

## Surface — the cream-to-dark ladder
| Token | Value | Role |
|-------|-------|------|
| `colors.canvas` | `#faf9f5` | The default page floor. Warm cream — deliberately **not** pure white. |
| `colors.surface-soft` | `#f5f0e8` | Soft band backgrounds, dividers. |
| `colors.surface-card` | `#efe9de` | [Feature cards](/components/feature-card.md); one step darker than canvas. |
| `colors.surface-cream-strong` | `#e8e0d2` | Selected tabs, emphasized bands. |
| `colors.surface-dark` | `#181715` | [Code mockups](/components/code-window-card.md), featured pricing, [footer](/components/footer.md). |
| `colors.surface-dark-elevated` | `#252320` | Elevated cards / secondary buttons inside dark bands. |
| `colors.surface-dark-soft` | `#1f1e1b` | Inner code-block backgrounds within dark cards. |
| `colors.hairline` | `#e6dfd8` | The 1px border on cream surfaces — borders read as one elevation step, not ink lines. |
| `colors.hairline-soft` | `#ebe6df` | Barely-visible in-band dividers. |

## Text
| Token | Value | Role |
|-------|-------|------|
| `colors.ink` | `#141413` | Headlines and primary text. Warm near-black. |
| `colors.body-strong` | `#252523` | Lead paragraphs, emphasized body. |
| `colors.body` | `#3d3d3a` | Default running text. |
| `colors.muted` | `#6c6a64` | Sub-headings, breadcrumbs, inactive tabs. |
| `colors.muted-soft` | `#8e8b82` | Captions, fine print, code line-numbers. |
| `colors.on-primary` | `#ffffff` | Text on coral. |
| `colors.on-dark` | `#faf9f5` | Cream-tinted white on dark surfaces (echoes the canvas). |
| `colors.on-dark-soft` | `#a09d96` | Footer body, secondary labels in dark mockups. |

## Semantic
`colors.success` (#5db872) status dots · `colors.warning` (#d4a017) rare callouts ·
`colors.error` (#c64545) validation, e.g. on [text input](/components/text-input.md).

# Do & Don't
- **Do** anchor every page on `canvas`; reserve `primary` (coral) for CTAs and full-bleed coral
  callouts. See [coral is scarce](/guidelines/coral-is-scarce.md).
- **Don't** use cool gray or pure white for the canvas — the warm tint *is* the brand. See
  [cream, not white](/guidelines/cream-not-white.md).

# Citations
[1] [Claude design.md](/references/claude-design-md.md)
[2] [Anthropic brand — live verification](/references/anthropic-brand.md)
