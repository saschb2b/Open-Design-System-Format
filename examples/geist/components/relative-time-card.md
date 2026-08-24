---
type: Component
title: Relative time card
description: A relative timestamp that reveals the absolute date on hover.
tags: [components, relative-time, time, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/relative-time-card.example.html
  - /components/relative-time-card.wireframe.html
---

A timestamp shown relatively ("2h ago", "3 days ago") that reveals the full absolute date and time in
a small card on hover or focus — the standard way Vercel renders deploy and commit times. See
[relative-time-card.example.html](/components/relative-time-card.example.html).

# Structure
Two independent boxes: an inline `time` element in the text flow, and a floating bubble that is
positioned relative to it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `time` | inline | content width; no padding, no box | none | unchanged |
| `.tooltip` bubble | floating | content width, `5px {spacing.2}` padding | none | unchanged |

The inline element adds no box to the sentence, so the relative label never changes line height,
and the dotted underline that marks it as interactive is a text decoration rather than a border.
The bubble is a floating layer that displaces nothing. The example stacks it above the trigger so
it is visible in a static page.

# Accessibility
Use a `<time datetime>` element so the machine-readable value is always present; show the absolute
form on hover and focus, and include it in the accessible name.

# Do & Don't
- **Do** keep the relative label and expose the absolute time on demand.
- **Don't** rely on relative time alone where exact timing matters — make the absolute reachable.
