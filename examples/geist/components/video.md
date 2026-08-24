---
type: Component
title: Video
description: A 16:9 video surface with a play affordance and rounded frame.
tags: [components, video, media]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/video.example.html
  - /components/video.wireframe.html
---

A rounded 16:9 surface for embedded video — a product demo, a tutorial — with a centered play button
over a poster. Sits on `{colors.background-200}` with the `border` hairline. See
[video.example.html](/components/video.example.html).

# Structure
A 16:9 box with a centred play control. The aspect ratio is the structure; no height is declared.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.video` | 1 | full width of its container, height from `aspect-ratio: 16/9` | none | unchanged |
| `.play` | 1.1 | fixed 52px circle, centred on both axes | none | unchanged |

`aspect-ratio` means the frame height follows its width at every size, so the box reflows fluidly
with no breakpoint and no padding-ratio hack. `overflow: hidden` clips the poster or video to the
radius. The play button stays a constant 52px as the frame grows, so it becomes proportionally
smaller on a large frame.

# Accessibility
Use a real `<video>` with captions and controls; the play button is a labelled control; provide a
poster and a text description.

# Do & Don't
- **Do** include captions and keyboard-operable controls.
- **Don't** autoplay with sound.
