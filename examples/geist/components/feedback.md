---
type: Component
title: Feedback
description: A small popover for collecting a quick reaction and optional note.
tags: [components, feedback, popover, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/feedback.example.html
---

The "Feedback" popover from Vercel's nav: an emoji reaction row plus an optional
[textarea](/components/textarea.md) and Send, for collecting lightweight sentiment in context. See
[feedback.example.html](/components/feedback.example.html).

# Anatomy
A floating card ([elevation.menu]) with a row of emoji toggle buttons, a textarea, and a Send
[button](/components/button.md).

# Accessibility
Emoji buttons are toggles with accessible names (their sentiment); manage focus and Escape as a
popover; Send is a real submit.

# Do & Don't
- **Do** keep it to one reaction and an optional note.
- **Don't** make the note required — quick sentiment is the point.
