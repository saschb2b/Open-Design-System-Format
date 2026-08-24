---
type: Component
title: Table
description: A hairline-divided table for structured rows of data.
tags: [components, table, data]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/table.example.html
  - /components/table.wireframe.html
---

A table for structured data — deployments, members, usage. A muted header labels the columns; rows
divide with hairlines and highlight on hover; cells host [badges](/components/badge.md),
[status dots](/components/status-dot.md), and [avatars](/components/avatar.md). See
[table.example.html](/components/table.example.html).

# Structure
A full-width collapsed table. Column widths are computed from content by the table algorithm, not
declared.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `thead` row | 1 | full width; cells `10px 12px`, left aligned | none | unchanged |
| `tbody` rows | 2..n | full width; same cell padding | none | unchanged |

Row rules are inset `box-shadow` rather than borders, so they add no height and the row measures
exactly its padding plus content, which is what keeps a long table on an even rhythm. The table has
no reflow of its own and no horizontal scroll: at narrow widths columns compress until the longest
cell stops them, so wrap it in a scrolling container when the column count is high. Placing it in a
[card](/components/card.md), as the example does, is what supplies the outer border and radius.

# Accessibility
Use real `<table>`/`<thead>`/`<th scope>` semantics; sortable columns expose `aria-sort`.

# Do & Don't
- **Do** use a real table so it's navigable and sortable.
- **Don't** fake one with `div`s and lose the semantics.
