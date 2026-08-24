---
type: Component
title: Coral callout card
description: The full-bleed coral CTA — the one place the scarce coral is used generously.
tags: [components, card, cta, coral]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/callout-card-coral.example.html
  - /components/callout-card-coral.wireframe.html
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

# Structure
A column stack, `{spacing.md}` between parts, inside `{spacing.xxl}` padding. Every child is aligned
to the start rather than stretched, so the button stays at its own width instead of spanning the
card.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.display-sm` headline | 1 | wraps at the card width | `{spacing.md}` | unchanged |
| `.body-md` sub-line | 2 | capped at `46ch`, wraps | `{spacing.md}` | unchanged |
| `.btn--on-coral` | 3 | content width (`align-items: flex-start`) | none | unchanged |

The `{spacing.xxl}` padding is the largest in the system and is doing structural work: the callout
reads as a full-bleed band because its inset is roughly double a card's. The `46ch` cap on the
sub-line is a measure limit, not a width setting, so the text column stays readable while the card
itself keeps growing with its container.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `callout-coral.background` | `{colors.primary}` |
| `callout-coral.color` | `{colors.on-primary}` |
| `callout-coral.padding` | `{spacing.xxl}` |

# Examples
- [callout-card-coral.example.html](/components/callout-card-coral.example.html) — a pre-footer CTA.
- [callout-card-coral.wireframe.html](/components/callout-card-coral.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
White on `{colors.primary}` meets AA for large text; keep the body line short and large. The inverted
button must keep a visible focus ring.

# Do & Don't
- **Do** reserve the generous coral for these full-bleed moments. See [coral is scarce](/guidelines/coral-is-scarce.md).
- **Don't** repeat a coral callout in two consecutive bands — it stops being an event. See
  [surface rhythm](/behaviors/surface-rhythm.md).
