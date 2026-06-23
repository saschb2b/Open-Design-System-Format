---
type: Component
title: Input
description: The base single-line text field with optional prefix/suffix affixes.
tags: [components, input, form, field]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/input.example.html
tokens:
  input:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.medium}"
---

The base text field: a `{colors.background-100}` surface with a 1px `{colors.gray-alpha-400}` border
and `{radius.medium}` corners; on focus the border goes to `{colors.gray-1000}`. Supports prefix/suffix
affixes for icons, units, or buttons. The atom behind [search](/components/search-input.md),
[clearable](/components/clearable-input.md), and [combobox](/components/combobox.md). See
[input.example.html](/components/input.example.html).

# Variants & states
default · with affix (`.input-affix`) · focus (ink border) · disabled · error (red border + message).

# Accessibility
Pair every input with a [label](/components/label.md) linked by `for`/`id`; placeholders are not
labels. Focus ring per [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use affixes for inline units/icons rather than separate elements.
- **Don't** rely on the placeholder as the only label.
