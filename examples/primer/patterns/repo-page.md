---
type: Pattern
title: Repository page
description: A GitHub-style page — header, underline nav, banner, and bordered panels — composed from the components.
tags: [patterns, page, layout, composition]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /patterns/repo-page.example.html
  - /patterns/repo-page.wireframe.html
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

# Structure
A single centred column with one two-column region inside it. The page is a vertical stack of
full-width bands; only the content area splits horizontally.

| Region | Order | Layout | Space after | Reflow |
|--------|-------|--------|-------------|--------|
| `.Header` | 1 | full-bleed centred row, `{spacing.16}` between children | none | unchanged |
| `.repo-head` | 2 | centred row inside `.container`; a `flex: 1` spacer pins the actions right | `{spacing.16}` | unchanged |
| `.UnderlineNav` | 3 | tab row on a full-width rule | `{spacing.24}` | unchanged |
| `.PageLayout` | 4 | grid, `1fr 256px`, `{spacing.24}` gap | `{spacing.32}` | one column at `{breakpoints.medium}` |
| `.PageLayout-content` | 4.1 | toolbar, banner, file list, README stacked | none | full width |
| `.PageLayout-pane` | 4.2 | About sections divided by top borders | none | full width, below the content |
| `.Footer` | 5 | wrapping centred row | none | wraps continuously, no breakpoint |

Everything except the header and footer is bounded by `.container`, which caps the page at
`{layout.container-xlarge}` and adds `{spacing.16}` of inline padding; the header and footer paint
edge to edge but their contents are not centred to that measure. The one breakpoint in the page is
`.PageLayout` at `{breakpoints.medium}`, where the About pane moves below the content in DOM order,
so reading order is preserved and nothing needs reordering.

Two horizontal alignments are done with a `flex: 1` spacer rather than `justify-content`: the repo
title row and the global header. That keeps the left cluster on its own even rhythm while the right
cluster is pushed to the edge. Neither row wraps, so at narrow widths they compress before the
`.PageLayout` breakpoint takes effect; the wireframe at around 800px is where that shows.

# Example
- [repo-page.example.html](/patterns/repo-page.example.html) — the full page.

# Accessibility
One `<h1>` (the page title), a `<nav>` for the underline nav with `aria-current`, and real headings
inside Box headers. Banners use `role="status"`/`role="alert"`.

# Do & Don't
- **Do** get structure from borders and the muted/default contrast; keep color for status.
- **Don't** introduce surfaces or accents outside the functional roles — they must theme in dark mode.
