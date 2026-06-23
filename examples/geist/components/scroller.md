---
type: Component
title: Scroller
description: A horizontally scrolling row with fade edges for overflow content.
tags: [components, scroller, layout, overflow]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/scroller.example.html
---

A horizontally scrollable row of items — region pickers, template galleries, log columns — with fade
edges hinting at more content. Keeps a long set on one line without wrapping. See
[scroller.example.html](/components/scroller.example.html).

# Accessibility
Make the region keyboard-scrollable (`tabindex="0"` with an `aria-label`); don't hide content behind
the fade without a way to reach it (scroll, or arrow controls).

# Do & Don't
- **Do** fade the edges so overflow is discoverable.
- **Don't** rely on horizontal scroll for essential navigation on touch without affordances.
