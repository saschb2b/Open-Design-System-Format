---
type: Component
title: Page header
description: The title block at the top of a page — context, title, and actions.
tags: [components, page-header, layout]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/page-header.example.html
---

The consistent title block that opens a page: optional [breadcrumbs](/components/breadcrumbs.md) for
context, a `{typography.title-large}` title row with trailing actions, and an optional description.
It gives every page the same anatomy so users orient instantly. See
[page-header.example.html](/components/page-header.example.html).

# Anatomy
A `.PageHeader`: an optional context row ([breadcrumbs](/components/breadcrumbs.md) /
[state label](/components/state-label.md)) → a `.PageHeader-titleRow` (`.PageHeader-title` + a flexible
gap + action [buttons](/components/button.md)) → an optional `.PageHeader-description`.

# Examples
- [page-header.example.html](/components/page-header.example.html) — an issue page header.

# Accessibility
The title is the page's single `<h1>`; actions are real buttons/links; context elements precede the
title in the DOM.

# Do & Don't
- **Do** keep one `<h1>` per page in the header.
- **Don't** stack multiple competing primary actions in the title row.
