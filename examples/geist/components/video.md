---
type: Component
title: Video
description: A 16:9 video surface with a play affordance and rounded frame.
tags: [components, video, media]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/video.example.html
---

A rounded 16:9 surface for embedded video — a product demo, a tutorial — with a centered play button
over a poster. Sits on `{colors.background-200}` with the `border` hairline. See
[video.example.html](/components/video.example.html).

# Accessibility
Use a real `<video>` with captions and controls; the play button is a labelled control; provide a
poster and a text description.

# Do & Don't
- **Do** include captions and keyboard-operable controls.
- **Don't** autoplay with sound.
