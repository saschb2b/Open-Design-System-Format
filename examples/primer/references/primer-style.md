---
type: Reference
title: Primer (primer.style)
description: GitHub's open-source design system — the source this bundle documents.
resource: https://primer.style
tags: [reference, external, design-system]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
Primer is GitHub's open-source design system: the foundations, components, and guidelines behind
GitHub.com and its ecosystem. This bundle documents Primer's product-UI surface so an agent can build
interfaces that look and behave like GitHub.

# Key points
- **Primitives.** Color, typography, spacing, and other tokens ship as
  [@primer/primitives](https://github.com/primer/primitives) — the functional `fgColor-*` / `bgColor-*`
  / `borderColor-*` variables this bundle uses verbatim. See [color](/foundations/color.md).
- **Theme-able.** Light, dark, dark-dimmed, and high-contrast modes come from swapping the token layer
  — see [color modes](/behaviors/color-modes.md).
- **Mona Sans.** GitHub's open-source (SIL OFL) brand typeface; the product UI falls back to the
  system stack. See [typography](/foundations/typography.md).
- **Octicons.** Primer's MIT-licensed icon set ([primer/octicons](https://github.com/primer/octicons));
  the examples here use simple inline-SVG placeholders in their spirit.
- **Accessibility-first.** Visible focus, color-plus-text status, and AA contrast in every mode are
  built into the components.

# Citations
[1] [primer.style](https://primer.style)
[2] [@primer/primitives](https://github.com/primer/primitives)
