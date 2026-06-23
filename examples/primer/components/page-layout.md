---
type: Component
title: Page layout
description: The responsive content-plus-pane grid that structures application pages.
tags: [components, page-layout, layout, shell]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/page-layout.example.html
---

The structural grid for an app page: a main content column beside an optional sidebar pane, collapsing
to a single column on small screens. It is the scaffold the [page header](/components/page-header.md),
[Box](/components/box.md), and [nav list](/components/nav-list.md) sit inside. See
[page-layout.example.html](/components/page-layout.example.html) and [layout](/foundations/layout.md).

# Anatomy
A `.PageLayout` grid: a `.PageLayout-content` (main) and a `.PageLayout-pane` (sidebar). `--paneLeft`
puts the pane first; both stack on mobile at the `medium` breakpoint.

# Examples
- [page-layout.example.html](/components/page-layout.example.html) — content with a right pane.

# Accessibility
Use landmarks: `<main>` for content, `<aside>`/`<nav>` for the pane. Reading order should follow the
DOM (content before pane) even when the pane is visually first.

# Do & Don't
- **Do** collapse to one column on small screens, content first.
- **Don't** exceed the [container](/foundations/layout.md) width; cap and gutter instead.
