---
type: Component
title: Checkbox
description: A native checkbox tinted with the foreground, for independent on/off options.
tags: [components, checkbox, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/checkbox.example.html
---

A real `<input type="checkbox">` tinted with `{colors.gray-1000}` via `accent-color`, paired with a
[label](/components/label.md). For a single choice among many, use [radio](/components/radio.md). See
[checkbox.example.html](/components/checkbox.example.html).

# Accessibility
Link `<label>` to the input by `for`/`id` so the whole label toggles it; focus ring per
[focus](/behaviors/focus.md).

# Do & Don't
- **Do** use checkboxes for independent toggles.
- **Don't** use them where exactly one option must be chosen.
