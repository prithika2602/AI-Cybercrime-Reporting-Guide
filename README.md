# AI Cybercrime Reporting Guide (India)

**Capstone 26 — AI Cybercrime Reporting and Cyber Law Awareness Guide**

A responsive, browser-based educational project that helps users understand first-response actions, prepare an incident checklist, find official reporting channels and learn basic Indian cyber-law concepts.

> **Important:** This is an educational awareness project, not a police reporting system, emergency service, legal opinion or money-recovery service. It does not submit complaints, contact banks, or send user data to a server.

## Run the project

1. Download and extract the ZIP.
2. Open `index.html` in a modern browser.
3. Select an incident type under **What happened?**
4. Tick the steps you have completed.
5. Use **Copy checklist** or **Download .txt** to save your action plan.
6. Open `quiz.html` to try the 10-question knowledge check.

No installation, API key, database or build process is required. It works as a static website and can be hosted with GitHub Pages.

## GitHub Pages deployment

1. Create a new GitHub repository named `AI-Cybercrime-Reporting-Guide`.
2. Upload the contents of this folder (not the ZIP itself).
3. In repository **Settings → Pages**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Open the published URL shown in the Pages settings.

## Main features

- Responsive landing page and cybercrime first-response guide.
- Interactive checklists for five situations: financial fraud, account hacking, identity theft/impersonation, online harassment/threats, and private/intimate content abuse.
- Copy and download checklist automation runs locally in the browser.
- Basic awareness summary of selected Information Technology Act, 2000 provisions.
- 10-question quiz with instant score.
- Awareness article, five social-media drafts, six-slide presentation outline and poster SVG.
- AI prompt library, AI-tool comparison template, verification register and before/after measurement template.
- Official-source references and project limitations.

## Project alignment with the supplied capstone document

This project is based on **Capstone 26** in the supplied `cybersecurity-30.docx`.

| Capstone requirement | Included in this repository |
|---|---|
| Research cybercrime types | `docs/awareness-article.md`, `docs/research-notes.md` |
| Verify reporting steps and helplines | `docs/source-register.md`, website official links |
| Verify basic legal information | Website law section, `docs/legal-awareness.md` |
| Record AI errors / outdated claims | `docs/verification-log-template.csv` |
| Five “what to do if…” situations | Interactive checklist builder and `docs/incident-guides.md` |
| 1,000-word awareness article | `docs/awareness-article.md` |
| Five posts and infographic/poster | `docs/social-posts.md`, `assets/awareness-poster.svg` |
| 5–7 slide presentation | `docs/presentation.md` (six slides) |
| Automate one step | Browser checklist generator; `scripts/checklist-generator.js` |
| Before-AI / after-AI comparison | `docs/before-after-template.csv` |
| Document prompts | `docs/ai-prompt-library.md` |
| Limitations and responsible AI | `docs/ethics-and-limitations.md` |

### Common capstone standard

The supplied document also specifies a common standard for all projects: at least six AI skills, four AI tools, research, content generation, a multimodal component, an automation/workflow component, prompt engineering, output verification, hallucination/error analysis, responsible AI, before-vs-after comparison and a live demonstration.

This repository provides the project structure and templates for documenting those activities. **It does not claim that four separate AI products have already been run or that peer testing has already occurred.** Complete the tool comparison, verification log, peer feedback and measured before/after results with your own actual work before submitting it as completed evidence.

Suggested AI skills to demonstrate: research, prompt engineering, summarisation, plain-language writing, source verification, content generation, quiz design, presentation design, workflow automation and responsible AI evaluation.

Suggested AI tools to compare (use and record only tools you actually test): ChatGPT, Google Gemini, Claude and Perplexity. Canva or Gamma may be used for visual/presentation production. GitHub is used for version control and publishing.

## Safety and privacy

- Never enter real passwords, OTPs, UPI PINs, CVVs, full card numbers or sensitive identity details into this project or an AI tool.
- Do not upload real victim records, private chats, personal data or confidential material to AI services.
- Use fictional or anonymised examples for demonstrations and testing.
- Do not create phishing pages, malware, credential collection forms or attack instructions.
- Do not contact or test real people, websites, networks or services without written authorisation.
- Do not download, save, screenshot or forward child sexual abuse material or intimate content. Report through official channels.
- AI output can be outdated, incomplete or wrong. A human must verify all legal and safety claims against official sources.

## Project structure

```text
AI-Cybercrime-Reporting-Guide/
├── index.html
├── styles.css
├── app.js
├── quiz.html
├── quiz.js
├── README.md
├── LICENSE
├── assets/
│   └── awareness-poster.svg
├── data/
│   └── sample-incident.json
├── docs/
│   ├── awareness-article.md
│   ├── ai-prompt-library.md
│   ├── before-after-template.csv
│   ├── ethics-and-limitations.md
│   ├── incident-guides.md
│   ├── legal-awareness.md
│   ├── presentation.md
│   ├── research-notes.md
│   ├── social-posts.md
│   ├── source-register.md
│   ├── tool-comparison-template.csv
│   └── verification-log-template.csv
└── scripts/
    └── checklist-generator.js
```

## Source review

Core government portal and legal references were reviewed for this student project on **04 November 2026**. Government websites, laws, portal workflows and helpline instructions can change. Re-check the official sources immediately before using or presenting the information.

See [`docs/source-register.md`](docs/source-register.md).

## Suggested live demonstration (3–5 minutes)

1. Explain the problem and project objective.
2. Open the homepage and identify the official reporting portal and financial-fraud helpline.
3. Select **Money / UPI fraud**, tick two actions, then copy/download the checklist.
4. Select **Account hacked** and show that the steps change.
5. Open the cyber-law section and explain that provisions are illustrative, not legal advice.
6. Complete two quiz questions.
7. Show the source register, prompt library, verification log and before/after template.
8. Explain what AI assisted with, what you verified manually and what remains a limitation.

## Evaluation evidence to complete

Before final academic submission, fill in the templates with real observations:
- Run the same research prompts in at least four AI tools (or the minimum your instructor accepts).
- Compare accuracy, completeness, source quality, outdated advice and unsafe recommendations.
- Verify each factual claim against the official sources in the source register.
- Record at least ten test cases and any missed, invented or misleading outputs.
- Record actual manual and AI-assisted time rather than inventing performance improvements.
- Collect peer feedback only with consent and without personal data.
- Prepare and deliver the live demonstration.

## Licence

MIT — see `LICENSE`. Official government source content remains subject to its own terms.
