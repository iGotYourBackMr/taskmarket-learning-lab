# Ten Town Workshop

A static, object-first lesson for building quantities, making ten and solving addition/subtraction stories within ten.

## Run and test

No dependencies or build step. Serve the folder with python -m http.server 8000, then open http://localhost:8000. Current Chrome, Edge, Firefox and Safari are supported. Run node tests.mjs with Node 20+ for domain checks.

model.js owns bounded arithmetic and equations. app.js owns authored rounds and in-memory activity state. index.html provides semantic structure and styles.css supplies responsive ten-frames, visible focus, 48px controls and reduced-motion support. There are no accounts, network requests, analytics, uploads or saved child data.

Known limitation: optional speech uses the browser's installed voice and may differ or be unavailable. All prompts, pictures and feedback remain visible.
