---
type: Component
title: Text with copy button
description: An inline value paired with a copy button — a token, ID, or URL.
tags: [components, copy, text, inline]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/text-with-copy-button.example.html
---

A read-only value — a deployment URL, an ID, a token — shown inline with a trailing
[copy button](/components/copy-button.md). Lighter than a [snippet](/components/snippet.md) (no
surface), for values that live within other UI. See
[text-with-copy-button.example.html](/components/text-with-copy-button.example.html).

# Accessibility
The copy button is labelled and confirms; the value is selectable and may be truncated with
[middle truncate](/components/middle-truncate.md) while staying fully copyable.

# Do & Don't
- **Do** keep the full value copyable even when visually truncated.
- **Don't** make the user hand-select a long token to copy it.
