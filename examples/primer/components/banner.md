---
type: Component
title: Banner
description: The inline message bar (info / success / warning / error) GitHub shows as "flash".
tags: [components, banner, flash, message, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/banner.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `flash.background` | `{colors.bgColor-accent-muted}` |
| `flash-warn.background` | `{colors.bgColor-attention-muted}` |
| `flash-error.background` | `{colors.bgColor-danger-muted}` |

# Examples
- [banner.example.html](/components/banner.example.html) — info, success, warning, error.

# Accessibility
Use `role="status"` (or `role="alert"` for errors) so the message is announced. The leading icon and
the text both convey severity — see [color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** lead with an icon that names the severity.
- **Don't** rely on the tint alone; pair every banner with an icon and clear copy.
