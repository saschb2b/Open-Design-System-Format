---
type: Component
title: Feedback
description: A small popover for collecting a quick reaction and optional note.
tags: [components, feedback, popover, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/feedback.example.html
  - /components/feedback.wireframe.html
---

The "Feedback" popover from Vercel's nav: an emoji reaction row plus an optional
[textarea](/components/textarea.md) and Send, for collecting lightweight sentiment in context. See
[feedback.example.html](/components/feedback.example.html).

# Anatomy
A floating card ([elevation.menu]) with a row of emoji toggle buttons, a textarea, and a Send
[button](/components/button.md).

# Structure
A fixed `280px` floating panel with `14px` of padding, stacking three full-width parts.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.emoji-row` | 1 | row of fixed 36px squares, `6px` apart | `10px` | unchanged |
| `.textarea` | 2 | full width, `min-height: 80px`, grows down | none | unchanged |
| Submit row | 3 | action pushed right | none | unchanged |

The reaction buttons are fixed squares in a non-wrapping row, so the panel width bounds how many
can be offered: four fit at `280px`. Selection adds an inset `box-shadow` rather than a border, so
the squares do not shift as the choice moves. The textarea is the only part that grows, and it
grows downward, so the panel height changes but its width never does.

# Accessibility
Emoji buttons are toggles with accessible names (their sentiment); manage focus and Escape as a
popover; Send is a real submit.

# Do & Don't
- **Do** keep it to one reaction and an optional note.
- **Don't** make the note required — quick sentiment is the point.
