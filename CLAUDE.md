# CLAUDE.md — diegovarussa.github.io

Personal resume/portfolio website for **Diego Varussa Pereira** (Senior Software Engineer), hosted on GitHub Pages.

## File Structure

| File | Role |
|------|------|
| `index.html` | Main website — Synthwave-styled, bilingual (EN/PT-BR), single-page |
| `en.html` | ATS-optimized English resume — **source of truth for EN content** |
| `pt-br.html` | Clean Portuguese resume — **source of truth for PT-BR content** |
| `favicon.svg` | Site favicon |
| `my_picture.jpg` | Profile photo used in the hero section |
| `post.md` | Markdown post (not rendered by the site) |

## How the Bilingual System Works

`index.html` contains both EN and PT-BR content side by side. Visibility is controlled via:

- Elements with `data-lang="en"` are shown by default; hidden when `body.lang-pt` is active.
- Elements with `data-lang="pt"` are hidden by default; shown when `body.lang-pt` is active.
- The `setLang(lang)` JS function toggles the `lang-pt` class on `<body>` and persists the choice to `localStorage` under the key `resume-lang`.
- Language is restored on page load from `localStorage`.

## How Print/PDF Works

The `@media print` block in `index.html` overrides the Synthwave styles so the printed output matches the standalone resume files:

- **EN print** → mirrors `en.html` (Arial font, black/navy palette, ATS-clean layout)
- **PT print** → mirrors `pt-br.html` (Segoe UI, blue left-border h2, centered header)

The nav, footer, and decorative `::before`/`::after` backgrounds are hidden when printing.

## Dynamic Age

Age is calculated at runtime — no hardcoded number:

```js
const age = new Date().getFullYear() - 1990;
document.getElementById('age-en').textContent = age + ' years old';
document.getElementById('age-pt').textContent = age + ' anos';
```

Update birth year `1990` only if it ever needs to change.

## Design System (Synthwave Theme)

CSS custom properties defined in `:root`:

| Variable | Color | Use |
|----------|-------|-----|
| `--bg-deep` | `#0d0221` | Page background |
| `--neon-cyan` | `#00f5ff` | Headings, links, accents |
| `--neon-pink` | `#ff2d78` | Company names, CTA button |
| `--neon-purple` | `#bf5af2` | Section borders, skill categories |
| `--neon-yellow` | `#f5e642` | Dates |
| `--neon-green` | `#39ff14` | Leadership tags |
| `--text-main` | `#e8ddf7` | Body text |
| `--text-dim` | `#9b8ab8` | Secondary/muted text |

**Fonts** (Google Fonts): `Orbitron` (headings/nav), `Rajdhani` (body), `Share Tech Mono` (dates/footer).

## Content Update Workflow

When updating resume content:

1. Edit **`en.html`** for English changes and **`pt-br.html`** for Portuguese changes.
2. Mirror the same change into the corresponding `data-lang="en"` or `data-lang="pt"` block in **`index.html`**.
3. Also update the `@media print` section in `index.html` if the change affects printed layout.

## No Build Tool

Pure HTML/CSS/JS — no npm, no framework, no bundler. Edit files directly and open in a browser to preview. Deploy by pushing to the `main` branch (GitHub Pages serves automatically).
