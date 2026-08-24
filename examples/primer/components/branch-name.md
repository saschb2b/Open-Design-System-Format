---
type: Component
title: Branch name
description: A small monospace pill for a Git ref — branch, tag, or commit SHA.
tags: [components, branch-name, git, label]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/branch-name.example.html
  - /components/branch-name.wireframe.html
tokens:
  branch-name:
    color: "{colors.fgColor-accent}"
    background: "{colors.bgColor-accent-muted}"
    radius: "{radius.medium}"
---

A small inline pill that renders a Git reference — a branch, tag, or short commit SHA — in
`{typography.fontFamily-monospace}` on a tinted `{colors.bgColor-accent-muted}` fill. It marks "this
is a ref" wherever one appears in running text. See
[branch-name.example.html](/components/branch-name.example.html).

# Anatomy
A `.branch-name`: monospace text in `{colors.fgColor-accent}` on `{colors.bgColor-accent-muted}`, with
`{radius.medium}` corners and an optional leading branch icon.

# Structure
An inline flex chip sized entirely by its content, with `2px 6px` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Icon (optional) | 1 | fixed 14px | `{spacing.4}` | unchanged |
| Ref text | 2 | content width, no wrap | none | unchanged |

The chip sits in the text flow and grows with the ref, so a long branch name widens it rather than
wrapping. Pair it with [truncate](/components/truncate.md) when the ref is unbounded and the row
has a fixed width.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `branch-name.color` | `{colors.fgColor-accent}` |
| `branch-name.background` | `{colors.bgColor-accent-muted}` |

# Examples
- [branch-name.example.html](/components/branch-name.example.html) — branch, tag, and SHA.
- [branch-name.wireframe.html](/components/branch-name.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
If the icon conveys the ref type, give it a label or adjacent text; the monospace text is the value.

# Do & Don't
- **Do** use it for any Git ref shown inline.
- **Don't** style arbitrary code as a branch name — use a `<code>` element for that.
