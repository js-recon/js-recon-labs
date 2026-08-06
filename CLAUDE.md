# js-recon-labs

Vulnerable web application labs for [js-recon](https://github.com/js-recon/js-recon). Each app intentionally seeds specific client-side vulnerabilities to demonstrate or test js-recon-rules detections.

> [!CAUTION]
> All apps here are intentionally insecure. Never expose them to the internet.

## Repository layout

```
next_js/
  fetch_app/                 # Next.js Pages Router — fetch-based API lab
  axios_app/                 # Next.js Pages Router — axios-based API lab
  dom-xss-postMessage/       # Next.js App Router — postMessage → innerHTML XSS
  dom-xss-postMessage-jsUrl/ # Next.js App Router — postMessage → location.href
  vuln-all-rules/            # Next.js App Router — seeds ALL js-recon-rules (CI smoke-test target)
detection/
  next_js/                   # Next.js (own bundler), port 3010 — no seeded vulns
  vue/                       # Vue 3 + Vite, port 3011 — no seeded vulns
  nuxt/                      # Nuxt 3 + Nitro, port 3012 — no seeded vulns
  svelte/                    # SvelteKit + Vite (adapter-node), port 3013 — no seeded vulns
  angular/                   # Angular CLI/esbuild (static build + serve), port 3014 — no seeded vulns
  react_vite/                # React + Vite, port 3015 — no seeded vulns
  react_webpack/             # React + webpack, port 3016 — no seeded vulns
static/
  labs-banner.png
```

## detection/ (framework-detection smoke-test target)

`detection/` holds minimal, deliberately vulnerability-free fixtures — the opposite intent of `next_js/`. Each app exists only to be recognized by js-recon's `techDetect` logic (`src/lazyLoad/techDetect/` in the `js-recon` repo) so the sibling `framework-detection-smoke-test` GitHub Actions workflow (defined in `js-recon`, not here) can build and start all 7 on their fixed ports (3010–3016) and assert `fingerprint` reports the correct framework name for each. Do not add vulnerability-seeding code to anything under `detection/` — that would defeat its purpose and could cause false positives in the rules-based smoke test if it were ever pointed at this app by mistake.

Each app was built or adapted to preserve the specific HTML/JS marker its detector relies on (see `js-recon`'s `src/lazyLoad/techDetect/CLAUDE.md` for the exact logic):

- `next_js`: `__NEXT_DATA__` script tag + `/_next/static` paths.
- `vue`: `__vue` string in the built JS bundle (fallback path; `data-v-*` scoped-style attrs appear too, but only after Puppeteer renders the SPA).
- `nuxt`: `/_nuxt/` asset paths + `window.__NUXT__` inline script.
- `svelte`: `/_app/immutable/` path inside the adapter-node inline bootstrap `<script>` block (no `<link rel="modulepreload">` in this adapter mode).
- `angular`: `data-beasties-container` attribute on `<html>`, added automatically by Angular's Beasties critical-CSS inliner during a production build — the fastest detection path, no extra request needed. Zone.js patterns (`isAngularZone`, `this.ngZone`) in `main-*.js` are a secondary signal.
- `react_vite` / `react_webpack`: production React runtime strings (`__REACT_DEVTOOLS_GLOBAL_HOOK__`, `react-dom.production`, `react-jsx-runtime.production`) inside the bundled JS reachable from a `<script src>` tag — these apps ship a plain `useState` counter component, which is enough for React/React-DOM's own runtime code to end up in the production bundle.

## vuln-all-rules (CI smoke-test target)

`next_js/vuln-all-rules/` is the primary CI test app used by js-recon's `rules-smoke-test` GitHub Actions workflow. It seeds all 22 applicable rule detections across 6 vuln pages and 3 API routes.

### Running locally

```bash
cd next_js/vuln-all-rules
npm install
npm run build
npm start     # serves on http://localhost:3001
```

### Running js-recon against it

From the js-recon directory:

```bash
node build/index.js run -u http://localhost:3001 -r ../js-recon-rules -y -k
node scripts/smoke-test.js
```

### Adding a new rule

When a new rule is added to js-recon-rules:

1. Identify which page in `vuln-all-rules` best fits the new rule's category.
2. Add the required vulnerability pattern (source + sink) to that page's `useEffect` or component body.
3. Confirm the new rule ID fires: run js-recon run against the app locally and check `analyze.json`.
4. Add the rule ID to `EXPECTED_RULES` in `js-recon/scripts/smoke-test.js`.
5. Update the README table in `next_js/vuln-all-rules/README.md`.

## Other labs

The remaining apps are standalone vulnerability demos used for walkthroughs and manual testing. They are not part of the CI smoke test.
