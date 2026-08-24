---
type: Component
title: Circle badge
description: A round framed slot for a logo or icon, used to mark integrations.
tags: [components, circle-badge, identity, icon]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/circle-badge.example.html
  - /components/circle-badge.wireframe.html
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

# Structure
A single fixed 56px circle with its content centred on both axes. No internal layout.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.CircleBadge` | 1 | fixed 56px square | none | unchanged |
| Inner mark | 1.1 | content size, centred; not scaled to the box | none | unchanged |

The badge size is fixed and the mark inside it is not, so a logo is sized by its own `width` and
`height` attributes and optically centred against a constant circle. That is deliberate: marks with
different visual weight can be balanced without changing the badge, which keeps a row of them on
one baseline.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `CircleBadge.background` | `{colors.bgColor-default}` |
| `CircleBadge.shadow` | `{elevation.resting-small}` |

# Examples
- [circle-badge.example.html](/components/circle-badge.example.html) — two badges, an integration.
- [circle-badge.wireframe.html](/components/circle-badge.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Give the contained logo `alt`/`aria-label` naming the service; if purely decorative, hide it.

# Do & Don't
- **Do** use circle badges to represent services/integrations.
- **Don't** use one for a person — that is an [avatar](/components/avatar.md).
