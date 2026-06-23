---
type: Component
title: Choicebox
description: A large selectable card for choosing among rich, described options.
tags: [components, choicebox, form, radio]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/choicebox.example.html
tokens:
  choicebox-selected:
    border: "{colors.gray-1000}"
---

A [radio](/components/radio.md)/[checkbox](/components/checkbox.md) dressed as a large, described card —
for weighty choices that benefit from a title, description, and icon (a framework, a plan, a region).
The selected card draws a `{colors.gray-1000}` ring. See
[choicebox.example.html](/components/choicebox.example.html).

# Anatomy
A `.choicebox` (bordered) with a control + a title and description; `.choicebox--selected` adds the ink
ring. Group several for a single- or multi-choice set.

# Accessibility
Back it with a real radio/checkbox; the whole card is the label and is clickable; the group has a
legend.

# Do & Don't
- **Do** use a choicebox when options need explanation.
- **Don't** use it for trivial yes/no — a [checkbox](/components/checkbox.md) suffices.
