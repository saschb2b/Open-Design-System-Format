---
type: Component
title: Dialog
description: A modal overlay with a header, body, and footer actions, over a dimmed backdrop.
tags: [components, dialog, modal, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/dialog.example.html
  - /components/dialog.wireframe.html
tokens:
  Dialog:
    background: "{colors.bgColor-default}"
    radius: "{radius.large}"
    shadow: "{elevation.floating-small}"
---

A focused modal for a discrete task or confirmation, centered over a dimmed backdrop that blocks the
page beneath. It has a titled header (with a close button), a body, and a right-aligned footer of
[buttons](/components/button.md). See [dialog.example.html](/components/dialog.example.html).

# Anatomy
A `.Dialog-backdrop` (dimmed scrim) containing a `.Dialog` ([`{radius.large}`], `{elevation.floating-small}`):
`.Dialog-header` (title + close icon button) → `.Dialog-body` → `.Dialog-footer` (Cancel + a primary
or danger action).

# Structure
A fixed-width panel of three stacked regions, centred in its backdrop. The panel is `440px` wide
but capped at `100%`, so it shrinks on a narrow viewport instead of overflowing.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Dialog-header` | 1 | full width; title `flex: 1`, close button fixed | none | unchanged |
| `.Dialog-body` | 2 | full width, grows with content | none | unchanged |
| `.Dialog-footer` | 3 | full width; actions pushed right, `{spacing.8}` apart | none | unchanged |

Each region owns `{spacing.16}` of padding and is divided by a border, so the regions abut with no
gap. `flex: 1` on the title is what pins the close button to the right edge, and
`justify-content: flex-end` does the same for the footer actions, so neither depends on a spacer
element. The example renders the backdrop inline so it is visible in a static page; in use it is
fixed over the viewport.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Dialog.background` | `{colors.bgColor-default}` |
| `Dialog.radius` | `{radius.large}` |
| `Dialog.shadow` | `{elevation.floating-small}` |

# Examples
- [dialog.example.html](/components/dialog.example.html) — a confirmation dialog.
- [dialog.wireframe.html](/components/dialog.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `role="dialog"` with `aria-modal="true"` and an `aria-labelledby` pointing at the title. **Trap
focus** inside while open, return it to the trigger on close, and close on Escape and backdrop click.

# Do & Don't
- **Do** keep dialogs short and focused on one task.
- **Don't** stack dialogs or use one for content that belongs on a page.
