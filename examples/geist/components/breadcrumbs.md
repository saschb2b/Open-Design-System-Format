---
type: Component
title: Breadcrumbs
description: A trail of links showing the current location in a hierarchy.
tags: [components, breadcrumbs, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/breadcrumbs.example.html
---

A horizontal trail showing where the current view sits — team / project / deployment. Ancestors are
muted (`{colors.gray-900}`) links separated by slashes; the final crumb is the current page in
`{colors.gray-1000}`. See [breadcrumbs.example.html](/components/breadcrumbs.example.html).

# Accessibility
Wrap in `<nav aria-label="Breadcrumb">`; mark the last crumb `aria-current="page"`; separators are
decorative (`aria-hidden`).

# Do & Don't
- **Do** make the last crumb plain text.
- **Don't** use breadcrumbs as the primary navigation.
