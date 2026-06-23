---
type: Reference
title: Icons
description: Geist Icons — a consistent line-icon set tailored for developer tools.
resource: https://vercel.com/geist/icons
tags: [foundations, icons, reference]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Geist ships an **icon set tailored for developer tools** — a large, consistent line-icon family drawn
on a 16px/24px grid with a uniform stroke. Icons inherit `currentColor`, so they take their color from
the surrounding text token (`gray-900` muted, `gray-1000` primary, an accent `700` for status) and
theme automatically.

# Usage
- Size icons to the text they sit beside (16px in 14px UI; 24px in headings).
- Color via `currentColor`; never hard-code an icon color.
- Decorative icons get `aria-hidden="true"`; meaningful ones get a label.

The examples in this bundle use simple inline-SVG placeholders in the spirit of Geist Icons (the real
set is a licensed React package). See [Geist Icons](https://vercel.com/geist/icons).

# Do & Don't
- **Do** keep a single stroke weight and inherit color from text.
- **Don't** mix icon families; consistency of stroke and grid is the system.

# Citations
[1] [Geist Icons](https://vercel.com/geist/icons)
