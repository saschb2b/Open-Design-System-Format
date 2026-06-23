---
type: Component
title: Avatar stack
description: A compact row of overlapping avatars representing a group.
tags: [components, avatar-stack, avatar, identity]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/avatar-stack.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `AvatarStack-ring.color` | `{colors.bgColor-default}` |

# Examples
- [avatar-stack.example.html](/components/avatar-stack.example.html) — a reviewer group.

# Accessibility
Give the group an accessible label naming the members (or count); individual avatars can be
decorative if the group is labeled.

# Do & Don't
- **Do** cap the visible avatars and summarize the rest with `+N`.
- **Don't** stack so many that they become unreadable.
