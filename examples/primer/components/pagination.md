---
type: Component
title: Pagination
description: Numbered page navigation with previous/next and a highlighted current page.
tags: [components, pagination, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/pagination.example.html
  - /components/pagination.wireframe.html
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

# Structure
An inline flex row of equal-height targets, `{spacing.4}` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Previous / Next | first, last | content width, `10px` side padding | `{spacing.4}` | unchanged |
| Page numbers | between | `min-width: 32px`, 32px tall, centred | `{spacing.4}` | unchanged |
| Gap marker | where truncated | same box as a page number | `{spacing.4}` | unchanged |

`min-width` rather than a fixed width is what keeps single and double digit pages on the same
square while letting a three-digit page grow. The row does not wrap, so the truncation marker is
the mechanism that bounds its width: with enough pages the strip would otherwise overflow.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Pagination-current.background` | `{colors.bgColor-accent-emphasis}` |
| `Pagination-current.color` | `{colors.fgColor-onEmphasis}` |

# Examples
- [pagination.example.html](/components/pagination.example.html) — a mid-range pager.
- [pagination.wireframe.html](/components/pagination.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Wrap in `<nav aria-label="Pagination">`; mark the current page with `aria-current="page"`; disabled
controls are non-focusable.

# Do & Don't
- **Do** keep Previous/Next and collapse long ranges with a `…`.
- **Don't** show every page number for large sets; window around the current page.
