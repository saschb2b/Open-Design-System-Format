---
type: Component
title: Skeleton
description: Placeholder shapes that mirror content while it loads.
tags: [components, skeleton, loading, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/skeleton.example.html
---

Low-contrast `{colors.gray-200}` placeholder shapes — bars and circles — that mirror the layout of
content while it loads, reducing layout shift. A gentle pulse signals loading and is removed under
reduced motion. See [skeleton.example.html](/components/skeleton.example.html).

# Accessibility
Mark the region `aria-busy="true"` while loading; remove the skeletons when content arrives.

# Do & Don't
- **Do** match the skeleton to the real content's shape.
- **Don't** leave skeletons up indefinitely; fall back to a message after a few seconds.
