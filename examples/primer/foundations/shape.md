---
type: Shape
title: Shape
description: A restrained corner-radius scale — 6px on most controls, 12px on large surfaces, pills for labels.
tags: [foundations, shape, radius, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  radius:
    small: "3px"
    medium: "6px"
    large: "12px"
    full: "9999px"
---

Primer rounds modestly. Most controls use `medium` (6px); large surfaces use `large` (12px);
[labels](/components/label.md) and avatars are fully round. Projected as `--borderRadius-medium`,
etc., in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `radius.small` | `3px` | Small inline marks, nested elements. |
| `radius.medium` | `6px` | [Buttons](/components/button.md), [inputs](/components/text-input.md), [Box](/components/box.md), [banners](/components/banner.md). |
| `radius.large` | `12px` | Large overlays, dialogs, marketing cards. |
| `radius.full` | `9999px` | [Labels](/components/label.md), Counters, avatars. |

# Usage
Match radius to scale: a `large` dialog holds `medium` controls. Borders are a single hairline in
`{colors.borderColor-default}`.

# Do & Don't
- **Do** keep `medium` as the default for interactive controls.
- **Don't** mix `small` and `large` on elements of the same size.
