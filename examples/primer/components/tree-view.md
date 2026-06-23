---
type: Component
title: Tree view
description: A hierarchical, expandable list for nested data like a file explorer.
tags: [components, tree-view, navigation, hierarchy]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/tree-view.example.html
tokens:
  TreeView-item:
    hover: "{colors.bgColor-muted}"
  TreeView-item-current:
    background: "{colors.bgColor-accent-muted}"
---

A hierarchical, expandable list for nested structures — the repository file explorer being the
canonical case. Folders expand/collapse; the selected node is tinted with
`{colors.bgColor-accent-muted}`; indentation shows depth. See
[tree-view.example.html](/components/tree-view.example.html).

# Anatomy
A `.TreeView` of `.TreeView-item` rows (leading folder/file `.TreeView-icon` + label); nested
`.TreeView-sub` lists indent children. The current node carries `.TreeView-item--current`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `TreeView-item.hover` | `{colors.bgColor-muted}` |
| `TreeView-item-current.background` | `{colors.bgColor-accent-muted}` |

# Examples
- [tree-view.example.html](/components/tree-view.example.html) — a file tree.

# Accessibility
Implement the ARIA `tree`/`treeitem` pattern with `aria-expanded` on parent nodes and
`aria-selected` on the active one; arrow keys navigate and expand/collapse.

# Do & Don't
- **Do** use a tree for genuinely hierarchical data.
- **Don't** use it for a flat list — that is a [nav list](/components/nav-list.md) or [action list](/components/action-list.md).
