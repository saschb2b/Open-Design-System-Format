---
type: Component
title: Table
description: A hairline-divided table for structured rows of data.
tags: [components, table, data]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/table.example.html
---

A table for structured data — deployments, members, usage. A muted header labels the columns; rows
divide with hairlines and highlight on hover; cells host [badges](/components/badge.md),
[status dots](/components/status-dot.md), and [avatars](/components/avatar.md). See
[table.example.html](/components/table.example.html).

# Accessibility
Use real `<table>`/`<thead>`/`<th scope>` semantics; sortable columns expose `aria-sort`.

# Do & Don't
- **Do** use a real table so it's navigable and sortable.
- **Don't** fake one with `div`s and lose the semantics.
