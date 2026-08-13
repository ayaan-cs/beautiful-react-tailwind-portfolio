# Ayaan Syed — Portfolio

Applied AI and software portfolio. Live demos, model cards, and scores shown next to a baseline.

**Live:** [ayaansportfolio.netlify.app](https://ayaansportfolio.netlify.app/)

## What changed in this pass

The site follows a build brief: typed content in `src/content/`, dark-first design tokens, a proof strip, featured work with state badges, a method section, stack without fake skill meters, experience as a timeline, `/work/:slug` model cards, and a `/playground` scorecard. Command menu is ⌘K.

Honesty rules live in `content-rules.md`. If a claim is not in `src/content/`, it should not ship.

## Stack

- Vite + React 18 + Tailwind CSS v4
- React Router
- EmailJS for the contact form

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## Content

| File | Role |
|---|---|
| `src/content/profile.js` | Name, positioning, education, how I work |
| `src/content/projects.js` | Cards, model cards, guardrails |
| `src/content/metrics.js` | Scorecard rows (IMDB table) |
| `src/content/experience.js` | Roles |
| `src/content/skills.js` | Stack |
| `src/content/certificates.js` | Verifiable certs |
| `src/content/proof.js` | Hero stats |

## Contact

- Email: [therealyaan9876@gmail.com](mailto:therealyaan9876@gmail.com)
- LinkedIn: [linkedin.com/in/ayaan-syed](https://www.linkedin.com/in/ayaan-syed)
- GitHub: [github.com/ayaan-cs](https://github.com/ayaan-cs)
- Location: Austin, TX
