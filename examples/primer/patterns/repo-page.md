---
type: Pattern
title: Repository page
description: A GitHub-style page — header, underline nav, banner, and bordered panels — composed from the components.
tags: [patterns, page, layout, composition]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /patterns/repo-page.example.html
---

The canonical GitHub application page: the global [header](/components/header.md), a repository
identity row with actions, the [underline nav](/components/underline-nav.md) of sections, then a
[page layout](/components/page-layout.md) splitting a content column (a [banner](/components/banner.md)
and file/README [Boxes](/components/box.md)) from an "About" pane, closed by the global
[footer](/components/footer.md) — all on the `{colors.bgColor-default}` surface with
`{colors.bgColor-muted}` accents. It is calm and information-dense: structure comes from borders and
the muted/default contrast, color is reserved for status and the one green action. See
[repo-page.example.html](/patterns/repo-page.example.html); it is the bundle's best single
illustration of the system composed — and, because every part speaks in functional tokens, the whole
page re-themes light↔dark untouched ([color modes](/behaviors/color-modes.md)).

# When to use
Any top-level application screen with sections and panelled content. For a focused dialog or form,
drop the nav and keep a single [Box](/components/box.md).

# Composition
| Region | Components |
|--------|-----------|
| Global | [Header](/components/header.md) · [Footer](/components/footer.md) |
| Identity | [Avatar](/components/avatar.md) + title + [Label](/components/label.md) + [Button group](/components/button-group.md) (Watch / Fork / Star with [Counters](/components/label.md)) |
| Nav | [Underline nav](/components/underline-nav.md) with [Counters](/components/label.md) |
| Shell | [Page layout](/components/page-layout.md) (content + About pane) |
| Content | [Banner](/components/banner.md), [Box](/components/box.md) file list + README, [branch name](/components/branch-name.md), [buttons](/components/button.md) |
| Pane | [Labels](/components/label.md), a release [State label](/components/state-label.md), [Avatar stack](/components/avatar-stack.md), [Progress bar](/components/progress-bar.md) (languages) |

# Example
- [repo-page.example.html](/patterns/repo-page.example.html) — the full page.

# Accessibility
One `<h1>` (the page title), a `<nav>` for the underline nav with `aria-current`, and real headings
inside Box headers. Banners use `role="status"`/`role="alert"`.

# Do & Don't
- **Do** get structure from borders and the muted/default contrast; keep color for status.
- **Don't** introduce surfaces or accents outside the functional roles — they must theme in dark mode.
