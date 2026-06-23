---
type: Component
title: Truncate
description: Shortens overflowing text to one line with a trailing ellipsis.
tags: [components, truncate, text, utility]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/truncate.example.html
---

A utility that clips a long single line of text with an ellipsis so it fits a constrained space — a
branch name in a row, a long title in a table cell. The full text stays available via `title` and to
assistive tech. See [truncate.example.html](/components/truncate.example.html).

# Anatomy
A `.Truncate` element with a `max-width`; it clips overflow to one line with `text-overflow: ellipsis`.

# Examples
- [truncate.example.html](/components/truncate.example.html) — a clipped vs. full string.

# Accessibility
Put the full text in a `title` (and don't hide it from assistive tech) so it stays available even when
visually clipped.

# Do & Don't
- **Do** truncate in tight rows where wrapping would break the layout.
- **Don't** truncate essential text without a way to read the full value.
