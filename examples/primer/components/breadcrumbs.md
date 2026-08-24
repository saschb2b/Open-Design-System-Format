---
type: Component
title: Breadcrumbs
description: A path of accent links to ancestor locations, ending on the current page.
tags: [components, breadcrumbs, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/breadcrumbs.example.html
  - /components/breadcrumbs.wireframe.html
tokens:
  Breadcrumb:
    link: "{colors.fgColor-accent}"
    separator: "{colors.fgColor-muted}"
    current: "{colors.fgColor-default}"
---

A horizontal trail showing where the current page sits in a hierarchy — a file path, nested settings.
Ancestors are `{colors.fgColor-accent}` links separated by muted slashes; the final crumb is the
current page in `{colors.fgColor-default}`, not a link. See
[breadcrumbs.example.html](/components/breadcrumbs.example.html).

# Structure
One centred flex row, `{spacing.8}` between every child, including the separators.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Ancestor link | 1..n-1 | content width | `{spacing.8}` | unchanged |
| `.sep` slash | between | content width | `{spacing.8}` | unchanged |
| `.current` leaf | last | content width | none | unchanged |

Separators are real elements in the gap sequence rather than generated content, so the rhythm is
even on both sides of each slash. The trail does not wrap or truncate on its own: at narrow widths
it overflows, so a deep path needs a container that scrolls or a shortened middle.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Breadcrumb.link` | `{colors.fgColor-accent}` |
| `Breadcrumb.current` | `{colors.fgColor-default}` |

# Examples
- [breadcrumbs.example.html](/components/breadcrumbs.example.html) — a file path.
- [breadcrumbs.wireframe.html](/components/breadcrumbs.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Wrap in `<nav aria-label="Breadcrumb">`; mark the final crumb with `aria-current="page"`. Separators
are decorative (`aria-hidden`).

# Do & Don't
- **Do** make the last crumb plain text (the current page).
- **Don't** use breadcrumbs as primary navigation — they orient, they don't replace nav.
