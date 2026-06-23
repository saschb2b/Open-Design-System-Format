# Open Design System Format (ODSF)

**A bundle format for handing a design system to an AI agent.**

ODSF packages a design system as a small directory of markdown, HTML, and CSS that an agent can
read, navigate, and *apply*, so "build this screen, and make it look and behave like our design
system" produces work that actually does. No SDK, no platform, no lock-in. Just files.

> Status: **v0.1**, early and intentionally minimal, designed to grow backward-compatibly.
> Read the spec: **[SPEC.md](./SPEC.md)**.

---

## Why

Coding agents are good at writing UI and bad at writing *your* UI. They don't know your color
roles, your spacing scale, your button states, your "never convey meaning with color alone"
rule, so they invent plausible-but-wrong defaults. The fix is to give the agent the design
system as **context it can load** on the spot, rather than a component library to reverse-engineer
or a docs site built for human eyes.

A design system is more than tokens, and that is where the two efforts ODSF builds on each stop
short. **[OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)**
(Google's Open Knowledge Format) nailed *how to bundle knowledge for an agent* but is
domain-agnostic. **[design.md](https://github.com/google-labs-code/design.md)** nailed *how to
write down a design token* but stops at a single file of tokens, with nowhere for components,
behaviors, and rules to live and no structure for an agent to navigate. ODSF is the merger. OKF's
bundle is the container and design.md's token model is the content seed, and ODSF makes the whole
system first-class: components, patterns, behaviors, and guidelines become typed concepts, linked
into a graph an agent walks from a task to the exact rule that task needs. Companion HTML/CSS
assets ship beside the concepts, so the example an agent reproduces is concrete rather than
paraphrased.

```
OKF       →  how to bundle knowledge for an agent
design.md →  how to write down a design token
ODSF      →  the whole design system as one bundle an agent navigates
```

The full reasoning (why a design system is context, why description and implementation must stay
one source, why the system is a graph, why the example is the contract) is in
**[PHILOSOPHY.md](./PHILOSOPHY.md)**.

---

## What's in a bundle

```
claude/
  index.md                      declares odsf_version; lists everything
  overview.md                   the Design System concept
  foundations/                  the design language as tokens + meaning
    color.md  typography.md  spacing.md  elevation.md  shape.md  motion.md  layout.md
  components/                   reusable UI elements, each with a runnable example
    button.md             button.example.html
    code-window-card.md   code-window-card.example.html
    pricing-tier-card.md  pricing-tier-card.example.html
    …                     (top-nav, feature-card, callout-card-coral, badge, text-input, footer)
  patterns/                     compositions that solve a recurring need
    landing-page.md       landing-page.example.html
  behaviors/                    interaction & state rules
    surface-rhythm.md   press-states-only.md
  guidelines/                   do/don't principles, with counter-examples
    cream-not-white.md   cream-not-white.dont.html
  styles/                       the tokens as runnable CSS
    tokens.css   components.css
  references/                   external sources mirrored in (design.md, claude.com)
```

Three file kinds, nothing else:

- **`.md` concepts** carry the knowledge and a required `type`. That is what makes the bundle a
  conformant OKF bundle.
- **`.html` / `.css` assets** are the concrete, self-rendering examples a concept points at. A
  `*.example.html` opens in a browser and renders with the real tokens, because it links
  `styles/tokens.css`. Change a token, every example re-renders.

Three live, browsable example bundles ship in [`examples/`](./examples/), each a faithful clone of a
real, recognizable design system, with tokens cross-checked against the live site in both themes:

- **[`examples/claude/`](./examples/claude/)** is Anthropic's **Claude** marketing language: a warm,
  fixed editorial palette (cream canvas, coral accent, dark navy product surfaces, serif display).
  Open [its landing page](./examples/claude/patterns/landing-page.example.html).
- **[`examples/primer/`](./examples/primer/)** is GitHub's **Primer**: a neutral, **theme-able**
  system built on functional color roles (`fgColor-*`/`bgColor-*`), with full light/dark modes, the
  signature green primary button, and 45 components. Open
  [its repository page](./examples/primer/patterns/repo-page.example.html).
- **[`examples/geist/`](./examples/geist/)** is Vercel's **Geist**: a high-contrast, monochrome-first,
  fully theme-able system built on numbered `--ds-*` color scales, with the inverted primary action,
  Geist Sans/Mono, and the **complete 70-component** library. Open
  [its dashboard](./examples/geist/patterns/dashboard.example.html).

Together they show the format spans the spectrum: a fixed brand voice, a systematic multi-mode
component library, and a comprehensive monochrome design system all fit the same bundle shape.

---

## The token model in one look

Tokens live once and appear twice: as agent-readable frontmatter, and as runnable CSS:

```yaml
# foundations/color.md
tokens:
  colors:
    primary: "#3b5bdb"
    on-primary: "#ffffff"
```

```css
/* styles/tokens.css, the mechanical projection: colors.primary → --colors-primary */
:root {
  --colors-primary: #3b5bdb;
  --colors-on-primary: #ffffff;
}
```

Components reference foundation tokens instead of restating values, with design.md's
`{group.name}` syntax:

```yaml
# components/button.md
tokens:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
```

Describing the system and using it never diverge.

---

## Quickstart

**Author a bundle.** ODSF is a profile of OKF, so the [`/okf` skill](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf) and its `init` / `add` /
`index` / `log` / `validate` workflow apply directly. Start from the shells in
**[TEMPLATES.md](./TEMPLATES.md)**, organize by design domain (`foundations/`, `components/`, …),
and for each component ship a `*.example.html` beside its `.md`.

**Validate it.** The checker confirms OKF conformance *and* the ODSF additions (the
`odsf_version` declaration, that referenced assets exist, that token references resolve):

```sh
node tools/odsf-validate.mjs examples/claude
```

It errors only on the hard requirements and warns (never fails) on the soft guidance, mirroring
the permissive consumer contract.

**Browse it.** Open [`tools/viewer.html`](./tools/viewer.html), a single-file, zero-dependency
viewer (light/dark, calm, Primer-inspired). It opens on an **Explore** landing (the system's
identity, a click-to-copy swatch teaser, and a card per domain), then renders each concept by type:
color swatches, type specimens, spacing / shape / elevation / motion scales, and the live
`*.example.html` in a **Preview / Code** frame, with an **On this page** table of contents. Either
serve the repo and open `tools/viewer.html?bundle=../examples/claude`, or just open the file and
click **Open folder…** to pick a bundle from disk (works over `file://`).

```sh
npx serve         # or: python -m http.server
# then open http://localhost:3000/tools/viewer.html?bundle=../examples/claude
```

**Hand it to an agent.** Point the agent at the bundle and the task. It orients from `index.md`,
pulls the foundation tokens, descends to the components, patterns, and behaviors it needs, copies
structure from the `*.example.html` files, and honors the guidelines. See
[SPEC.md §11](./SPEC.md#11-consuming-an-odsf-bundle).

---

## Conformance, in one breath

A bundle is a **conformant ODSF bundle** when it is a **conformant OKF bundle** (every `.md`
concept has a non-empty `type`) **and** its root `index.md` declares `odsf_version`. Everything
else (the token model, the asset conventions, the type vocabulary, the body sections) is
recommended structure a consumer exploits but tolerates the absence of. The full contract is
[SPEC.md §1](./SPEC.md#1-conformance).

---

## Repository layout

| Path | What |
| --- | --- |
| [`SPEC.md`](./SPEC.md) | The ODSF v0.1 normative specification. |
| [`PHILOSOPHY.md`](./PHILOSOPHY.md) | The convictions behind the format: the "why". |
| [`TEMPLATES.md`](./TEMPLATES.md) | Copy-paste shells for every concept type and asset. |
| [`examples/claude/`](./examples/claude/) | A faithful clone of Anthropic's Claude design system (fixed warm brand). |
| [`examples/primer/`](./examples/primer/) | A faithful clone of GitHub's Primer (functional, theme-able, light/dark). |
| [`examples/geist/`](./examples/geist/) | A faithful clone of Vercel's Geist (monochrome, theme-able, all 70 components). |
| [`tools/odsf-validate.mjs`](./tools/odsf-validate.mjs) | Zero-dependency conformance checker. |
| [`tools/viewer.html`](./tools/viewer.html) | Single-file reference viewer; renders any ODSF bundle in the browser. |

---

## Relationship to the work it builds on

ODSF is an independent format that stays deliberately compatible with both of its parents: an
ODSF bundle is a valid OKF bundle (so OKF's graph viewer and validators read it unchanged), and
its tokens stay design.md-shaped (so they round-trip). Credit to Google Cloud's
[Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog) and Google
Labs' [design.md](https://github.com/google-labs-code/design.md) for the foundations this
combines.

## License

[MIT](./LICENSE) © 2026 Sascha Becker.
