---
type: Component
title: Theme switcher
description: A segmented control for switching between system, light, and dark themes.
tags: [components, theme, theme-switcher, settings]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/theme-switcher.example.html
---

A small round segmented control — system / light / dark — that drives the
[color modes](/behaviors/theming.md). Because every component reads from the `--ds-*` token layer,
flipping this control re-skins the entire UI with no markup change. See
[theme-switcher.example.html](/components/theme-switcher.example.html).

# Accessibility
A radio group (or `aria-pressed` buttons) with a group label; each option has an accessible name even
though it shows only an icon. Persist the choice and respect the OS default for "system".

# Do & Don't
- **Do** offer a "system" option that follows `prefers-color-scheme`.
- **Don't** ship a separate dark stylesheet; swap tokens instead — see [theming](/behaviors/theming.md).
