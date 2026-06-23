---
type: Behavior
title: Color modes
description: Light, dark, and auto from one set of components — the payoff of functional color tokens.
tags: [behaviors, theming, color, dark-mode, accessibility]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

The defining behavior of Primer: a single set of components renders in **light, dark, or auto** with
no markup change. This is the entire reason color is [functional](/foundations/color.md) — components
reference roles (`fgColor-default`), and a mode is just a different set of values behind those roles.

# Rule
Switch modes by setting `data-color-mode` (and the theme attributes) on a container; everything
inside re-skins because it reads from the token layer, never from literal values.

```html
<html data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
```

```css
:root, [data-color-mode="light"] { --bgColor-default: #ffffff; --fgColor-default: #1f2328; … }
[data-color-mode="dark"]        { --bgColor-default: #0d1117; --fgColor-default: #f0f6fc; … }
@media (prefers-color-scheme: dark) { [data-color-mode="auto"] { /* dark values */ } }
```

# States (the modes)
| Mode | `data-color-mode` | Surface / text |
|------|-------------------|----------------|
| Light | `light` | `#ffffff` / `#1f2328` |
| Dark | `dark` | `#0d1117` / `#f0f6fc` |
| Auto | `auto` | Follows the OS `prefers-color-scheme`. |

The [button example](/components/button.example.html) renders the same markup in both modes side by
side; [`/styles/tokens.css`](/styles/tokens.css) carries all three.

# Accessibility
Every role pair (`fgColor-*` on its `bgColor-*`) is contrast-checked for WCAG AA in **each** mode —
that is only possible because the values are centralized. Respect the user's OS preference via `auto`.

# Do & Don't
- **Do** scope a mode with `data-color-mode` and let the tokens cascade.
- **Don't** ship a separate dark stylesheet or hard-code any color — see
  [use functional tokens](/guidelines/use-functional-tokens.md).
