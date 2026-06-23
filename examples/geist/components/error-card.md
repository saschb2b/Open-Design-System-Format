---
type: Component
title: Error card
description: A full error surface with a title, explanation, and recovery action.
tags: [components, error, card, feedback, empty-state]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/error-card.example.html
---

A [card](/components/card.md)-scale error surface shown when a whole view fails to load — an icon, a
title, a plain-language explanation, and a recovery [button](/components/button.md) (Retry). The
heavier cousin of inline [error](/components/error.md) text. See
[error-card.example.html](/components/error-card.example.html).

# Accessibility
Use `role="alert"` so it's announced; the recovery action is a real button; explain what happened and
what to do.

# Do & Don't
- **Do** give a clear cause and a recovery path.
- **Don't** show a raw stack trace as the primary message.
