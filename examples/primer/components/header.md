---
type: Component
title: Header
description: The dark global navigation bar at the top of every GitHub page.
tags: [components, header, navigation, shell]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/header.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Header.background` | `{colors.bgColor-emphasis}` |
| `Header.color` | `{colors.fgColor-onEmphasis}` |

# Examples
- [header.example.html](/components/header.example.html) — the global bar.

# Accessibility
Wrap in `<header>` with a `<nav aria-label="Global">`; the search field has a label; the logo links
home with an accessible name.

# Do & Don't
- **Do** keep the header dark and consistent across the app.
- **Don't** crowd it — it is global wayfinding, not a place for page actions.
