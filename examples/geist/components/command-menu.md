---
type: Component
title: Command menu
description: A ⌘K searchable palette of commands and navigation.
tags: [components, command-menu, palette, overlay, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/command-menu.example.html
  - /components/command-menu.wireframe.html
---

The ⌘K palette: a centered overlay with a search field over a filtered list of commands and
destinations, grouped by section, each with an icon and optional
[shortcut](/components/keyboard-input.md). The fastest path to anything in a Vercel-style app. See
[command-menu.example.html](/components/command-menu.example.html).

# Anatomy
A modal-scale floating panel ([elevation.menu]): a `.command` search input over an
[action list](/components/menu.md) of grouped, filterable items.

# Structure
A dialog panel: a tall search field pinned above a grouped, scrollable result list.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Search `input` | 1 | full width, fixed 44px tall | none | unchanged |
| `.menu-label` group heading | 2 | full width, `6px 8px` padding | none | unchanged |
| `.menu-item` result | 3..n | full width; label, then shortcut pushed right | none | unchanged |

The 44px field is taller than the standard 40px control because it is the panel primary affordance
rather than one field among many. The field is divided from the list by a real bottom border and no
gap. Inside a result row the keyboard hint is pushed right by `margin-left: auto` on the `.kbd`,
not by a spacer, so rows with and without a shortcut share one box.

# Accessibility
Open with ⌘K and a visible trigger; ARIA combobox + listbox; arrow keys move the active item, Enter
runs it, Escape closes and restores focus.

# Do & Don't
- **Do** make every command reachable here and elsewhere.
- **Don't** hide critical actions only behind ⌘K.
