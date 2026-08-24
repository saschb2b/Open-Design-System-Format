---
type: Pattern
title: Dashboard
description: A Vercel-style project dashboard composing the header, tabs, table, and usage cards.
tags: [patterns, dashboard, page, composition]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /patterns/dashboard.example.html
  - /patterns/dashboard.wireframe.html
---

The canonical Vercel screen: a top bar with [breadcrumbs](/components/breadcrumbs.md), a
[theme switcher](/components/theme-switcher.md), and an [avatar](/components/avatar.md); a
[tabs](/components/tabs.md) row; and a two-column body — a deployments [table](/components/table.md)
with [status dots](/components/status-dot.md) and [branch](/components/code.md) names beside usage
[cards](/components/card.md) with a [gauge](/components/gauge.md) and [progress](/components/progress.md).
All on the monochrome scale; color is reserved for status and the one inverted action. Because every
part reads from the token layer, the whole page re-themes light↔dark — see
[theming](/behaviors/theming.md). See [dashboard.example.html](/patterns/dashboard.example.html); it is
the bundle's best single illustration of the system composed.

# When to use
Any data-dense application screen with a list and supporting panels. For a focused task use a
[modal](/components/modal.md); for settings a [fieldset](/components/fieldset.md).

# Composition
| Region | Components |
|--------|-----------|
| Top bar | [Breadcrumbs](/components/breadcrumbs.md), [theme switcher](/components/theme-switcher.md), [avatar](/components/avatar.md), [button](/components/button.md) |
| Nav | [Tabs](/components/tabs.md) |
| Main | [Table](/components/table.md) of deployments with [status dots](/components/status-dot.md), [badges](/components/badge.md), [branch names](/components/code.md) |
| Aside | Usage [card](/components/card.md) with a [gauge](/components/gauge.md) and [progress](/components/progress.md) |

# Structure
A vertical stack of three full-width bands, the last of which splits into a two-column grid. Only
the content band is centred and capped; the two bars above it run edge to edge.

| Region | Order | Layout | Space after | Reflow |
|--------|-------|--------|-------------|--------|
| `.topbar` | 1 | centred row, `{spacing.3}` between children, `14px {spacing.6}` padding | none | unchanged |
| `.navbar` | 2 | tab row on a full-width rule, `0 {spacing.6}` padding | none | unchanged |
| `.wrap` | 3 | grid, `1fr 300px`, `{spacing.6}` gap, capped at `1100px` and centred | none | one column at `860px` |
| `main` deployments table | 3.1 | card-wrapped table, full column width | none | full width |
| `.usage` aside | 3.2 | column stack, `{spacing.4}` between cards | none | full width, below the main column |

The top bar is divided into clusters by a `flex: 1` spacer rather than `justify-content`, so the
mark and breadcrumbs keep their own even rhythm while search and the theme switcher are pushed to
the right edge. Both bars use an inset `box-shadow` for their bottom rule, which adds no height, so
the two stack tightly and read as one header assembly.

One thing to note when copying this pattern: the grid collapses at `860px`, which is a bespoke
width rather than one of the [grid](/foundations/grid.md) breakpoints. It sits between
`{breakpoints.md}` and `{breakpoints.lg}` and was chosen for the `1fr 300px` split specifically. If
you change the aside width, re-derive that number rather than carrying it across; if you want to
stay on the scale, `{breakpoints.lg}` is the nearest token.

Below the collapse the aside moves under the main column in DOM order, so reading order is
preserved and nothing needs reordering. The top bar never wraps, so a narrow viewport compresses
the search field before the grid breakpoint takes effect.

# Accessibility
One `<h1>` (the project title); the table uses real `<table>` semantics; tabs use `aria-current`; the
top bar uses landmark elements.

# Do & Don't
- **Do** keep the page monochrome and reserve color for status.
- **Don't** hard-code any color — the dashboard must theme. See [use the scale](/guidelines/use-the-scale.md).
