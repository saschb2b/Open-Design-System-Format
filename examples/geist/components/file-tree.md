---
type: Component
title: File tree
description: An expandable hierarchy for browsing files and folders.
tags: [components, file-tree, navigation, hierarchy]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/file-tree.example.html
  - /components/file-tree.wireframe.html
---

A nested, expandable list for source files and folders — the repo browser and deployment source
viewer. Folders expand/collapse; rows highlight on hover (`{colors.gray-100}`); indentation shows
depth. See [file-tree.example.html](/components/file-tree.example.html).

# Structure
Nested lists where depth is expressed as left padding on each subtree, so indentation accumulates
structurally rather than being computed per row.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.file-tree-item` row | 1..n | full width; icon fixed, label fills the rest, `6px` apart | none | unchanged |
| Nested `ul` | under its parent | full width, indented `18px` | none | unchanged |

Each level adds `18px` of padding to the subtree, so a row at depth 3 is inset `54px` with no
depth-aware rule anywhere. Rows abut with no gap and stay full width at every depth, which means
the hover and selected fills bleed to the tree left edge rather than starting at the label.
`flex: none` on the icon stops it being squeezed by a long filename, which overflows rather than
wrapping.

# Accessibility
Implement the ARIA `tree`/`treeitem` pattern with `aria-expanded` on folders and `aria-selected` on the
active file; arrow keys navigate and expand/collapse.

# Do & Don't
- **Do** use a tree for genuinely hierarchical data.
- **Don't** use it for a flat list — that is a [menu](/components/menu.md).
