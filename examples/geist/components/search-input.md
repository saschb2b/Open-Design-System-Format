---
type: Component
title: Search input
description: An input with a leading search icon for filtering and lookups.
tags: [components, input, search, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/search-input.example.html
---

An [input](/components/input.md) with a leading magnifier affix, for filtering lists and lookups.
Often paired with a [keyboard shortcut](/components/keyboard-input.md) hint and clear affordance.
See [search-input.example.html](/components/search-input.example.html).

# Accessibility
Use `type="search"` with an accessible label; debounce live filtering and announce result counts via
`aria-live`.

# Do & Don't
- **Do** show the magnifier and an optional shortcut hint.
- **Don't** auto-submit on every keystroke without debouncing.
