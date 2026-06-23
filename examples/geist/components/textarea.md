---
type: Component
title: Textarea
description: A multi-line text field matching the input styling, resizable vertically.
tags: [components, textarea, form, field]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/textarea.example.html
tokens:
  textarea:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.medium}"
---

The multi-line companion to the [input](/components/input.md) — same border, radius, and focus
treatment, with auto-height and vertical resize. For comments, descriptions, and config snippets. See
[textarea.example.html](/components/textarea.example.html).

# Accessibility
Link a [label](/components/label.md) by `for`/`id`; allow resize and don't trap the height too small.

# Do & Don't
- **Do** allow vertical resize for free text.
- **Don't** disable resize on long-form fields.
