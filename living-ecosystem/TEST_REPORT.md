# Test report

Test date: 2026-09-10. Adult walkthrough and deterministic simulated states only.

## Automated

node tests.mjs returned: 6 deterministic model checks passed. It verified repeatability, a complete/incomplete food team, plant decline under the supplied dry/high-herbivore state, consumer decline with no food, and finite 0–10 bounds for extreme inputs. node --check passed for app.js and model.js.

## Acceptance walkthrough

- Built the coherent meadow from two producers, two herbivores and one predator; distractors failed with a useful cue.
- Ran healthy, dry and shady starts. Prediction was required before stepping. Changing water changed the next plant values and the explanation named resource growth versus eating.
- Confirmed identical reset, controls and prediction reproduced identical first-step values.
- Table, bars and text displayed the same numbers; bars included numeric accessible labels.
- Reset restored scenario values, history and prediction. Values stayed finite and non-negative through repeated steps.
- In Restore, increasing water and including a fox produced step-by-step, model-explained changes before completion; no unexplained win animation was used.
- Keyboard focus, native controls, mobile layout, reduced motion and reset were manually checked.

Actual browser captures are listed in screenshots/README.md.
