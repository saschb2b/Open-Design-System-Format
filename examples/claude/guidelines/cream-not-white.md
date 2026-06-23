---
type: Guideline
title: Cream, not white
description: Anchor every page on the warm cream canvas; pure white reads as generic AI tooling.
tags: [guidelines, color, brand, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/cream-not-white.dont.html
---

# Rule
The page floor is always `{colors.canvas}` (#faf9f5) — warm cream — never pure white and never a
cool gray.

# Why
The warm tint is the single most recognizable thing about Claude's surface. Every other AI product
ships on cool gray-white; the cream is the counter-position that makes a Claude page feel like a
literary publication the instant it loads. Swap it for #ffffff and the brand evaporates even if
every other token is correct.

# Do
Use `{colors.canvas}` for the body and `{colors.surface-card}` for cards — both warm. The
[landing page](/patterns/landing-page.example.html) sits entirely on cream.

# Don't
Ship on pure white with cool-gray text — see
[cream-not-white.dont.html](/guidelines/cream-not-white.dont.html). It is the same layout on
`#ffffff`, and it reads like a generic SaaS template.

# Citations
[1] [Color](/foundations/color.md)
[2] [Claude design.md](/references/claude-design-md.md)
