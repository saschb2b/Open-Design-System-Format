---
type: Component
title: Popover
description: A small pointed overlay anchored to an element, for tips and lightweight callouts.
tags: [components, popover, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/popover.example.html
tokens:
  Popover:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    shadow: "{elevation.floating-small}"
---

A small overlay with a caret pointing at the element it is anchored to — for onboarding hints,
feature callouts, or contextual help. Richer than a [tooltip](/components/tooltip.md) (it can hold
headings, body text, and a [button](/components/button.md)) and dismissible. See
[popover.example.html](/components/popover.example.html).

# Anatomy
A `.Popover` ([`{colors.bgColor-default}`], `{colors.borderColor-default}` border,
`{elevation.floating-small}`) with a CSS caret (`::before`/`::after`) pointing at the anchor; holds a
heading, body, and an optional action.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Popover.background` | `{colors.bgColor-default}` |
| `Popover.shadow` | `{elevation.floating-small}` |

# Examples
- [popover.example.html](/components/popover.example.html) — a callout with a caret.

# Accessibility
Manage focus and dismissal (Escape / outside click); reference the popover from its trigger. Don't put
essential-only content in a popover, and show it on focus as well as click.

# Do & Don't
- **Do** use a popover for opt-in, dismissible guidance.
- **Don't** use it for blocking tasks — that is a [dialog](/components/dialog.md).
