---
type: Design System
title: Primer
description: GitHub's open-source design system — functional, theme-able, and accessibility-first.
tags: [overview, design-system, github]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Primer is the design system behind GitHub.com. It is built for **scale and theming**: a neutral,
functional token layer that the whole UI re-skins through, rather than a single fixed palette. This
bundle documents Primer's product-UI surface — verified against the live primer.style DOM (see
[live verification](/references/live-verification.md)).

# Principles
1. **Functional, not literal.** Components reference color *roles* ([color](/foundations/color.md)),
   never hex — so the system themes light, dark, and high-contrast from one set of components. See
   [color modes](/behaviors/color-modes.md).
2. **Content-first and dense.** A 14px base ([typography](/foundations/typography.md)), tight spacing,
   and structure from borders rather than shadows — built for information-rich application screens.
3. **Color carries status, sparingly.** Neutral by default; color is reserved for state (the green
   [primary button](/components/button.md), status [labels](/components/label.md) and
   [banners](/components/banner.md)) and always paired with text or an icon.
4. **Accessible by default.** Visible [focus](/behaviors/focus.md), AA contrast in every mode, and
   [never color alone](/guidelines/color-not-alone.md) are built into the components, not bolted on.

# How to use this bundle
- Start at the [bundle index](/index.md); the [repository page](/patterns/repo-page.example.html) shows
  the whole system composed.
- Link [`/styles/tokens.css`](/styles/tokens.css) — it carries the functional roles for light, dark,
  and auto, using Primer's own variable names so your code matches real Primer.
- Copy structure from a component's `*.example.html`; it already speaks in tokens, so it themes.
- Honor the [behaviors](/behaviors/) and [guidelines](/guidelines/) — especially
  [use functional tokens](/guidelines/use-functional-tokens.md), the rule that makes theming work.

# Notes
Mona Sans and Octicons are open-source GitHub assets; the examples fall back to the system font stack
and use simple inline-SVG icon placeholders. See [primer.style](/references/primer-style.md).
