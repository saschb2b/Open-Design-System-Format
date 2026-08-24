---
type: Component
title: Entity
description: A single-line row representing an object, with an avatar, title, meta, and actions.
tags: [components, entity, list, row]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/entity.example.html
  - /components/entity.wireframe.html
---

A compact row representing an object — a team member, a domain, a deployment — with a leading
[avatar](/components/avatar.md) or icon, a title and meta, and trailing actions or a
[badge](/components/badge.md). The building block of Vercel's list views. See
[entity.example.html](/components/entity.example.html).

# Anatomy
An `.entity` (border + `{radius.medium}`): a leading visual, a `.grow` title/sub block, and trailing
content (a [badge](/components/badge.md), a [dots menu](/components/dots-menu.md)).

# Structure
A centred flex row inside `12px 14px` of padding: a fixed leading avatar, a growing identity block,
then fixed trailing controls.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.avatar` | 1 | fixed 32px square | `{spacing.3}` | unchanged |
| `.grow` identity block | 2 | `flex: 1`, `min-width: 0`; title over subtitle | `{spacing.3}` | unchanged |
| `.badge` | 3 | content width | `{spacing.3}` | unchanged |
| Actions | 4 | fixed square | none | unchanged |

`min-width: 0` on the growing block is load-bearing: without it a long email address would set a
`min-content` floor and push the badge and menu button out of the row. With it, the identity block
is the only part that yields, which is the correct sacrifice. The row does not wrap, so it is a
fixed-height list item at every width.

# Accessibility
Use list semantics for rows; the row's primary link/action has an accessible name; trailing icon
buttons are labelled.

# Do & Don't
- **Do** keep one object per entity row with consistent columns.
- **Don't** overload a row with more than a couple of trailing actions.
