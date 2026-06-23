---
type: Pattern
title: Dashboard
description: A Vercel-style project dashboard composing the header, tabs, table, and usage cards.
tags: [patterns, dashboard, page, composition]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /patterns/dashboard.example.html
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

# Accessibility
One `<h1>` (the project title); the table uses real `<table>` semantics; tabs use `aria-current`; the
top bar uses landmark elements.

# Do & Don't
- **Do** keep the page monochrome and reserve color for status.
- **Don't** hard-code any color — the dashboard must theme. See [use the scale](/guidelines/use-the-scale.md).
