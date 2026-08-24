---
type: Component
title: Calendar
description: A month grid for picking a date, with selected and adjacent-month days.
tags: [components, calendar, date, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/calendar.example.html
  - /components/calendar.wireframe.html
---

A month grid for choosing a date — day cells with hover, a selected day filled `{colors.gray-1000}`,
and dimmed adjacent-month days, with prev/next month controls. Opens from a date input or filter. See
[calendar.example.html](/components/calendar.example.html).

# Structure
A fixed `252px` panel: a header row above a seven-column grid. Column count is the structure; day
cells are square by ratio, not by a fixed size.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.calendar-head` | 1 | full width; arrows at the edges, month centred | `{spacing.2}` | unchanged |
| `.calendar-grid` weekday row | 2 | 7 equal columns, `2px` gap | `2px` | unchanged |
| `.calendar-grid` day cells | 3..n | 7 equal columns; `aspect-ratio: 1` | `2px` | unchanged |

`aspect-ratio: 1` on the day buttons means the cell height follows the column width, so the grid
stays square if the panel width changes and no row height is hard-coded. The header uses
`justify-content: space-between` to push the two arrows apart, which is why the month label centres
only when both arrows are the same width. Leading and trailing days from adjacent months occupy
real cells so the seven-column rhythm is never broken.

# Accessibility
Implement the ARIA date-grid pattern: a labelled grid of buttons, `aria-selected` on the chosen day,
arrow keys to move, and month controls with labels.

# Do & Don't
- **Do** support full keyboard navigation of the grid.
- **Don't** rely on color alone to mark today vs. selected — use shape/weight too.
