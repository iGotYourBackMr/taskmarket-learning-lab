# Test report

Test date: 2026-09-10. Simulated learner walkthrough only.

node tests.mjs returned: 9 seeded probability checks passed. The checks prove seeded reproducibility, exact p=0 and p=1 coins, count totals, permitted die ranges, two-dice theory for sums 2 and 7, and expected-advantage comparisons. node --check passed for app.js and model.js.

Manual acceptance checks:

- Coin tables and bars shared counts that summed to 10, 100 and 1,000; changing sample size generated actual trials rather than forced balance.
- Fair and custom-biased labels, prediction/skip, p=0 and p=1, unlimited rerun and streak explanation worked.
- One-die results stayed 1–6; two-dice sums stayed 2–12. Counts summed to the selected run and chart/table agreed.
- The fairness model published exact rules and arithmetic. Equal and unequal reward settings changed the explanation; the fresh challenge enabled finish only after the supported Side B conclusion.
- Reset, keyboard activation, focus visibility, reduced motion and 360/768/1280 target layouts were checked.

Actual captures are listed in screenshots/README.md.
