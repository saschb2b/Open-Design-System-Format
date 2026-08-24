---
type: Component
title: Token
description: A small removable pill representing a selected value inside an input.
tags: [components, token, input, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/token.example.html
  - /components/token.wireframe.html
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

# Structure
An inline flex chip at a fixed 20px height, with asymmetric padding to balance the remove button.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Label | 1 | content width, no wrap | `{spacing.4}` | unchanged |
| `.Token-remove` | 2 | fixed, zero padding | none | unchanged |

Padding is `0 4px 0 8px`: tighter on the right because the remove button carries its own optical
space, so the chip looks evenly inset even though it is not. The chip grows with its label and
never wraps, so a set of tokens is laid out by a wrapping flex container around them rather than by
the chip itself.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Token.background` | `{colors.bgColor-neutral-muted}` |
| `Token.border` | `{colors.borderColor-muted}` |

# Examples
- [token.example.html](/components/token.example.html) — a row of removable tokens.
- [token.wireframe.html](/components/token.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
The remove button needs an `aria-label` ("Remove <value>"); removing a token should return focus to
the input. Tokens are reachable by keyboard.

# Do & Don't
- **Do** use tokens for multi-select values the user can remove.
- **Don't** use a token for a non-removable status — that is a [Label](/components/label.md).
