---
type: Component
title: Pagination
description: Numbered page navigation with previous/next and a current page.
tags: [components, pagination, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/pagination.example.html
---

Numbered navigation through a paged list; the current page fills with `{colors.gray-1000}`, others are
bordered surfaces, and Previous/Next bookend the range. For appending a list in place use
[load more](/components/load-more-button.md). See [pagination.example.html](/components/pagination.example.html).

# Accessibility
Wrap in `<nav aria-label="Pagination">`; mark the current page `aria-current="page"`; disabled controls
are non-focusable.

# Do & Don't
- **Do** window the page numbers around the current one with a "…" gap.
- **Don't** render hundreds of page buttons.
