---
type: Component
title: Load more button
description: A full-width secondary button that appends the next page of a list.
tags: [components, button, pagination, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/load-more-button.example.html
  - /components/load-more-button.wireframe.html
---

A wide secondary [button](/components/button.md) at the foot of a list that appends the next page in
place — infinite-scroll's explicit, accessible alternative. Shows a [spinner](/components/spinner.md)
while fetching. See [load-more-button.example.html](/components/load-more-button.example.html).

# Structure
A standard [button](/components/button.md) box that must not resize when it enters its loading
state.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Spinner (loading only) | 1 | fixed 16px | `{spacing.2}` | unchanged |
| Label | 2 | content width, no wrap | none | unchanged |

The loading state adds a 16px spinner and changes the label, which widens the button unless the two
labels are close in length. That is the one thing to check in the wireframe: this button usually
sits centred under a list, where a width change on click is visible. Height is fixed at 40px in
both states.

# Accessibility
Move focus to the first new item after loading, or announce the count via `aria-live`. Disable while a
request is in flight.

# Do & Don't
- **Do** show loading state and keep prior items in place.
- **Don't** replace it with auto-scroll where users need a stable, reachable end.
