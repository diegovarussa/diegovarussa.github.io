# diegovarussa.github.io

Personal resume and portfolio website for **Diego Varussa Pereira** — Senior Backend Engineer | Cloud Architect.

Live at: [diegovarussa.github.io](https://diegovarussa.github.io/)

## Files

| File | Description |
|------|-------------|
| `index.html` | Main website — Synthwave-themed single-page portfolio |
| `en.html` | ATS-optimized resume — clean layout for print/PDF |
| `favicon.svg` | Site favicon |
| `picture.png` | Profile photo used in the hero section |

## Features

- **Synthwave design** with neon palette (cyan, pink, purple, yellow) and Google Fonts (Orbitron, Rajdhani, Share Tech Mono)
- **Printable resume** — `en.html` auto-triggers `window.print()` when opened with `?print` in the URL, enabling the "Download PDF" button in `index.html`
- **ATS-friendly** plain layout in `en.html` for recruiter tools
- No build tool, no framework — pure HTML/CSS/JS

## Development

Open any `.html` file directly in a browser, or serve locally:

```bash
npx serve .
```

## Deployment

Push to the `main` branch — GitHub Pages serves automatically.

## Content

Resume content is sourced from the LinkedIn profile export (`Profile.pdf`, not tracked in git). Both `index.html` and `en.html` mirror the same content structure:

1. Header (name, contact info)
2. Summary
3. Experience (8 roles, most recent first)
4. Skills
5. Education
6. Languages
