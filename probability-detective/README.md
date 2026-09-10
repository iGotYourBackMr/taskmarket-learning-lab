# Chance Lab

A static probability lesson for roughly age 12 covering theoretical probability, observed frequency, sample size, fair/biased coins, one/two dice and expected-value fairness.

Serve with python -m http.server 8000 and open http://localhost:8000. No build or dependencies. Run node tests.mjs with Node 20+. model.js contains injectable random sampling and exact theory; app.js owns learner state and renders charts/tables from the same results. No accounts, money, gambling, tracking, uploads or saved personal data.

Current Chrome, Edge, Firefox and Safari are supported. Learner trials use browser randomness; tests use a documented seeded generator. Known limitation: simulations illustrate variation but do not prove convergence from a single run.
