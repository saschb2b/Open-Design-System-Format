---
type: Component
title: Show more
description: A fade-and-button control that expands clipped content to its full height.
tags: [components, show-more, disclosure, content]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/show-more.example.html
---

Clips long content to a set height with a gradient fade and a "Show more" button that expands it in
place — for changelogs, logs, and long descriptions. See
[show-more.example.html](/components/show-more.example.html).

# Accessibility
The toggle is a real `<button>` with `aria-expanded`; expanding reveals the hidden content to assistive
tech (don't `display:none` it while collapsed if it must be searchable).

# Do & Don't
- **Do** fade the clip edge so it reads as truncated.
- **Don't** clip content users need without a way to expand it.
