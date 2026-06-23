---
type: Behavior
title: Focus
description: A consistent, always-visible accent focus indicator across every interactive element.
tags: [behaviors, focus, keyboard, accessibility]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Every interactive element shows the same focus indicator when reached by keyboard. Primer is
accessibility-first: the focus ring is never optional and is defined once for the whole system.

# Rule
On `:focus-visible`, draw a `2px` indicator in `{colors.fgColor-accent}`. Controls use an outline;
inputs shift their border to `{colors.borderColor-accent-emphasis}` plus a soft
`{colors.bgColor-accent-muted}` ring. Never set `outline: none` without an equal replacement.

```css
.btn:focus-visible { outline: 2px solid var(--fgColor-accent); outline-offset: -2px; }
.form-control:focus-visible { border-color: var(--borderColor-accent-emphasis); box-shadow: 0 0 0 3px var(--bgColor-accent-muted); }
```

# States
- **Keyboard focus** (`:focus-visible`) → indicator shown.
- **Mouse focus** (`:focus` without `:focus-visible`) → no ring, to avoid noise on click.

# Accessibility
The indicator uses `{colors.fgColor-accent}`, which meets a 3:1 non-text contrast against adjacent
surfaces in **both** color modes (see [color modes](/behaviors/color-modes.md)). Focus order follows
DOM order.

# Do & Don't
- **Do** keep one focus treatment across buttons, inputs, links, and tabs.
- **Don't** remove the outline; keyboard users depend on it.
