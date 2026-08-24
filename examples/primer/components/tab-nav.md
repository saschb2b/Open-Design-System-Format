---
type: Component
title: Tab nav
description: Boxed tabs for switching between views within a panel.
tags: [components, tab-nav, navigation, tabs]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/tab-nav.example.html
  - /components/tab-nav.wireframe.html
tokens:
  TabNav-item-selected:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
---

Boxed tabs — the selected tab reads as a folder lifted to the content surface, bordered and joined to
the panel below. Use it inside a card or panel; for top-level page sections prefer the
[underline nav](/components/underline-nav.md). See [tab-nav.example.html](/components/tab-nav.example.html).

# Anatomy
A `.TabNav` (bottom border) of `.TabNav-item` links; the active one carries `.TabNav-item--selected`
(filled to `{colors.bgColor-default}`, bordered, seam joined to the panel) and `aria-current`.

# Structure
A flex row of tabs sitting on a shared bottom rule, `{spacing.4}` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.TabNav-item` | 1..n | content width, `{spacing.8} {spacing.16}` padding | `{spacing.4}` | unchanged |

Each tab carries a transparent border and `margin-bottom: -1px`, which pulls it down onto the
container rule so the selected tab can paint over that rule and appear joined to the panel below.
The border is present in every state, so selection changes colour without changing the box and the
row does not jump. The row does not wrap or scroll, which bounds the usable tab count.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `TabNav-item-selected.background` | `{colors.bgColor-default}` |
| `TabNav-item-selected.border` | `{colors.borderColor-default}` |

# Examples
- [tab-nav.example.html](/components/tab-nav.example.html) — boxed tabs.
- [tab-nav.wireframe.html](/components/tab-nav.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `<nav>` with `aria-current="page"` on the active tab (or the ARIA `tablist`/`tab`/`tabpanel`
pattern if the tabs switch in-page panels).

# Do & Don't
- **Do** use boxed tabs inside a contained panel.
- **Don't** mix boxed and underline tab styles in one view.
