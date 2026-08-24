---
type: Component
title: Pagination
description: Numbered page navigation with previous/next and a current page.
tags: [components, pagination, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/pagination.example.html
  - /components/pagination.wireframe.html
---

Numbered navigation through a paged list; the current page fills with `{colors.gray-1000}`, others are
bordered surfaces, and Previous/Next bookend the range. For appending a list in place use
[load more](/components/load-more-button.md). See [pagination.example.html](/components/pagination.example.html).

# Structure
An inline flex row of equal-height targets, `4px` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Prev / Next | first, last | content width, `{spacing.2}` side padding | `4px` | unchanged |
| Page numbers | between | `min-width: 32px`, 32px tall | `4px` | unchanged |
| Gap marker | where truncated | same box as a page number | `4px` | unchanged |

`min-width` rather than a fixed width keeps single and double digit pages on the same square while
letting a three-digit page grow. The row does not wrap, so the truncation marker is what bounds its
width. The current page inverts its fill and drops its border shadow, which changes no
measurement.

# Accessibility
Wrap in `<nav aria-label="Pagination">`; mark the current page `aria-current="page"`; disabled controls
are non-focusable.

# Do & Don't
- **Do** window the page numbers around the current one with a "…" gap.
- **Don't** render hundreds of page buttons.
