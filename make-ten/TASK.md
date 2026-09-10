# Number Adventure: Make Ten — interactive education website for age 6

## Bounty and visibility
Reward: 4 USDC gross escrow, subject to Taskmarket's platform payout fees. One winner is intended for this task; entering is a competition, not a guaranteed payment. Submission window: 168 hours from publication; the marketplace deadline is authoritative. The task and all submitted artifacts must be public from submission onward. Do not submit secrets or private information.

Build a working educational website, not an idea list, mockup, slide deck or requirements-only response. Target approximately age 6, allowing individual differences in experience and ability. Session target: A focused 8–12 minute lesson, divided into short replayable activities.

## Learning outcomes
Connect numerals to quantities from zero to ten; compose ten in multiple ways; and represent simple addition and subtraction within ten using visible objects. Explain with objects before introducing abstract equations.

## Required activities
1. Build a quantity: select or place counters on a ten-frame to match a target, including zero and ten. Display the numeral and quantity together.
2. Make ten: supply a starting collection and ask the learner to complete it. Cover at least five different number bonds, including 0+10 and 5+5. Let the learner move counters and see how the two parts form the whole.
3. Story problems: at least six short, original addition/subtraction situations within ten, with manipulable counters, a picture model and a matching equation. Finish with a new problem that combines skills without copying the tutorial.

## Age-specific experience
Use short sentences, optional read-aloud, generous controls of at least 48 CSS pixels, and pictures that clarify quantities. Dragging must have a tap or keyboard alternative. Correctness must depend on the mathematical result, not on arbitrary counter placement. An incorrect answer should show a relevant strategy such as counting the empty spaces, not immediately reveal every answer. Include two levels of scaffold, freely selectable without labelling children as weak or advanced. Avoid speed contests and lives.

## Concrete acceptance examples
- Every displayed ten-frame has ten distinct slots; counters cannot duplicate in one slot.
- Starting from seven, adding three visibly completes ten and produces 7+3=10.
- Removing four from nine produces five, with no negative quantities.
- Zero is represented deliberately rather than treated as missing input.
- Repeated retries do not corrupt the counter state or progress.
- A learner can complete a fresh final problem with optional hints and see an explanation.

## Creative freedom
The title is a working concept, not a required brand. Invent the setting, characters, art direction, narrative, sound palette and interaction treatment. The named learning outcomes and three activity functions are mandatory; their visual form and sequence may change if the guide explains how they are covered. A garden, expedition, workshop, mystery or an original alternative is welcome. Originality should improve understanding, not add distracting complexity. A polished small lesson is preferable to a large unfinished curriculum. No particular framework, AI service, Lucid SDK or paid endpoint is required.

## Shared learning and interaction requirements
- Offer an obvious start, concise onboarding, activity navigation, progress through the lesson and a useful completion summary with a next practice suggestion.
- Include demonstration, guided practice and a fresh application opportunity. Each required activity needs meaningful learner input that changes an educational state or outcome, not just next-page clicking.
- Provide immediate, specific feedback, at least one hint or scaffold, and unlimited retry. Never shame, punish, pressure or rank a child.
- Support reset/replay without reload. Keep any progress in memory or local browser storage only; explain persistence and provide a clear reset if stored.
- State prerequisites, learning objectives and adaptations in the guide. Cite at least two reputable educational/scientific references with page titles and URLs, explaining what content they support. Do not claim validated learning gains, diagnostic value or universal age suitability without evidence.
- All required content is included; no empty screens, placeholder text, dead buttons or invented functionality.

## Accessibility, safety and privacy
- Work on mobile, tablet and desktop; test at 360px, 768px and 1280px widths. No clipped core controls or horizontal scrolling except a deliberately accessible data region.
- Use semantic controls, visible keyboard focus, useful accessible names and keyboard access to every core action. Supply non-drag alternatives and a text/table alternative to essential canvas or charts.
- Target WCAG 2.2 AA contrast, generous touch targets, non-colour-only feedback, readable type and reduced-motion support. No flashing, forced animation, autoplay audio or dependence on audio alone.
- The learner experience is free and usable without login, wallet, payment, email, child name or personal information. No advertisements, purchases, analytics/tracking, open chat, social feeds or uploaded photos/voice.
- No runtime generative-AI chat, remote grading or external paid API dependency. Bundle core content/assets; browser-native optional audio is acceptable with a visual fallback.
- Keep reference links in an adult-facing guide, not a child-directed outbound-link maze. Do not conduct testing with children or collect their information for this bounty; adult walkthroughs and simulated learner journeys are sufficient.
- Use original or appropriately licensed code/media/fonts; include attribution and licences. Never ship secrets, environment files, malicious scripts or unlicensed copied assets.

## Technical scope and deployment
A static/client-side app is preferred; any chosen stack is acceptable if deployment stays simple and the core lesson works without a server or secret. Supply complete editable source, dependency lockfile where relevant, pinned runtime expectations, and exact install, development, build and production-preview commands. Plain HTML/CSS/JS is acceptable and should document how to serve it. No paid hosting subscription may be necessary to reproduce the deliverable. Do not require deployment into the requester's accounts.

Handle refresh, repeated inputs, invalid state and an unavailable optional audio feature gracefully. Avoid unnecessary dependencies and unnecessary network requests. Include a short architecture note explaining activity state, content/data and scoring/model logic. Separate learning content from UI code where practical.

## Required submission package
1. Public working HTTPS preview URL, requiring no login; keep it available through review. Source must remain independently runnable if hosting disappears.
2. Complete source archive attached to Taskmarket (not just a mutable repository link). A public repository and commit hash are welcome additions.
3. README.md with setup/build/deployment commands, supported browser/runtime versions and known limitations.
4. EDUCATOR_GUIDE.md with objectives, prerequisites, activity walkthrough, suggested session length, differentiation/co-play guidance where relevant, content sources, model limitations and an offline follow-up idea.
5. TEST_REPORT.md mapping every acceptance example above to evidence; record browser/viewport, steps and observed outcome. Include screenshots of the three activities, at least one mobile view and a short walkthrough video or a numbered screenshot walkthrough.
6. Automated tests for domain calculations/state where applicable, plus manual keyboard, touch, reset, feedback and reduced-motion checks. Report actual tests run; never invent results.
7. LICENSE and third-party attribution notes; provide original code under MIT or another permissive licence that allows modification and deployment.

## Evaluation rubric — 100 points
- Educational correctness and clarity: 25. Accurate content, coherent objectives, useful explanations and defensible model simplifications.
- Age suitability: 25. Reading burden, pacing, scaffolding, controls and presentation fit the intended learner without rigid claims about all children.
- Interactive learning and feedback: 25. Meaningful experimentation/practice, helpful responses, retry and transfer beyond rote clicking.
- Usability and accessibility: 15. Clear navigation, responsive layout, keyboard/non-drag use, readable and inclusive presentation.
- Technical quality and reproducibility: 10. Complete source, reliable state, working build, tests and clear deployment instructions.

Creative expression contributes within age suitability, interaction and usability; visual spectacle does not substitute for learning. Ties favour educational correctness, then age suitability, then interaction quality. Essential eligibility gates are a runnable complete website with all three activities, public source and preview, required child-safety protections, and no serious educational errors. Minor documented limitations may reduce scores; missing core functionality or unsafe content may make an entry ineligible. Awards follow review; no automated grade or guaranteed winner payment is implied.

## Not required
A full curriculum, teacher dashboard, accounts, multiplayer, a native mobile app, monetisation, x402 endpoints, backend infrastructure or proof of measured learning improvement. Concentrate effort on one excellent, safe, complete lesson.


