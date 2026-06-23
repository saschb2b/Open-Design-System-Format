---
type: Component
title: Coral callout card
description: The full-bleed coral CTA — the one place the scarce coral is used generously.
tags: [components, card, cta, coral]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/callout-card-coral.example.html
tokens:
  callout-coral:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    radius: "{radius.lg}"
    padding: "{spacing.xxl}"
---

The coral callout is the brand's voltage moment: a full-bleed `{colors.primary}` surface carrying a
major CTA. The coral is scarce on individual elements precisely so it lands here. The headline stays
in the **serif display** even on coral, and the button inverts to a cream
[`.btn--on-coral`](/components/button.md). See
[callout-card-coral.example.html](/components/callout-card-coral.example.html).

# Anatomy
`.callout-coral` (`{colors.primary}`, `{colors.on-primary}` text, `{radius.lg}`, `{spacing.xxl}`
padding) → a `{typography.display-sm}` serif headline → a sub-line → a cream `.btn--on-coral`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `callout-coral.background` | `{colors.primary}` |
| `callout-coral.color` | `{colors.on-primary}` |
| `callout-coral.padding` | `{spacing.xxl}` |

# Examples
- [callout-card-coral.example.html](/components/callout-card-coral.example.html) — a pre-footer CTA.

# Accessibility
White on `{colors.primary}` meets AA for large text; keep the body line short and large. The inverted
button must keep a visible focus ring.

# Do & Don't
- **Do** reserve the generous coral for these full-bleed moments. See [coral is scarce](/guidelines/coral-is-scarce.md).
- **Don't** repeat a coral callout in two consecutive bands — it stops being an event. See
  [surface rhythm](/behaviors/surface-rhythm.md).
