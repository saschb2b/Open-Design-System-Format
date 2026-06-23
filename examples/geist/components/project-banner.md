---
type: Component
title: Project banner
description: A contextual bar that marks the current project or environment state.
tags: [components, banner, project, status]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/project-banner.example.html
---

A scoped [banner](/components/banner.md) that marks the state of the current project or environment —
"You are viewing a preview deployment", "This project is paused". It carries a
[status dot](/components/status-dot.md) or [badge](/components/badge.md) and an action to act on the
state. See [project-banner.example.html](/components/project-banner.example.html).

# Accessibility
`role="status"`; the action is a real button; keep the scope ("this project/deployment") explicit in
the text.

# Do & Don't
- **Do** make the scope and the next action clear.
- **Don't** confuse it with the global [banner](/components/banner.md); this one is about the current context.
