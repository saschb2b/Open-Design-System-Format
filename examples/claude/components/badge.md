---
type: Component
title: Badge
description: Pill labels — a neutral cream pill and a coral uppercase NEW/BETA badge.
tags: [components, badge, pill]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/badge.example.html
tokens:
  badge-pill:
    background: "{colors.surface-card}"
    color: "{colors.ink}"
    radius: "{radius.pill}"
    typography: "{typography.caption}"
  badge-coral:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
---

Two pills. The neutral `.badge--pill` (cream `{colors.surface-card}`) tags categories; the
`.badge--coral` (coral, uppercase, tracked) marks NEW / BETA / featured — one of the few small-scale
coral uses, so keep it rare. See [badge.example.html](/components/badge.example.html).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `badge-pill.background` | `{colors.surface-card}` |
| `badge-coral.background` | `{colors.primary}` |
| `badge-coral.typography` | `{typography.caption-uppercase}` |

# Examples
- [badge.example.html](/components/badge.example.html) — both badges.

# Accessibility
A badge is decorative text; if it conveys status, include that status in the surrounding copy too —
don't rely on the coral fill alone.

# Do & Don't
- **Do** use `.badge--coral` sparingly for genuine "new" moments.
- **Don't** scatter coral badges across a grid; it dilutes the brand's scarce coral.
