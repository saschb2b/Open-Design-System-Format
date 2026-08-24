---
type: Component
title: Box
description: The bordered panel — a header, rows, and footer — that frames most GitHub content.
tags: [components, box, panel, container, surface]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/box.example.html
  - /components/box.wireframe.html
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

# Structure
A bordered container that stacks full-width regions in DOM order. The Box itself sets no padding;
each region owns its own `{spacing.16}` inset, which is what lets a row-only Box sit flush.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Box-header` | 1 | full width, `{spacing.16}` padding | none | unchanged |
| `.Box-row` | 2..n | centred flex row, `{spacing.8}` between children | none | unchanged |
| `.Box-footer` | last | full width, `{spacing.16}` padding | none | unchanged |

Regions abut with no gap and are divided by a top border on each row, suppressed on the first so
the header seam is not doubled. Inside a row the pattern is icon, then a `flex: 1` label that
absorbs the slack, then trailing metadata, which is what right-aligns the labels without any
`justify-content`. A `.Box-body` replaces rows when the content is prose rather than a list.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Box.background` | `{colors.bgColor-default}` |
| `Box.border` | `{colors.borderColor-default}` |
| `Box-header.background` | `{colors.bgColor-muted}` |

# Examples
- [box.example.html](/components/box.example.html) — a header with divided rows and a footer.
- [box.wireframe.html](/components/box.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
The Box is a visual grouping, not a landmark; use a real heading in the header and list semantics for
rows where appropriate.

# Do & Don't
- **Do** use a muted header to title the panel and hairline rows to divide items.
- **Don't** add a drop shadow; the border plus muted/default contrast is the entire treatment.
