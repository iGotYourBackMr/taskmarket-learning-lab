# Little Lantern Garden

A private, static, tap-first early-maths lesson for a child around age three with an adult nearby. It covers shape identity, sorting by one property, and counting collections of one to three.

## Run

Requires a current Chrome, Edge, Firefox or Safari. No build or install is needed.

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. The published version is the same source on GitHub Pages. `node tests.mjs` runs the domain checks with Node 20 or newer.

## Architecture

- `index.html` contains semantic lesson structure.
- `styles.css` provides responsive, high-contrast layouts and 64px learner controls.
- `model.js` contains the three small, deterministic answer models and exports them for browser and Node tests.
- `app.js` holds in-memory activity state, rendering, optional speech synthesis and feedback.

No network request, account, tracking, upload or persistent child data is used. Speech starts only after Start or another deliberate action. If speech synthesis is unavailable, every prompt and cue remains visible.

## Known limitations

Browser voices differ by operating system. This is short co-play practice, not a developmental assessment. Progress is deliberately not saved after refresh.
