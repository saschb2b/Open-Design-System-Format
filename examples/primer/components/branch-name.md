---
type: Component
title: Branch name
description: A small monospace pill for a Git ref — branch, tag, or commit SHA.
tags: [components, branch-name, git, label]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/branch-name.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `branch-name.color` | `{colors.fgColor-accent}` |
| `branch-name.background` | `{colors.bgColor-accent-muted}` |

# Examples
- [branch-name.example.html](/components/branch-name.example.html) — branch, tag, and SHA.

# Accessibility
If the icon conveys the ref type, give it a label or adjacent text; the monospace text is the value.

# Do & Don't
- **Do** use it for any Git ref shown inline.
- **Don't** style arbitrary code as a branch name — use a `<code>` element for that.
