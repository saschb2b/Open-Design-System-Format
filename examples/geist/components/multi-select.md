---
type: Component
title: Multi select
description: An input that holds multiple selected values as removable tokens, with a suggestion menu.
tags: [components, multi-select, form, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/multi-select.example.html
---

A field that collects **multiple** values as removable tokens, opening a checkable suggestion
[menu](/components/menu.md) as you type — environment variables, team members, regions. The
multi-value cousin of the [combobox](/components/combobox.md). See
[multi-select.example.html](/components/multi-select.example.html).

# Anatomy
An [input](/components/input.md) surface holding token chips (each with a remove ×), plus a dropdown
list of options with checkmarks for the selected ones.

# Accessibility
Implement the ARIA multi-select combobox pattern; each token's remove button is labelled; arrow keys
move through options.

# Do & Don't
- **Do** show selected values as removable tokens inline.
- **Don't** use it when only one value is allowed — use a [select](/components/select.md).
