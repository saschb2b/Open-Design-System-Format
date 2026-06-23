---
type: Component
title: Avatar
description: A user or org image — circular for people, lightly rounded for organizations.
tags: [components, avatar, identity]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/avatar.example.html
tokens:
  avatar:
    background: "{colors.bgColor-muted}"
    border: "{colors.borderColor-muted}"
    radius: "{radius.full}"
---

A small image standing in for a person or organization. **People are circular**
(`{radius.full}`); organizations use a small radius to read as distinct. A faint
`{colors.borderColor-muted}` ring keeps light avatars legible on light surfaces. See
[avatar.example.html](/components/avatar.example.html).

# Anatomy
A `.avatar` wrapping an `<img>` (or a placeholder SVG). Default 32px; size by overriding
width/height. Multiple avatars overlap in an AvatarStack.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `avatar.background` | `{colors.bgColor-muted}` |
| `avatar.radius` | `{radius.full}` (people) |

# Examples
- [avatar.example.html](/components/avatar.example.html) — a person, an org, and a small size.

# Accessibility
Give the `<img>` meaningful `alt` (the person/org name), or `alt=""` if the name is adjacent and the
avatar is decorative.

# Do & Don't
- **Do** keep people circular and organizations square-ish.
- **Don't** drop the border ring; light avatars vanish on the light surface without it.
