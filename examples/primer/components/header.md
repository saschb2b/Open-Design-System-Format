---
type: Component
title: Header
description: The dark global navigation bar at the top of every GitHub page.
tags: [components, header, navigation, shell]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/header.example.html
  - /components/header.wireframe.html
tokens:
  Header:
    background: "{colors.bgColor-emphasis}"
    color: "{colors.fgColor-onEmphasis}"
---

The dark global bar across the top of every GitHub page: the mark, global search, and account
controls. It sits on `{colors.bgColor-emphasis}` with `{colors.fgColor-onEmphasis}` text — one of the
few always-dark surfaces, so it anchors the app the same way in every color mode. See
[header.example.html](/components/header.example.html).

# Anatomy
A `.Header`: the logo, primary links, a flexible `.spacer`, a `.Header-search` field, and account
actions ([avatar](/components/avatar.md), notifications). Links are `{colors.fgColor-onEmphasis}` at
reduced opacity, full on hover.

# Structure
One centred flex row, `{spacing.16}` between children, that never wraps. A zero-width spacer
divides it into a left and a right cluster.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Home mark | 1 | fixed | `{spacing.16}` | unchanged |
| Global nav | 2 | content width; links `{spacing.16}` apart | `{spacing.16}` | unchanged |
| `.spacer` | 3 | `flex: 1`, no content | `{spacing.16}` | unchanged |
| `.Header-search` | 4 | fixed 30px tall | `{spacing.16}` | unchanged |
| `.avatar` | 5 | fixed 32px square | none | unchanged |

The `flex: 1` spacer, not `justify-content: space-between`, is what splits the bar, which lets the
left cluster keep its own even `{spacing.16}` rhythm instead of being pushed apart. The bar has no
breakpoint: it is a single non-wrapping row at every width, so a narrow viewport compresses the
search field rather than collapsing the nav.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Header.background` | `{colors.bgColor-emphasis}` |
| `Header.color` | `{colors.fgColor-onEmphasis}` |

# Examples
- [header.example.html](/components/header.example.html) — the global bar.
- [header.wireframe.html](/components/header.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Wrap in `<header>` with a `<nav aria-label="Global">`; the search field has a label; the logo links
home with an accessible name.

# Do & Don't
- **Do** keep the header dark and consistent across the app.
- **Don't** crowd it — it is global wayfinding, not a place for page actions.
