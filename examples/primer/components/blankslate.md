---
type: Component
title: Blankslate
description: The centered empty state — icon, heading, description, and a primary action.
tags: [components, blankslate, empty-state, content]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/blankslate.example.html
tokens:
  Blankslate:
    icon: "{colors.fgColor-muted}"
    description: "{colors.fgColor-muted}"
---

The friendly empty state shown when a list or area has no content yet — no issues, no results, a new
repo. It centers a muted icon, a heading, a one-line description in `{colors.fgColor-muted}`, and a
single [primary action](/components/button.md) to move forward. Usually placed inside a
[Box](/components/box.md). See [blankslate.example.html](/components/blankslate.example.html).

# Anatomy
A `.Blankslate`: `.Blankslate-icon` → `.Blankslate-heading` → `.Blankslate-description` → an action
([button](/components/button.md)).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Blankslate.icon` | `{colors.fgColor-muted}` |
| `Blankslate.description` | `{colors.fgColor-muted}` |

# Examples
- [blankslate.example.html](/components/blankslate.example.html) — an empty issues list.

# Accessibility
Use a real heading; the action is the primary next step. If the icon is decorative, hide it from
assistive tech (`aria-hidden`).

# Do & Don't
- **Do** offer one clear next action.
- **Don't** fill an empty state with multiple competing buttons.
