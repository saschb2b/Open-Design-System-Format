---
type: Component
title: Context card
description: A rich hover card that previews an entity's details.
tags: [components, context-card, overlay, preview]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/context-card.example.html
---

A richer-than-a-[tooltip](/components/tooltip.md) hover card that previews an entity — a user, a
deployment, a commit — with an [avatar](/components/avatar.md), title, metadata, and sometimes an
action. Appears on hover/focus of a link or mention. See [context-card.example.html](/components/context-card.example.html).

# Accessibility
Reveal on hover **and** focus with a delay; keep it dismissible (Escape, blur); the trigger's own text
must stand alone, since the card is supplementary.

# Do & Don't
- **Do** use a context card to preview without navigating.
- **Don't** put the only path to an action inside a hover-only card.
