---
type: Component
title: Label
description: The small muted caption that names a form control or field.
tags: [components, label, form, text]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/label.example.html
tokens:
  label:
    color: "{colors.gray-900}"
    typography: "{typography.label-13}"
---

The field label: `{typography.label-13}` in `{colors.gray-900}`, linked to its control. Quiet by
design, so the input itself leads. See [label.example.html](/components/label.example.html).

# Accessibility
Always link via `for`/`id` (or wrap the control); the whole label then activates the control. Mark
required/optional in text, not color alone.

# Do & Don't
- **Do** keep labels short and above the control.
- **Don't** replace a label with a placeholder.
