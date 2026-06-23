---
type: Typography
title: Typography
description: Mona Sans over a system fallback, on a compact 14px-base product scale.
tags: [foundations, typography, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  typography:
    fontStack-sansSerif: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontStack-monospace: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    display:
      fontSize: "40px"
      fontWeight: "400"
      lineHeight: "1.4"
    title-large:
      fontSize: "32px"
      fontWeight: "600"
      lineHeight: "1.25"
    title-medium:
      fontSize: "20px"
      fontWeight: "600"
      lineHeight: "1.3"
    title-small:
      fontSize: "16px"
      fontWeight: "600"
      lineHeight: "1.4"
    body-large:
      fontSize: "16px"
      fontWeight: "400"
      lineHeight: "1.5"
    body-medium:
      fontSize: "14px"
      fontWeight: "400"
      lineHeight: "1.5"
    body-small:
      fontSize: "12px"
      fontWeight: "400"
      lineHeight: "1.4"
---

Primer's product UI runs on a **system font stack** with **Mona Sans** (GitHub's open-source brand
family) preferred for display, falling back to the platform sans so the UI feels native everywhere.
**Body text is 14px** — a deliberately compact base for dense, information-rich application screens.
Code is the monospace stack. Projected as `--text-body-size-medium`, `--fontStack-sansSerif`, etc.,
in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Role | Size / Weight / Line-height | Use |
|------|------------------------------|-----|
| `display` | 40 / 400 / 1.4 | Marketing display headings. |
| `title-large` | 32 / 600 / 1.25 | Page titles (h1). |
| `title-medium` | 20 / 600 / 1.3 | Section headings (h2). |
| `title-small` | 16 / 600 / 1.4 | Subsection headings (h3), [Box](/components/box.md) headers. |
| `body-large` | 16 / 400 / 1.5 | Comfortable reading text. |
| `body-medium` | 14 / 400 / 1.5 | **The product-UI default.** |
| `body-small` | 12 / 400 / 1.4 | [Labels](/components/label.md), captions, metadata. |

Weights are `normal` 400, `medium` 500 ([buttons](/components/button.md), nav), and `semibold` 600
(headings, emphasis). Primer avoids 700 in the product UI.

# Usage
- Default to `body-medium` (14px); reserve `body-large` for long-form prose.
- Headings are weight 600, never heavier — hierarchy comes from size, not bombast.

# Notes on fonts
**Mona Sans** is open-source (SIL OFL) but not bundled here; the stack falls back to the system sans
(`-apple-system`, `Segoe UI`, …), which is what GitHub's product UI actually renders for most users.
Load Mona Sans via `@font-face` if you want the brand display face exactly.

# Citations
[1] [primer.style](/references/primer-style.md)
