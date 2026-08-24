---
type: Component
title: Slider
description: A draggable track for choosing a value within a range.
tags: [components, slider, form, range]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/slider.example.html
  - /components/slider.wireframe.html
---

A horizontal track with a thumb for choosing a value in a continuous range — a quota, a memory size.
The fill and thumb are monochrome (`{colors.gray-1000}`); the track is `{colors.gray-400}`. See
[slider.example.html](/components/slider.example.html).

# Structure
A 16px-tall positioning context holding a full-width track, a fill, and an absolutely positioned
thumb.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.slider` | 1 | full width of its container, fixed 16px tall | none | unchanged |
| `.slider-track` | 1.1 | `width: 100%`, fixed `4px` tall, vertically centred | none | unchanged |
| `.slider-fill` | 1.1.1 | percentage width, `4px` tall | none | unchanged |
| `.slider-thumb` | 1.2 | fixed 16px circle, `left: calc(<pct> - 8px)` | none | unchanged |

The component height is set by the thumb, not the track, so the 4px rail sits centred in a 16px
box and the thumb never overflows its row. The `- 8px` in the thumb offset is half the thumb width
and is what keeps its centre on the value rather than its left edge, so the ends line up with 0 and
100 percent. Change the thumb size and that offset must change with it; the wireframe at the
extremes is where a mismatch shows.

# Accessibility
Use `role="slider"` with `aria-valuenow`/`min`/`max` and a label, or a native `<input type="range">`;
arrow keys adjust the value.

# Do & Don't
- **Do** show the current value alongside the slider.
- **Don't** use a slider where a precise number is needed — pair it with an [input](/components/input.md).
