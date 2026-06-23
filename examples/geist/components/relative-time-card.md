---
type: Component
title: Relative time card
description: A relative timestamp that reveals the absolute date on hover.
tags: [components, relative-time, time, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/relative-time-card.example.html
---

A timestamp shown relatively ("2h ago", "3 days ago") that reveals the full absolute date and time in
a small card on hover or focus — the standard way Vercel renders deploy and commit times. See
[relative-time-card.example.html](/components/relative-time-card.example.html).

# Accessibility
Use a `<time datetime>` element so the machine-readable value is always present; show the absolute
form on hover and focus, and include it in the accessible name.

# Do & Don't
- **Do** keep the relative label and expose the absolute time on demand.
- **Don't** rely on relative time alone where exact timing matters — make the absolute reachable.
