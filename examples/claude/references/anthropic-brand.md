---
type: Reference
title: Anthropic brand — live verification
description: What was confirmed against the live claude.com DOM, and where it differs from the brief.
resource: https://claude.com
tags: [reference, external, verification]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
The signature tokens in this bundle were checked against the live claude.com DOM on 2026-06-23 with
a browser. The brand DNA matched; a few values were refined from the source brief.

# Confirmed exactly
- **Canvas** computes to `#faf9f5` and **ink** to `#141413` — the two defining colors, verbatim.
- The display family is a **custom serif** (`anthropicSerif`, Georgia serif fallback) and the body
  family a **custom humanist sans** (`anthropicSans`) — confirming the serif/sans split.
- Dark navy product surfaces, coral CTAs, pricing tiers, a dark footer, and the spike-mark are all
  present on the live homepage.

# Refined from the brief
- **Display weight** is lighter on the live face (~330) than the brief's 400; our tokens keep 400
  because the open substitutes (Georgia / Tiempos) have no 330. See [typography](/foundations/typography.md).
- **Coral**: the live primary CTA sampled at `#c6613f`, a slightly deeper coral than the documented
  `#cc785c`. This bundle keeps `#cc785c` (the canonical Anthropic coral and the brief's value) as
  `{colors.primary}`, with `#a9583e` as the press state — the live `#c6613f` sits between them.
- The live homepage currently leads with a **dark** hero rather than cream; the cream-canvas
  editorial system documented here is Anthropic's broader brand language and the brief's subject.

# Caveat
A live site is a moving target; this is a dated snapshot. The `timestamp` and the cited URL are how
to re-check it.

# Citations
[1] [claude.com](https://claude.com)
[2] [Claude design.md (source brief)](/references/claude-design-md.md)
