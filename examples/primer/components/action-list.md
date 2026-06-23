---
type: Component
title: Action list
description: The vertical list of actions and options that fills menus and dropdowns.
tags: [components, action-list, menu, list]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/action-list.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ActionList-item.hover` | `{colors.bgColor-muted}` |
| `ActionList-item-danger.color` | `{colors.fgColor-danger}` |

# Examples
- [action-list.example.html](/components/action-list.example.html) — a menu with a divider and a danger item.

# Accessibility
Use `role="menu"`/`menuitem` (or a `<ul>` of links/buttons); rows are keyboard-navigable with arrow
keys; the selected row carries `aria-selected`/`aria-current`.

# Do & Don't
- **Do** group related actions with a divider and place destructive actions last.
- **Don't** overload a menu — split long lists into sections or a panel.
