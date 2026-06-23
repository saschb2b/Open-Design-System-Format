---
type: Component
title: Clearable input
description: An input with a trailing clear button that empties the field.
tags: [components, input, clearable, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/clearable-input.example.html
---

An [input](/components/input.md) with a trailing "×" that appears when there is a value and clears it
in one click — for filters and search fields where resetting is common. See
[clearable-input.example.html](/components/clearable-input.example.html).

# Accessibility
The clear control is a `<button>` with `aria-label="Clear"`; after clearing, return focus to the input.

# Do & Don't
- **Do** show the clear button only when the field has content.
- **Don't** clear without keeping focus on the input.
