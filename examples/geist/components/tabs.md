---
type: Component
title: Tabs
description: Underlined navigation between sibling views.
tags: [components, tabs, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/tabs.example.html
  - /components/tabs.wireframe.html
---

Underlined tabs for switching between page sections — Overview, Deployments, Settings. The bar is a
single hairline; the active tab is `{colors.gray-1000}` with an underline. For a compact in-place
switch use a [toggle](/components/toggle.md). See [tabs.example.html](/components/tabs.example.html).

# Structure
A flex row of tabs sitting on a shared bottom rule, `2px` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.tab` | 1..n | content width, `8px 12px` padding | `2px` | unchanged |

Each tab carries a transparent `2px` bottom border at rest and `margin-bottom: -1px`, which pulls
it onto the container rule so the active indicator can paint over it. Because the border exists in
every state, activation colours an existing box and nothing moves. The container rule is an inset
`box-shadow`, so it adds no height. The row does not wrap or scroll, which bounds the usable tab
count.

# Accessibility
Use `<nav>` with `aria-current="page"` for page tabs, or the ARIA `tablist`/`tab`/`tabpanel` pattern
for in-page panels; arrow keys move between tabs.

# Do & Don't
- **Do** mark the active tab with both color and the underline.
- **Don't** overflow many tabs; collapse extras into a menu.
