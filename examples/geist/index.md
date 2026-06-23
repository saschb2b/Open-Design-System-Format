---
odsf_version: "0.1"
okf_version: "0.1"
---

# Geist design system

Vercel's open-source design language, packaged as an ODSF bundle — numbered, theme-able color scales,
a monochrome-first high-contrast aesthetic, the inverted primary action, Geist Sans/Mono, and the full
component library (70 components). Start with the [overview](overview.md); every token has a runnable
projection in [`styles/tokens.css`](styles/tokens.css) (light + dark, using Geist's own `--ds-*`
names), and the [dashboard](patterns/dashboard.example.html) shows the whole system composed.

# Overview
* [Geist](overview.md) - Principles, the token system, and how to use this bundle.

# Foundations
* [Color](foundations/color.md) · [Typography](foundations/typography.md) · [Grid](foundations/grid.md) ·
  [Shape](foundations/shape.md) · [Elevation](foundations/elevation.md) ·
  [Materials](foundations/materials.md) · [Icons](foundations/icons.md)

# Components
70 components across seven categories — see [components/](components/) for the full grouped index.
Actions, Forms, Status & feedback, Navigation, Overlays, Data & content, Devices & media. Highlights:
[Button](components/button.md) · [Input](components/input.md) · [Badge](components/badge.md) ·
[Table](components/table.md) · [Menu](components/menu.md) · [Modal](components/modal.md) ·
[Command menu](components/command-menu.md) · [Fieldset](components/fieldset.md) ·
[Tabs](components/tabs.md) · [Toast](components/toast.md) · [Gauge](components/gauge.md) ·
[Code block](components/code-block.md) · [Calendar](components/calendar.md) ·
[Theme switcher](components/theme-switcher.md).

# Patterns
* [Dashboard](patterns/dashboard.md) - A Vercel-style project dashboard composing the system.

# Behaviors
* [Theming (color modes)](behaviors/theming.md) - Light / dark / auto from one component set.
* [Focus](behaviors/focus.md) - The consistent accent focus ring.

# Guidelines
* [Use the scale](guidelines/use-the-scale.md) - Reference tokens, never literal hex.
* [Color is not the only signal](guidelines/color-not-alone.md) - Pair status color with text or icon.

# References
* [Geist (vercel.com/geist)](references/geist-docs.md) - The source design system.
* [Live token verification](references/live-verification.md) - Values read from the live DOM, both themes.
* [Brand assets](references/brands.md) - Vercel's brand colors and the partner palette.

# Subdirectories
* [foundations/](foundations/) · [components/](components/) · [patterns/](patterns/) ·
  [behaviors/](behaviors/) · [guidelines/](guidelines/) · [references/](references/) · [styles/](styles/)
