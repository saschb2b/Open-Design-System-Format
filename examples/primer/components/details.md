---
type: Component
title: Details
description: A native disclosure that expands to reveal its content, with a rotating caret.
tags: [components, details, disclosure, accordion]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/details.example.html
tokens:
  Details-caret:
    color: "{colors.fgColor-muted}"
---

A progressive-disclosure control built on native `<details>`/`<summary>` — a clickable summary with a
caret that rotates open to reveal its content. Used for "show more", collapsible sections, and
lightweight accordions, with no JavaScript. See [details.example.html](/components/details.example.html).

# Anatomy
A `.Details` (`<details>`) → `<summary>` (the toggle, with a `.Details-caret`) → `.Details-body`. The
caret rotates 90° in the `[open]` state.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Details-caret.color` | `{colors.fgColor-muted}` |

# Examples
- [details.example.html](/components/details.example.html) — a collapsible section.

# Accessibility
Native `<details>`/`<summary>` is keyboard- and screen-reader-accessible for free (Enter/Space toggles,
state announced). Keep the summary a meaningful label.

# Do & Don't
- **Do** use native `<details>` for simple disclosure.
- **Don't** rebuild it in JS unless you need animated or controlled behavior.
