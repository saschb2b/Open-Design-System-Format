---
type: Component
title: Fieldset
description: A bordered settings group with a title, body, and a footer action bar.
tags: [components, fieldset, form, settings, card]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/fieldset.example.html
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

# Accessibility
Use a real `<form>` and `<fieldset>`/`<legend>` where it groups inputs; the footer Save is `type="submit"`.

# Do & Don't
- **Do** keep one concern per fieldset with a single Save.
- **Don't** crowd multiple unrelated settings into one fieldset.
