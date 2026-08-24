---
type: Component
title: Scroller
description: A horizontally scrolling row with fade edges for overflow content.
tags: [components, scroller, layout, overflow]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/scroller.example.html
  - /components/scroller.wireframe.html
---

A horizontally scrollable row of items — region pickers, template galleries, log columns — with fade
edges hinting at more content. Keeps a long set on one line without wrapping. See
[scroller.example.html](/components/scroller.example.html).

# Structure
A single-row flex strip that scrolls horizontally instead of wrapping.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Item | 1..n | `flex: none`, content width, no wrap | `10px` | unchanged; the strip scrolls |

`flex: none` on every child is the rule that makes this work: without it flex items would shrink to
fit and the strip would never overflow, so nothing would scroll. `overflow-x: auto` then provides
the scroll, and `padding-bottom: 4px` reserves room for the scrollbar so it does not overlap the
items. The strip is `tabindex="0"` so it can be reached and scrolled from the keyboard, which a
scrolling region otherwise cannot.

# Accessibility
Make the region keyboard-scrollable (`tabindex="0"` with an `aria-label`); don't hide content behind
the fade without a way to reach it (scroll, or arrow controls).

# Do & Don't
- **Do** fade the edges so overflow is discoverable.
- **Don't** rely on horizontal scroll for essential navigation on touch without affordances.
