---
type: Spacing
title: Spacing
description: A 4px-based scale with a 96px section rhythm that gives Claude its editorial pacing.
tags: [foundations, spacing, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  spacing:
    xxs: "4px"
    xs: "8px"
    sm: "12px"
    md: "16px"
    lg: "24px"
    xl: "32px"
    xxl: "48px"
    section: "96px"
---

A 4px base unit, with a generous **96px section rhythm** between major bands. The combination of a
cream canvas, serif display, and roomy internal padding is what makes Claude pace like a long-form
magazine column rather than a marketing template. Projected as `--spacing-md`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Typical use |
|-------|-------|-------------|
| `spacing.xxs` | `4px` | Hairline gaps: icon-to-text, checklist marks. |
| `spacing.xs` | `8px` | Compact gaps between sibling controls. |
| `spacing.sm` | `12px` | Button vertical padding, tight stacks. |
| `spacing.md` | `16px` | Default gaps and content padding. |
| `spacing.lg` | `24px` | Code-window and tile padding, grid gaps. |
| `spacing.xl` | `32px` | [Feature](/components/feature-card.md) and [pricing](/components/pricing-tier-card.md) card padding. |
| `spacing.xxl` | `48px` | Inside [coral callout cards](/components/callout-card-coral.md). |
| `spacing.section` | `96px` | Vertical rhythm between major page bands. |

# Usage
- Apply `{spacing.section}` between every major band — the uniform 96px gap is the page's metronome.
- Keep internal card padding generous (`{spacing.xl}`); let type breathe.

# Do & Don't
- **Do** snap every dimension to a step.
- **Don't** tighten section spacing to fit more above the fold; the breathing room is the brand.
