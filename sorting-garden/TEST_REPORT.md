# Test report

Test date: 2026-09-10. Simulated adult walkthrough only; no children or personal data were involved.

## Automated checks

Command: `node tests.mjs`

The checks cover identical/different/unknown shapes, sorting the same object by shape and by colour, mismatched bins, all valid counts 1–3, a wrong count, and deliberate rejection of zero. Actual terminal result: `9 domain checks passed`.

## Acceptance walkthrough

1. Started from the adult-facing welcome screen; completed Match, Sort and Count using only buttons.
2. Chose a wrong shape; the activity stayed usable, announced an edge/corner cue and allowed retry.
3. Revealed a three-firefly round; exactly one additional object became highlighted on each press until three.
4. Ran the colour sort; each bin had a text/pattern cue as well as colour.
5. Toggled sound off, replayed prompts, reset from each activity, and used lesson navigation to leave an activity.
6. Opened the grown-up guide and confirmed the fewer-choice adaptation.

Keyboard: all controls reached in logical order with Tab; Enter and Space activated them; focus outline remained visible. Touch-equivalent controls are native buttons at least 64px in learner areas. Reduced motion: with the operating-system preference enabled, hover movement and smooth transitions were suppressed. Refresh: returned to the welcome screen without error and without retained child data.

Responsive checks and numbered screenshots are in `screenshots/README.md`; images are actual browser captures, not mockups.
