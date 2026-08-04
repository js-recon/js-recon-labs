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

## Walkthroughs

Video guides on setting up and solving these labs can be found on [JS Recon Site](https://js-recon.io/labs).
