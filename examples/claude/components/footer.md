---
type: Component
title: Footer
description: The dark navy footer that closes every page with a 4-column link list.
tags: [components, footer, navigation, dark]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/footer.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `footer.background` | `{colors.surface-dark}` |
| `footer.color` | `{colors.on-dark-soft}` |
| `footer.heading` | `{typography.caption-uppercase}` |

# Examples
- [footer.example.html](/components/footer.example.html) — full footer.

# Accessibility
Use `<footer>` with grouped `<nav>` lists and real headings per column. Link labels in
`{colors.on-dark}` keep AA contrast on the dark surface.

# Do & Don't
- **Do** let the dark footer be the page's closing beat after a cream or coral band.
- **Don't** invert the footer to cream; it is always dark.
