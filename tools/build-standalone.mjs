#!/usr/bin/env node
// Pack an ODSF bundle into the viewer so one self-contained HTML file opens it
// anywhere — a double-click, a network share, an email attachment — with no
// server and no network. The viewer reads window.__ODSF_BUNDLE__ when present.
//
// Usage: node tools/build-standalone.mjs <bundle-dir> [output.html]
//   node tools/build-standalone.mjs examples/claude
//   node tools/build-standalone.mjs examples/geist geist-viewer.html
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const bundleDir = resolve(process.argv[2] || "");
const out = resolve(process.argv[3] || `${basename(bundleDir)}-viewer.html`);

if (!process.argv[2]) {
  console.error("usage: node tools/build-standalone.mjs <bundle-dir> [output.html]");
  process.exit(1);
}

const files = {};
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    // a conformant bundle holds only these three kinds
    else if (/\.(md|html|css)$/.test(name)) files[relative(bundleDir, p).replaceAll("\\", "/")] = readFileSync(p, "utf8");
  }
})(bundleDir);

if (!files["index.md"]) {
  console.error(`no index.md in ${bundleDir} — is that a bundle root?`);
  process.exit(1);
}

const viewer = readFileSync(join(here, "viewer.html"), "utf8");
// "<" is escaped so an embedded </script> in an example asset cannot close the data block
const payload = JSON.stringify({ label: basename(bundleDir), files }).replaceAll("<", "\\u003c");
const inject = `<script>window.__ODSF_BUNDLE__=${payload};</script>\n<script>`;
const html = viewer.replace("<script>", inject);
if (html === viewer) throw new Error("no <script> tag found in tools/viewer.html");

writeFileSync(out, html);
console.log(`wrote ${relative(process.cwd(), out)} (${Object.keys(files).length} bundle files, ${Math.round(html.length / 1024)} KB)`);
