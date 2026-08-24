---
type: Component
title: Page layout
description: The responsive content-plus-pane grid that structures application pages.
tags: [components, page-layout, layout, shell]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/page-layout.example.html
  - /components/page-layout.wireframe.html
---

The structural grid for an app page: a main content column beside an optional sidebar pane, collapsing
to a single column on small screens. It is the scaffold the [page header](/components/page-header.md),
[Box](/components/box.md), and [nav list](/components/nav-list.md) sit inside. See
[page-layout.example.html](/components/page-layout.example.html) and [layout](/foundations/layout.md).

# Anatomy
A `.PageLayout` grid: a `.PageLayout-content` (main) and a `.PageLayout-pane` (sidebar). `--paneLeft`
puts the pane first; both stack on mobile at the `medium` breakpoint.

# Structure
A two-column grid, `{spacing.24}` apart, with a fluid content column and a fixed pane.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.PageLayout-content` | 1 | `1fr`, `min-width: 0` | `{spacing.24}` | full width at `{breakpoints.medium}` |
| `.PageLayout-pane` | 2 | fixed `256px`, `min-width: 0` | none | full width at `{breakpoints.medium}`, below the content |

`min-width: 0` on both tracks is load-bearing: grid items default to `min-content` width, so
without it a long unbroken string (a URL, a branch name) would widen the column past its track and
break the page rather than overflow inside it. `.PageLayout--paneLeft` swaps the track order to
`256px 1fr` while leaving DOM order alone, so the pane moves visually but still comes second in
reading and tab order. Below `{breakpoints.medium}` both variants collapse to one column and the
visual order returns to DOM order.

# Examples
- [page-layout.example.html](/components/page-layout.example.html) — content with a right pane.
- [page-layout.wireframe.html](/components/page-layout.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use landmarks: `<main>` for content, `<aside>`/`<nav>` for the pane. Reading order should follow the
DOM (content before pane) even when the pane is visually first.

# Do & Don't
- **Do** collapse to one column on small screens, content first.
- **Don't** exceed the [container](/foundations/layout.md) width; cap and gutter instead.
