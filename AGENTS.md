# AGENTS.md

## Cursor Cloud specific instructions

Single-page app: Vite + React 18 + Tailwind v4, client-side routed with `react-router-dom`. No backend, no env vars, no database. Standard scripts live in `package.json` (`dev`, `lint`, `build`, `preview`); the update script already runs `npm install`.

- Run the dev server with `npm run dev` (Vite, http://localhost:5173). Before finishing work, `npm run lint` and `npm run build` must both pass — `lint` runs with `--max-warnings 0`, so any warning fails it (including unused `eslint-disable` directives).
- The home sheet (`src/pages/Home.jsx`) plays a one-time plotter intro animation on mount and honors `prefers-reduced-motion` (toggle via the header "Reduced motion" dot). When manually testing, wait ~3s for the intro to settle. Returning to `/` remounts Home and replays the intro — that is expected, not a bug.
- Active design is the blueprint/sheet look: paper `#F6F1E7`, ink `#1C1B19`, rust `#C1440E`, Archivo + IBM Plex Mono, tab nav, and a custom crosshair "reticle" cursor (so the pointer looks like a crosshair — expected). Design tokens and all component styles are in the single global `src/index.css`.
- Project detail pages are full sheets at `/projects/:slug` (`src/pages/ProjectSheet.jsx`), reusing the home header/footer chrome. Project content is data-driven from `PROJECTS` in `src/data/portfolio.js`; MindSight is `/projects/mindsight`. Add a project by adding a `PROJECTS` entry (the home Group A index and the route render from it automatically).
- Project sheets embed the real live demo via `<iframe>` (an honest artifact). This only works for hosts that allow framing; the MindSight demo (`mindsight-app.netlify.app`) sends no `X-Frame-Options`, so it renders.
- Leftover/unused files exist and must NOT be revived: the old cosmic/starfield UI in `src/pages/projects/*DetailPage.jsx`, `src/components/StarBackground.jsx`, `src/components/WebGLStarfield.jsx`, and `src/components/StartupAnimation.jsx` are not wired into any route. The live app is only `Home`, `ProjectSheet`, and `NotFound` (see `src/App.jsx`).
