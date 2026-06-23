---
type: Component
title: Entity
description: A single-line row representing an object, with an avatar, title, meta, and actions.
tags: [components, entity, list, row]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/entity.example.html
---

A compact row representing an object — a team member, a domain, a deployment — with a leading
[avatar](/components/avatar.md) or icon, a title and meta, and trailing actions or a
[badge](/components/badge.md). The building block of Vercel's list views. See
[entity.example.html](/components/entity.example.html).

# Anatomy
An `.entity` (border + `{radius.medium}`): a leading visual, a `.grow` title/sub block, and trailing
content (a [badge](/components/badge.md), a [dots menu](/components/dots-menu.md)).

# Accessibility
Use list semantics for rows; the row's primary link/action has an accessible name; trailing icon
buttons are labelled.

# Do & Don't
- **Do** keep one object per entity row with consistent columns.
- **Don't** overload a row with more than a couple of trailing actions.
