# Test report

Test date: 2026-09-10. Simulated learner/adult walkthrough only.

## Automated

node tests.mjs returned: 10 domain checks passed. Checks cover lower/upper quantity bounds, complements including 0+10 and 5+5, addition, subtraction, removal to zero and exact 7+3=10 equation output. node --check app.js and node --check model.js passed.

## Acceptance walkthrough

- Confirmed each rendered frame contains exactly ten distinct native-button slots and repeated retries rebuild state without duplicate counters.
- Built 0, 4 and 10; zero remained an intentional empty quantity with visible text.
- Completed all five bonds; starting at seven and adding three produced a full frame and 7 + 3 = 10.
- In the nine-bird story, Take one four times produced five without allowing a negative count.
- Completed all six tutorial stories and the fresh seventh challenge with both hint levels.
- Reached every action using Tab and activated controls using Enter/Space; visible focus remained present. Sound toggled off without blocking play. Reset returned to the welcome screen.
- Reduced-motion preference suppressed smooth movement. Responsive captures at 360, 768 and 1280 CSS-pixel target layouts showed no horizontal core-control overflow.

Numbered actual browser captures are listed in screenshots/README.md.
