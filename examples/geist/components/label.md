---
type: Component
title: Label
description: The small muted caption that names a form control or field.
tags: [components, label, form, text]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/label.example.html
  - /components/label.wireframe.html
tokens:
  label:
    color: "{colors.gray-900}"
    typography: "{typography.label-13}"
---

The field label: `{typography.label-13}` in `{colors.gray-900}`, linked to its control. Quiet by
design, so the input itself leads. See [label.example.html](/components/label.example.html).

# Structure
A single inline text element with no box: no padding, no height, no background.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.label` | 1 | content width; wraps if the form column is narrow | set by the form | unchanged |

Because it holds no box, the space between a label and its control belongs to the form layout
around them, not to this component. That is why [input](/components/input.md) and
[select](/components/select.md) both specify their own label gap rather than relying on this one.

# Accessibility
Always link via `for`/`id` (or wrap the control); the whole label then activates the control. Mark
required/optional in text, not color alone.

# Do & Don't
- **Do** keep labels short and above the control.
- **Don't** replace a label with a placeholder.
