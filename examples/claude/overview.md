---
type: Design System
title: Claude
description: Anthropic's warm, editorial design language for the Claude marketing surface.
tags: [overview, design-system, brand]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Claude is the warmest, most editorial interface in the AI-product category. This bundle encodes its
marketing design language so an agent can build pages that look and behave like Claude — verified
against the live claude.com DOM (see [Anthropic brand](/references/anthropic-brand.md)) and authored
from a [design.md brief](/references/claude-design-md.md).

# The trinity
The system is three surfaces in deliberate alternation:

1. **Cream canvas** (`{colors.canvas}` #faf9f5) — the warm default floor, deliberately not white.
2. **Coral accent** (`{colors.primary}` #cc785c) — the scarce signature voltage, on CTAs and the one
   full-bleed [callout](/components/callout-card-coral.md) per page.
3. **Dark navy** (`{colors.surface-dark}` #181715) — where Claude shows real product chrome:
   [code mockups](/components/code-window-card.md), featured pricing, the [footer](/components/footer.md).

# Principles
1. **Editorial, not SaaS.** A serif display ([typography](/foundations/typography.md)) at a light
   weight over humanist sans gives Claude a literary voice. The serif/sans split is unbreakable.
2. **Warmth is the brand.** Cream over white, warm ink over cool slate, coral over blue — a
   deliberate counter-position to every other AI product. See [cream, not white](/guidelines/cream-not-white.md).
3. **Scarcity is voltage.** The coral leads because it is rare. See [coral is scarce](/guidelines/coral-is-scarce.md).
4. **Pacing through surfaces.** Depth and rhythm come from alternating cream and dark bands, not from
   shadows. See [surface rhythm](/behaviors/surface-rhythm.md) and [elevation](/foundations/elevation.md).
5. **Calm, not flashy.** Controls react on press, not hover; motion is minimal. See
   [press states only](/behaviors/press-states-only.md).

# How to use this bundle
- Start at the [bundle index](/index.md); the [landing page](/patterns/landing-page.example.html) shows
  the whole system composed.
- Pull the foundations you need, or link [`/styles/tokens.css`](/styles/tokens.css) — the runnable
  projection of every token.
- Copy structure from a component's `*.example.html`; restyle it with the same `tokens.css`.
- Honor the [behaviors](/behaviors/) and [guidelines](/guidelines/) — they are what keep output *on
  brand* rather than merely plausible.

# Substitutes
Copernicus and Styrene B are licensed; examples fall back to Georgia (display) and load Inter (body)
and JetBrains Mono (code). The Anthropic spike-mark is a logo asset, shown here as a placeholder. See
[Known gaps](/references/claude-design-md.md).
