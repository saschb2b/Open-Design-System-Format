---
type: Component
title: Avatar
description: A circular user or entity image with a hairline ring; stacks into a group.
tags: [components, avatar, identity]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/avatar.example.html
  - /components/avatar.wireframe.html
tokens:
  avatar:
    background: "{colors.gray-200}"
    radius: "{radius.full}"
---

A small circular image standing in for a user or entity, on a `{colors.gray-200}` fill with the
`border` hairline so it reads on any surface. Multiple avatars overlap in a group with a
`{colors.background-100}` ring between them. See [avatar.example.html](/components/avatar.example.html).

# Structure
A fixed 32px square with the image clipped to it, and no internal layout. The grouped form is an
inline flex row whose overlap comes from negative margin.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.avatar` | 1 | fixed 32px square; resized by overriding width and height together | none | unchanged |
| `.avatar-group .avatar` | 2..n | same square, pulled `-8px` left | `-8px` | unchanged |

In a group each avatar after the first overlaps by `8px`, so n avatars occupy `32 + 24(n-1)` pixels.
The separating ring is a `box-shadow`, which draws outside the box and takes no space, so that
arithmetic is exact. Later avatars paint over earlier ones by DOM order alone, with no `z-index`.

# Accessibility
Give the `<img>` meaningful `alt` (the name), or `alt=""` if a name is adjacent and the avatar is
decorative.

# Do & Don't
- **Do** keep avatars circular with the hairline ring.
- **Don't** drop the ring; light avatars vanish on the light surface without it.
