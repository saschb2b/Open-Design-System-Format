---
type: Component
title: Load more button
description: A full-width secondary button that appends the next page of a list.
tags: [components, button, pagination, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/load-more-button.example.html
---

A wide secondary [button](/components/button.md) at the foot of a list that appends the next page in
place — infinite-scroll's explicit, accessible alternative. Shows a [spinner](/components/spinner.md)
while fetching. See [load-more-button.example.html](/components/load-more-button.example.html).

# Accessibility
Move focus to the first new item after loading, or announce the count via `aria-live`. Disable while a
request is in flight.

# Do & Don't
- **Do** show loading state and keep prior items in place.
- **Don't** replace it with auto-scroll where users need a stable, reachable end.
