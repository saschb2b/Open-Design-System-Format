---
type: Component
title: Top navigation
description: The 64px cream nav bar with the brand wordmark, menu, and a coral "Try Claude" CTA.
tags: [components, navigation, header]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/top-nav.example.html
  - /components/top-nav.wireframe.html
tokens:
  top-nav:
    height: "64px"
    background: "{colors.canvas}"
    border: "{colors.hairline-soft}"
    typography: "{typography.nav-link}"
---

A cream bar pinned to the top of every page: the Anthropic spike-mark + "Claude" wordmark at left,
the primary menu center-left, and a right cluster with a "Sign in" text link and a coral
[Try Claude button](/components/button.md). See
[top-nav.example.html](/components/top-nav.example.html).

# Anatomy
`.top-nav` (64px, `{colors.canvas}`, `{colors.hairline-soft}` bottom border) → `.wordmark` (mark +
"Claude") → `.top-nav__menu` links in `{typography.nav-link}` (Styrene B 14/500) → `.top-nav__right`
with `.btn--text` "Sign in" and `.btn--primary` "Try Claude".

# Structure
One flex row, vertically centred, at a fixed 64px height with `{spacing.lg}` inline padding. It
never wraps. The menu is the only flexible child, so it absorbs all slack and pushes the right
cluster to the far edge; DOM order and visual order agree left to right.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.wordmark` | 1 | fixed (20px mark + label, `{spacing.xs}` between them) | `{spacing.xl}` | unchanged |
| `.top-nav__menu` | 2 | grows (`flex: 1`); links in a row, `{spacing.lg}` apart | `{spacing.xl}` | hidden below `{breakpoints.tablet}` |
| `.top-nav__right` | 3 | fixed; row, `{spacing.md}` apart, centred | none | unchanged |

Below `{breakpoints.tablet}` the menu is removed rather than collapsed, and because it is the only
growing child, the wordmark and the right cluster close up against the left edge instead of holding
opposite ends. The hamburger described under Variants & States is the intended replacement and is
not in the markup yet, so the wireframe at narrow widths shows the bar with nothing between the
wordmark and the buttons.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `top-nav.background` | `{colors.canvas}` |
| `top-nav.border` | `{colors.hairline-soft}` |
| `top-nav.typography` | `{typography.nav-link}` |

# Variants & States
Collapses to a hamburger that opens a full-screen cream sheet below 768px — see
[layout](/foundations/layout.md). The bar itself is flat (no shadow), per
[elevation](/foundations/elevation.md).

# Examples
- [top-nav.example.html](/components/top-nav.example.html) — full desktop nav.
- [top-nav.wireframe.html](/components/top-nav.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `<nav>` with a list of links; the wordmark links home with an `aria-label`. The spike-mark is a
licensed brand glyph — the example uses a sunburst placeholder (see
[Known gaps](/references/claude-design-md.md)).

# Do & Don't
- **Do** keep the bar flat on the cream canvas; let the hairline divide it from content.
- **Don't** invert the spike-mark to white inside the wordmark on cream.
