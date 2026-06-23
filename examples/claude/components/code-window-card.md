---
type: Component
title: Code-window card
description: The dark editor mockup with line numbers and syntax highlighting — Claude's signature product visual.
tags: [components, card, code, dark]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/code-window-card.example.html
tokens:
  code-window:
    background: "{colors.surface-dark}"
    inner: "{colors.surface-dark-soft}"
    radius: "{radius.lg}"
    padding: "{spacing.lg}"
    code: "{typography.code}"
---

The dark navy code-window is Claude's signature marketing visual — the brand shows *real product
chrome* (a code editor, line numbers, syntax highlighting, terminal output) instead of abstract
illustrations of code. Its dark surface is half of the cream-to-dark pacing rhythm. See
[code-window-card.example.html](/components/code-window-card.example.html).

# Anatomy
`.code-window` (`{colors.surface-dark}`, `{radius.lg}`, `{spacing.lg}` padding) → a `.code-window__bar`
with three dots and a filename in `{typography.code}` → a `.code-block` (`{colors.surface-dark-soft}`)
holding line-numbered, syntax-highlighted `{typography.code}` (JetBrains Mono).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `code-window.background` | `{colors.surface-dark}` |
| `code-window.inner` | `{colors.surface-dark-soft}` |
| `code-window.code` | `{typography.code}` |

Syntax tones stay muted and warm — keywords `#c4886a`, functions `#7aa2c4`, strings `#9bbf8a`,
comments `{colors.muted-soft}`, numbers `{colors.accent-amber}`.

# Examples
- [code-window-card.example.html](/components/code-window-card.example.html) — a Claude API call.

# Accessibility
On mobile, code scrolls horizontally inside the card rather than wrapping, preserving legibility —
see [layout](/foundations/layout.md). Provide a text alternative when the code is decorative.

# Do & Don't
- **Do** show real, runnable-looking code; it is more convincing than a painted illustration.
- **Don't** lighten the surface — the dark navy is what makes the product chrome read as product.
