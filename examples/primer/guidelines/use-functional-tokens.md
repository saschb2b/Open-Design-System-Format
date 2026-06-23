---
type: Guideline
title: Use functional tokens
description: Reference a color role, never a literal value — it is the only way components survive a theme switch.
tags: [guidelines, color, theming, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/use-functional-tokens.dont.html
---

# Rule
Style every element with a **functional token** (`var(--bgColor-default)`, `var(--fgColor-default)`,
`var(--borderColor-default)`), never a literal hex.

# Why
A literal hex is correct in exactly one mode. The moment the page switches to dark, hard-coded light
values stay light — a glaring white card on a near-black page, dark text that vanishes. Functional
tokens re-resolve per mode, so the same element is correct in light, dark, and high-contrast without
being touched. This is the whole mechanism behind [color modes](/behaviors/color-modes.md).

# Do
Reference roles: `background: var(--bgColor-default); color: var(--fgColor-default); border: 1px solid
var(--borderColor-default);`. Every component in this bundle does, which is why the
[button example](/components/button.example.html) themes for free.

# Don't
Hard-code values — see
[use-functional-tokens.dont.html](/guidelines/use-functional-tokens.dont.html), where one card uses
tokens and one uses literal hex, both inside a dark-mode container. The token card adapts; the
hard-coded one stays stuck in light and breaks.

# Citations
[1] [Color](/foundations/color.md)
[2] [Color modes](/behaviors/color-modes.md)
