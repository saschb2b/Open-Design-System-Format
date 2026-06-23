---
type: Component
title: Command menu
description: A ⌘K searchable palette of commands and navigation.
tags: [components, command-menu, palette, overlay, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/command-menu.example.html
---

The ⌘K palette: a centered overlay with a search field over a filtered list of commands and
destinations, grouped by section, each with an icon and optional
[shortcut](/components/keyboard-input.md). The fastest path to anything in a Vercel-style app. See
[command-menu.example.html](/components/command-menu.example.html).

# Anatomy
A modal-scale floating panel ([elevation.menu]): a `.command` search input over an
[action list](/components/menu.md) of grouped, filterable items.

# Accessibility
Open with ⌘K and a visible trigger; ARIA combobox + listbox; arrow keys move the active item, Enter
runs it, Escape closes and restores focus.

# Do & Don't
- **Do** make every command reachable here and elsewhere.
- **Don't** hide critical actions only behind ⌘K.
