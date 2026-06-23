---
type: Component
title: Select panel
description: A searchable overlay for picking one or many options from a long list.
tags: [components, select-panel, overlay, form, menu]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/select-panel.example.html
tokens:
  SelectPanel:
    shadow: "{elevation.floating-small}"
---

A floating panel with a search box and a checkable [action list](/components/action-list.md), for
choosing from a long set — the "Labels", "Assignees", or "Reviewers" pickers. Unlike a native
[select](/components/select.md), it supports search and multi-select with checkmarks. See
[select-panel.example.html](/components/select-panel.example.html).

# Anatomy
A `.SelectPanel` ([Box](/components/box.md) + `{elevation.floating-small}`): a `.SelectPanel-header`
with a `.form-control` filter, then an `.ActionList` whose items carry an `.ActionList-check` (visible
when selected).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `SelectPanel.shadow` | `{elevation.floating-small}` |

# Examples
- [select-panel.example.html](/components/select-panel.example.html) — a multi-select label picker.

# Accessibility
Open from a trigger button with `aria-haspopup`; the list is `role="listbox"` with
`aria-multiselectable`; focus moves into the search box on open and returns to the trigger on close.

# Do & Don't
- **Do** use a select panel when the option list is long or needs search/multi-select.
- **Don't** use it for a handful of options — a native [select](/components/select.md) is simpler.
