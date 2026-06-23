---
type: Component
title: Skeleton
description: Placeholder shapes that stand in for content while it loads.
tags: [components, skeleton, loading, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/skeleton.example.html
tokens:
  Skeleton:
    background: "{colors.bgColor-muted}"
---

Low-contrast placeholder shapes — bars and circles in `{colors.bgColor-muted}` — that mirror the
layout of content while it loads, reducing perceived wait and layout shift. A gentle pulse signals
"loading" and is removed under reduced motion. For an action-scoped wait use a
[spinner](/components/spinner.md); for known progress a [progress bar](/components/progress-bar.md).
See [skeleton.example.html](/components/skeleton.example.html).

# Anatomy
`.Skeleton` blocks (`.Skeleton--text` for lines) and `.SkeletonAvatar` circles, sized and arranged to
match the real content they replace.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Skeleton.background` | `{colors.bgColor-muted}` |

# Examples
- [skeleton.example.html](/components/skeleton.example.html) — a loading list row.

# Accessibility
Mark the region `aria-busy="true"` (or `role="status"` with a label) while loading; the pulse is
disabled under `prefers-reduced-motion` — see [motion](/foundations/motion.md).

# Do & Don't
- **Do** mirror the real layout so content doesn't jump when it arrives.
- **Don't** show a skeleton longer than ~a few seconds; fall back to a spinner or message.
