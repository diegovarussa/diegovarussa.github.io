# CLAUDE.md — diegovarussa.github.io

Personal resume/portfolio website for **Diego Varussa Pereira** (Senior Backend Engineer | Cloud Architect), hosted on GitHub Pages. Content is sourced from his LinkedIn profile (see `Profile.pdf`).

## File Structure

| File | Role |
|------|------|
| `index.html` | Main website — Synthwave-styled, single-page |
| `en.html` | ATS-optimized English resume — printable plain layout |
| `Profile.pdf` | LinkedIn profile export — **source of truth for resume content** |
| `favicon.svg` | Site favicon |
| `picture.png` | Profile photo (150×150) used in the hero section |
| `post.md` | Markdown post (not rendered by the site) |

## Resume Sections

Both `index.html` and `en.html` follow the same content structure (mirrors the LinkedIn export):

1. Header (name, tagline, contact: email, LinkedIn, GitHub)
2. Professional Summary
3. Professional Experience (8 roles, most recent first)
4. Education
5. Certifications
6. Languages

## How Print/PDF Works

The `@media print` block in `index.html` overrides the Synthwave styles so the printed output matches `en.html` (Arial font, black/navy palette, ATS-clean layout). The nav, footer, and decorative `::before`/`::after` backgrounds are hidden when printing.

## Design System (Synthwave Theme)

CSS custom properties defined in `:root`:

| Variable | Color | Use |
|----------|-------|-----|
| `--bg-deep` | `#0d0221` | Page background |
| `--neon-cyan` | `#00f5ff` | Headings, links, accents |
| `--neon-pink` | `#ff2d78` | Company names, CTA button |
| `--neon-purple` | `#bf5af2` | Section borders, skill categories |
| `--neon-yellow` | `#f5e642` | Dates |
| `--neon-green` | `#39ff14` | (currently unused — was for leadership tags) |
| `--text-main` | `#e8ddf7` | Body text |
| `--text-dim` | `#9b8ab8` | Secondary/muted text |

**Fonts** (Google Fonts): `Orbitron` (headings/nav), `Rajdhani` (body), `Share Tech Mono` (dates/footer).

## Content Update Workflow

When updating resume content:

1. Update `Profile.pdf` (or treat the source LinkedIn profile as authoritative).
2. Mirror the change into both `index.html` and `en.html`.
3. Also update the `@media print` section in `index.html` if the change affects printed layout.

## No Build Tool

Pure HTML/CSS/JS — no npm, no framework, no bundler. Edit files directly and open in a browser to preview. Deploy by pushing to the `main` branch (GitHub Pages serves automatically).
