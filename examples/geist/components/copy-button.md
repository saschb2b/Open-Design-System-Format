---
type: Component
title: Copy button
description: A quiet icon button that copies a value and flips to a check on success.
tags: [components, button, copy, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/copy-button.example.html
---

A small ghost [icon button](/components/button.md) that copies a value to the clipboard and briefly
swaps its copy icon for a check to confirm. The atom behind [snippet](/components/snippet.md) and
[text with copy button](/components/text-with-copy-button.md). See
[copy-button.example.html](/components/copy-button.example.html).

# Accessibility
Give it an `aria-label` ("Copy"); announce success via `aria-live` or by toggling the label to
"Copied". Focus follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** confirm the copy with the check flip.
- **Don't** rely on color alone for the confirmation — change the icon too.
