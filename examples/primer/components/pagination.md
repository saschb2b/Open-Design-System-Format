---
type: Component
title: Pagination
description: Numbered page navigation with previous/next and a highlighted current page.
tags: [components, pagination, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/pagination.example.html
tokens:
  Pagination-current:
    background: "{colors.bgColor-accent-emphasis}"
    color: "{colors.fgColor-onEmphasis}"
---

Numbered navigation through a paged list (search results, commits). Previous/Next bookend the page
numbers; the current page fills with `{colors.bgColor-accent-emphasis}`, and unavailable controls are
muted. See [pagination.example.html](/components/pagination.example.html).

# Anatomy
A `.Pagination` row of links: a `Previous`, page-number links, a `…` gap for long ranges, and a
`Next`. The current page is a `<span class="current">`; disabled controls use `.disabled`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Pagination-current.background` | `{colors.bgColor-accent-emphasis}` |
| `Pagination-current.color` | `{colors.fgColor-onEmphasis}` |

# Examples
- [pagination.example.html](/components/pagination.example.html) — a mid-range pager.

# Accessibility
Wrap in `<nav aria-label="Pagination">`; mark the current page with `aria-current="page"`; disabled
controls are non-focusable.

# Do & Don't
- **Do** keep Previous/Next and collapse long ranges with a `…`.
- **Don't** show every page number for large sets; window around the current page.
