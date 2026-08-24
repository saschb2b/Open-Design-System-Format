---
type: Component
title: Link
description: The accent-colored inline text link, with a muted variant.
tags: [components, link, navigation, text]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/link.example.html
  - /components/link.wireframe.html
tokens:
  Link:
    color: "{colors.fgColor-accent}"
  Link-muted:
    color: "{colors.fgColor-muted}"
---

The inline text link. Default links are `{colors.fgColor-accent}` and underline on hover; the muted
variant reads as body text until hovered, for dense metadata rows. See
[link.example.html](/components/link.example.html).

# Structure
An inline element in the text flow with no box of its own. It sets colour and underline only,
holds no padding, and therefore never changes line height or wrapping.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Link` | inline | content width; wraps with the sentence | none | unchanged |

Because the underline appears only on hover, the resting and hover states occupy identical space
and text does not shift. The muted variant differs in colour alone. The wireframe is close to empty
by design: what it confirms is that the link adds no box to the paragraph around it.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Link.color` | `{colors.fgColor-accent}` |
| `Link-muted.color` | `{colors.fgColor-muted}` |

# Variants & States
`.Link` (accent) · `.Link--muted` (muted until hover). Underline appears on hover and on focus.

# Examples
- [link.example.html](/components/link.example.html) — default and muted.
- [link.wireframe.html](/components/link.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use a real `<a href>`; link text must describe its destination (avoid "click here"). The focus ring
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use `.Link--muted` for secondary metadata links so rows stay calm.
- **Don't** style non-navigational actions as links — use a [button](/components/button.md).
