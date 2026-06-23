---
type: Component
title: Calendar
description: A month grid for picking a date, with selected and adjacent-month days.
tags: [components, calendar, date, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/calendar.example.html
---

A month grid for choosing a date — day cells with hover, a selected day filled `{colors.gray-1000}`,
and dimmed adjacent-month days, with prev/next month controls. Opens from a date input or filter. See
[calendar.example.html](/components/calendar.example.html).

# Accessibility
Implement the ARIA date-grid pattern: a labelled grid of buttons, `aria-selected` on the chosen day,
arrow keys to move, and month controls with labels.

# Do & Don't
- **Do** support full keyboard navigation of the grid.
- **Don't** rely on color alone to mark today vs. selected — use shape/weight too.
