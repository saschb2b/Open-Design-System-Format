---
type: Component
title: Box
description: The bordered panel — a header, rows, and footer — that frames most GitHub content.
tags: [components, box, panel, container, surface]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/box.example.html
tokens:
  Box:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    radius: "{radius.medium}"
  Box-header:
    background: "{colors.bgColor-muted}"
---

The bordered panel that frames most GitHub content — file lists, settings groups, issue bodies. A
`.Box` is a `{colors.bgColor-default}` surface with a 1px `{colors.borderColor-default}` border and
`{radius.medium}` corners; a `.Box-header` (and optional `.Box-footer`) in `{colors.bgColor-muted}`
caps it, and `.Box-row`s divide the body with hairlines. Depth comes from the border and the muted/
default contrast, not shadow — see [elevation](/foundations/elevation.md). See
[box.example.html](/components/box.example.html).

# Anatomy
`.Box` → `.Box-header` (muted, semibold) → one or more `.Box-row` (hairline-divided) or a single
`.Box-body` → optional `.Box-footer` (muted). Padding is `{spacing.16}` throughout.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Box.background` | `{colors.bgColor-default}` |
| `Box.border` | `{colors.borderColor-default}` |
| `Box-header.background` | `{colors.bgColor-muted}` |

# Examples
- [box.example.html](/components/box.example.html) — a header with divided rows and a footer.

# Accessibility
The Box is a visual grouping, not a landmark; use a real heading in the header and list semantics for
rows where appropriate.

# Do & Don't
- **Do** use a muted header to title the panel and hairline rows to divide items.
- **Don't** add a drop shadow; the border plus muted/default contrast is the entire treatment.
