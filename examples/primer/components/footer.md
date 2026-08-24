---
type: Component
title: Footer
description: The quiet global footer of muted links closing the page.
tags: [components, footer, navigation, shell]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/footer.example.html
  - /components/footer.wireframe.html
tokens:
  Footer:
    border: "{colors.borderColor-muted}"
    color: "{colors.fgColor-muted}"
    link: "{colors.fgColor-accent}"
---

The understated global footer: a top hairline, then a row of small `{colors.fgColor-accent}` links and
a muted copyright. It closes the page without competing for attention — flat, on the page surface, no
emphasis. See [footer.example.html](/components/footer.example.html).

# Anatomy
A `.Footer` with a `{colors.borderColor-muted}` top border, `{colors.fgColor-muted}` text at
`{typography.body-small}`, and accent links.

# Structure
A single centred flex row that wraps, inside `{spacing.24}` vertical and `{spacing.16}` horizontal
padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Copyright | 1 | content width | `{spacing.16}` | wraps to its own line when space runs out |
| Link nav | 2 | content width; links `{spacing.16}` apart, also wrapping | none | wraps link by link |

`flex-wrap: wrap` is the entire responsive story; there is no breakpoint. The row reflows
continuously, dropping the nav below the copyright first and then wrapping the links among
themselves, so the footer degrades at any width rather than at a fixed one.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Footer.border` | `{colors.borderColor-muted}` |
| `Footer.link` | `{colors.fgColor-accent}` |

# Examples
- [footer.example.html](/components/footer.example.html) — the global footer row.
- [footer.wireframe.html](/components/footer.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Wrap in `<footer>` with a `<nav aria-label="Footer">` for the links.

# Do & Don't
- **Do** keep the footer quiet and link-only.
- **Don't** put primary actions in the footer.
