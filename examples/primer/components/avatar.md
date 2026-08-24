---
type: Component
title: Avatar
description: A user or org image — circular for people, lightly rounded for organizations.
tags: [components, avatar, identity]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/avatar.example.html
  - /components/avatar.wireframe.html
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

# Structure
A single fixed-size box with the image clipped to it. There is no internal layout.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.avatar` | 1 | fixed 32px square (48px at the large size) | none | unchanged |
| Inner image or `svg` | 1.1 | `100%` of the box, clipped by `overflow: hidden` | none | unchanged |

Size is the only structural variant: the box is square at a fixed pixel size and the content is
scaled to fill it, so a non-square source is cropped rather than allowed to distort the row it sits
in. The user-versus-organization distinction is corner radius alone, which is skin, so both shapes
occupy an identical box.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `avatar.background` | `{colors.bgColor-muted}` |
| `avatar.radius` | `{radius.full}` (people) |

# Examples
- [avatar.example.html](/components/avatar.example.html) — a person, an org, and a small size.
- [avatar.wireframe.html](/components/avatar.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Give the `<img>` meaningful `alt` (the person/org name), or `alt=""` if the name is adjacent and the
avatar is decorative.

# Do & Don't
- **Do** keep people circular and organizations square-ish.
- **Don't** drop the border ring; light avatars vanish on the light surface without it.
