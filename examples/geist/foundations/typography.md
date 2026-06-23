---
type: Typography
title: Typography
description: Geist Sans and Geist Mono, Vercel's typefaces, on a precise functional type scale.
tags: [foundations, typography, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  typography:
    fontFamily-sans: 'Geist, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontFamily-mono: '"Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    label-13:
      fontSize: "13px"
      fontWeight: "500"
      lineHeight: "1.4"
    copy-14:
      fontSize: "14px"
      fontWeight: "400"
      lineHeight: "1.5"
    copy-16:
      fontSize: "16px"
      fontWeight: "400"
      lineHeight: "1.5"
    heading-20:
      fontSize: "20px"
      fontWeight: "600"
      lineHeight: "1.3"
    heading-24:
      fontSize: "24px"
      fontWeight: "600"
      lineHeight: "1.25"
    heading-32:
      fontSize: "32px"
      fontWeight: "600"
      lineHeight: "1.15"
    heading-48:
      fontSize: "48px"
      fontWeight: "600"
      lineHeight: "1.1"
---

Geist runs on **Geist Sans** and **Geist Mono** — Vercel's open-source typefaces, a clean
neo-grotesque sans and a precise monospace tuned for code and developer tools. The product UI base is
**14px**; copy and headings step through a tight scale. Headings use weight 600 with negative
tracking; body is 400. Projected as `--font-geist-sans`, `--font-geist-mono` in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Role | Size / Weight | Use |
|------|----------------|-----|
| `label-13` | 13 / 500 | [Labels](/components/label.md), captions, metadata. |
| `copy-14` | 14 / 400 | **Product-UI default.** |
| `copy-16` | 16 / 400 | Comfortable reading text. |
| `heading-20`…`heading-48` | 20–48 / 600 | Section and page headings (negative tracking). |

Code uses `fontFamily-mono` ([Geist Mono](/components/code.md)) at 13px.

# Notes on fonts
Geist Sans/Mono are open-source (OFL) but not bundled here; the stacks fall back to **Inter** (sans)
and the system monospace, which read very close to Geist. Load the real faces via `@font-face` for
exact fidelity.

# Do & Don't
- **Do** keep headings at weight 600 with tight tracking; let size carry hierarchy.
- **Don't** mix in other families; Geist's voice is the two-typeface system.

# Citations
[1] [Geist typography](/references/geist-docs.md)
