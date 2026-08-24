---
type: Component
title: Tree view
description: A hierarchical, expandable list for nested data like a file explorer.
tags: [components, tree-view, navigation, hierarchy]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/tree-view.example.html
  - /components/tree-view.wireframe.html
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

# Structure
Nested lists where depth is expressed as left padding on each subtree, so indentation accumulates
structurally rather than being computed per row.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.TreeView-item` row | 1..n | full width; icon fixed, label fills the rest, `6px` apart | none | unchanged |
| `.TreeView-sub` | under its parent | full width, indented `20px` | none | unchanged |

Each nesting level adds `20px` of padding to the subtree, so a row at depth 3 is inset `60px` with
no depth-aware rule anywhere. Rows abut with no gap and are full width at every depth, which means
the hover and current fills bleed to the left edge of the tree rather than starting at the label.
`flex: none` on the icon keeps it from being squeezed by a long filename, which will overflow
rather than wrap.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `TreeView-item.hover` | `{colors.bgColor-muted}` |
| `TreeView-item-current.background` | `{colors.bgColor-accent-muted}` |

# Examples
- [tree-view.example.html](/components/tree-view.example.html) — a file tree.
- [tree-view.wireframe.html](/components/tree-view.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Implement the ARIA `tree`/`treeitem` pattern with `aria-expanded` on parent nodes and
`aria-selected` on the active one; arrow keys navigate and expand/collapse.

# Do & Don't
- **Do** use a tree for genuinely hierarchical data.
- **Don't** use it for a flat list — that is a [nav list](/components/nav-list.md) or [action list](/components/action-list.md).
