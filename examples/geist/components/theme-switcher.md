---
type: Component
title: Theme switcher
description: A segmented control for switching between system, light, and dark themes.
tags: [components, theme, theme-switcher, settings]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/theme-switcher.example.html
  - /components/theme-switcher.wireframe.html
---

A small round segmented control — system / light / dark — that drives the
[color modes](/behaviors/theming.md). Because every component reads from the `--ds-*` token layer,
flipping this control re-skins the entire UI with no markup change. See
[theme-switcher.example.html](/components/theme-switcher.example.html).

# Structure
An inline flex row of three fixed 28px circular targets inside `2px` of track padding, `2px` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Mode button | 1..3 | fixed 28px square, icon centred | `2px` | unchanged |

Every option is the same fixed square, so the control measures a constant width and the selected
state (a fill plus a border shadow) changes nothing structural: selection moves without any
reflow. The track is pill-shaped while the items inside it are circles, which is skin. Because the
targets are icon-only, each needs its own `aria-label`.

# Accessibility
A radio group (or `aria-pressed` buttons) with a group label; each option has an accessible name even
though it shows only an icon. Persist the choice and respect the OS default for "system".

# Do & Don't
- **Do** offer a "system" option that follows `prefers-color-scheme`.
- **Don't** ship a separate dark stylesheet; swap tokens instead — see [theming](/behaviors/theming.md).
