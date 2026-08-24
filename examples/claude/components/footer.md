---
type: Component
title: Footer
description: The dark navy footer that closes every page with a 4-column link list.
tags: [components, footer, navigation, dark]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/footer.example.html
  - /components/footer.wireframe.html
tokens:
  footer:
    background: "{colors.surface-dark}"
    color: "{colors.on-dark-soft}"
    heading: "{typography.caption-uppercase}"
---

The dark navy footer closes every page — the final beat of the cream-to-dark rhythm. The
Anthropic spike-mark + "Anthropic" wordmark sits at the top in `{colors.on-dark}`; a 4-column link
list follows. The footer never inverts. See [footer.example.html](/components/footer.example.html).

# Anatomy
`.footer` (`{colors.surface-dark}`, 64px vertical padding) → `.footer__cols` grid: a brand column
(wordmark + tagline) plus four link columns (Product / Company / Resources / Legal), each headed by
a `{typography.caption-uppercase}` label.

# Structure
A five-column grid, `{spacing.xl}` apart, inside 64px of vertical padding and the shared
`.container` measure. The brand column is wider than the link columns by ratio, not by a fixed
width: `grid-template-columns: 1.5fr repeat(4, 1fr)`.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Brand column (wordmark + tagline) | 1 | `1.5fr`; tagline capped at `30ch` | `{spacing.xl}` | full width at `{breakpoints.tablet}` |
| Product / Company / Resources / Legal | 2-5 | `1fr` each; links stack `{spacing.xs}` apart | `{spacing.xl}` | 2 columns at `{breakpoints.desktop}`, 1 at `{breakpoints.tablet}` |

Each link column is a heading followed by an unstyled list, and every column heading sits at the
same grid row, so the headings align even when the lists below them differ in length. At
`{breakpoints.desktop}` the grid becomes a plain `1fr 1fr`, which drops the brand column's 1.5
ratio and makes it the same width as a link column. Below `{breakpoints.tablet}` everything becomes
one column in DOM order: brand first, then the four link groups.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `footer.background` | `{colors.surface-dark}` |
| `footer.color` | `{colors.on-dark-soft}` |
| `footer.heading` | `{typography.caption-uppercase}` |

# Examples
- [footer.example.html](/components/footer.example.html) — full footer.
- [footer.wireframe.html](/components/footer.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `<footer>` with grouped `<nav>` lists and real headings per column. Link labels in
`{colors.on-dark}` keep AA contrast on the dark surface.

# Do & Don't
- **Do** let the dark footer be the page's closing beat after a cream or coral band.
- **Don't** invert the footer to cream; it is always dark.
