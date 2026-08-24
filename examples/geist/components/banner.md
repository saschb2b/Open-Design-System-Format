---
type: Component
title: Banner
description: A full-width message bar pinned above content, neutral or accent.
tags: [components, banner, message, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/banner.example.html
  - /components/banner.wireframe.html
---

A page-spanning bar for global messages — maintenance windows, announcements, account warnings.
Neutral (`{colors.gray-100}` with a hairline) or a solid accent fill for emphasis. For a callout
inside content use a [note](/components/note.md); for product/environment context use a
[project banner](/components/project-banner.md). See [banner.example.html](/components/banner.example.html).

# Structure
A full-width centred row, `10px` between children, inside `10px 16px` of padding. It does not wrap.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Message | 1 | `flex: 1`, absorbs the slack | `10px` | unchanged |
| Action | 2 | content width | none | unchanged |

`flex: 1` on the message is what pins the action to the right edge without a spacer or
`justify-content`. The bottom rule is an inset `box-shadow` rather than a border, so it adds no
height and the banner measures exactly its padding plus content: that matters because a banner
usually sits above a fixed-height header. The row never wraps, so a long message compresses the
action button.

# Accessibility
Use `role="status"` (or `alert` for urgent); make any dismiss a real labelled `<button>`.

# Do & Don't
- **Do** keep banners brief with at most one action.
- **Don't** stack multiple banners; collapse to the most important.
