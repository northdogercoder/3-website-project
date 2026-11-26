# 3-website-project

Three small websites, built in sequence as an along-the-way skill check for
myself. Each site is a sibling folder with its own tooling; nothing is shared
between sites on purpose — duplication is cheaper than coupling while learning.

## Structure

```
.
├── .gitignore
├── README.md
├── site-1-basics/        # vanilla HTML, CSS, JS
└── site-3-northdoge/     # Astro landing page for northdoge.com
```

Adding a site means adding a sibling folder; there is no root config to touch.
Folders get created when work on that site actually starts.

## Running it

Site 1 — open `site-1-basics/index.html` in a browser, or serve the repo root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/site-1-basics/
```

In VSCodium, right-click `site-1-basics/index.html` and choose
**Open with Live Server** — it reloads on save.

Site 3 — Astro, managed with Bun:

```bash
cd site-3-northdoge
bun install
bun run dev
```

`bun run build` writes `site-3-northdoge/dist/`.

## Deployment

Cloudflare Pages builds `site-3-northdoge` on every push to `main` and serves it
at <https://northdoge.com>.

## Todo

- [x] site 1: structure, styles, render loop
- [ ] site 2: pick an API, fetch data, handle loading and error states
- [x] site 3: Astro landing page for northdoge.com
- [ ] publish site 1
