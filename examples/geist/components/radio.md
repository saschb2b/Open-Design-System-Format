---
type: Component
title: Radio
description: A native radio group for choosing exactly one option.
tags: [components, radio, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/radio.example.html
---

A group of `<input type="radio">` sharing one `name`, for choosing **one** option, tinted with
`{colors.gray-1000}`. For independent toggles use a [checkbox](/components/checkbox.md). See
[radio.example.html](/components/radio.example.html).

# Accessibility
Group in a `<fieldset>` with a `<legend>`; share one `name`; link each `<label>`. Arrow keys move
within the group.

# Do & Don't
- **Do** preselect a sensible default.
- **Don't** exceed ~5 options — use a [select](/components/select.md).
