# Crisis Comms War Room

> A free crisis communications tool for comms pros. Enter your incident, get an executive-ready advisory.

**[Use the live tool →](https://austley.github.io/crisis-comms-war-room/)**

Built by [Austley](https://austley.com). Free to use, copy, and adapt.

## What it does

You describe the incident. Crisis type, severity, regulator posture, confirmed facts, known unknowns, and who's affected. The war room turns that into a working advisory, including first moves ordered by urgency, red-flag language to avoid, a care/facts/action message map, stakeholder-by-stakeholder guidance, a draft holding statement, employee note, and media Q&A, plus a trust rebuild timeline from hour zero to month twelve.

The advisory adapts to your inputs. A cybersecurity incident gets forensics-aware guidance. An executive conduct crisis gets governance guidance. A "watch" severity gets preparation moves instead of publication moves. The three posture scores (facts, empathy, trust) are transparent. Every score shows the named checks behind it, so you can see exactly what to fix.

## The case behind it

The first scenario preset encodes the July 2026 Taylor Farms cyclospora recall and the crisis response recommendations gathered by PR Daily from over 100 communicators. The point is not to recreate the crisis. The point is to encode the judgment a seasoned comms leader would bring into a tool anyone can use at 2am.

See [docs/taylor-farms-case-notes.md](docs/taylor-farms-case-notes.md) for the public facts and advisory principles. All sources are linked in the tool and were verified July 30, 2026.

## Use it your way

**As a tool.** Open the live link above, or open `index.html` in any browser. No build step, no install, no account, and nothing you type leaves your browser.

**As a template.** Fork or copy this repo and make it yours. The advisory logic lives in `app.js` in plain JavaScript objects. Add a crisis type by adding a profile to `crisisProfiles`. Add a scenario preset by adding an entry to `scenarioLibrary`. Change the checks behind the scores in `runChecks`. No framework knowledge needed.

## Publish your own copy with GitHub Pages

1. Fork this repo (or push your copy to a new repo).
2. In the repo, go to Settings, then Pages.
3. Under Source, choose "Deploy from a branch", pick `main` and the root folder, and save.
4. Your copy is live at `https://YOUR-USERNAME.github.io/REPO-NAME/` within a minute or two.

## A note on judgment

This tool encodes general crisis communication principles. It is a starting point for thinking, not a substitute for counsel. In a live crisis involving legal exposure, regulatory process, or harm to people, loop in your legal and leadership team before publishing anything.

## Roadmap

- LLM-assisted review of your actual draft statements against the advisory rules.
- More scenario presets from real, sourced cases.
- Exportable board update and decision log.
