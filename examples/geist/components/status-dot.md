---
type: Component
title: Status dot
description: A small colored dot plus label that signals a state at a glance.
tags: [components, status-dot, status]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/status-dot.example.html
---

A tiny colored dot with a text label that marks a state — Ready (green), Building (amber), Error
(red), Queued (gray). Used on deployments and services. The dot uses each scale's `700`. See
[status-dot.example.html](/components/status-dot.example.html).

# Accessibility
The label carries the meaning, not the dot color — pair every dot with text; see
[color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** keep one consistent color→state mapping.
- **Don't** use a bare dot with no label.
