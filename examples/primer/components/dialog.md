---
type: Component
title: Dialog
description: A modal overlay with a header, body, and footer actions, over a dimmed backdrop.
tags: [components, dialog, modal, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/dialog.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Dialog.background` | `{colors.bgColor-default}` |
| `Dialog.radius` | `{radius.large}` |
| `Dialog.shadow` | `{elevation.floating-small}` |

# Examples
- [dialog.example.html](/components/dialog.example.html) — a confirmation dialog.

# Accessibility
Use `role="dialog"` with `aria-modal="true"` and an `aria-labelledby` pointing at the title. **Trap
focus** inside while open, return it to the trigger on close, and close on Escape and backdrop click.

# Do & Don't
- **Do** keep dialogs short and focused on one task.
- **Don't** stack dialogs or use one for content that belongs on a page.
