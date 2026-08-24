---
type: Component
title: Book
description: A 3D book-cover frame for presenting docs, guides, and templates.
tags: [components, book, frame, media]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/book.example.html
  - /components/book.wireframe.html
---

A stylized 3D book-cover surface — a spine edge and a tilted face — for presenting a guide, handbook,
or template in marketing and resource grids. A decorative frame in Geist's media set. See
[book.example.html](/components/book.example.html).

# Structure
A fixed 150 by 200 block with its content pinned to the bottom, inside `14px` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.book` | 1 | fixed 150 by 200 | none | unchanged |
| Title | 1.1 | bottom-aligned (`align-items: flex-end`) | none | unchanged |

The spine is an inset `box-shadow` on the left edge and the asymmetric radius is larger on the
right, so the object reads as a book without any extra element. Both are skin over a plain fixed
box. The size is fixed rather than fluid, so a shelf of books is laid out by the container around
them.

# Accessibility
The 3D frame is decorative; the title and any link carry the accessible name; don't encode meaning in
the visual depth alone.

# Do & Don't
- **Do** use the book frame to give a guide a sense of object.
- **Don't** rely on the 3D effect for meaning; keep a clear title and link.
