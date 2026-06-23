---
type: Motion
title: Motion
description: Quick, functional transitions that always yield to prefers-reduced-motion.
tags: [foundations, motion, accessibility, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  motion:
    duration-fast: "80ms"
    duration-medium: "200ms"
    easing-standard: "cubic-bezier(0.25, 1, 0.5, 1)"
---

Motion in Primer is quick and functional — it confirms a state change (a button press, a menu
opening), never decorates. Accessibility leads: every transition must yield to
`prefers-reduced-motion`. Projected as `--motion-duration-fast`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `motion.duration-fast` | `80ms` | Press/hover state changes (e.g. [button](/components/button.md) background). |
| `motion.duration-medium` | `200ms` | Entrances: menus, dialogs, banners. |
| `motion.easing-standard` | `cubic-bezier(0.25, 1, 0.5, 1)` | The standard ease-out. |

# Accessibility
Honor reduced motion globally:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

# Do & Don't
- **Do** keep transitions short and animate only `opacity`, `transform`, and `background-color`.
- **Don't** loop attention-grabbing motion or animate layout-triggering properties.
