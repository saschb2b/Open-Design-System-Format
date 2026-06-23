---
type: Component
title: Badge
description: A small rounded label for status and metadata, with neutral and accent tones.
tags: [components, badge, pill, status]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/badge.example.html
tokens:
  badge:
    background: "{colors.gray-200}"
    color: "{colors.gray-1000}"
    radius: "{radius.full}"
---

A compact filled label for status and metadata. Neutral by default (`{colors.gray-200}`); accent tones
use each scale's `200` fill with its `900` text. The fully-round **Pill** is the same component with
`{radius.full}`. See [badge.example.html](/components/badge.example.html).

# Variants
`.badge` (neutral) · `--blue` / `--green` / `--amber` / `--red` / `--purple` · `--inverted` (filled
ink). Add `.pill` for the round shape.

# Accessibility
A badge's meaning must not rest on color alone — the text carries it; see
[color is not the only signal](/guidelines/color-not-alone.md).

# Do & Don't
- **Do** keep badges to one or two words.
- **Don't** use accent badges where a neutral one will do; Geist stays monochrome by default.
