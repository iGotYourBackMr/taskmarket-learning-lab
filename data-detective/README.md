# Evidence Desk

Evidence Desk is a static 10–15 minute data-literacy investigation for roughly age 15. It covers graph framing, biased and less-biased sampling, correlation, third variables and cautious conclusions using original synthetic data.

## Run

No build or dependencies are required. From this directory, run `python -m http.server 8000` and open `http://localhost:8000`. Run model checks with Node 20 or newer: `node tests.mjs`. Production deployment is a direct copy of this directory to any static HTTPS host.

`model.js` contains the datasets, seeded random sampling and calculations. `app.js` owns the learner state and renders charts and tables from the same model. `DATA_DICTIONARY.md` documents provenance and fields.

Current Chrome, Edge, Firefox and Safari are supported. Open-ended verdict building uses bounded choices because the site does not pretend to understand arbitrary prose. The model demonstrates reasoning patterns; it does not represent a real school, study or scientific finding.
