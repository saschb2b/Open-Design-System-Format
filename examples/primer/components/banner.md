---
type: Component
title: Banner
description: The inline message bar (info / success / warning / error) GitHub shows as "flash".
tags: [components, banner, flash, message, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/banner.example.html
  - /components/banner.wireframe.html
tokens:
  flash:
    background: "{colors.bgColor-accent-muted}"
    border: "{colors.borderColor-accent-emphasis}"
    radius: "{radius.medium}"
  flash-warn:
    background: "{colors.bgColor-attention-muted}"
  flash-error:
    background: "{colors.bgColor-danger-muted}"
---

The inline message bar (GitHub's `flash`) that surfaces status above content: information, success,
warning, or error. Each variant pairs a **tinted `*-muted` background** with a matching foreground
icon and border, so the severity reads instantly — and, crucially, the icon plus text carry the
meaning, not the color alone. See [banner.example.html](/components/banner.example.html).

# Anatomy
A `.flash` (variant `.flash-success` / `.flash-warn` / `.flash-error`): a leading status icon in the
role color, then the message, inside `{spacing.16}` padding with a 1px role border and
`{radius.medium}` corners.

# Structure
A flex row aligned to the top, not centred, inside `{spacing.16}` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Status icon | 1 | fixed (`flex: none`), nudged `1px` down to sit on the first line | `{spacing.8}` | unchanged |
| Message | 2 | fills the remaining width, wraps | none | unchanged |

`align-items: flex-start` is the rule that matters: a banner whose message wraps to three lines
keeps its icon beside the first line instead of floating it to the vertical centre. `flex: none` on
the icon stops it being squeezed by a long message. All four severities share this box exactly;
they differ only in fill and border colour.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `flash.background` | `{colors.bgColor-accent-muted}` |
| `flash-warn.background` | `{colors.bgColor-attention-muted}` |
| `flash-error.background` | `{colors.bgColor-danger-muted}` |

# Examples
- [banner.example.html](/components/banner.example.html) — info, success, warning, error.
- [banner.wireframe.html](/components/banner.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `role="status"` (or `role="alert"` for errors) so the message is announced. The leading icon and
the text both convey severity — see [color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** lead with an icon that names the severity.
- **Don't** rely on the tint alone; pair every banner with an icon and clear copy.
