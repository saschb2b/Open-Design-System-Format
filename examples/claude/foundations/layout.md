---
type: Layout
title: Layout & responsive
description: 1200px editorial container, 12-column grid, and the four-breakpoint responsive system.
tags: [foundations, layout, grid, responsive, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  layout:
    container: "1200px"
  breakpoints:
    mobile: "0px"
    tablet: "768px"
    desktop: "1024px"
    wide: "1440px"
---

A centered ~**1200px** content column on a 12-column grid, with four breakpoints. The hero often
runs a 6/6 split (headline left, illustration or product mockup right) that collapses to a single
column on mobile. Projected as `--layout-container` and used in the media queries of
[`/styles/components.css`](/styles/components.css).

# Breakpoints
| Name | Width | Key changes |
|------|-------|-------------|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero stacks; feature grid 1-up; pricing 1-up; footer 1 col. |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up; pricing 2-up. |
| Desktop | 1024–1440px | Full nav; feature cards 3-up; pricing 3-up. |
| Wide | > 1440px | As desktop, more outer breathing room; content caps at `{layout.container}`. |

# Grid & container
- **Max content width** `{layout.container}` (1200px), centered.
- **Feature grids** 3-up desktop → 2-up tablet → 1-up mobile (reduce columns, don't shrink cards).
- **Pricing** 3-up → 1-up; the featured tier's dark surface stays distinct at every breakpoint.

# Collapsing strategy
- Top nav collapses to a hamburger that opens a full-screen cream sheet at < 768px.
- Code-window cards keep code legible by allowing horizontal scroll inside the card rather than
  wrapping lines.

# Do & Don't
- **Do** reduce column counts on the way down; keep card proportions.
- **Don't** let content exceed `{layout.container}`; cap and add outer margin instead.
