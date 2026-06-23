---
type: Component
title: Data table
description: A bordered table for structured rows of data, with a muted header.
tags: [components, data-table, table, data]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/data-table.example.html
tokens:
  DataTable-header:
    background: "{colors.bgColor-muted}"
  DataTable-row:
    border: "{colors.borderColor-muted}"
---

A table for structured, scannable data — workflow runs, members, files. A `{colors.bgColor-muted}`
header labels the columns; hairline `{colors.borderColor-muted}` rows divide the body; rows highlight
on hover. Usually wrapped in a [Box](/components/box.md). See
[data-table.example.html](/components/data-table.example.html).

# Anatomy
A `.DataTable` (`<table>`): `<th>`s on `{colors.bgColor-muted}` in `{typography.body-small}` weight
600, then `<td>` rows divided by `{colors.borderColor-muted}`. Cells can host
[labels](/components/label.md), [state labels](/components/state-label.md), or [avatars](/components/avatar.md).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `DataTable-header.background` | `{colors.bgColor-muted}` |
| `DataTable-row.border` | `{colors.borderColor-muted}` |

# Examples
- [data-table.example.html](/components/data-table.example.html) — a runs table with status.

# Accessibility
Use real `<table>`/`<thead>`/`<th scope>` semantics; associate headers with cells. Sortable columns
expose `aria-sort`.

# Do & Don't
- **Do** use a real table for tabular data so it's navigable and sortable.
- **Don't** fake a table with `div`s; you lose semantics and keyboard support.
