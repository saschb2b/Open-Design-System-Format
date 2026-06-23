---
odsf_version: "0.1"
okf_version: "0.1"
---

# Claude design system

Anthropic's warm, editorial design language for the Claude marketing surface — cream canvas, coral
accent, dark navy product surfaces, serif display over humanist sans. Packaged as an ODSF bundle so
an agent can build a page that looks and behaves like Claude. Start with the [overview](overview.md);
every token has a runnable projection in [`styles/tokens.css`](styles/tokens.css), and the
[landing page](patterns/landing-page.example.html) shows the whole system at once.

# Overview
* [Claude](overview.md) - Principles, the trinity, and how to use this bundle.

# Foundations
* [Color](foundations/color.md) - The cream + coral + dark-navy palette and roles.
* [Typography](foundations/typography.md) - The serif-display / humanist-sans split.
* [Spacing](foundations/spacing.md) - 4px base, 96px section rhythm.
* [Elevation](foundations/elevation.md) - Color-block first, shadow rare.
* [Shape](foundations/shape.md) - Hierarchical corner-radius scale.
* [Motion](foundations/motion.md) - Intentionally minimal; press only.
* [Layout & responsive](foundations/layout.md) - Container, grid, breakpoints.

# Components
* [Button](components/button.md) - The coral CTA and its companions.
* [Top navigation](components/top-nav.md) - The cream nav bar.
* [Feature card](components/feature-card.md) - Cream content card.
* [Code-window card](components/code-window-card.md) - The signature dark editor mockup.
* [Pricing tier card](components/pricing-tier-card.md) - Featured tier flips to dark.
* [Coral callout card](components/callout-card-coral.md) - The full-bleed coral CTA.
* [Badge](components/badge.md) - Cream pill and coral uppercase badge.
* [Text input](components/text-input.md) - Cream field with coral focus.
* [Footer](components/footer.md) - The dark navy footer.

# Patterns
* [Landing page](patterns/landing-page.md) - The full page in the cream → dark → coral rhythm.

# Behaviors
* [Surface rhythm](behaviors/surface-rhythm.md) - Alternate surfaces, never repeat consecutively.
* [Press states only](behaviors/press-states-only.md) - Press, not hover.

# Guidelines
* [Cream, not white](guidelines/cream-not-white.md) - The warm canvas is the brand.
* [Serif display, never bold](guidelines/serif-display-never-bold.md) - The editorial voice.
* [Coral is scarce](guidelines/coral-is-scarce.md) - Spend the accent rarely.

# References
* [Claude design.md (source brief)](references/claude-design-md.md) - What this bundle was authored from.
* [Anthropic brand — live verification](references/anthropic-brand.md) - What was confirmed on claude.com.

# Subdirectories
* [foundations/](foundations/) - The design language as tokens.
* [components/](components/) - Reusable UI elements, each with a runnable example.
* [patterns/](patterns/) - Compositions of components.
* [behaviors/](behaviors/) - Interaction and pacing rules.
* [guidelines/](guidelines/) - Do/don't principles with counter-examples.
* [references/](references/) - Source brief and live-verification notes.
* [styles/](styles/) - Runnable token and component CSS.
