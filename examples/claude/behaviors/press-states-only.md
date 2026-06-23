---
type: Behavior
title: Press states only
description: Interactive elements change on press, not on hover — the system encodes no hover styling.
tags: [behaviors, state, interaction]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

Claude's interface is calm: controls react to a deliberate press, not to the cursor passing over
them. The system encodes **default and active (pressed) states only** — no hover color shifts, no
hover lifts, no hover animations.

# Rule
- A primary [button](/components/button.md) darkens from `{colors.primary}` to
  `{colors.primary-active}` on `:active`. That is the entire state machine.
- Do not add `:hover` styling. The one exception is the rare card hover-lift via
  `{elevation.soft}` (see [elevation](/foundations/elevation.md)), used sparingly.

```css
.btn--primary:active { background: var(--colors-primary-active); }
/* no .btn--primary:hover rule exists */
```

# States
| State | Treatment |
|-------|-----------|
| default | base token |
| active (press) | primary darkens to `{colors.primary-active}` |
| focus | visible focus ring (keyboard) — see [text input](/components/text-input.md) |

# Accessibility
Press feedback is supplemented by a clear `:focus-visible` ring for keyboard users; never remove the
focus outline. Motion stays within `{motion.fast}` — see [motion](/foundations/motion.md).

# Do & Don't
- **Do** keep the press darkening as the only color state change.
- **Don't** introduce hover effects to "liven up" the UI; restraint is the brand.
