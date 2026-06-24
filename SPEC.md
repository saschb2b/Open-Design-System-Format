# Open Design System Format (ODSF) v0.1

A specification for packaging a **design system** as a self-contained bundle that an AI
agent can read, navigate, and apply to a task with no SDK, no platform, and no lock-in.

ODSF is a **profile of the [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)**.
Everything OKF says about bundles, concepts, frontmatter, links, `index.md`, `log.md`, and
versioning holds in ODSF unchanged. ODSF adds three things on top of that container:

1. a **token model** for machine-readable design tokens (the part [design.md](https://github.com/google-labs-code/design.md) pioneered),
2. **companion HTML/CSS assets** so a concept ships a concrete, self-rendering example an agent can copy from, and
3. a **design-oriented type vocabulary and body conventions** so foundations, components, patterns, behaviors, and guidelines are first-class.

The goal is a bundle you can hand to an agent ("build this screen, adhere to this design
system"), and have it produce work that looks and behaves like the system intends, because
the system is right there in a form the agent can consume.

Normative keywords (MUST, MUST NOT, SHOULD, SHOULD NOT, MAY, REQUIRED) carry their RFC 2119
force. Where this spec is silent, the [OKF spec](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) governs; where the two conflict for a
design concern, this spec governs within an ODSF bundle.

---

## 1. Conformance

A bundle is a **conformant ODSF bundle** when both hold:

1. It is a **conformant OKF bundle.** Every non-reserved `.md` file opens with a parseable
   YAML frontmatter block carrying a non-empty `type` field, and reserved files (`index.md`,
   `log.md`) follow their OKF structure.
2. The **bundle-root `index.md` declares `odsf_version`** in its frontmatter (a `<major>.<minor>`
   string, e.g. `"0.1"`).

That is the whole hard requirement: *be a valid OKF bundle, and say you are an ODSF one.*
Everything else in this document (the token model, the asset conventions, the type
vocabulary, the body sections) is **recommended** structure that a producer SHOULD follow
and a consumer SHOULD exploit but MUST tolerate the absence of.

Note the asymmetry: `odsf_version` is the only **added** hard requirement, while `okf_version`
stays OKF's own *optional* declaration (§10), so a missing `okf_version` is a warning, never a
conformance failure. A direct consequence: because rule 1 *is* OKF conformance, **any conformant
OKF bundle is a single `odsf_version` line from satisfying it** — adopting ODSF over an existing
OKF bundle is one edit plus optional enrichment, not a rebuild.

The consumer contract is OKF's, extended. A consumer **MUST NOT** reject a bundle because of:

- any condition OKF already tolerates (missing optional fields, unknown `type` values, unknown
  keys, broken cross-links, missing `index.md`);
- a missing, partial, or unknown `tokens` block;
- a concept that references a companion asset (HTML/CSS) that is absent;
- an unknown ODSF concept type;
- a missing `styles/` directory or `tokens.css`.

Producers aim to be precise; consumers aim to be forgiving. An OKF-only consumer (a graph
viewer, a generic agent) can read an ODSF bundle and lose only the design-specific niceties.

---

## 2. Bundle structure

An ODSF bundle is an OKF bundle whose directories are organized by **design domain**, with
non-markdown **assets** (HTML, CSS) living beside the concepts they illustrate.

```
bundle/
  index.md                      bundle-root listing; declares odsf_version (+ okf_version)
  log.md                        chronological change history
  foundations/                  the design language: tokens and their meaning
    index.md
    color.md                    type: Color
    typography.md               type: Typography
    spacing.md                  type: Spacing
    elevation.md                type: Elevation
    shape.md                    type: Shape
    motion.md                   type: Motion
  components/                   reusable UI elements
    index.md
    button.md                   type: Component
    button.example.html         a self-rendering canonical example (asset)
    card.md
    card.example.html
  patterns/                    compositions of components solving a recurring need
    index.md
    form.md                     type: Pattern
    form.example.html
  behaviors/                   interaction and state rules
    index.md
    focus-visible.md            type: Behavior
  guidelines/                  do/don't principles and rationale
    index.md
    color-not-alone.md          type: Guideline
    color-not-alone.dont.html   a contrastive counter-example (asset)
  styles/                      the token set projected as consumable CSS (assets)
    tokens.css                  design tokens as CSS custom properties
    components.css              styles the example HTML links to
  references/                  external sources mirrored as concepts (OKF carryover)
    index.md
    design-md.md                type: Reference
```

Domain folders are a recommendation, not a requirement; the real relationship graph is the
links (§8), which cross the hierarchy freely. The folders above (`foundations/`,
`components/`, `patterns/`, `behaviors/`, `guidelines/`, `styles/`, `references/`) are the
**conventional** top-level layout a consumer SHOULD expect.

### Concepts vs. assets

ODSF bundles contain exactly three file kinds:

| Kind | Extension | Carries frontmatter? | Role |
| --- | --- | --- | --- |
| **Concept** | `.md` | Yes (REQUIRED `type`) | A unit of design knowledge. The thing OKF conformance checks. |
| **Asset** | `.html`, `.css` | No | A concrete artifact a concept points at: a rendered example, a token stylesheet, component CSS. |

Assets are **not** concepts and are **not** subject to OKF's frontmatter rule. They exist only
to be referenced by concepts (§6). A bundle SHOULD contain no file types other than `.md`,
`.html`, and `.css`; a producer that needs another format (an image, a font) SHOULD link it by
URL from a concept rather than embedding a fourth file type, keeping the bundle text-only,
diffable, and trivially portable.

Reserved filenames (`index.md`, `log.md`) keep their OKF meaning at every level.

---

## 3. Concept documents

A concept is OKF's: a YAML frontmatter block followed by a structural-markdown body. Its
identity is its path minus `.md` (`components/button.md` ⇒ concept `components/button`).

### Frontmatter

ODSF uses OKF's recommended fields (`title`, `description`, `resource`, `tags`, `timestamp`)
unchanged and adds the following **recommended** keys, used where they apply:

| Field | Status | Type | Meaning |
| --- | --- | --- | --- |
| `type` | REQUIRED | string | The kind of design concept. See the vocabulary in §5. Descriptive, not registered. |
| `tokens` | recommended | map | Machine-readable design tokens defined or used by this concept (§4). |
| `examples` | recommended | list of paths | Companion asset files (HTML/CSS) that demonstrate this concept (§6). Bundle-absolute or relative paths. |
| `status` | recommended | string | Lifecycle of the concept: `stable`, `experimental`, or `deprecated`. Lets an agent avoid building on what is on the way out. |
| `applies_to` | optional | list of strings | Platforms or surfaces this concept governs (e.g. `[web, ios]`). Absent means "all". |

As in OKF, producers **MAY** add any other keys, and consumers **SHOULD** preserve unknown
keys and **MUST NOT** reject a document for having them. `tokens`, `examples`, and `status` are
conventions a design-aware consumer reads; an OKF-only consumer ignores them harmlessly.

---

## 4. The token model

A **design token** is a named, reusable design decision: a color, a font size, a spacing
step, a radius, a shadow, a duration. ODSF carries tokens in **two projections of one source
of truth**, so both an agent and the code it writes can consume them:

1. **Frontmatter `tokens`**, the human- and agent-readable definition, on the foundation
   concept that owns them (and, by reference, on the components that use them).
2. **`styles/tokens.css`**, the same tokens as CSS custom properties, ready to drop into real
   code or to be linked by the bundle's own example HTML.

A bundle SHOULD keep the two in sync; the foundation concept's frontmatter is the canonical
definition and `tokens.css` is its mechanical projection.

### Frontmatter token shape

`tokens` is a map of **groups** to **named values**. A group is a token category
(`colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `breakpoints`, …); within
it, each key is a token name and each value is the token's value (a string) or a small map of
sub-properties (for composite tokens like a type style).

```yaml
tokens:
  colors:
    primary: "#3b5bdb"
    on-primary: "#ffffff"
    surface: "#ffffff"
    text: "#1a1b1e"
  spacing:
    sm: "8px"
    md: "16px"
    lg: "24px"
  typography:
    body:
      fontFamily: "Inter, system-ui, sans-serif"
      fontSize: "16px"
      lineHeight: "1.5"
  radius:
    md: "8px"
  motion:
    fast: "120ms"
    easing-standard: "cubic-bezier(0.2, 0, 0, 1)"
```

The category names above are **conventional**, mirroring design.md, and a consumer SHOULD
recognize them; producers MAY add categories their system needs.

### Token references

A token value, or prose, MAY reference another token with the **`{group.name}` syntax**
(design.md's). A component's tokens point at foundation tokens rather than restating hex codes:

```yaml
# components/button.md
tokens:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    radius: "{radius.md}"
    padding: "{spacing.sm} {spacing.md}"
```

A consumer SHOULD resolve `{group.name}` against the bundle's foundation tokens. An unresolved
reference (the target token does not exist) is **tolerated**, like a broken link: the
consumer keeps the literal `{…}` string rather than failing.

### The CSS projection

Each token path maps to a CSS custom property by joining its segments with hyphens and
prefixing `--`:

```
colors.primary          →  --colors-primary
spacing.md              →  --spacing-md
typography.body.fontSize →  --typography-body-fontSize
```

`styles/tokens.css` SHOULD define these under `:root` so any example HTML (and any code the
agent writes) consumes the identical values:

```css
:root {
  --colors-primary: #3b5bdb;
  --colors-on-primary: #ffffff;
  --spacing-md: 16px;
  --radius-md: 8px;
}
```

This two-projection model is the core of ODSF's "more": design.md stopped at frontmatter
tokens; ODSF also ships the runnable CSS, so the gap between *describing* the system and
*using* it disappears.

**Foundation tokens project; component tokens are realized.** Only **foundation** tokens project
to `styles/tokens.css`, each as its resolved literal value (`--colors-primary: #3b5bdb`). A
**component** token entry (`button-primary.backgroundColor: "{colors.primary}"`) does **not**
become a `--button-primary-backgroundColor` property; it is realized as a rule in
`styles/components.css` (§6) that consumes the foundation property with `var(--…)`
(`.btn--primary { background: var(--colors-primary); }`). So a `{group.name}` reference never
appears verbatim in emitted CSS: in `tokens.css` it is already the literal value, in
`components.css` it is `var(--…)`. The reference bundles follow this exactly — their `tokens.css`
carries only foundation custom properties, and their `components.css` resolves every rule through
`var(--…)` with no raw values.

**The projection is forward-only.** The segment-join (`a.b.c → --a-b-c`) is a one-way emit, not a
guaranteed-reversible mapping: a hyphenated token name (`colors.on-primary → --colors-on-primary`)
is indistinguishable from a nested split (`colors.on.primary`). Treat `tokens.css` as a projection
of the frontmatter (the source of truth), and keep token names from colliding with a group/name
split. Composite sub-property keys project verbatim (`typography.body.fontSize →
--typography-body-fontSize`), so pick one casing convention and hold it; custom properties are
case-sensitive.

### Variants and states

A component's interactive states are expressed as **separate token entries** (design.md's
convention), suffixed by state: `button-primary`, `button-primary-hover`,
`button-primary-active`, `button-primary-disabled`. This keeps each state machine-readable and
lets the CSS projection and example HTML stay one-to-one with the tokens. A state that introduces
**no new token value** (a hover that only adds an underline, a focus ring already governed by a
`Behavior`) needs **no token entry**; document it in the component's `# Variants & States` table
and `styles/components.css` instead. Add an entry only when the state changes a value.

---

## 5. Concept type vocabulary

As in OKF, `type` is **descriptive and open**: there is no registry and a consumer MUST
tolerate unknown values. The following are the **conventional** ODSF types a consumer SHOULD
recognize and route on. Pick the most specific that fits; invent one when none does.

**Foundations** (the design language):

| `type` | Describes |
| --- | --- |
| `Color` | The color system: palette, semantic roles, theming. |
| `Typography` | Type families, scale, and text roles. |
| `Spacing` | The spacing/sizing scale. |
| `Elevation` | Shadow/depth system. |
| `Shape` | Corner radii and border treatment. |
| `Motion` | Durations, easings, and animation principles. |
| `Layout` | Grid, breakpoints, and responsive rules. |
| `Token Set` | A group of tokens that does not fit a category above. |

**Building blocks and rules:**

| `type` | Describes |
| --- | --- |
| `Component` | A reusable UI element (button, input, card). Usually ships an example asset. |
| `Pattern` | A composition of components solving a recurring problem (a form, an empty state, a page shell). |
| `Behavior` | An interaction or state rule that spans components (focus handling, loading, validation). |
| `Guideline` | A do/don't principle with rationale. |
| `Accessibility` | An accessibility requirement (contrast, focus order, ARIA, motion-reduction). |
| `Voice` | Tone and microcopy guidance. |

**Container and external:**

| `type` | Describes |
| --- | --- |
| `Design System` | The bundle-level overview concept: what the system is, its principles, how to use it. |
| `Reference` | An external source mirrored into the bundle (OKF carryover): design.md, a brand site, a component-library doc. |

---

## 6. Companion assets

The asset is what makes an ODSF bundle *transferable* rather than merely *descriptive*. A
concept SHOULD ship one or more concrete artifacts that an agent can read and copy.

### Naming convention

An asset shares its concept's basename, plus a **role suffix**, plus its extension:

| Asset | Role |
| --- | --- |
| `<concept>.example.html` | The canonical, correct usage. SHOULD be self-rendering (below). |
| `<concept>.do.html` | A correct example in a do/don't pair. |
| `<concept>.dont.html` | The matching counter-example, the mistake the guideline forbids. |
| `<concept>.css` | Styles specific to this concept, when not in a shared stylesheet. |

So `components/button.md` is accompanied by `components/button.example.html`, and
`guidelines/color-not-alone.md` by `guidelines/color-not-alone.dont.html`. A concept declares
its assets in the `examples` frontmatter list and SHOULD link them from an `# Examples` body
section (§7) so both an index and a reader can find them. A counter-example (`*.dont.html`) is
also declared under `examples`; the body distinguishes it from the correct one.

### The shared stylesheet

`styles/components.css` is the asset that carries the actual CSS rules the example HTML renders
with — the realization of every component's `tokens` entries (§4). Each rule consumes the
foundation custom properties from `tokens.css` with `var(--…)`, never a hard-coded value, so a
token change re-renders every example. It is also where shared layout primitives live (a `.stack`
column, a `.row`). A `<concept>.css` file is for styles specific to one concept that do not belong
in the shared sheet.

### Class naming

Because the example assets are the consumer's copy source (§11), they SHOULD share one
class-naming convention, or a multi-component bundle becomes incoherent to copy from. The
convention ODSF's reference bundles use, and the default these templates show, is **BEM**: a block
(`.btn`), a modifier (`.btn--primary`), an element (`.btn__label`). A producer MAY choose another
convention but SHOULD apply it uniformly across every example and note it in the `Design System`
overview.

### Self-rendering examples

An `*.example.html` file SHOULD be a **complete, standalone HTML document** that renders
correctly when opened directly in a browser, with **no build step**. It SHOULD pull the
design system's tokens by linking the bundle's stylesheets (`tokens.css` for the values,
`components.css` for the class rules) rather than hard-coding values. Note
that an asset links its stylesheets with **relative** paths (`../styles/tokens.css`), not the
bundle-absolute form recommended for concept cross-links (§8). A relative path resolves both
when the file is opened directly over `file://` and when the bundle is served, so the example
renders on a double-click:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="../styles/tokens.css">
  <link rel="stylesheet" href="../styles/components.css">
</head>
<body>
  <!-- The minimal, correct markup an agent should reproduce. -->
  <button class="btn btn--primary">Save changes</button>
</body>
</html>
```

Because the example links `tokens.css` (§4), it stays truthful to the system automatically:
change a token, and every example re-renders with the new value. An agent handed this file
learns the exact class names, structure, and attributes to emit, knowledge that prose alone
conveys poorly. Keep examples **minimal**: the markup for the one thing the concept teaches,
not a page of chrome around it.

### Snapshotting dynamic states

An asset carries no JavaScript, so a state with no static look (loading, async, an open menu) is
**snapshotted**: render it frozen with the right ARIA (`aria-busy="true"` for loading,
`aria-expanded` for a disclosure) and a static indicator, or show it as a `*.do.html` /
`*.dont.html` pair. Document the state in the component's `# Variants & States` table either way.

### Table and asset stay in sync

Every row in a component's `# Variants & States` table SHOULD have a matching element in its
example asset, and every variant the example shows SHOULD appear in the table. A validator checks
that a declared asset exists, not that it covers every variant, so this one is on the producer.

### Do / Don't pairs

A `Guideline` or `Component` MAY ship a `*.do.html` / `*.dont.html` pair so the agent sees
both the intended result and the specific failure to avoid. The matching concept's body
explains *why* the don't is wrong; the asset shows *what* it looks like.

---

## 7. Body conventions

The body is structural markdown (OKF §4). Beyond OKF's `# Examples` and `# Citations`, ODSF
defines **conventional headings per type**, used when they apply:

**Foundation concepts** (`Color`, `Typography`, `Spacing`, …):
`# Tokens` (a table of name / value / usage), `# Roles` (semantic meaning of each token),
`# Usage` (when and how to apply), `# Do & Don't`, `# Citations`.

**`Component`:**
`# Anatomy` (the parts), `# Tokens` (the component's tokens and what foundation tokens they
resolve to), `# Variants & States` (the variant/state matrix), `# Examples` (links to the
example assets), `# Behavior` (links to relevant `Behavior` concepts), `# Accessibility`,
`# Do & Don't`.

**`Pattern`:**
`# When to use`, `# Composition` (the components it assembles, linked), `# Example`,
`# Do & Don't`.

**`Behavior`:**
`# Rule`, `# States`, `# Example`, `# Accessibility`.

**`Guideline`:**
`# Rule` (one sentence), `# Why`, `# Do`, `# Don't` (linking the do/don't assets).

A consistent `# Do & Don't` section, with linked `*.do.html` / `*.dont.html` assets, is the
single highest-value convention for steering an agent away from plausible-but-wrong output.

---

## 8. Cross-linking

ODSF uses OKF's links unchanged. Concepts link with standard markdown links, **bundle-absolute**
(`/foundations/color.md`, recommended for stability) or relative. A link asserts a relationship
whose meaning lives in the surrounding prose; the link is the edge, the prose is the label.
Broken links are tolerated.

ODSF relationships a producer SHOULD wire and label in prose:

- a `Component` → the foundation `Color`/`Typography`/`Spacing` concepts whose tokens it uses;
- a `Component` → the `Behavior` concepts that govern its interaction;
- a `Pattern` → the `Component` concepts it composes;
- any concept → the `Guideline` and `Accessibility` concepts that constrain it.

The result is a graph an agent can walk from a task ("build a sign-up form") to the patterns,
components, tokens, behaviors, and rules it needs, the same progressive-disclosure traversal
OKF defines, specialized to design.

---

## 9. index.md and log.md

Identical to OKF. An `index.md` MAY appear in any directory and carries no frontmatter, except
the **bundle-root `index.md`**, which carries the version declaration (§10) and is the one place
ODSF frontmatter on an index is permitted. Each `index.md` lists its directory's concepts as a
bulleted set of described links for progressive disclosure. `log.md` is a flat, newest-first
list of `## YYYY-MM-DD` (ISO 8601) date headings with prose entries (`**Creation**`, `**Update**`,
`**Deprecation**` by convention).

---

## 10. Versioning

ODSF versions independently of OKF. The bundle-root `index.md` frontmatter declares **both**:

```yaml
---
odsf_version: "0.1"
okf_version: "0.1"
---
```

`odsf_version` is REQUIRED for ODSF conformance (§1); `okf_version` is OKF's own optional
declaration and SHOULD be present so OKF consumers know which container version they hold. Both
use `<major>.<minor>`; minor versions are backward-compatible additions, a major version
signals a breaking change. A consumer that does not understand a declared version SHOULD
attempt best-effort consumption rather than refuse the bundle.

---

## 11. Consuming an ODSF bundle

How an agent SHOULD use a bundle when handed a design task:

1. **Orient.** Read the bundle-root `index.md` and the `Design System` overview concept for the
   system's principles and the lay of the land.
2. **Pull foundations.** Load the foundation tokens relevant to the task (color, typography,
   spacing), or simply link/inline `styles/tokens.css`, the runnable projection of all of them.
3. **Descend by need.** Follow `index.md` listings and cross-links to the `Component`,
   `Pattern`, and `Behavior` concepts the task requires; don't read the whole bundle.
4. **Copy from the assets.** Reproduce structure, class names, and attributes from the relevant
   `*.example.html`. The example *uses* the classes; `styles/components.css` *defines* them (and
   `tokens.css` defines the values), so read `components.css` for the class contract and any
   layout primitives (`.stack`, `.row`) or state rules (`:focus-visible`) the example references
   but does not itself define.
5. **When a concept you need is absent, degrade — don't stall.** A partial bundle is the normal
   case. A missing `Pattern` → compose it from the `Component`s it would contain, stacked with the
   bundle's layout primitives. A missing `Component` → the nearest typed sibling (a password field
   is the text input with `type="password"`) or a primitive built from foundation tokens. A
   missing token → keep the literal `{ref}` or pick the closest defined value. Note what you
   improvised.
6. **Respect the rules.** Honor the `Guideline` and `Accessibility` concepts in scope, and the
   `*.dont.html` counter-examples, so the output avoids the system's known failure modes.
7. **Stay forgiving.** Tolerate everything optional (missing tokens, absent assets, unknown
   types, broken links). Never refuse a bundle over them.

**Emitting into a host app** is not the same as linking from a bundle example: link or `@import`
`tokens.css`, or inline only the `:root` subset you use, or translate to the app's own token
system. A bundle stylesheet may carry `@import`s and global rules (a `body {}`) you do not want
pasted verbatim into product code — take the custom properties, leave the page chrome.

An agent that also edits the bundle (adds a component, fixes a token) becomes a producer: a token
or variant change ripples to the foundation, `tokens.css`, the component's tokens,
`components.css`, the example asset, the `# Variants & States` table, every touched concept's
`timestamp`, and `log.md` (the indexes and links only if the set of concepts or relationships
changed). It then re-validates.

---

## 12. Non-goals

ODSF deliberately does not:

- **Define a closed taxonomy.** `type` and token categories are open by design (OKF's
  principle). The vocabulary in §5 is conventional, not exhaustive.
- **Replace a design-token standard.** ODSF *carries* tokens and stays *compatible* with the
  [W3C DTCG format](https://www.designtokens.org/) and Tailwind — the frontmatter shape is
  deliberately design.md-compatible, so values map cleanly — but it does not redefine them and
  ships no built-in importer or exporter. That compatibility is a shape claim, not a turnkey
  conversion: a DTCG or Tailwind round-trip is a producer task scripted per project, and the
  forward-only projection (§4) makes the CSS-to-token direction best-effort, not lossless.
- **Be a component framework or runtime.** Example assets are vanilla HTML/CSS that teach
  structure and styling, not a React/Vue/Web-Components library. A bundle describes a system;
  it does not ship one.
- **Prescribe tooling or a platform.** A bundle is just files. No SDK, account, or service is
  required to read, write, or serve one.
- **Validate visual correctness.** The spec checks structure (is it a conformant bundle), not
  taste (is the design good). Contrast and reference checks are advisory lints, not gates.

---

## 13. Relationship to OKF and design.md

ODSF sits deliberately between the two it builds on:

- **OKF** gives the *container*: the bundle, the concept, the one-field conformance rule, links,
  indexes, logs, versioning, and the producer/consumer independence that makes a bundle portable
  across tools and time. ODSF inherits all of it and stays a strict OKF profile, so OKF tooling
  reads ODSF bundles unchanged.
- **design.md** gives the *seed of the content*: frontmatter design tokens, the `{group.name}`
  reference syntax, variant/state entries, and the do/don't framing. ODSF embraces that token
  model and keeps it compatible.
- **ODSF adds the rest**: first-class `Pattern` / `Behavior` / `Guideline` / `Accessibility`
  concepts, the OKF-style graph that ties a task to exactly the design knowledge it needs, a
  runnable `tokens.css` projection, and companion HTML/CSS assets that make an example concrete
  rather than paraphrased. It fills design.md's noted gaps (motion, breakpoints, behavioral and
  accessibility modeling) by making each its own concept type rather than loose prose.

The one-sentence version: **OKF told us how to bundle knowledge for an agent; design.md told us
how to write down a design token; ODSF bundles a whole design system the OKF way, linked into a
graph an agent navigates from a task to the rule it needs.**

---

## 14. Distribution

A bundle is a directory of text files, so it ships however files ship: a git repository (the
recommended home, versioned beside the product it styles), a tarball, or a subdirectory of a
larger repo. Because every file is `.md`, `.html`, or `.css`, a bundle is diffable, reviewable,
and openable without any tooling: the example HTML literally renders in a browser.

---

## 15. Design principles

The convictions behind these are argued at length in [PHILOSOPHY.md](./PHILOSOPHY.md); in brief:

- **A profile, not a fork.** ODSF adds the minimum to OKF to make design systems first-class
  and keeps every ODSF bundle a valid OKF bundle. One new hard rule, the rest recommended.
- **Two projections, one truth.** Tokens live once and appear twice: as agent-readable
  frontmatter and as runnable CSS, so describing the system and using it never diverge.
- **Show, don't just tell.** Every concept can ship a concrete, self-rendering artifact. An
  agent copies a correct example far more reliably than it follows prose.
- **Forgiving by default.** A consumer degrades gracefully through every missing optional part,
  down to "a pile of markdown with types," which is still useful. Adoption beats enforcement.
- **Format, not platform.** No cloud, model, framework, or account is ever required to read,
  write, or serve a bundle. ODSF's value is in being a shared format, not in owning it.
