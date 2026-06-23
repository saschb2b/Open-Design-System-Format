---
type: Component
title: Slider
description: A draggable track for choosing a value within a range.
tags: [components, slider, form, range]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/slider.example.html
---

A horizontal track with a thumb for choosing a value in a continuous range — a quota, a memory size.
The fill and thumb are monochrome (`{colors.gray-1000}`); the track is `{colors.gray-400}`. See
[slider.example.html](/components/slider.example.html).

# Accessibility
Use `role="slider"` with `aria-valuenow`/`min`/`max` and a label, or a native `<input type="range">`;
arrow keys adjust the value.

# Do & Don't
- **Do** show the current value alongside the slider.
- **Don't** use a slider where a precise number is needed — pair it with an [input](/components/input.md).
