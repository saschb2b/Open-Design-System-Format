---
type: Color
title: Color
description: Geist's high-contrast, theme-able color system — a monochrome gray backbone plus seven accent scales, each 100→1000.
tags: [foundations, color, tokens, theming]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  colors:
    gray-100: "hsla(0,0%,95%,1)"
    gray-200: "hsla(0,0%,92%,1)"
    gray-300: "hsla(0,0%,90%,1)"
    gray-400: "hsla(0,0%,92%,1)"
    gray-500: "hsla(0,0%,79%,1)"
    gray-600: "hsla(0,0%,66%,1)"
    gray-700: "hsla(0,0%,56%,1)"
    gray-800: "hsla(0,0%,49%,1)"
    gray-900: "hsla(0,0%,30%,1)"
    gray-1000: "hsla(0,0%,9%,1)"
    background-100: "hsla(0,0%,100%,1)"
    background-200: "hsla(0,0%,98%,1)"
    gray-alpha-100: "#0000000d"
    gray-alpha-200: "#00000014"
    gray-alpha-400: "#00000029"
    gray-alpha-600: "#00000057"
    blue-200: "hsla(210,100%,96%,1)"
    blue-700: "hsla(212,100%,48%,1)"
    blue-900: "hsla(211,100%,42%,1)"
    red-200: "hsla(0,100%,96%,1)"
    red-700: "hsla(358,75%,59%,1)"
    red-900: "hsla(358,66%,48%,1)"
    amber-200: "hsla(44,100%,92%,1)"
    amber-700: "hsla(39,100%,57%,1)"
    amber-900: "hsla(30,100%,32%,1)"
    green-200: "hsla(120,60%,95%,1)"
    green-700: "hsla(131,41%,46%,1)"
    green-900: "hsla(133,50%,32%,1)"
    teal-200: "hsla(167,70%,94%,1)"
    teal-700: "hsla(173,80%,36%,1)"
    teal-900: "hsla(174,91%,25%,1)"
    purple-200: "hsla(277,87%,97%,1)"
    purple-700: "hsla(272,51%,54%,1)"
    purple-900: "hsla(274,71%,43%,1)"
    pink-200: "hsla(340,90%,96%,1)"
    pink-700: "hsla(336,80%,58%,1)"
    pink-900: "hsla(336,65%,45%,1)"
    focus: "hsla(212,100%,48%,1)"
---

Geist's color system is built from **numbered scales** — `gray`, `blue`, `red`, `amber`, `green`,
`teal`, `purple`, `pink`, each running **100 → 1000**. Within a scale, `100`–`300` are subtle fills,
`400`–`600` are borders and muted UI, `700` is the **solid accent**, and `900`–`1000` are text. The
**gray scale is the monochrome backbone** of Geist's stark, high-contrast aesthetic; accent scales
are used sparingly for status and emphasis. Every value is defined for **both light and dark** (the
values below are light); the system re-skins by swapping the scale — see
[theming](/behaviors/theming.md). Read live from `@vercel/geist`; see
[live verification](/references/live-verification.md).

# Roles
| Step band | Role |
|-----------|------|
| `background-100/200` | App and subtle surfaces (`#fff` / `#fafafa` light; near-black dark). |
| `100`–`300` | Subtle fills: hovers, badges, code. |
| `400`–`600` | Borders, dividers, disabled, muted icons. |
| `700` | The scale's solid accent (links, primary status, `blue-700` is Vercel blue). |
| `800`–`900` | Hover/active accent and secondary text. |
| `1000` | Primary text / maximum contrast (`gray-1000`). |

The **inverted primary action** is the system's signature: a [button](/components/button.md) filled
with `gray-1000` and labelled in `background-100` — black-on-white in light, white-on-black in dark.

# Usage
- Reference a **token**, never a literal — that is what makes a component theme. See
  [use the scale](/guidelines/use-the-scale.md).
- Pick by **role/step**: text is `gray-1000`/`gray-900`, borders are `gray-alpha-400`, a primary
  status is the scale's `700`.

# Do & Don't
- **Do** keep the UI monochrome by default; spend accent color only on status and emphasis.
- **Don't** hard-code a hex — it breaks the moment the theme switches.

# Citations
[1] [Geist colors](/references/geist-docs.md)
[2] [Live verification](/references/live-verification.md)
