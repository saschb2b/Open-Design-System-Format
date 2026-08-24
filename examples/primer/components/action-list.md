---
type: Component
title: Action list
description: The vertical list of actions and options that fills menus and dropdowns.
tags: [components, action-list, menu, list]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/action-list.example.html
  - /components/action-list.wireframe.html
tokens:
  ActionList-item:
    color: "{colors.fgColor-default}"
    hover: "{colors.bgColor-muted}"
  ActionList-item-danger:
    color: "{colors.fgColor-danger}"
---

The vertical list of selectable rows that fills menus, dropdowns, and side panels. Rows highlight on
hover with `{colors.bgColor-muted}`; dividers group them; a destructive row uses
`{colors.fgColor-danger}`. Usually placed inside a [Box](/components/box.md) (with a floating shadow
when it is an overlay menu). See [action-list.example.html](/components/action-list.example.html).

# Anatomy
An `.ActionList` (a `<ul>`/menu) of `.ActionList-item` rows — each an optional leading icon, a label,
optional trailing content — with `.ActionList-divider`s between groups. `--selected` bolds the active
row; `--danger` colors a destructive one.

# Structure
A column of rows inside `{spacing.8}` of panel padding, with a `220px` minimum width so short
labels do not collapse the menu. Each row is its own centred flex line.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.ActionList-item` | 1..n | full width; leading icon fixed, label fills the rest, `{spacing.8}` between | none (rows abut) | unchanged |
| `.ActionList-divider` | between groups | full width, `1px` tall | `{spacing.8}` above and below | unchanged |

Rows carry no gap; they sit flush and are separated only by their own `6px` vertical padding, so
the hover fill reads as one continuous target. The divider is the only element that adds space,
which is what makes a grouped menu legible with the skin stripped. Selected and danger rows change
weight and colour only, never the box.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ActionList-item.hover` | `{colors.bgColor-muted}` |
| `ActionList-item-danger.color` | `{colors.fgColor-danger}` |

# Examples
- [action-list.example.html](/components/action-list.example.html) — a menu with a divider and a danger item.
- [action-list.wireframe.html](/components/action-list.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `role="menu"`/`menuitem` (or a `<ul>` of links/buttons); rows are keyboard-navigable with arrow
keys; the selected row carries `aria-selected`/`aria-current`.

# Do & Don't
- **Do** group related actions with a divider and place destructive actions last.
- **Don't** overload a menu — split long lists into sections or a panel.
