---
odsf_version: "0.1"
okf_version: "0.1"
---

# Primer design system

GitHub's open-source design language, packaged as an ODSF bundle — functional color roles, a compact
14px product scale, the signature green primary action, and full light/dark theming. Start with the
[overview](overview.md); every token has a runnable projection in [`styles/tokens.css`](styles/tokens.css)
(using Primer's own variable names), and the [repository page](patterns/repo-page.example.html) shows
the whole system composed.

# Overview
* [Primer](overview.md) - Principles, the functional-token model, and how to use this bundle.

# Foundations
* [Color](foundations/color.md) - Functional fg/bg/border roles that re-theme light↔dark.
* [Typography](foundations/typography.md) - Mona Sans over a system stack; 14px base.
* [Spacing](foundations/spacing.md) - The 4px-based base-size scale.
* [Elevation](foundations/elevation.md) - Layered, low-alpha shadows.
* [Shape](foundations/shape.md) - Restrained corner-radius scale.
* [Motion](foundations/motion.md) - Quick transitions; reduced-motion first.
* [Layout & responsive](foundations/layout.md) - 12-column grid, four breakpoints.

# Components
45 components across six categories — see [components/](components/) for the full grouped index.

Actions — [Button](components/button.md) (green primary; light + dark) ·
[Button group](components/button-group.md) · [Icon button](components/icon-button.md) ·
[Link](components/link.md).
Forms — [Text input](components/text-input.md) · [Textarea](components/textarea.md) ·
[Select](components/select.md) · [Select panel](components/select-panel.md) ·
[Autocomplete](components/autocomplete.md) · [Checkbox](components/checkbox.md) ·
[Radio](components/radio.md) · [Toggle switch](components/toggle-switch.md) ·
[Segmented control](components/segmented-control.md) · [Token](components/token.md).
Overlays & menus — [Action menu](components/action-menu.md) · [Action list](components/action-list.md) ·
[Dialog](components/dialog.md) · [Popover](components/popover.md) · [Tooltip](components/tooltip.md).
Status & feedback — [Label](components/label.md) · [State label](components/state-label.md) ·
[Banner](components/banner.md) · [Spinner](components/spinner.md) ·
[Progress bar](components/progress-bar.md) · [Skeleton](components/skeleton.md).
Navigation — [Header](components/header.md) · [Underline nav](components/underline-nav.md) ·
[Tab nav](components/tab-nav.md) · [Nav list](components/nav-list.md) ·
[Breadcrumbs](components/breadcrumbs.md) · [Pagination](components/pagination.md) ·
[Tree view](components/tree-view.md) · [Footer](components/footer.md).
Layout & content — [Page layout](components/page-layout.md) · [Page header](components/page-header.md) ·
[Box](components/box.md) · [Data table](components/data-table.md) · [Timeline](components/timeline.md) ·
[Details](components/details.md) · [Avatar](components/avatar.md) ·
[Avatar stack](components/avatar-stack.md) · [Circle badge](components/circle-badge.md) ·
[Blankslate](components/blankslate.md) · [Branch name](components/branch-name.md) ·
[Truncate](components/truncate.md).

# Patterns
* [Repository page](patterns/repo-page.md) - A GitHub-style page composed from the components.

# Behaviors
* [Color modes](behaviors/color-modes.md) - Light / dark / auto from one set of components.
* [Focus](behaviors/focus.md) - The consistent, always-visible accent focus ring.

# Guidelines
* [Use functional tokens](guidelines/use-functional-tokens.md) - Reference roles, never literal hex.
* [Color is not the only signal](guidelines/color-not-alone.md) - Pair status color with icon or text.

# References
* [Primer (primer.style)](references/primer-style.md) - The source design system.
* [Live token verification](references/live-verification.md) - Values read from the live DOM, both modes.

# Subdirectories
* [foundations/](foundations/) - The design language as tokens.
* [components/](components/) - Reusable UI elements, each with a runnable example.
* [patterns/](patterns/) - Compositions of components.
* [behaviors/](behaviors/) - Theming and interaction rules.
* [guidelines/](guidelines/) - Do/don't principles with counter-examples.
* [references/](references/) - Source and live verification.
* [styles/](styles/) - Runnable token and component CSS.
