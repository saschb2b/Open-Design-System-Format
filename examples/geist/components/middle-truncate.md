---
type: Component
title: Middle truncate
description: Truncates a string in the middle, keeping both ends visible.
tags: [components, truncate, text, utility]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/middle-truncate.example.html
---

Clips a long string in the **middle** with an ellipsis, keeping the start and the end visible — ideal
for hashes, file paths, and URLs where both ends carry meaning (`design-…-7a1b9c3.vercel.app`). The
full value stays available via `title` and copy. See
[middle-truncate.example.html](/components/middle-truncate.example.html).

# Accessibility
Keep the full text in a `title` and reachable to assistive tech; the visible clip is presentational.

# Do & Don't
- **Do** middle-truncate identifiers where the end matters.
- **Don't** end-truncate a hash or URL — the meaningful suffix is lost.
