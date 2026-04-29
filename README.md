# Jekyll for Senate — Creative Project
**Student:** 732198
**Course:** Urban Spaces & Cultural Texts
**Assignment:** Creative Project
**Theme:** Uncivil Disagreement
**Primary Texts:** Stevenson, *The Strange Case of Dr. Jekyll and Mr. Hyde* (1886) & Foucault, "Panopticism" (1975)

---

## Project Overview

This project is a satirical fake political campaign website for Dr. Henry Jekyll, the protagonist of Robert Louis Stevenson's novella, reimagined as a Senate candidate in a Victorian-era city. The site is built in vanilla HTML, CSS, and JavaScript across three files.

The central satirical conceit is that Jekyll's campaign website has been compromised — by Hyde. The site has two modes, toggled by a button in the navbar:

- **Jekyll Mode (light)** — the public-facing campaign site. Clean, professional, and carefully managed. This is what Jekyll wants voters to see.
- **Hyde Mode (dark)** — the version Hyde has taken over. Every section is rewritten in Hyde's voice: first-person, contemptuous, and gleeful. Internal documents appear. Damning footnotes surface. Suppressed press coverage is revealed. Hyde narrates Jekyll's entire biography from the inside.

The toggle is not just a visual theme switch. In Jekyll mode, strikethroughs are hidden, internal cards are invisible, and endorsements read as genuine. In Hyde mode, those same elements reappear — the information was always there, just controlled.

---

## File Structure

```
jekyll-campaign/
├── index.html      — All content and structure
├── style.css       — All styling, both modes, responsive layout
├── script.js       — Toggle logic, FAQ accordion, donate interactions
└── README.md       — This file
```

---

## How to Run

Open `index.html` in any modern browser. No build tools, servers, or dependencies required. The Google Fonts stylesheet is loaded via CDN and requires an internet connection to render correctly — the site degrades gracefully to Georgia serif without it.

---

## Features

### Jekyll / Hyde Mode Toggle
The navbar button switches `data-mode` on the `<html>` element between `jekyll` and `hyde`. CSS and JS respond to this attribute to:
- Show or hide elements with `.hyde-only` and `.jekyll-only` classes
- Switch color variables (warm parchment vs. deep crimson dark)
- Change all text content — headers, bios, FAQs, footnotes, disclaimers, and the footer — to the appropriate voice

### Dual Narration
Every major section contains two fully written versions of its content:
- **Jekyll's version** is formal, defensive, and over-clarifying — the voice of a man managing his own reputation
- **Hyde's version** is first-person, contemptuous, and specific — he rewrites Jekyll's biography, annotates the timeline, explains what each policy is "actually for," and ends the footer with a personal sign-off

### Hidden Content in Hyde Mode
The following elements are invisible in Jekyll mode and only appear in Hyde mode:
- The "Real Platform" internal card
- The suspicious/coerced endorsement
- Two damning press items (including one retracted article)
- The internal Staff FAQ column, answered by Hyde himself
- The full damning footnotes
- Hyde's footer message signed "— E.H."

### Glitch Animations
Key words in headers use a CSS clip-path glitch animation that causes fragments of an alternate word to briefly flash through — e.g. "One" flickering toward "Free," or "Jekyll" toward "Hyde." These run on a loop and are subtle, meant to suggest instability underneath the polished surface.

### FAQ Accordion
Clicking any FAQ question opens its answer and closes any previously open answer. In Hyde mode the same questions have entirely different answers.

### Donate Interactions
- Clicking a donation tier card auto-fills the amount field
- Submitting with empty fields highlights them in red
- A successful submission triggers a two-stage button response: *"Processing... Do Not Inquire Further"* → *"Donation Received. You Are Now On A List."*

---

## Texts & Thematic Connection

### Stevenson, *The Strange Case of Dr. Jekyll and Mr. Hyde*
The entire site is structured around Stevenson's central conceit: one body containing two identities, one respectable and one transgressive, each fighting for control. The website itself enacts this — in Jekyll mode it reads as a normal campaign site; in Hyde mode the same page becomes something else entirely. Hyde does not just reveal information Jekyll hid. He rewrites it. The tension between the two modes mirrors the novella's tension between Jekyll's increasingly desperate self-narration and the reality Hyde represents.

### Foucault, "Panopticism"
Jekyll's platform — particularly his Public Safety & Visibility and Institutional Trust policies — is written as a direct application of Foucauldian surveillance logic: cameras everywhere, a panoptic tower, an Office of Accountability that monitors everyone except its architects. In Jekyll mode this reads as civic policy. In Hyde mode, Hyde explains what it's actually for: Jekyll believes that if he can see everything, he can control everything, including Hyde. Hyde points out that this has not worked. The site's own structure enacts the panopticon's failure — the watcher (Jekyll) cannot stop the watched (Hyde) from speaking.

The irony the project attempts is that Jekyll's campaign for public surveillance is itself a form of self-surveillance: if everyone is always watching him, he has to remain Jekyll. Hyde's takeover of the site is, in De Certeau's terms, a "tactic" — making use of the space the powerful have built, on their own terms, against them.

---

## Design Notes

The visual language is deliberately Victorian editorial — Playfair Display for headings, Source Serif 4 for body text, a warm parchment palette in Jekyll mode. Hyde mode shifts to deep crimson-blacks with high-contrast cream text. The platform section uses a dark navy background in both modes, designed to feel like institutional authority regardless of who is narrating it.

Strikethrough text (`<s>`) throughout the site is styled in red — visible corruption of the official record — and appears or disappears depending on mode, so in Jekyll mode the text reads cleanly while in Hyde mode the deletions are exposed.