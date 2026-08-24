---
type: Component
title: Data table
description: A bordered table for structured rows of data, with a muted header.
tags: [components, data-table, table, data]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/data-table.example.html
  - /components/data-table.wireframe.html
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

# Structure
A full-width collapsed table. Column widths are computed by the table algorithm from content, not
set, so no column has a declared size.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `thead` row | 1 | full width; cells `{spacing.8}` / `{spacing.12}` padded, left aligned | none | unchanged |
| `tbody` rows | 2..n | full width; same cell padding | none | unchanged |

`border-collapse: collapse` means adjacent cell borders merge to one hairline, so the row rule is a
bottom border on each `td` with the last row suppressed. The table has no reflow of its own and no
horizontal scroll: at narrow widths columns compress until the longest cell content stops them, so
wrap it in a scrolling container when the column count is high.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `DataTable-header.background` | `{colors.bgColor-muted}` |
| `DataTable-row.border` | `{colors.borderColor-muted}` |

# Examples
- [data-table.example.html](/components/data-table.example.html) — a runs table with status.
- [data-table.wireframe.html](/components/data-table.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use real `<table>`/`<thead>`/`<th scope>` semantics; associate headers with cells. Sortable columns
expose `aria-sort`.

# Do & Don't
- **Do** use a real table for tabular data so it's navigable and sortable.
- **Don't** fake a table with `div`s; you lose semantics and keyboard support.
