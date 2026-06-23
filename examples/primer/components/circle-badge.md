---
type: Component
title: Circle badge
description: A round framed slot for a logo or icon, used to mark integrations.
tags: [components, circle-badge, identity, icon]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/circle-badge.example.html
tokens:
  CircleBadge:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    shadow: "{elevation.resting-small}"
---

A round, bordered frame holding a logo or icon — used on marketplace and integration pages to badge a
service. A `{colors.bgColor-default}` disc with a `{colors.borderColor-default}` ring and a faint
`{elevation.resting-small}` shadow. See [circle-badge.example.html](/components/circle-badge.example.html).

# Anatomy
A `.CircleBadge` (round, 56px) centering a logo/icon; pair two with a connecting dash to show an
integration between services.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `CircleBadge.background` | `{colors.bgColor-default}` |
| `CircleBadge.shadow` | `{elevation.resting-small}` |

# Examples
- [circle-badge.example.html](/components/circle-badge.example.html) — two badges, an integration.

# Accessibility
Give the contained logo `alt`/`aria-label` naming the service; if purely decorative, hide it.

# Do & Don't
- **Do** use circle badges to represent services/integrations.
- **Don't** use one for a person — that is an [avatar](/components/avatar.md).
