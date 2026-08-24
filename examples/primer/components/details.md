---
type: Component
title: Details
description: A native disclosure that expands to reveal its content, with a rotating caret.
tags: [components, details, disclosure, accordion]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/details.example.html
  - /components/details.wireframe.html
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

# Structure
A disclosure whose two parts stack in DOM order, with the body indented to align under the summary
text rather than the caret.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `summary` | 1 | inline flex row: caret then label, `6px` apart | `{spacing.8}` | unchanged |
| `.Details-body` | 2 | full width, indented `20px` from the left | none | unchanged |

The `20px` body indent is set to clear the caret plus its gap, which is what makes the open state
read as nested. The caret rotates 90 degrees when open; rotation does not change the box, so the
summary row does not shift. Collapsing removes the body from flow entirely, so following content
moves up by the body height rather than the body being hidden in place.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Details-caret.color` | `{colors.fgColor-muted}` |

# Examples
- [details.example.html](/components/details.example.html) — a collapsible section.
- [details.wireframe.html](/components/details.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Native `<details>`/`<summary>` is keyboard- and screen-reader-accessible for free (Enter/Space toggles,
state announced). Keep the summary a meaningful label.

# Do & Don't
- **Do** use native `<details>` for simple disclosure.
- **Don't** rebuild it in JS unless you need animated or controlled behavior.
