# Test report

Test date: 2026-09-10. Simulated learner walkthrough only.

`node tests.mjs` returned `10 deterministic evidence-model checks passed`. Checks cover the 200-card population, fixed graph mean, seeded reproducibility, no duplicate simple-random cards, exact 80/20 biased composition at two sizes, population support rate and the constructed combined/group correlation directions. `node --check app.js` and `node --check model.js` passed.

Manual acceptance mapping:

- Axis controls changed bar rendering while the six values and 65.0% mean stayed fixed; reset restored 0–100.
- Every visual had axis labels/units plus an accessible table generated from the same data.
- Simple random and 80/20 lobby-biased procedures matched their documented definitions. Repeated draws, 20/100 sizes and the larger-biased-sample explanation worked.
- Combined and stratified views changed the displayed records and coefficient; the lesson explicitly stated that association alone does not establish causation.
- The final fictional headline required a descriptive claim, supporting observation and limitation, and gave useful corrective feedback.
- Reset/replay, keyboard activation, focus visibility, reduced motion and 360/768/1280 target layouts were checked.

Actual numbered captures are listed in `screenshots/README.md`.
