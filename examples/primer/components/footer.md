---
type: Component
title: Footer
description: The quiet global footer of muted links closing the page.
tags: [components, footer, navigation, shell]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/footer.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Footer.border` | `{colors.borderColor-muted}` |
| `Footer.link` | `{colors.fgColor-accent}` |

# Examples
- [footer.example.html](/components/footer.example.html) — the global footer row.

# Accessibility
Wrap in `<footer>` with a `<nav aria-label="Footer">` for the links.

# Do & Don't
- **Do** keep the footer quiet and link-only.
- **Don't** put primary actions in the footer.
