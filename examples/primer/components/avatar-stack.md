---
type: Component
title: Avatar stack
description: A compact row of overlapping avatars representing a group.
tags: [components, avatar-stack, avatar, identity]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/avatar-stack.example.html
  - /components/avatar-stack.wireframe.html
tokens:
  AvatarStack-ring:
    color: "{colors.bgColor-default}"
---

A space-saving row of overlapping [avatars](/components/avatar.md) standing for a group — assignees,
reviewers, contributors. Each avatar overlaps the next, ringed in `{colors.bgColor-default}` so the
edges stay readable; a trailing `+N` can summarize the remainder. See
[avatar-stack.example.html](/components/avatar-stack.example.html).

# Anatomy
An `.AvatarStack` containing `.avatar`s; each after the first has a negative margin and a 2px
`{colors.bgColor-default}` ring.

# Structure
An inline flex row whose overlap is produced by negative margin, not by positioning.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| First `.avatar` | 1 | fixed 32px square | `-8px` (the overlap) | unchanged |
| Each following `.avatar` | 2..n | fixed 32px square | `-8px` | unchanged |

Every avatar after the first pulls left by `8px`, so n avatars occupy `32 + 24(n-1)` pixels rather
than `32n`. The ring that separates them is a `box-shadow`, which draws outside the box and costs
no layout space, so the arithmetic holds exactly. Later avatars paint over earlier ones because
they come later in the DOM, with no `z-index` involved: reversing source order reverses the stack.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `AvatarStack-ring.color` | `{colors.bgColor-default}` |

# Examples
- [avatar-stack.example.html](/components/avatar-stack.example.html) — a reviewer group.
- [avatar-stack.wireframe.html](/components/avatar-stack.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Give the group an accessible label naming the members (or count); individual avatars can be
decorative if the group is labeled.

# Do & Don't
- **Do** cap the visible avatars and summarize the rest with `+N`.
- **Don't** stack so many that they become unreadable.
