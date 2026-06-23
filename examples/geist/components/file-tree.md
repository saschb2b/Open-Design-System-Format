---
type: Component
title: File tree
description: An expandable hierarchy for browsing files and folders.
tags: [components, file-tree, navigation, hierarchy]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/file-tree.example.html
---

A nested, expandable list for source files and folders — the repo browser and deployment source
viewer. Folders expand/collapse; rows highlight on hover (`{colors.gray-100}`); indentation shows
depth. See [file-tree.example.html](/components/file-tree.example.html).

# Accessibility
Implement the ARIA `tree`/`treeitem` pattern with `aria-expanded` on folders and `aria-selected` on the
active file; arrow keys navigate and expand/collapse.

# Do & Don't
- **Do** use a tree for genuinely hierarchical data.
- **Don't** use it for a flat list — that is a [menu](/components/menu.md).
