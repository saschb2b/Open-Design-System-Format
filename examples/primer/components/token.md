---
type: Component
title: Token
description: A small removable pill representing a selected value inside an input.
tags: [components, token, input, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/token.example.html
tokens:
  Token:
    background: "{colors.bgColor-neutral-muted}"
    border: "{colors.borderColor-muted}"
    radius: "{radius.medium}"
---

A compact, removable pill standing for one selected value — a label, an assignee, a topic — usually
shown in a row inside a multi-select input. Smaller and dismissible, unlike the read-only
[Label](/components/label.md). See [token.example.html](/components/token.example.html).

# Anatomy
A `.Token` (text + a `.Token-remove` button with an × icon) on a `{colors.bgColor-neutral-muted}`
fill with a `{colors.borderColor-muted}` border.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Token.background` | `{colors.bgColor-neutral-muted}` |
| `Token.border` | `{colors.borderColor-muted}` |

# Examples
- [token.example.html](/components/token.example.html) — a row of removable tokens.

# Accessibility
The remove button needs an `aria-label` ("Remove <value>"); removing a token should return focus to
the input. Tokens are reachable by keyboard.

# Do & Don't
- **Do** use tokens for multi-select values the user can remove.
- **Don't** use a token for a non-removable status — that is a [Label](/components/label.md).
