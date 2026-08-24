---
type: Component
title: Select panel
description: A searchable overlay for picking one or many options from a long list.
tags: [components, select-panel, overlay, form, menu]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/select-panel.example.html
  - /components/select-panel.wireframe.html
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

# Structure
A fixed `280px` panel: a filter header pinned above a scrollable option list.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.SelectPanel-header` | 1 | full width, `{spacing.8}` padding; the field fills it | none | unchanged |
| `.ActionList` options | 2 | full width rows | none | unchanged |
| `.ActionList-check` | 2.1 | fixed 16px, `flex: none` | `{spacing.8}` | unchanged |

The check column is always present and reserves its 16px even when unselected: the unselected state
uses `visibility: hidden`, which keeps the box, rather than `display: none`, which would remove it.
That is what stops labels from jogging left and right as selection changes. The header is divided
from the list by a border and no gap.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `SelectPanel.shadow` | `{elevation.floating-small}` |

# Examples
- [select-panel.example.html](/components/select-panel.example.html) — a multi-select label picker.
- [select-panel.wireframe.html](/components/select-panel.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Open from a trigger button with `aria-haspopup`; the list is `role="listbox"` with
`aria-multiselectable`; focus moves into the search box on open and returns to the trigger on close.

# Do & Don't
- **Do** use a select panel when the option list is long or needs search/multi-select.
- **Don't** use it for a handful of options — a native [select](/components/select.md) is simpler.
