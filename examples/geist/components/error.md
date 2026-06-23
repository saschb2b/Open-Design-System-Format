---
type: Component
title: Error
description: Inline validation text that pairs a field with its error message.
tags: [components, error, form, validation, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/error.example.html
---

Inline validation: an [input](/components/input.md) in its error state (red border) paired with a
short message in `{colors.red-900}` beneath it. The message, not the color, communicates the problem.
For a full error surface use an [error card](/components/error-card.md). See
[error.example.html](/components/error.example.html).

# Accessibility
Set `aria-invalid="true"` and point to the message with `aria-describedby`; the red border is a
reinforcement, never the only signal — see [color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** show the message text with the red border.
- **Don't** convey the error by border color alone.
