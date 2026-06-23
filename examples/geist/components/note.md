---
type: Component
title: Note
description: An inline callout box for contextual information, in neutral and accent tones.
tags: [components, note, callout, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/note.example.html
---

A bordered inline callout for context that sits within content — a tip, a caveat, a warning. Neutral
by default; `--blue` / `--amber` / `--red` / `--green` tint the border, fill, and icon by role. For a
page-spanning message use a [banner](/components/banner.md). See [note.example.html](/components/note.example.html).

# Accessibility
Lead with an icon that names the severity, plus the text; use `role="note"` (or `alert` for errors).

# Do & Don't
- **Do** pair the tint with an icon and clear copy.
- **Don't** rely on the color tint alone for severity.
