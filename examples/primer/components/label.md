---
type: Component
title: Label
description: The outlined status pills GitHub uses for issues, PRs, and metadata, plus the Counter.
tags: [components, label, badge, status]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/label.example.html
tokens:
  Label:
    color: "{colors.fgColor-muted}"
    border: "{colors.borderColor-default}"
    radius: "{radius.full}"
    typography: "{typography.body-small}"
  Label-accent:
    color: "{colors.fgColor-accent}"
    border: "{colors.borderColor-accent-emphasis}"
---

The small outlined pill that tags issues, pull requests, and metadata across GitHub. A Label is an
**outline, not a fill** — colored text on a transparent body with a matching 1px border — so many
can sit in a row without shouting. The `Counter` is its rounded sibling for counts. See
[label.example.html](/components/label.example.html).

# Anatomy
A `.Label` (or `.Label--<role>`): `{typography.body-small}` (12px), 20px tall, `0 7px` padding,
fully round (`{radius.full}`), 1px border in the role's color. Colors come from foreground roles, so
labels theme automatically.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Label.color` | `{colors.fgColor-muted}` |
| `Label.border` | `{colors.borderColor-default}` |
| `Label-accent.color` | `{colors.fgColor-accent}` |

# Variants & States
`.Label` (neutral) · `.Label--accent` (blue) · `.Label--success` (green) · `.Label--danger` (red) ·
`.Label--done` (purple) · `.Label--primary` (filled emphasis). `.Counter` for numeric counts.

# Examples
- [label.example.html](/components/label.example.html) — every variant and a Counter.

# Accessibility
A Label's meaning must not rest on color alone — the text label carries it. See
[color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** keep labels as outlines so a row of them stays calm.
- **Don't** invent label colors outside the foreground roles; they must theme in dark mode.
