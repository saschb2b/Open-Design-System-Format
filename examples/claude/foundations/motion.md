---
type: Motion
title: Motion
description: Intentionally minimal — a single press transition; marketing animation is out of scope.
tags: [foundations, motion, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  motion:
    fast: "120ms"
    easing-standard: "cubic-bezier(0.2, 0, 0, 1)"
---

Motion in this system is deliberately scarce. The interface communicates through color and type,
not movement. The one encoded transition is the **press darkening** of a primary
[button](/components/button.md); everything else (hero reveals, the homepage code typewriter,
agentic-flow diagrams) is decorative animation that lives outside this marketing token set — see
[Known gaps](/references/claude-design-md.md). Projected as `--motion-fast` in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `motion.fast` | `120ms` | The primary button's background transition on press. |
| `motion.easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | The single standard easing. |

# Do & Don't
- **Do** keep state changes to the press darkening the system already encodes.
- **Don't** add hover animations or attention-looping motion. See
  [press states only](/behaviors/press-states-only.md).
