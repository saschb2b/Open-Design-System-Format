# Open Design System Format (ODSF) v0.2

A specification for packaging a **design system** as a self-contained bundle that an AI
agent can read, navigate, and apply to a task with no SDK, no platform, and no lock-in.

ODSF is a **profile of the [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)**.
Everything OKF says about bundles, concepts, frontmatter, links, `index.md`, `log.md`, and
versioning holds in ODSF unchanged, including the v0.2 provenance and trust layer (`sources`,
`generated`, `verified`, `status`, `stale_after`, and the actor convention). A design system is
exactly the kind of knowledge that layer was added for, since "is this token still the brand's" and
"has a human signed off on this component spec" are the questions an agent building UI most needs
answered. ODSF adds three things on top of that container:

1. a **token model** for machine-readable design tokens (the part [design.md](https://github.com/google-labs-code/design.md) pioneered),
2. **companion HTML/CSS assets** so a concept ships a concrete, self-rendering example an agent can copy from, plus a **wireframe** of the same markup with the skin stripped, and
3. a **design-oriented type vocabulary and body conventions** so foundations, components, patterns, behaviors, and guidelines are first-class.

**What v0.2 changes.** ODSF's own additions did not change in this revision. Everything that moved
moved because the container underneath it did, so the two version numbers stay aligned. The one
addition of ODSF's own is the **structure layer**: the `# Structure` body section and the
`*.wireframe.html` asset (§6, §7), which make a component's skeleton inspectable separately from
its skin. See [§16](#16-changes-from-v01) for the full list and the migration path.

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
   string, e.g. `"0.2"`).

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
- a missing `styles/` directory, `tokens.css`, or `wireframe.css`;
- a concept with no `# Structure` section, or a component or pattern with no `*.wireframe.html`;
- a missing `generated`, `sources`, or `verified` block, or a legacy `timestamp` / `# Citations` in
  place of them (§16).

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
    card.wireframe.html         the same body, skin stripped: the structural view (asset)
  patterns/                    compositions of components solving a recurring need
    index.md
    form.md                     type: Pattern
    form.example.html
    form.wireframe.html
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
    wireframe.css               the skin stripper, linked last by *.wireframe.html only
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

ODSF uses OKF's recommended fields (`title`, `description`, `resource`, `tags`) unchanged, inherits
OKF v0.2's provenance and trust keys in full, and adds the following **recommended** keys, used
where they apply:

| Field | Status | Type | Meaning |
| --- | --- | --- | --- |
| `type` | REQUIRED | string | The kind of design concept. See the vocabulary in §5. Descriptive, not registered. |
| `tokens` | recommended | map | Machine-readable design tokens defined or used by this concept (§4). |
| `examples` | recommended | list of paths | Companion asset files (HTML/CSS) that demonstrate this concept (§6), including the wireframe. Bundle-absolute or relative paths. |
| `applies_to` | optional | list of strings | Platforms or surfaces this concept governs (e.g. `[web, ios]`). Absent means "all". |

Inherited from OKF v0.2 and used unchanged:

| Field | Status | Type | Meaning |
| --- | --- | --- | --- |
| `generated` | recommended | map | `{ by, at }`: who wrote the concept and when it last meaningfully changed. Replaces v0.1's `timestamp` (§16). |
| `sources` | recommended | list of maps | Where the knowledge came from; each entry REQUIRES `resource`. Replaces the v0.1 `# Citations` body section (§16). |
| `verified` | optional | list of maps | Confirmation events, each `{ by, at }`. Separate from authorship on purpose. |
| `status` | recommended | string | `draft`, `stable`, or `deprecated`. Absent means `stable`. |
| `stale_after` | optional | date | `YYYY-MM-DD`; the concept is stale on or after this day. |

**`status` and the ODSF extension.** OKF v0.2 defines three values. ODSF keeps `experimental` as an
extension, for a component that is shipped but whose API may still move; an OKF-only consumer
tolerates it as an unknown value. Prefer OKF's three when portability matters, and use
`stale_after` rather than a permanent `experimental` to say a concept needs re-checking.

**Naming the actor truthfully** is the rule that matters most here, and it is OKF's unchanged: use
`human:<id>` only for content a person wrote or confirmed, never for what an agent generated, and
never backfill a `verified` event that did not happen. A retuned token invalidates any `verified`
event on the concepts it touched, so drop those rather than letting an old sign-off vouch for a new
value.

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
| `<concept>.wireframe.html` | The example's markup with the skin stripped: the structural view (below). |
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

`styles/wireframe.css` is the third shared sheet: one per bundle, authored once, linked **last** and
only by the `*.wireframe.html` assets. It overrides skin properties and touches nothing structural,
so layout, spacing, sizing, order, the type scale, and every breakpoint come through from
`components.css` untouched.

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

### Why the artifact stays a separate file

A reader coming from OKF, where the guidance is to reach for the sharpest inline markdown form (a
`mermaid` fence, TeX, a definition list) rather than a sidecar, may ask why the example is a
separate `.html` file instead of a fenced block in the concept body. The answer is the split
between what markdown can *render* and what it can only *show as source*. OKF's inline forms all
render where bundles are read (GitHub, a viewer); a rendered, tokenized component does not. A
` ```html ` fence renders as syntax-highlighted source, never as the component, and raw inline HTML
is stripped of its `<style>`, `<link>`, and class styling by the sanitizers that fenced markdown
passes through, so it cannot link `tokens.css` or render truthfully either. The standalone file is
the only form that both renders on a double-click and stays wired to the token projection, which is
the entire point of an asset (§6, "Self-rendering examples"). So a separate asset is not drift from
OKF; it is the case OKF's inline forms do not cover, which is exactly why ODSF adds assets (§2). A
consumer that wants the inline reading experience gets it by rendering the referenced file in a
preview frame, not by the file being inlined at rest.

The concept body MAY still inline the **markup fragment** in its `# Examples` section as a
` ```html ` fence: the minimal element an agent should reproduce, which reads correctly as
highlighted code on any renderer. When it does, it SHOULD link the full `*.example.html` beside the
fence for the rendered, tokenized version. Code-as-code teaches the shape to copy; the sidecar file
carries the render. The fence stays a fragment (the one element), not a whole document, so it does
not duplicate the asset's `<head>` and stylesheet links.

### Wireframes: structure without skin

Every CSS property falls into one of two families. **Structure** decides where boxes sit, how big
they are, in what order they read, and how they move as space changes: `display`, flex and grid
placement, `gap`, `padding`, `margin`, sizing and grow/shrink/wrap behavior, `order`, the type
*scale*, and media or container queries. **Skin** restyles pixels in place: color, the type
*family*, radius, shadow, imagery, motion. The test, when a property is on the line: change it and
watch the boxes. If boxes move, resize, reorder, or read in a different order, it is structure; if
the same boxes merely look different, it is skin. So `font-size` is structure, since it resizes
boxes and encodes hierarchy, while `font-family` is skin; a border is structure when it takes space
or separates regions, skin when it decorates.

The distinction matters to an agent because the two families fail differently. A skin error (a
wrong hue, an off radius) is visible at a glance and cheap to fix. A structure error (a wrong
reading order, an off-rhythm gap, a missing reflow, an inverted hierarchy) hides behind correct
skin, because a screen with the right colors and radii reads as on-system while being assembled
wrong. Tokens carry the skin faithfully, so the wireframe is the view that removes it and lets
structure be judged on its own.

A `<concept>.wireframe.html` **SHOULD** carry the same `<body>` markup as its
`<concept>.example.html` **verbatim**, differing only in the `<head>`, where it links one extra
stylesheet **last**: `styles/wireframe.css`. That sheet is a single bundle-wide override that
neutralizes skin (grayscale fills, one neutral type family at the scale's own sizes, zero radius,
no shadows, no motion, flat gray boxes for imagery) and reveals every box with `outline`, which
occupies no space where a `border` would shift the layout. Because the sheet overrides only skin
properties, every structural rule in `components.css`, including its media queries, still applies.

That is the design's point: the wireframe is not a second drawing that can drift, it is **computed
from the same markup and the same structural CSS the example uses**, so it cannot disagree with the
system's real structure. Resizing it demonstrates the component's actual reflow with nothing else
to look at. This is also the one place `!important` is correct in a bundle: a last-loaded diagnostic
sheet must win every specificity contest without editing the rules it inspects.

**What a wireframe is for.** With brand stripped, hierarchy has nowhere to hide: only scale,
spacing, grouping, and order carry it, so a wrong reading order, an off-scale gap, or an element
that is visually primary but semantically minor shows immediately. Hierarchy lives in two registers
that **MUST** agree, semantic (heading levels, landmarks, DOM order, which is also reading and tab
order) and visual (scale, proximity, position), and the wireframe is where a disagreement between
them becomes visible.

Ship a wireframe for every `Pattern` (a composition *is* structure) and for any `Component` whose
internal layout is non-trivial; a component whose example is a row of leaf variants with no internal
nesting has no structure to reveal and **SHOULD** be left without one. Declare the wireframe in
`examples` beside the example asset. A wireframe complements the skinned example and never replaces
it: the example is the copy source, the wireframe is the structural contract and the review lens. It
is a **derived view of real markup, not an ideation sketch**; ODSF documents a system that exists,
it does not prototype one.

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

The body is structural markdown (OKF §4). Beyond OKF's `# Examples`, ODSF defines **conventional
headings per type**, used when they apply. Note that sources now live in `sources` frontmatter
rather than a `# Citations` section (§3, §16).

**Foundation concepts** (`Color`, `Typography`, `Spacing`, …):
`# Tokens` (a table of name / value / usage), `# Roles` (semantic meaning of each token),
`# Usage` (when and how to apply), `# Do & Don't`.

**`Component`:**
`# Anatomy` (the parts), `# Structure` (the skeleton, below), `# Tokens` (the component's tokens and
what foundation tokens they resolve to), `# Variants & States` (the variant/state matrix),
`# Examples` (links to the example and wireframe assets), `# Behavior` (links to relevant `Behavior`
concepts), `# Accessibility`, `# Do & Don't`.

**`Pattern`:**
`# When to use`, `# Composition` (the components it assembles, linked), `# Structure`, `# Example`,
`# Do & Don't`.

**`Behavior`:**
`# Rule`, `# States`, `# Example`, `# Accessibility`.

**`Guideline`:**
`# Rule` (one sentence), `# Why`, `# Do`, `# Don't` (linking the do/don't assets).

### `# Structure`

`# Structure` is the agent-readable skeleton, the prose twin of the wireframe asset (§6): stacking
direction and wrap behavior, the order of parts (flagging anywhere visual order differs from DOM
order, since reading and tab order follow the DOM), the spacing step between parts named as tokens
(`{spacing.xs}` between a label and its field, `{spacing.lg}` between groups), what is fixed and
what grows, shrinks, or truncates, alignment, and the reflow story per breakpoint referencing
`{breakpoints.*}`. A table works well:

```markdown
| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Icon | 1 | fixed (1em square) | `{spacing.xs}` | hidden below `{breakpoints.sm}` |
| Label | 2 | grows, truncates | none | none |
```

Write it **before `# Tokens`**: structure decisions constrain the skin, not the reverse. It is also
the right place to record a rule that is load-bearing but easy to drop when copying, such as a
`min-width: 0` that keeps a long string from blowing out a grid track, or an offset that must change
whenever a sibling's size does.

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

ODSF versions independently of OKF, though in practice the two track each other: ODSF v0.2 profiles
OKF v0.2. The bundle-root `index.md` frontmatter declares **both**:

```yaml
---
odsf_version: "0.2"
okf_version: "0.2"
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
4. **Stand the skeleton up before the skin.** Lay out regions, order, spacing steps, and reflow from
   the `# Structure` sections and the `*.wireframe.html` assets first, and check the result at more
   than one width; only then let the tokens paint it. Correct skin masks structural error, so judge
   structure while it is still gray. The same move reviews finished work: link `styles/wireframe.css`
   last into what you built and compare it against the bundle's wireframes.
5. **Copy from the assets.** Reproduce structure, class names, and attributes from the relevant
   `*.example.html`. The example *uses* the classes; `styles/components.css` *defines* them (and
   `tokens.css` defines the values), so read `components.css` for the class contract and any
   layout primitives (`.stack`, `.row`) or state rules (`:focus-visible`) the example references
   but does not itself define.
6. **When a concept you need is absent, degrade — don't stall.** A partial bundle is the normal
   case. A missing `Pattern` → compose it from the `Component`s it would contain, stacked with the
   bundle's layout primitives. A missing `Component` → the nearest typed sibling (a password field
   is the text input with `type="password"`) or a primitive built from foundation tokens. A
   missing token → keep the literal `{ref}` or pick the closest defined value. Note what you
   improvised.
7. **Respect the rules.** Honor the `Guideline` and `Accessibility` concepts in scope, and the
   `*.dont.html` counter-examples, so the output avoids the system's known failure modes.
8. **Stay forgiving.** Tolerate everything optional (missing tokens, absent assets, unknown
   types, broken links). Never refuse a bundle over them.

**Emitting into a host app** is not the same as linking from a bundle example: link or `@import`
`tokens.css`, or inline only the `:root` subset you use, or translate to the app's own token
system. A bundle stylesheet may carry `@import`s and global rules (a `body {}`) you do not want
pasted verbatim into product code — take the custom properties, leave the page chrome.

An agent that also edits the bundle (adds a component, fixes a token) becomes a producer: a token
or variant change ripples to the foundation, `tokens.css`, the component's tokens,
`components.css`, the example asset **and its wireframe**, the `# Structure` section if the change
was structural, the `# Variants & States` table, every touched concept's `generated`, and `log.md`
(the indexes and links only if the set of concepts or relationships changed). A retuned token also
invalidates any `verified` event on the concepts it touched, so those are dropped rather than left
to vouch for a value nobody checked. It then re-validates.

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
- **Structure before skin.** How a thing is put together (layout, spacing, order, hierarchy,
  reflow) is documented and judged separately from how it is painted, because correct skin is
  exactly what hides structural error. The wireframe keeps that layer inspectable, and it is
  derived from the example's own markup and CSS so the two views can never drift apart.
- **Forgiving by default.** A consumer degrades gracefully through every missing optional part,
  down to "a pile of markdown with types," which is still useful. Adoption beats enforcement.
- **Format, not platform.** No cloud, model, framework, or account is ever required to read,
  write, or serve a bundle. ODSF's value is in being a shared format, not in owning it.

---

## 16. Changes from v0.1

**Two breaking changes, both inherited from OKF v0.2**, and both with a consumer fallback:

| v0.1 | v0.2 | Consumer fallback |
| --- | --- | --- |
| `timestamp: <ISO 8601>` | `generated: { by, at }` (§3) | Consumers **MAY** fall back to a legacy `timestamp` when `generated` is absent |
| `# Citations` body section | `sources` frontmatter (§3) | Consumers **SHOULD** read `sources` and **MAY** still parse a legacy `# Citations` list on v0.1 documents |

**Additive, all optional:** the `sources` credibility signals, `verified` and the trust tiers,
`stale_after`, and the actor convention, all from OKF v0.2; and ODSF's own **structure layer**, the
`# Structure` body section (§7) and the `*.wireframe.html` asset with `styles/wireframe.css` (§6).
`status` gains OKF's `draft` value and keeps ODSF's `experimental` as an extension (§3).

**A v0.1 bundle is consumable by a v0.2 consumer** under those fallbacks, so migration is not
urgent. It is still worth doing: the fields a v0.1 bundle lacks are exactly the ones that let a
consumer decide whether to believe it, and a bundle with no wireframes gives an agent no way to
check structure separately from skin.

### Migrating a v0.1 bundle

1. **Container (required).** Run OKF's own v0.1-to-v0.2 migration: `timestamp` becomes
   `generated: { by, at }`, `# Citations` becomes `sources`. Then bump both declarations in the
   root `index.md` to `"0.2"`. A format migration is not a meaningful content change, so
   `generated.at` **SHOULD** keep the concept's original authoring time rather than the migration
   date, and `generated.by` **SHOULD** name whoever actually wrote it.
2. **Structure layer (recommended).** Add `styles/wireframe.css`, derive a `*.wireframe.html` from
   each example that has internal structure worth revealing, write the matching `# Structure`
   sections, and declare the wireframes in `examples`. Concepts that gain a `# Structure` section
   **have** meaningfully changed, so their `generated` moves to the actor and time of that edit.
3. **Never backfill a `verified` event** that did not happen. A migration confirms nothing about
   the content it moves.

`node tools/odsf-validate.mjs <bundle> --strict` gates the result, and only applies the strict
producer findings once the root declares `okf_version: "0.2"`, so a bundle still on the v0.1
container validates clean.
