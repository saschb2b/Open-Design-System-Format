---
type: Component
title: Description
description: A label-over-value pair for read-only key/value metadata.
tags: [components, description, metadata, data]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/description.example.html
---

A read-only key/value pair: a muted `{typography.label-13}` label over its value. Stacked into a
`<dl>`, descriptions render the metadata blocks on deployment, domain, and settings detail views. See
[description.example.html](/components/description.example.html).

# Accessibility
Use a real `<dl>`/`<dt>`/`<dd>` so the label–value relationship is conveyed to assistive tech.

# Do & Don't
- **Do** use descriptions for read-only metadata.
- **Don't** use them for editable fields — that's an [input](/components/input.md) with a [label](/components/label.md).
