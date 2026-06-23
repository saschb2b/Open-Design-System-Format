---
type: Design System
title: Geist
description: Vercel's open-source design system — high-contrast, monochrome-first, and fully theme-able.
tags: [overview, design-system, vercel]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Geist is the design system behind Vercel and Next.js: stark, geometric, and high-contrast, built for
developer tools. Its hallmark is a **monochrome foundation** — the gray scale carries the UI, accent
color is reserved for status — and a **fully theme-able token layer** that re-skins the entire
interface light↔dark. This bundle documents Geist's public foundations and its complete component
library, verified against the live vercel.com/geist DOM (see
[live verification](/references/live-verification.md)).

# Principles
1. **Tokens, not values.** Color is a set of numbered [scales](/foundations/color.md) (gray + 7
   accents, 100→1000); components reference a token, never a hex, so they theme. See
   [use the scale](/guidelines/use-the-scale.md).
2. **Theme-able by design.** Light, dark, and auto come from swapping the token layer — see
   [theming](/behaviors/theming.md).
3. **Monochrome-first, high-contrast.** The gray scale is the backbone; the inverted
   [primary button](/components/button.md) (ink fill, surface text) is the signature.
4. **Structure from borders, not shadows.** 1px hairlines and the muted/default contrast build depth;
   shadows are reserved for floating layers — see [elevation](/foundations/elevation.md).
5. **Geometric and precise.** A 4px [grid](/foundations/grid.md), a 6px radius, and
   [Geist Sans / Mono](/foundations/typography.md) give the calm, drafting-table feel.

# How to use this bundle
- Start at the [bundle index](/index.md); the [dashboard](/patterns/dashboard.example.html) shows the
  whole system composed.
- Link [`/styles/tokens.css`](/styles/tokens.css) — it carries the full scale system for light, dark,
  and auto, using Geist's own variable names so your code matches real Geist.
- Copy structure from a component's `*.example.html`; it speaks in tokens, so it themes.
- Honor the [behaviors](/behaviors/) and [guidelines](/guidelines/).

# Notes
Geist is a React component library; this bundle captures the tokens and reference HTML/CSS, not the
hashed class names. Geist Sans/Mono and Geist Icons are open-source assets; examples fall back to
Inter / the system monospace and use simple icon placeholders. See
[Geist](/references/geist-docs.md).
