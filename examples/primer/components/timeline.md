---
type: Component
title: Timeline
description: A vertical activity feed connecting events with badges along a rail.
tags: [components, timeline, activity, feed]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/timeline.example.html
  - /components/timeline.wireframe.html
tokens:
  Timeline-rail:
    color: "{colors.borderColor-muted}"
  Timeline-badge:
    background: "{colors.bgColor-muted}"
---

The vertical activity feed on issues and pull requests: events strung along a `{colors.borderColor-muted}`
rail, each marked by a round badge with an icon. It turns a sequence of actions — commented, labeled,
merged — into a readable history. See [timeline.example.html](/components/timeline.example.html).

# Anatomy
A `.Timeline` (with a `::before` rail) of `.Timeline-item` rows, each a `.Timeline-badge` (a round
`{colors.bgColor-muted}` chip with an icon, ringed in `{colors.bgColor-default}` so it sits over the
rail) and a `.Timeline-body`.

# Structure
A column of centred rows threaded by a continuous rule. The rule is drawn behind the badges rather
than laid out between them.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Timeline-item` | 1..n | full width; `6px` vertical padding | none | unchanged |
| `.Timeline-badge` | 1.1 | fixed 30px circle, `flex: none` | `{spacing.12}` | unchanged |
| `.Timeline-body` | 1.2 | fills the remaining width, wraps | none | unchanged |
| Rail | behind | `2px` wide, absolutely positioned at `left: 14px` | n/a | unchanged |

The rail is a single absolutely positioned pseudo-element on the list, inset `8px` from top and
bottom so it stops inside the first and last badges. Its `left: 14px` centres it under the 30px
badge, and each badge carries a background fill plus a 2px page-coloured border to mask the rail
where it passes behind. Change the badge size and that `14px` must change with it; the wireframe is
where a mismatch shows.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Timeline-rail.color` | `{colors.borderColor-muted}` |
| `Timeline-badge.background` | `{colors.bgColor-muted}` |

# Examples
- [timeline.example.html](/components/timeline.example.html) — an issue activity feed.
- [timeline.wireframe.html](/components/timeline.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use a list (`<ul>`/`<li>`); badge icons are decorative (`aria-hidden`) with the meaning in the text.
Keep chronological order.

# Do & Don't
- **Do** use a timeline for chronological activity.
- **Don't** use it for a flat list of items — that is a [data table](/components/data-table.md) or list.
