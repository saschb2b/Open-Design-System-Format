---
type: Reference
title: Geist (vercel.com/geist)
description: Vercel's open-source design system — the source this bundle documents.
resource: https://vercel.com/geist
tags: [reference, external, design-system]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
Geist is Vercel's design system: the foundations, components, and brand assets behind Vercel,
Next.js, and the broader Vercel product surface. This bundle documents Geist's public foundations
(color, typography, grid, materials, icons) and its full component library so an agent can build
interfaces that look and behave like Vercel.

# Key points
- **Tokens** ship as `--ds-*` CSS variables (`@vercel/geist`) — numbered color scales, radius, shadows
  — used here verbatim. See [color](/foundations/color.md).
- **Theme-able.** Every token is defined for light and dark; the UI re-skins by swapping the scale —
  see [theming](/behaviors/theming.md).
- **Geist Sans / Geist Mono.** Vercel's open-source typefaces; the product UI base is 14px. See
  [typography](/foundations/typography.md).
- **High-contrast and monochrome-first.** The gray scale is the backbone; accent color is reserved for
  status and emphasis.
- **React component library.** Geist is consumed as React components; this bundle captures the tokens
  and reference HTML/CSS structure, not the (hashed) class names.

# Citations
[1] [vercel.com/geist](https://vercel.com/geist)
