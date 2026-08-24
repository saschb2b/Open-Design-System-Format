---
type: Component
title: Fieldset
description: A bordered settings group with a title, body, and a footer action bar.
tags: [components, fieldset, form, settings, card]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/fieldset.example.html
  - /components/fieldset.wireframe.html
tokens:
  fieldset:
    border: "{colors.gray-alpha-400}"
    footer: "{colors.gray-100}"
    radius: "{radius.medium}"
---

The canonical Vercel settings group: a bordered surface holding a title, a form body, and a muted
footer with a helper line on the left and a Save [button](/components/button.md) on the right. The
backbone of Vercel's project-settings pages. See [fieldset.example.html](/components/fieldset.example.html).

# Anatomy
A `.fieldset` (border + `{radius.medium}`) → `.fieldset-body` (heading, description, an
[input](/components/input.md)) → `.fieldset-footer` (`{colors.gray-100}`, helper text + Save).

# Structure
A settings card: a padded body over a footer bar, clipped to the outer radius.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.fieldset-body` | 1 | full width; column stack, `{spacing.2}` between parts, `{spacing.4}` padding | none | unchanged |
| `.fieldset-footer` | 2 | full width; hint left, action right, `10px {spacing.4}` padding | none | unchanged |

The footer uses `justify-content: space-between` to push its hint and action to opposite edges, and
its shorter vertical padding against the body `{spacing.4}` is what makes it read as a bar rather
than a second section. Body and footer abut and are divided by a real border. `overflow: hidden` on
the fieldset clips the footer fill to the rounded corners. This is the standard shape for one
setting per card, so a form is a stack of these rather than one long panel.

# Accessibility
Use a real `<form>` and `<fieldset>`/`<legend>` where it groups inputs; the footer Save is `type="submit"`.

# Do & Don't
- **Do** keep one concern per fieldset with a single Save.
- **Don't** crowd multiple unrelated settings into one fieldset.
