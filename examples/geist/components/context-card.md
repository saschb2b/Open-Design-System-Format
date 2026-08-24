---
type: Component
title: Context card
description: A rich hover card that previews an entity's details.
tags: [components, context-card, overlay, preview]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/context-card.example.html
  - /components/context-card.wireframe.html
---

A richer-than-a-[tooltip](/components/tooltip.md) hover card that previews an entity — a user, a
deployment, a commit — with an [avatar](/components/avatar.md), title, metadata, and sometimes an
action. Appears on hover/focus of a link or mention. See [context-card.example.html](/components/context-card.example.html).

# Structure
A fixed `280px` floating panel with `14px` of padding, stacking an identity row above a metadata
line.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Identity row | 1 | avatar fixed, name block fills the rest, `{spacing.2}` apart | `{spacing.3}` | unchanged |
| Metadata line | 2 | full width, wraps | none | unchanged |

The width is fixed rather than content-driven so the card is stable wherever it is anchored, and
the spacing below the identity row comes from the paragraph margin rather than a gap. As a floating
layer it never displaces the content it describes.

# Accessibility
Reveal on hover **and** focus with a delay; keep it dismissible (Escape, blur); the trigger's own text
must stand alone, since the card is supplementary.

# Do & Don't
- **Do** use a context card to preview without navigating.
- **Don't** put the only path to an action inside a hover-only card.
