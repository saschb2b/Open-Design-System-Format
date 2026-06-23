---
type: Typography
title: Typography
description: The editorial serif-display / humanist-sans split that gives Claude its literary voice.
tags: [foundations, typography, tokens, brand]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  typography:
    fontFamily-display: '"Tiempos Headline", Georgia, "Times New Roman", serif'
    fontFamily-sans: '"Styrene B", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    fontFamily-code: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    display-xl:
      fontFamily: '"Tiempos Headline", Georgia, serif'
      fontSize: "64px"
      fontWeight: "400"
      lineHeight: "1.05"
      letterSpacing: "-1.5px"
    display-lg:
      fontFamily: '"Tiempos Headline", Georgia, serif'
      fontSize: "48px"
      fontWeight: "400"
      lineHeight: "1.1"
      letterSpacing: "-1px"
    display-md:
      fontFamily: '"Tiempos Headline", Georgia, serif'
      fontSize: "36px"
      fontWeight: "400"
      lineHeight: "1.15"
      letterSpacing: "-0.5px"
    display-sm:
      fontFamily: '"Tiempos Headline", Georgia, serif'
      fontSize: "28px"
      fontWeight: "400"
      lineHeight: "1.2"
      letterSpacing: "-0.3px"
    title-lg:
      fontSize: "22px"
      fontWeight: "500"
      lineHeight: "1.3"
    title-md:
      fontSize: "18px"
      fontWeight: "500"
      lineHeight: "1.4"
    title-sm:
      fontSize: "16px"
      fontWeight: "500"
      lineHeight: "1.4"
    body-md:
      fontSize: "16px"
      fontWeight: "400"
      lineHeight: "1.55"
    body-sm:
      fontSize: "14px"
      fontWeight: "400"
      lineHeight: "1.55"
    caption:
      fontSize: "13px"
      fontWeight: "500"
      lineHeight: "1.4"
    caption-uppercase:
      fontSize: "12px"
      fontWeight: "500"
      letterSpacing: "1.5px"
    code:
      fontSize: "14px"
      fontWeight: "400"
      lineHeight: "1.6"
    button:
      fontSize: "14px"
      fontWeight: "500"
      lineHeight: "1"
    nav-link:
      fontSize: "14px"
      fontWeight: "500"
      lineHeight: "1.4"
---

Two families, one editorial split. A **slab-serif display** (Copernicus; on the live site the
custom face is `anthropicSerif`, with a **Georgia** serif fallback) carries every headline at a
light weight with negative tracking. A **humanist sans** (Styrene B; `anthropicSans` on the live
site, Inter as the open substitute) carries body, navigation, and UI. **JetBrains Mono** carries
code. The serif/sans split is what makes Claude read like a literary publication rather than a SaaS
template — it is the single most load-bearing typographic decision. Projected as
`--typography-display-xl-fontSize`, etc., in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Role | Size / Weight / Line-height / Tracking | Family | Use |
|------|------------------------------------------|--------|-----|
| `display-xl` | 64 / 400 / 1.05 / -1.5px | serif | Homepage h1 |
| `display-lg` | 48 / 400 / 1.1 / -1px | serif | Section heads |
| `display-md` | 36 / 400 / 1.15 / -0.5px | serif | Sub-section heads, model names |
| `display-sm` | 28 / 400 / 1.2 / -0.3px | serif | Pricing prices, callout headlines |
| `title-lg` | 22 / 500 / 1.3 | sans | Pricing plan labels |
| `title-md` | 18 / 500 / 1.4 | sans | Feature card titles |
| `title-sm` | 16 / 500 / 1.4 | sans | Tile titles, labels |
| `body-md` | 16 / 400 / 1.55 | sans | Default running text |
| `body-sm` | 14 / 400 / 1.55 | sans | Footer, fine print |
| `caption` | 13 / 500 / 1.4 | sans | Badge labels |
| `caption-uppercase` | 12 / 500 / +1.5px | sans | Category tags, NEW badges |
| `code` | 14 / 400 / 1.6 | mono | Code blocks |
| `button` | 14 / 500 / 1.0 | sans | Button labels |
| `nav-link` | 14 / 500 / 1.4 | sans | Top-nav items |

# Principles
- **Display is regular weight, never bold.** Copernicus reads as considered at weight 400 (the
  licensed face is even lighter, ~330 on the live site); at 700 it turns bombastic. See
  [serif display, never bold](/guidelines/serif-display-never-bold.md).
- **Negative tracking on display is essential.** −0.3 to −1.5px tightens the serif into a headline;
  without it the display reads loose and off-brand.
- **Body is humanist, never geometric.** Styrene B / Inter; Helvetica or Arial would be too neutral
  and break the warm-editorial feel.

# Notes on substitutes
Copernicus / Styrene B are licensed Anthropic faces, unavailable as public web fonts. For display,
**Tiempos Headline** is the nearest licensed match and **EB Garamond / Cormorant Garamond** the
nearest open ones; the examples fall back to **Georgia** (claude.com's own fallback) so they render
with no external display font. For body, **Inter** is a close open match and is loaded by
[`/styles/tokens.css`](/styles/tokens.css).

# Citations
[1] [Claude design.md](/references/claude-design-md.md)
[2] [Anthropic brand — live verification](/references/anthropic-brand.md)
