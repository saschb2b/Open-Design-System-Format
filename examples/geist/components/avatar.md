---
type: Component
title: Avatar
description: A circular user or entity image with a hairline ring; stacks into a group.
tags: [components, avatar, identity]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/avatar.example.html
tokens:
  avatar:
    background: "{colors.gray-200}"
    radius: "{radius.full}"
---

A small circular image standing in for a user or entity, on a `{colors.gray-200}` fill with the
`border` hairline so it reads on any surface. Multiple avatars overlap in a group with a
`{colors.background-100}` ring between them. See [avatar.example.html](/components/avatar.example.html).

# Accessibility
Give the `<img>` meaningful `alt` (the name), or `alt=""` if a name is adjacent and the avatar is
decorative.

# Do & Don't
- **Do** keep avatars circular with the hairline ring.
- **Don't** drop the ring; light avatars vanish on the light surface without it.
