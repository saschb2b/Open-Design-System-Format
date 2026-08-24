---
type: Component
title: Collapse
description: A hairline-divided accordion of expandable sections.
tags: [components, collapse, accordion, disclosure]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/collapse.example.html
  - /components/collapse.wireframe.html
---

A stack of disclosure rows divided by hairlines — each a clickable summary with a rotating chevron
that expands to reveal its content. Built on native `<details>`. For a single inline expander use
[show more](/components/show-more.md). See [collapse.example.html](/components/collapse.example.html).

# Structure
A disclosure whose summary is a full-width row with its parts pushed to opposite edges.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `summary` label | 1.1 | content width | pushed apart | unchanged |
| Chevron | 1.2 | fixed, right-aligned by `justify-content: space-between` | none | unchanged |
| `.collapse-body` | 2 | full width, `4px` side padding | none | removed from flow when closed |

The row is `14px 4px`, so the tap target is tall while the text still aligns to the container edge.
The chevron rotates 90 degrees when open, which changes no box, so the summary row does not shift.
Closing removes the body from flow entirely, so following items move up by the full body height
rather than the body being hidden in place. Items stack directly against each other and are divided
by an inset bottom rule that costs no height.

# Accessibility
Native `<details>`/`<summary>` is keyboard- and screen-reader-accessible (Enter/Space toggles, state
announced). Keep summaries meaningful.

# Do & Don't
- **Do** use native `<details>` for simple accordions.
- **Don't** default everything open; collapse is for progressive disclosure.
