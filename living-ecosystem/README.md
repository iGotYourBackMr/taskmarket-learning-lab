# Meadow Systems Lab

A static age-nine ecosystem model lesson: assemble a food relationship, predict resource changes, inspect deterministic steps and restore a new struggling meadow.

## Run and test

No dependencies or build. Serve this folder with python -m http.server 8000 and open http://localhost:8000 in a current Chrome, Edge, Firefox or Safari. Run node tests.mjs with Node 20+.

model.js contains the bounded deterministic update rules. app.js contains authored scenarios, interaction state and inspectable explanations. index.html is the semantic lesson structure; styles.css supplies responsive layout, non-colour indicators, keyboard focus and reduced-motion support. State exists only in memory. No account, tracking, upload or network request is used.

Known limitation: model values are illustrative 0–10 indices, not population measurements. One step combines several relationships and omits migration, weather history, disease, competition and many other real processes.
