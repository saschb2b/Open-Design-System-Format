---
type: Reference
title: Claude design.md (source brief)
description: The design.md brief this bundle was authored from, plus its declared known gaps.
resource: https://github.com/google-labs-code/design.md
tags: [reference, source, design-tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
This bundle is the ODSF transformation of a [design.md](/references/claude-design-md.md)-format
brief describing the Claude.com marketing surface. The brief's tokens, component list, and do/don'ts
were re-expressed as typed ODSF concepts with runnable HTML/CSS assets, then cross-checked against
the live site (see [Anthropic brand](/references/anthropic-brand.md)).

# What carried over
- The cream + coral + dark-navy trinity, the serif-display / humanist-sans split, the hierarchical
  radius scale, the 96px section rhythm, and the surface-alternation pacing.
- design.md's `{group.name}` token references, preserved verbatim in concept frontmatter.
- The "press only, never hover" interaction rule and the do/don't framing.

# Known gaps (declared in the source brief, still out of scope here)
- **Copernicus / Styrene B are licensed** Anthropic faces; this bundle uses Georgia (display
  fallback) and Inter (body) so examples render without them. See [typography](/foundations/typography.md).
- **The Anthropic spike-mark** is a licensed brand glyph; examples use a sunburst placeholder.
- **Animation timings** (chat reveal, code typewriter, agentic-flow diagrams) are out of scope; see
  [motion](/foundations/motion.md).
- **Form validation states** beyond focus are not extracted.
- **The claude.ai product surface** (chat bubbles, message tools, history sidebar) shares some tokens
  but adds product-specific components outside this marketing scope.

# Citations
[1] [design.md specification](https://github.com/google-labs-code/design.md)
