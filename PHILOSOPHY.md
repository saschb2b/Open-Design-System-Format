# ODSF Philosophy

A coding agent will happily build you a settings page. It will pick a blue, round the corners,
add a drop shadow, and ship something that looks like a design system, just not *yours*. The
gap between "a design" and "your design" is context the agent never had: your color roles, your
spacing rhythm, your button states, your rule that meaning is never carried by color alone.

So the real question isn't *how do we describe a design system?* Plenty of formats do that.
It's *what is the right shape to hand a design system to an agent so it actually adheres to it?*
ODSF is one answer, and these are the convictions behind it.

## A design system is context, so package it as knowledge

When an agent uses your design system, it is not importing a library or reading a documentation
site. A component library is code the model has to reverse-engineer into intent. A docs site is
written for humans, with navigation and prose tuned for eyes, not token budgets. A design system
handed to an agent is neither of those. It is **context to load**.

That reframing is the whole foundation. The mature format for "knowledge an agent loads" already
exists. Google's [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog)
is plain markdown files, one-field conformance, cross-links, progressive disclosure, no SDK, no
platform. ODSF doesn't reinvent that container; it is a *profile* of it. A design system becomes
a bundle of typed concepts you can clone, diff, and read with no tooling at all.

The payoff of "knowledge, not platform" is that nothing stands between the agent and the system.
There is no build step to run, no package to resolve, no service to call. The agent reads files,
and the files are the system.

## Show, don't just tell: the example is the contract

[design.md](https://github.com/google-labs-code/design.md) made an argument worth keeping: prose,
not token values, carries design intent, and a *specific* reference ("a 1970s lecture handout")
says more than a pile of adjectives. We agree. ODSF keeps the prose and the tokens.

But intent and reproduction are different jobs. Prose is how you convey *why* a button looks the
way it does; it is a lossy way to convey *exactly what markup to emit*. Ask a model to follow a
paragraph describing a button and it will produce a plausible button. Hand it a correct, minimal,
self-rendering example and it will produce *that* button: the right element, the right class
names, the right ARIA, the right states.

So ODSF adds the piece description alone can't carry: a concrete artifact that ships beside the
concept. The most specific reference is one that runs. A `button.example.html` is not
documentation about the button. It *is* the button, rendered with the real tokens, ready to be
reproduced. Prose sets the intent; the example sets the contract.

## Describe it and run it from one source

A design system that is *described* in one place and *implemented* in another will drift. The doc
says the primary is `#3b5bdb`; six months later the code says `#3a57d0` and no one updated the
doc. That drift is where design systems quietly rot, and an agent reading the stale doc inherits
the rot.

ODSF refuses the second copy. A token lives once and appears twice: as agent-readable
frontmatter (`colors.primary: "#3b5bdb"`) and as a runnable CSS variable
(`--colors-primary: #3b5bdb`) projected from it by a single deterministic rule. The example HTML
links that same CSS, so it can't disagree with the tokens: change the token, every example
re-renders. There is one source of truth and two views of it, never two truths.

This is what closes the gap between *describing* the system and *using* it. The agent reads the
description and writes code against the projection, and both came from the same line.

## The system is the graph, not the list

design.md's honest limitation was the bigger picture: a single file describes the design "too
loosely," with no model for how the pieces relate. But a design system is not a list of tokens.
It is a **graph**: this component uses these color and spacing tokens, obeys this focus behavior,
composes into this form pattern, and is constrained by this accessibility rule.

ODSF makes those edges first-class. Foundations, components, patterns, behaviors, guidelines, and
accessibility requirements are each their own concept type, linked into a graph an agent can
*walk*. Handed a task ("build a sign-up form"), the agent starts at the form pattern, follows the
edges to the inputs and buttons it composes, to the tokens those resolve to, to the behaviors that
govern their states, to the rules that constrain them, and reads only that slice. Progressive
disclosure, specialized to design.

A list tells an agent what exists. A graph tells it what to load for *this* task, and what not to.

## Require one thing; recommend the rest

It is tempting to make a format strict, demanding every token, every state, and every field, and
rejecting anything incomplete. That instinct kills adoption. A half-documented design system that
an agent can still partly use beats a perfect one nobody finished writing.

ODSF inherits OKF's discipline of requiring almost nothing: a bundle is conformant if every
concept declares a `type` and the bundle announces its version. Everything else (the token
model, the example assets, the behaviors, the guidelines) is *recommended*, and a consumer must
degrade gracefully through every missing piece, down to "a pile of typed markdown," which is still
useful. Producers aim to be precise; consumers aim to be forgiving.

The format spreads because it is easy to adopt, not because it is hard to violate. You can start
with three colors and one button and grow from there, and it is a valid bundle the whole way.

## The format grows through its bundles, not its spec

The vocabulary in the spec (the concept types, the token categories) is a set of conventions, not
a closed registry. `type` is descriptive and open by design, as it is in OKF. If your system needs
a `Voice` concept, a `Density` token group, or an `iconography` category that no example
anticipated, you add it; a consumer that doesn't recognize it treats it as a generic concept and
moves on.

The right way for ODSF to get better is therefore not a thicker spec. It is more bundles: real
design systems, packaged and handed to agents, surfacing the patterns worth standardizing. A
format earns its conventions from use. The spec should stay small enough that the interesting work
happens in the bundles people ship, not in the rules we write.

---

The one-sentence version: **a design system is context, so bundle it like knowledge, prove every
claim with a runnable example, keep description and implementation as one source, wire the pieces
into a graph an agent can walk, and require almost none of it, so people actually adopt it.**
