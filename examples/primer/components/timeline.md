---
type: Component
title: Timeline
description: A vertical activity feed connecting events with badges along a rail.
tags: [components, timeline, activity, feed]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/timeline.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Timeline-rail.color` | `{colors.borderColor-muted}` |
| `Timeline-badge.background` | `{colors.bgColor-muted}` |

# Examples
- [timeline.example.html](/components/timeline.example.html) — an issue activity feed.

# Accessibility
Use a list (`<ul>`/`<li>`); badge icons are decorative (`aria-hidden`) with the meaning in the text.
Keep chronological order.

# Do & Don't
- **Do** use a timeline for chronological activity.
- **Don't** use it for a flat list of items — that is a [data table](/components/data-table.md) or list.
