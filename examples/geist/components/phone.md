---
type: Component
title: Phone
description: A phone-device frame for previewing mobile content in mockups.
tags: [components, phone, frame, mockup, media]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/phone.example.html
  - /components/phone.wireframe.html
---

A minimal phone frame — rounded body, notch, and a screen — for showing mobile previews beside the
[browser](/components/browser.md) frame in marketing and responsive demos. See
[phone.example.html](/components/phone.example.html).

# Structure
A fixed 200px-wide frame with `10px` of bezel padding around a fixed-height screen.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.phone` frame | 1 | fixed 200px wide | none | unchanged |
| `.phone-screen` | 1.1 | fills the frame width, fixed 320px tall | none | unchanged |
| `.phone-notch` | 1.1.1 | fixed 56 by 5, centred by `margin: 8px auto` | `8px` | unchanged |

The bezel is padding rather than a border, so the screen inset is even on all four sides and the
inner radius (`18px`) is set to sit concentrically inside the outer one (`28px`). The screen height
is fixed, so content inside it must scroll or clip rather than growing the device. This is a
presentational frame: it has no breakpoint and does not scale.

# Accessibility
The frame is decorative (`aria-hidden`); real screen content keeps its own semantics.

# Do & Don't
- **Do** use it to present a mobile preview at a realistic scale.
- **Don't** rely on the frame to convey meaning; it's presentational.
