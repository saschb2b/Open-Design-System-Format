---
type: Guideline
title: Use the scale
description: Reference a token from the color scale, never a literal hex — it's the only way a component themes.
tags: [guidelines, color, theming, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/use-the-scale.dont.html
---

# Rule
Style every element with a **scale token** (`var(--ds-gray-1000)`, `var(--ds-background-100)`,
`var(--ds-gray-alpha-400)`), never a literal hex.

# Why
A literal hex is correct in exactly one theme. The moment the UI switches to dark, hard-coded light
values stay light — a glaring white card on a near-black page, ink text that vanishes. Scale tokens
re-resolve per theme, so the same element is right in light, dark, and high-contrast untouched. This
is the entire mechanism behind [theming](/behaviors/theming.md).

# Do
Reference the scale: `background: var(--ds-background-100); color: var(--ds-gray-1000); box-shadow:
var(--ds-shadow-border);`. Every component in this bundle does, which is why the
[button](/components/button.example.html) themes for free.

# Don't
Hard-code values — see [use-the-scale.dont.html](/guidelines/use-the-scale.dont.html), where one card
uses tokens and one uses literal hex, both on a dark stage. The token card adapts; the hard-coded one
breaks.

# Citations
[1] [Color](/foundations/color.md)
[2] [Theming](/behaviors/theming.md)
