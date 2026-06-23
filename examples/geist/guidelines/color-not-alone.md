---
type: Guideline
title: Color is not the only signal
description: Status color must always be paired with an icon or text; never convey meaning by color alone.
tags: [guidelines, accessibility, color, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/color-not-alone.dont.html
---

# Rule
Any state shown with color — Ready, Building, Error — must also be shown with **text or an icon**.
Color may reinforce meaning; it must never carry it alone.

# Why
Color is invisible to screen readers, unreliable in high-contrast modes, and indistinguishable to the
~1 in 12 people with a color-vision deficiency. A bare colored dot is no signal at all for many users
(WCAG 1.4.1). Geist bakes this in: every [status dot](/components/status-dot.md) carries a word, every
[badge](/components/badge.md) has text, and [notes](/components/note.md) lead with a severity icon.

# Do
Pair the color with a label: a green dot **and** "Ready"; a red border **and** an error message. The
[status dot example](/components/status-dot.example.html) shows each state with its word.

# Don't
Communicate state with color only — see
[color-not-alone.dont.html](/guidelines/color-not-alone.dont.html), bare colored dots with no labels.

# Citations
[1] [WCAG 2.2 — 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
