---
type: Component
title: Page header
description: The title block at the top of a page — context, title, and actions.
tags: [components, page-header, layout]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/page-header.example.html
  - /components/page-header.wireframe.html
---

The consistent title block that opens a page: optional [breadcrumbs](/components/breadcrumbs.md) for
context, a `{typography.title-large}` title row with trailing actions, and an optional description.
It gives every page the same anatomy so users orient instantly. See
[page-header.example.html](/components/page-header.example.html).

# Anatomy
A `.PageHeader`: an optional context row ([breadcrumbs](/components/breadcrumbs.md) /
[state label](/components/state-label.md)) → a `.PageHeader-titleRow` (`.PageHeader-title` + a flexible
gap + action [buttons](/components/button.md)) → an optional `.PageHeader-description`.

# Structure
A column of three full-width rows, `{spacing.8}` apart, with the title row doing the horizontal
work.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Breadcrumb | 1 | content width | `{spacing.8}` | unchanged |
| `.PageHeader-titleRow` | 2 | full width; centred row, `{spacing.8}` between children | `{spacing.8}` | unchanged |
| `.PageHeader-title` | 2.2 | `flex: 1`, absorbs the slack | `{spacing.8}` | unchanged |
| Actions | 2.3 | content width, pinned right by the title | none | unchanged |
| `.PageHeader-description` | 3 | full width, wraps | none | unchanged |

`flex: 1` on the title is what pushes the action buttons to the right edge, so the state label,
title, and actions stay on one line with no spacer element. The row does not wrap, so a long title
compresses the buttons rather than moving them below; check that in the wireframe before adding a
third action.

# Examples
- [page-header.example.html](/components/page-header.example.html) — an issue page header.
- [page-header.wireframe.html](/components/page-header.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
The title is the page's single `<h1>`; actions are real buttons/links; context elements precede the
title in the DOM.

# Do & Don't
- **Do** keep one `<h1>` per page in the header.
- **Don't** stack multiple competing primary actions in the title row.
