---
type: Component
title: Link
description: The accent-colored inline text link, with a muted variant.
tags: [components, link, navigation, text]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/link.example.html
tokens:
  Link:
    color: "{colors.fgColor-accent}"
  Link-muted:
    color: "{colors.fgColor-muted}"
---

The inline text link. Default links are `{colors.fgColor-accent}` and underline on hover; the muted
variant reads as body text until hovered, for dense metadata rows. See
[link.example.html](/components/link.example.html).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Link.color` | `{colors.fgColor-accent}` |
| `Link-muted.color` | `{colors.fgColor-muted}` |

# Variants & States
`.Link` (accent) · `.Link--muted` (muted until hover). Underline appears on hover and on focus.

# Examples
- [link.example.html](/components/link.example.html) — default and muted.

# Accessibility
Use a real `<a href>`; link text must describe its destination (avoid "click here"). The focus ring
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use `.Link--muted` for secondary metadata links so rows stay calm.
- **Don't** style non-navigational actions as links — use a [button](/components/button.md).
