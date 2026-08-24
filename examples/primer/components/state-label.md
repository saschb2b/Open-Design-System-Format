---
type: Component
title: State label
description: The large filled status pill for issues and pull requests — Open, Closed, Merged, Draft.
tags: [components, state-label, status, issue, pull-request]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/state-label.example.html
  - /components/state-label.wireframe.html
tokens:
  State-open:
    background: "{colors.bgColor-success-emphasis}"
  State-closed:
    background: "{colors.bgColor-danger-emphasis}"
  State-merged:
    background: "{colors.bgColor-done-emphasis}"
  State-draft:
    background: "{colors.bgColor-neutral-emphasis}"
---

The prominent **filled** status pill at the top of an issue or pull request. Unlike the outlined
[Label](/components/label.md), a State label is a solid emphasis fill with white text and a leading
icon, encoding the item's lifecycle: **Open** is green, **Closed** red, **Merged** purple, **Draft**
gray. The color is doubled by the icon and word, never carried alone. See
[state-label.example.html](/components/state-label.example.html).

# Structure
An inline flex pill, centred, at a fixed 24px height with `{spacing.12}` of side padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| State icon | 1 | fixed 16px | `{spacing.4}` | unchanged |
| State text | 2 | content width, no wrap | none | unchanged |

Height is fixed so a row of state labels sits on one line regardless of label length, and width
follows the text. All four states share this box exactly and differ only in fill, so the wireframe
shows four identical pills. The icon is required, not decorative: it is what keeps the state
distinguishable without colour, per
[color is not the only signal](/guidelines/color-not-alone.md).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `State-open.background` | `{colors.bgColor-success-emphasis}` (green) |
| `State-closed.background` | `{colors.bgColor-danger-emphasis}` (red) |
| `State-merged.background` | `{colors.bgColor-done-emphasis}` (purple) |
| `State-draft.background` | `{colors.bgColor-neutral-emphasis}` (gray) |

# Variants & States
`.State--open` · `.State--closed` · `.State--merged` · `.State--draft`.

# Examples
- [state-label.example.html](/components/state-label.example.html) — all four states.
- [state-label.wireframe.html](/components/state-label.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Each state pairs its emphasis color with an icon and the state word, so it never depends on color —
see [color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** show exactly one State label per issue/PR, at the top.
- **Don't** swap the conventional colors; open-is-green and merged-is-purple are learned signals.
