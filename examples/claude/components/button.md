---
type: Component
title: Button
description: The coral primary CTA and its cream/dark/text/icon companions.
tags: [components, button, cta]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/button.example.html
tokens:
  button-primary:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    radius: "{radius.md}"
    typography: "{typography.button}"
  button-primary-active:
    background: "{colors.primary-active}"
  button-secondary:
    background: "{colors.canvas}"
    color: "{colors.ink}"
    border: "{colors.hairline}"
  button-secondary-on-dark:
    background: "{colors.surface-dark-elevated}"
    color: "{colors.on-dark}"
---

The signature control. The coral `.btn--primary` is the brand's most recognizable interactive
element outside the logo; it is used **scarcely** on individual buttons and generously only on
[coral callout cards](/components/callout-card-coral.md). The press darkening to
`{colors.primary-active}` is the *only* state change a button makes — see
[press states only](/behaviors/press-states-only.md). Class contract in
[button.example.html](/components/button.example.html), styled by
[`/styles/components.css`](/styles/components.css).

# Anatomy
A real `<button>` (or `<a>` for navigation) with base `.btn` plus one variant modifier. Label in
`{typography.button}` (Styrene B 14/500), height 40px, padding `0 20px`, radius `{radius.md}`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `button-primary.background` | `{colors.primary}` |
| `button-primary.color` | `{colors.on-primary}` |
| `button-primary-active.background` | `{colors.primary-active}` |
| `button-secondary.border` | `{colors.hairline}` |
| `button-secondary-on-dark.background` | `{colors.surface-dark-elevated}` |

# Variants & States
| Variant | Use |
|---------|-----|
| `.btn--primary` | The single most important action. Coral fill, white label. |
| `.btn--secondary` | Supporting actions. Cream fill, hairline border. |
| `.btn--secondary-on-dark` | Secondary over a dark surface — stays dark (`surface-dark-elevated`), never inverts to light. |
| `.btn--on-coral` | The cream button placed inside a coral callout. |
| `.btn--text` | Inline text button ("Sign in"). |
| `.btn--icon` | 36px circular icon button (carousel arrows, share). |

States are default and `:active` (press) only. Disabled uses `{colors.primary-disabled}`.

# Examples
- [button.example.html](/components/button.example.html) — every variant and the press/disabled states.

# Behavior
- Press darkens only; nothing animates on hover — [press states only](/behaviors/press-states-only.md).

# Accessibility
Always a real `<button>` or `<a>`; an icon-only `.btn--icon` needs an `aria-label`. The circular
icon button is 36×36 (just under the WCAG 44px target) but visually centered with ample tap area.

# Do & Don't
- **Do** keep one `.btn--primary` per view; the coral is scarce. See [coral is scarce](/guidelines/coral-is-scarce.md).
- **Don't** invert a secondary to a light fill on dark surfaces; use `.btn--secondary-on-dark`.
