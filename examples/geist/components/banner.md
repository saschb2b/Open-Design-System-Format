---
type: Component
title: Banner
description: A full-width message bar pinned above content, neutral or accent.
tags: [components, banner, message, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/banner.example.html
---

A page-spanning bar for global messages — maintenance windows, announcements, account warnings.
Neutral (`{colors.gray-100}` with a hairline) or a solid accent fill for emphasis. For a callout
inside content use a [note](/components/note.md); for product/environment context use a
[project banner](/components/project-banner.md). See [banner.example.html](/components/banner.example.html).

# Accessibility
Use `role="status"` (or `alert` for urgent); make any dismiss a real labelled `<button>`.

# Do & Don't
- **Do** keep banners brief with at most one action.
- **Don't** stack multiple banners; collapse to the most important.
