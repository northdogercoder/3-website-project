# websites

Three small websites, built in sequence as a sort of along the way skill check for myself.

## Structure

```
.
├── .gitignore
├── README.md
└── site-1-basics/
    ├── index.html
    ├── css/style.css
    └── js/main.js
```

Each site folder is self-contained and has its own CSS and JS. Nothing is shared
between sites on purpose — duplication is cheaper than coupling while learning.
Adding a site means adding a sibling folder; no root config to touch. Folders get
created when work on that site actually starts.

## Running it

Open `site-1-basics/index.html` in a browser, or serve it from the repo root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/site-1-basics/
```

In VSCodium, right-click `site-1-basics/index.html` and choose
**Open with Live Server** — it reloads on save.

## Todo

- [x] site 1: structure, styles, render loop
- [ ] site 2: pick an API, fetch data, handle loading and error states
- [ ] site 3: auth, a database table, real persistence
- [ ] publish site 1
