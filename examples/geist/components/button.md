---
type: Component
title: Button
description: The inverted primary action and its secondary, tertiary, error, and ghost variants.
tags: [components, button, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/button.example.html
tokens:
  button-primary:
    background: "{colors.gray-1000}"
    color: "{colors.background-100}"
    radius: "{radius.medium}"
  button-secondary:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
  button-error:
    background: "{colors.red-700}"
---

Geist's button leads with its signature **inverted primary**: filled with `{colors.gray-1000}` and
labelled `{colors.background-100}` — black-on-white in light, white-on-black in dark. Secondary is a
bordered surface; tertiary/ghost are quiet; error fills red. Weight stays 400 (Geist is restrained),
radius `{radius.medium}`. The whole set re-themes via the tokens — the example shows light and dark.
See [button.example.html](/components/button.example.html).

# Variants & sizes
`.btn-primary` (inverted) · `.btn` (secondary, bordered) · `.btn-ghost` · `.btn-error` · sizes
`.btn-sm` (32px) / default (40px) / `.btn-lg` (48px). See [split button](/components/split-button.md)
for a primary + menu trigger.

# Accessibility
Real `<button>`; icon-only buttons need an `aria-label`. Focus uses the `{colors.focus}` ring — see
[focus](/behaviors/focus.md).

# Do & Don't
- **Do** use one inverted `.btn-primary` per view.
- **Don't** hard-code the fill; reference `{colors.gray-1000}` so it themes.
