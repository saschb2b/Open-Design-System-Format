---
type: Component
title: Breadcrumbs
description: A path of accent links to ancestor locations, ending on the current page.
tags: [components, breadcrumbs, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/breadcrumbs.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Breadcrumb.link` | `{colors.fgColor-accent}` |
| `Breadcrumb.current` | `{colors.fgColor-default}` |

# Examples
- [breadcrumbs.example.html](/components/breadcrumbs.example.html) — a file path.

# Accessibility
Wrap in `<nav aria-label="Breadcrumb">`; mark the final crumb with `aria-current="page"`. Separators
are decorative (`aria-hidden`).

# Do & Don't
- **Do** make the last crumb plain text (the current page).
- **Don't** use breadcrumbs as primary navigation — they orient, they don't replace nav.
