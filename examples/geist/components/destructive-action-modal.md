---
type: Component
title: Destructive action modal
description: A confirmation modal that requires typing to confirm an irreversible action.
tags: [components, modal, destructive, confirmation, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/destructive-action-modal.example.html
---

Vercel's guardrail for irreversible actions — a [modal](/components/modal.md) that explains the
consequence and requires the user to **type the resource name** before the red confirm
[button](/components/button.md) enables. Used for deleting projects, teams, and domains. See
[destructive-action-modal.example.html](/components/destructive-action-modal.example.html).

# Accessibility
`role="dialog"` + `aria-modal`; the confirm button is `disabled` until the typed value matches; explain
exactly what will be lost.

# Do & Don't
- **Do** require typed confirmation and spell out the consequence.
- **Don't** make a destructive default action one careless click away.
