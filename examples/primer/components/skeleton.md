---
type: Component
title: Skeleton
description: Placeholder shapes that stand in for content while it loads.
tags: [components, skeleton, loading, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/skeleton.example.html
  - /components/skeleton.wireframe.html
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

# Structure
A placeholder that reproduces the box of the content it stands in for, so nothing moves when the
real content arrives.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.SkeletonAvatar` | 1 | fixed 32px square, matching `.avatar` | `{spacing.12}` | unchanged |
| Text line stack | 2 | `flex: 1`; lines `{spacing.8}` apart | none | unchanged |
| `.Skeleton--text` line | 2.1..n | fixed `12px` tall, percentage width | `{spacing.8}` | unchanged |

The point of this component is structural fidelity, not decoration: the avatar box, the row
padding, and the line heights are taken from the loaded state, so the swap causes no layout shift.
Line widths are varied percentages to suggest ragged text. The pulse is animation only and changes
no box.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Skeleton.background` | `{colors.bgColor-muted}` |

# Examples
- [skeleton.example.html](/components/skeleton.example.html) — a loading list row.
- [skeleton.wireframe.html](/components/skeleton.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Mark the region `aria-busy="true"` (or `role="status"` with a label) while loading; the pulse is
disabled under `prefers-reduced-motion` — see [motion](/foundations/motion.md).

# Do & Don't
- **Do** mirror the real layout so content doesn't jump when it arrives.
- **Don't** show a skeleton longer than ~a few seconds; fall back to a spinner or message.
