---
type: Behavior
title: Surface rhythm
description: Alternate surface modes band to band — never repeat a surface in two consecutive bands.
tags: [behaviors, layout, surface, pacing]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

The page's pacing comes from alternating surface modes. This is a system-wide rule, not a
per-section choice, so it lives here and the [landing page](/patterns/landing-page.md) follows it.

# Rule
No two consecutive bands share a surface mode. Cycle through the trinity:

```
cream  →  cream-card  →  dark-mockup  →  cream  →  coral-callout  →  dark-footer
```

The cream-to-dark contrast is the depth (see [elevation](/foundations/elevation.md)); the coral band
appears **once** per page as the voltage moment.

# States (the surface modes)
| Mode | Surface | Typical band |
|------|---------|--------------|
| Cream | `{colors.canvas}` | hero, body sections |
| Cream card | `{colors.surface-card}` | [feature](/components/feature-card.md) grids |
| Dark | `{colors.surface-dark}` | [code mockups](/components/code-window-card.md), footer |
| Coral | `{colors.primary}` | the single [callout](/components/callout-card-coral.md) |

# Accessibility
Each band is a `<section>` with its own heading; surface changes are visual pacing, not structure —
keep heading order logical regardless of background.

# Do & Don't
- **Do** alternate surfaces; pair every cream feature band with a dark product band.
- **Don't** stack two dark bands or two coral bands back to back.
