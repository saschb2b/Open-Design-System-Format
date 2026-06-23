---
type: Component
title: Collapse
description: A hairline-divided accordion of expandable sections.
tags: [components, collapse, accordion, disclosure]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/collapse.example.html
---

A stack of disclosure rows divided by hairlines — each a clickable summary with a rotating chevron
that expands to reveal its content. Built on native `<details>`. For a single inline expander use
[show more](/components/show-more.md). See [collapse.example.html](/components/collapse.example.html).

# Accessibility
Native `<details>`/`<summary>` is keyboard- and screen-reader-accessible (Enter/Space toggles, state
announced). Keep summaries meaningful.

# Do & Don't
- **Do** use native `<details>` for simple accordions.
- **Don't** default everything open; collapse is for progressive disclosure.
