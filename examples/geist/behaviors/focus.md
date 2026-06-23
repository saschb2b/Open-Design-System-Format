---
type: Behavior
title: Focus
description: A single accent focus ring on every interactive element, always visible to the keyboard.
tags: [behaviors, focus, keyboard, accessibility]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Every interactive element shows the same focus indicator when reached by keyboard. The ring is defined
once for the whole system so it is consistent and never missing.

# Rule
On `:focus-visible`, draw a `2px` outline in `{colors.focus}` (the blue focus color) with a small
offset. Never `outline: none` without an equal replacement.

```css
:where(.btn,.input,.select,.tab,.menu-item):focus-visible {
  outline: 2px solid var(--ds-focus-color); outline-offset: 1px;
}
```

# States
- **Keyboard focus** (`:focus-visible`) → ring shown.
- **Mouse focus** → no ring, to avoid noise on click.

# Accessibility
`{colors.focus}` meets 3:1 non-text contrast against adjacent surfaces in **both**
[themes](/behaviors/theming.md). Focus order follows DOM order; overlays trap focus while open.

# Do & Don't
- **Do** keep one focus treatment across buttons, inputs, tabs, and menu items.
- **Don't** remove the outline; keyboard users depend on it.
