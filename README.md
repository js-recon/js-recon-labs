# JS Recon Labs

[![Plumber Score](https://score.getplumber.io/github.com/js-recon/js-recon-labs.svg)](https://score.getplumber.io/github.com/js-recon/js-recon-labs)

![JS Recon labs banner](./static/labs-banner.png)

This repository contains labs for [JS Recon](https://github.com/js-recon/js-recon). The apps in this repository have vulnerabilities to demonstrate the tool's capabilities.

> [!CAUTION]
> Do NOT expose these apps to the internet. These are intended to run locally, not in a production environment.
> If you like to live dangerously, go ahead!

## Labs

This repository contains multiple labs with multiple vulnerabilities. All the labs are available as Docker containers, and can be run directly by running the provided commands. Docker will pull the images from [GitHub Container Registry](https://github.com/js-recon/js-recon-labs/pkgs/container/js-recon-labs) and run the containers.

### Next.js

- [Next.js Fetch App](./next_js/fetch_app)

```
docker run --rm -p 3000:3000 ghcr.io/js-recon/js-recon-labs:fetch_app
```

- [Next.js Axios App](./next_js/axios_app)

```
docker run --rm -p 3000:3000 ghcr.io/js-recon/js-recon-labs:axios_app
```

- [Next.js DOM XSS PostMessage App](./next_js/dom-xss-postMessage)

```
docker run --rm -p 3000:3000 ghcr.io/js-recon/js-recon-labs:dom-xss-postmessage
```

- [Next.js DOM XSS PostMessage JS URL App](./next_js/dom-xss-postMessage-jsUrl)

```
docker run --rm -p 3000:3000 ghcr.io/js-recon/js-recon-labs:dom-xss-postmessage-jsurl
```

- [Next.js Vuln All Rules App](./next_js/vuln-all-rules) _(CI smoke-test target)_

    A comprehensive app that seeds all 22 applicable js-recon-rules detections (19 AST + 3 request rules).
    Used by js-recon's CI pipeline to verify that every rule fires correctly after each push.

```
docker run --rm -p 3001:3001 ghcr.io/js-recon/js-recon-labs:vuln-all-rules
```

## CVE exploitation labs

Apps seeding specific framework CVEs, used to test `js-recon`'s `exploit` module. _(CI smoke-test targets)_

- [CVE-2025-29927 — Next.js middleware bypass](./next_js/cve-2025-29927)

```
docker run --rm -p 3020:3020 ghcr.io/js-recon/js-recon-labs:cve-2025-29927
```

- [CVE-2026-64645 — Next.js rewrites() SSRF](./next_js/cve-2026-64645)

```
docker run --rm -p 3021:3021 -p 5999:5999 ghcr.io/js-recon/js-recon-labs:cve-2026-64645
```

- [CVE-2025-55182 — React Flight deserializer RCE ("React2Shell")](./next_js/cve-2025-55182)

```
docker run --rm -p 3027:3027 ghcr.io/js-recon/js-recon-labs:cve-2025-55182
```

- [CVE-2025-30208 — Vite server.fs.deny bypass](./vite/cve-2025-30208)

```
docker run --rm -p 3022:3022 ghcr.io/js-recon/js-recon-labs:cve-2025-30208
```

- [CVE-2026-39363 — Vite WebSocket fetchModule bypass](./vite/cve-2026-39363)

```
docker run --rm -p 3023:3023 ghcr.io/js-recon/js-recon-labs:cve-2026-39363
```

- [CVE-2026-71320 — Nuxt Server Island RCE](./nuxt/cve-2026-71320)

```
docker run --rm -p 3024:3024 ghcr.io/js-recon/js-recon-labs:cve-2026-71320
```

- [CVE-2026-71315 / CVE-2026-53721 — Nuxt route-rule casing bypass](./nuxt/cve-2026-71315)

```
docker run --rm -p 3025:3025 ghcr.io/js-recon/js-recon-labs:cve-2026-71315
```

- [CVE-2026-68945 — Angular HttpTransferCache key collision](./angular/cve-2026-68945)

```
docker run --rm -p 3026:3026 ghcr.io/js-recon/js-recon-labs:cve-2026-68945
```

## Framework detection labs

The apps under [`detection/`](./detection) are **minimal fixtures WITHOUT seeded vulnerabilities**, unlike the `next_js/` labs above. Each one exists purely to be recognized by name by js-recon's framework/bundler tech-detection logic. They are the CI fixtures for js-recon's `framework-detection-smoke-test` GitHub Actions workflow (defined in the [js-recon](https://github.com/js-recon/js-recon) repo), which builds and starts all of them on fixed ports and asserts that js-recon's `fingerprint` command reports the correct framework for each.

- [Next.js](./detection/next_js) — Next.js (own bundler), port 3010

```
docker run --rm -p 3010:3010 ghcr.io/js-recon/js-recon-labs:next_js
```

- [Vue 3](./detection/vue) — Vue 3 + Vite, port 3011

```
docker run --rm -p 3011:3011 ghcr.io/js-recon/js-recon-labs:vue
```

- [Nuxt 3](./detection/nuxt) — Nuxt 3 + Nitro, port 3012

```
docker run --rm -p 3012:3012 ghcr.io/js-recon/js-recon-labs:nuxt
```

- [SvelteKit](./detection/svelte) — SvelteKit + Vite (adapter-node), port 3013

```
docker run --rm -p 3013:3013 ghcr.io/js-recon/js-recon-labs:svelte
```

- [Angular](./detection/angular) — Angular CLI/esbuild, port 3014

```
docker run --rm -p 3014:3014 ghcr.io/js-recon/js-recon-labs:angular
```

- [React (Vite)](./detection/react_vite) — React + Vite, port 3015

```
docker run --rm -p 3015:3015 ghcr.io/js-recon/js-recon-labs:react_vite
```

- [React (webpack)](./detection/react_webpack) — React + webpack, port 3016

```
docker run --rm -p 3016:3016 ghcr.io/js-recon/js-recon-labs:react_webpack
```

## Walkthroughs

Video guides on setting up and solving these labs can be found on [JS Recon Site](https://js-recon.io/labs).
