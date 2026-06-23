---
type: Component
title: Tab nav
description: Boxed tabs for switching between views within a panel.
tags: [components, tab-nav, navigation, tabs]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/tab-nav.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `TabNav-item-selected.background` | `{colors.bgColor-default}` |
| `TabNav-item-selected.border` | `{colors.borderColor-default}` |

# Examples
- [tab-nav.example.html](/components/tab-nav.example.html) — boxed tabs.

# Accessibility
Use `<nav>` with `aria-current="page"` on the active tab (or the ARIA `tablist`/`tab`/`tabpanel`
pattern if the tabs switch in-page panels).

# Do & Don't
- **Do** use boxed tabs inside a contained panel.
- **Don't** mix boxed and underline tab styles in one view.
