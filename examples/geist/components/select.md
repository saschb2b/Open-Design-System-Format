---
type: Component
title: Select
description: A native dropdown styled to match the input, with a chevron affordance.
tags: [components, select, dropdown, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/select.example.html
tokens:
  select:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.medium}"
---

A native `<select>` styled to match the [input](/components/input.md), with a trailing chevron, for
choosing one option from a known list. For search or multi-select, use a
[combobox](/components/combobox.md) or [multi select](/components/multi-select.md). See
[select.example.html](/components/select.example.html).

# Accessibility
Keep it a native `<select>` for built-in keyboard and screen-reader support; label it by `for`/`id`.

# Do & Don't
- **Do** use a native select for short, known lists.
- **Don't** rebuild it as a custom dropdown unless you need search.
