---
type: Guideline
title: Serif display, never bold
description: Headlines are the serif display at regular weight; a bold sans headline breaks the brand voice.
tags: [guidelines, typography, brand, do-and-dont]
status: stable
timestamp: 2026-06-23T10:00:00Z
examples:
  - /guidelines/serif-display-never-bold.dont.html
---

# Rule
Every display headline uses the serif display family (`{typography.display-lg}` etc.) at weight
**400**, with negative tracking. Never a bold weight, and never a sans-serif headline.

# Why
The serif display at a light weight is Claude's literary voice. Bold it, or switch it to a sans, and
the page instantly reads like every other AI tool — the editorial character is gone. The serif/sans
split is the most load-bearing typographic decision in the system.

# Do
Set headlines in `{typography.fontFamily-display}` at weight 400 with the role's negative
letter-spacing. The [landing page](/patterns/landing-page.example.html) hero shows it.

# Don't
Set the headline in a bold sans — see
[serif-display-never-bold.dont.html](/guidelines/serif-display-never-bold.dont.html). Same words, but
it now looks generic and loud.

# Citations
[1] [Typography](/foundations/typography.md)
[2] [Claude design.md](/references/claude-design-md.md)
