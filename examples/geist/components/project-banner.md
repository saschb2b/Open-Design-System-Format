---
type: Component
title: Project banner
description: A contextual bar that marks the current project or environment state.
tags: [components, banner, project, status]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/project-banner.example.html
  - /components/project-banner.wireframe.html
---

A scoped [banner](/components/banner.md) that marks the state of the current project or environment —
"You are viewing a preview deployment", "This project is paused". It carries a
[status dot](/components/status-dot.md) or [badge](/components/badge.md) and an action to act on the
state. See [project-banner.example.html](/components/project-banner.example.html).

# Structure
The [banner](/components/banner.md) row exactly, with a status dot folded into the message.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Status dot + message | 1 | `flex: 1`, absorbs the slack; dot is a `::before` pseudo-element | `10px` | unchanged |
| Action | 2 | content width | none | unchanged |

The dot is generated content on the message rather than a sibling element, so it stays locked to
the first line of text and costs nothing in the row gap sequence. `flex: 1` on the message pins the
action right. The row does not wrap, so a long environment name compresses the button.

# Accessibility
`role="status"`; the action is a real button; keep the scope ("this project/deployment") explicit in
the text.

# Do & Don't
- **Do** make the scope and the next action clear.
- **Don't** confuse it with the global [banner](/components/banner.md); this one is about the current context.
