---
type: Component
title: Code-window card
description: The dark editor mockup with line numbers and syntax highlighting — Claude's signature product visual.
tags: [components, card, code, dark]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/code-window-card.example.html
  - /components/code-window-card.wireframe.html
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

# Structure
A two-part column inside `{spacing.lg}` padding: a chrome bar, then the code pane. The bar is a
centred flex row; the pane is a block that scrolls rather than reflows.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.code-window__bar` | 1 | full width, fixed height | `{spacing.md}` | unchanged |
| `.code-window__dot` ×3 | 1.1 | fixed 11px circles, `{spacing.xs}` apart | `{spacing.sm}` before the title | unchanged |
| `.code-window__title` | 1.2 | content width | none | unchanged |
| `.code-block` | 2 | full width, height driven by line count | none | unchanged |

The code pane sets `overflow: auto`, so long lines scroll horizontally inside the card instead of
widening it or wrapping. That is deliberate: wrapped code breaks the line-number column, which is
laid out as a fixed `1.6em` inline-block per line. The card has no breakpoint of its own and simply
takes the width its container gives it.

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
- [code-window-card.wireframe.html](/components/code-window-card.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
On mobile, code scrolls horizontally inside the card rather than wrapping, preserving legibility —
see [layout](/foundations/layout.md). Provide a text alternative when the code is decorative.

# Do & Don't
- **Do** show real, runnable-looking code; it is more convincing than a painted illustration.
- **Don't** lighten the surface — the dark navy is what makes the product chrome read as product.
