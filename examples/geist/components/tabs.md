---
type: Component
title: Tabs
description: Underlined navigation between sibling views.
tags: [components, tabs, navigation]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/tabs.example.html
---

Underlined tabs for switching between page sections — Overview, Deployments, Settings. The bar is a
single hairline; the active tab is `{colors.gray-1000}` with an underline. For a compact in-place
switch use a [toggle](/components/toggle.md). See [tabs.example.html](/components/tabs.example.html).

# Accessibility
Use `<nav>` with `aria-current="page"` for page tabs, or the ARIA `tablist`/`tab`/`tabpanel` pattern
for in-page panels; arrow keys move between tabs.

# Do & Don't
- **Do** mark the active tab with both color and the underline.
- **Don't** overflow many tabs; collapse extras into a menu.
