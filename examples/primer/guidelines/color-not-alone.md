---
type: Guideline
title: Color is not the only signal
description: Status colors must always be paired with an icon or text; never convey meaning by color alone.
tags: [guidelines, accessibility, color, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/color-not-alone.dont.html
---

# Rule
Any state shown with color — success, danger, attention, a current tab — must also be shown with an
**icon, text, or shape**. Color may reinforce meaning; it must never carry it alone.

# Why
Color is invisible to screen readers, unreliable in high-contrast modes, and indistinguishable to the
~1 in 12 people with a color-vision deficiency. A red [banner](/components/banner.md) with no icon
and no words is no signal at all for many users (WCAG 1.4.1). Primer's components bake this in: every
banner leads with a status icon, every [Label](/components/label.md) carries text, and the
[underline nav](/components/underline-nav.md) marks the current tab with weight as well as color.

# Do
Pair the color with a second cue: a check icon **and** "passed"; a red border **and** an error
message. The [banner example](/components/banner.example.html) shows each severity with its icon.

# Don't
Communicate state with color only — see
[color-not-alone.dont.html](/guidelines/color-not-alone.dont.html), where status is shown by bare
colored dots with no label.

# Citations
[1] [WCAG 2.2 — 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
