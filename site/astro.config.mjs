// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages project site: served under https://saschb2b.github.io/Open-Design-System-Format/
// The deploy workflow copies tools/ and examples/ from the repo root into dist/ so the live
// viewer and the example bundles are reachable beside the built landing page.
export default defineConfig({
  site: "https://saschb2b.github.io",
  base: "/Open-Design-System-Format",
  trailingSlash: "ignore",
});
