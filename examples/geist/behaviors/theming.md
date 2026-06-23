---
type: Behavior
title: Theming (color modes)
description: Light, dark, and auto from one component set — the payoff of the numbered token scales.
tags: [behaviors, theming, color, dark-mode]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Geist's defining behavior: one set of components renders in **light, dark, or auto** with no markup
change. This is why color is a set of [numbered scales](/foundations/color.md) — components reference
a token (`--ds-gray-1000`), and a mode is just a different set of values behind those tokens.

# Rule
Switch modes by setting `data-theme` on a container; everything inside re-skins because it reads from
the `--ds-*` layer, never from literal values. The [theme switcher](/components/theme-switcher.md)
drives it.

```html
<html data-theme="auto">  <!-- light | dark | auto -->
```

```css
:root, [data-theme="light"] { --ds-gray-1000: hsl(0 0% 9%);  --ds-background-100: #fff; … }
[data-theme="dark"]         { --ds-gray-1000: hsl(0 0% 93%); --ds-background-100: hsl(0 0% 4%); … }
```

# States (the modes)
| Mode | Surface / text |
|------|----------------|
| Light | `#fff` / near-black |
| Dark | near-black / near-white |
| Auto | follows the OS `prefers-color-scheme`. |

The [button](/components/button.example.html) example renders the same markup in both modes; every
example in this bundle themes by wrapping in `data-theme="dark"`.

# Accessibility
Each scale's text/background pairs are contrast-checked in **both** modes — only possible because the
values are centralized. Offer an "auto" option that respects the OS preference.

# Do & Don't
- **Do** scope a mode with `data-theme` and let the tokens cascade.
- **Don't** ship a separate dark stylesheet or hard-code any color — see
  [use the scale](/guidelines/use-the-scale.md).
