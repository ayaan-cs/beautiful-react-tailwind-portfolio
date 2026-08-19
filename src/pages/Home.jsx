/* eslint-disable react/prop-types, react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { ApplicationNotes } from "../components/sheet/ApplicationNotes";
import { Disc } from "../components/sheet/Disc";
import { LivePreview } from "../components/sheet/LivePreview";
import { LogoWell } from "../components/sheet/LogoWell";
import { Plotter } from "../components/sheet/Plotter";
import { Reticle } from "../components/sheet/Reticle";
import { SkillSchematic } from "../components/sheet/SkillSchematic";
import { SmoothScroll } from "../components/sheet/SmoothScroll";
import {
  ALBUMS,
  CERTS,
  COORDS,
  CV_FILENAME,
  CV_URL,
  EDU_ROLE,
  EMAIL,
  FILMS,
  OUTSIDE_COPY,
  PAW_HAVEN_URL,
  MONOS,
  SLUGS,
  STACK_CATS,
  TOOLS,
  WORK_ROLES,
  iconUrl,
} from "../data/portfolio";

const TABS = [
  { id: "about", n: "01", label: "About" },
  { id: "stack", n: "02", label: "Stack" },
  { id: "projects", n: "03", label: "Projects" },
  { id: "cv", n: "04", label: "CV" },
];

const EXPAND_TITLES = {
  about: "01 / About — full sheet",
  stack: "02 / Stack — full schedule",
  projects: "03 / Projects — drawings pending",
  freelance: "03 / Freelance — client work",
};

function GhostLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function FreelanceNote() {
  return (
    <p className="note-body">
      I am starting to take on freelance work, partnering with small businesses to
      build and ship their websites and platforms. My first project was for{" "}
      <a href={PAW_HAVEN_URL} target="_blank" rel="noopener noreferrer">
        Paw Haven
      </a>
      , a pet-sitting business — with more currently in the works. Always open to
      discussing new work.
    </p>
  );
}

function ExperienceRow({ role }) {
  return (
    <div className="log-row">
      <LogoWell src={role.logo} alt={role.org} shape={role.logoShape} />
      <div>
        <div className="log-row__org">{role.org}</div>
        <div className="log-row__title">{role.title}</div>
        <div className="log-row__meta">
          {role.when} · {role.where}
        </div>
      </div>
      <div className="log-row__points">
        {role.points.map((pt) => (
          <div key={pt} className="log-point">
            <span>—</span>
            <span>{pt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Home = () => {
  const [tab, setTab] = useState("about");
  const [expanded, setExpanded] = useState(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [toast, setToast] = useState(null);
  const [reduced, setReduced] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);
  const [plotReplay, setPlotReplay] = useState(0);
  const [discDragging, setDiscDragging] = useState(false);
  const [gridFlash, setGridFlash] = useState(false);
  const discRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded || paletteOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded, paletteOpen]);

  const flash = (msg) => {
    setToast(msg);
    window.clearTimeout(flash._t);
    flash._t = window.setTimeout(() => setToast(null), 1800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      flash(`Copied ${EMAIL}`);
    } catch {
      flash(EMAIL);
    }
  };

  const openSheet = (which) => setExpanded(which);
  const closeSheet = () => setExpanded(null);

  const actions = [
      { id: "about", label: "Go to / expand About", kind: "Nav", mark: "01", run: () => { setTab("about"); openSheet("about"); } },
      { id: "stack", label: "Go to / expand Stack", kind: "Nav", mark: "02", run: () => { setTab("stack"); openSheet("stack"); } },
      { id: "projects", label: "Go to / expand Projects", kind: "Nav", mark: "03", run: () => { setTab("projects"); openSheet("projects"); } },
      { id: "freelance", label: "Go to / expand Freelance", kind: "Nav", mark: "03", run: () => { setTab("projects"); openSheet("freelance"); } },
      { id: "github", label: "Open GitHub", kind: "Link", mark: "GH", run: () => window.open("https://github.com/ayaan-cs", "_blank", "noopener") },
      { id: "linkedin", label: "Open LinkedIn", kind: "Link", mark: "IN", run: () => window.open("https://linkedin.com/in/ayaan-syed", "_blank", "noopener") },
      { id: "cv", label: "Download CV", kind: "Util", mark: "CV", run: () => window.open(CV_URL, "_blank", "noopener") },
      { id: "email", label: "Copy email", kind: "Util", mark: "@", run: copyEmail },
      { id: "replot", label: "Re-plot sheet", kind: "Egg", mark: "PL", run: () => { setPlotReplay((n) => n + 1); flash("Re-plotting sheet"); } },
      { id: "cue", label: "Cue Side A", kind: "Egg", mark: "A", run: () => discRef.current?.toggle() },
    ];

  const filtered = actions.filter((a) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return a.label.toLowerCase().includes(q) || a.kind.toLowerCase().includes(q);
  });

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setPaletteOpen((open) => !open);
        setQuery("");
        setCursor(0);
        return;
      }
      if (e.key === "Escape") {
        if (paletteOpen) setPaletteOpen(false);
        else if (expanded) closeSheet();
        return;
      }
      if (!paletteOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => (c + 1) % Math.max(filtered.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => (c - 1 + filtered.length) % Math.max(filtered.length, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[cursor];
        if (cmd) {
          setPaletteOpen(false);
          cmd.run();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, expanded, filtered, cursor]);

  const currentRole = WORK_ROLES[0];

  return (
    <div className={`sheet${reduced ? " is-reduced" : ""}${gridFlash ? " is-grid-flash" : ""}`}>
      <SmoothScroll reduced={reduced} paused={!!expanded || paletteOpen || discDragging} />
      <Plotter reduced={reduced} replay={plotReplay} />

      <header className="sheet-header">
        <div className="sheet-header__left">
          <button
            type="button"
            className="sheet-header__title text-btn"
            onClick={() => {
              setPlotReplay((n) => n + 1);
              flash("Re-plotting sheet");
            }}
          >
            Sheet 01 — Ayaan Syed's Portfolio
          </button>
          <span className="mute">Rev. 2026.08</span>
        </div>
        <div className="sheet-header__right">
          <span>{COORDS}</span>
          <span
            className="status-dot"
            role="button"
            tabIndex={0}
            onClick={() => setReduced((on) => !on)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setReduced((on) => !on);
              }
            }}
          >
            <i />
            Reduced motion {reduced ? "on" : "off"}
          </span>
          <button type="button" className="ghost-btn" onClick={() => setPaletteOpen(true)}>
            ⌘K Console
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="kicker">00 / Title block</div>
        <h1>
          Hello, my name is <span className="accent-name">Ayaan</span>. I build the
          things underneath the things you use.
        </h1>
        <div className="hero-rule">
          <div className="hero-rule__tick" />
          <div className="hero-rule__line" />
          <div className="hero-rule__label">
            Software & data engineer · full lifecycle · Austin, TX
          </div>
          <div className="hero-rule__line" />
          <div className="hero-rule__tick" />
        </div>
        <Disc ref={discRef} reduced={reduced} onDragChange={setDiscDragging} />
      </section>

      <nav className="sheet-nav">
        <div className="sheet-nav__inner">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={tab === t.id ? "is-active" : ""}
              onClick={() => setTab(t.id)}
            >
              <span>{t.n}</span>
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <div key={tab} className={reduced ? undefined : "tab-enter"}>
      {tab === "about" && (
        <section className="panel">
          <div className="panel-head">
            <div>01 / About</div>
            <button type="button" className="ghost-btn" onClick={() => openSheet("about")}>
              Expand ⤢
            </button>
          </div>
          <div className="fig-head">
            <span>Fig. 1 — Personal log</span>
            <span className="mute">2 notes</span>
          </div>

          <div className="notes-grid">
            <article className="note-card">
              <div className="note-kicker">A · What I do</div>
              <p className="note-lead">
                I'm a software & data engineer working across the full development
                lifecycle — scoping a problem, designing a solution, building it,
                testing it, and shipping it. The engineering itself is what I care
                about most: turning something ambiguous into a system that actually
                holds up once real people depend on it.
              </p>
              <p className="note-body">
                In practice that means I build the pipelines carrying the data the
                software runs on — nightly Cloud SQL metadata sync jobs, BigQuery
                ingest-strategy tooling across thousands of tables, caching layers
                that keep dashboards fast — and then the APIs and interfaces sitting
                on top of them.
              </p>
            </article>
            <article className="note-card note-card--tint">
              <div className="note-kicker">B · Outside of work</div>
              <p className="note-lead note-lead--sm">{OUTSIDE_COPY}</p>
              <FreelanceNote />
            </article>
          </div>

          <div className="fig-head fig-head--spaced">
            <span>Fig. 2 — Current experience</span>
            <span className="hint-live">
              <i />
              Hover over me for details
            </span>
          </div>

          <div className="current-grid">
            <article
              className={`current-card ${hoverCard === "role" ? "is-open" : ""}`}
              onMouseEnter={() => setHoverCard("role")}
              onMouseLeave={() => setHoverCard(null)}
            >
              <LogoWell src={currentRole.logo} alt="H-E-B" shape={currentRole.logoShape} />
              <div className="current-card__body">
                <div className="current-card__meta">
                  <span className="accent">A · Role</span>
                  <span>{currentRole.when}</span>
                </div>
                <div className="current-card__title">{currentRole.title}</div>
                <div className="current-card__sub">
                  H-E-B Digital — Data Infrastructure · Austin, TX
                </div>
                <div className="current-card__log">
                  {currentRole.points.map((pt, i) => (
                    <div key={pt} className="log-point">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article
              className={`current-card ${hoverCard === "edu" ? "is-open" : ""}`}
              onMouseEnter={() => setHoverCard("edu")}
              onMouseLeave={() => setHoverCard(null)}
            >
              <LogoWell src={EDU_ROLE.logo} alt="St. Edward's University" shape={EDU_ROLE.logoShape} />
              <div className="current-card__body">
                <div className="current-card__meta">
                  <span className="accent">B · Education</span>
                  <span>{EDU_ROLE.when}</span>
                </div>
                <div className="current-card__title">B.A., Computer Information Science</div>
                <div className="current-card__sub">
                  St. Edward's University · Cum Laude · Austin, TX
                </div>
                <div className="current-card__log">
                  {EDU_ROLE.points.map((pt, i) => (
                    <div key={pt} className="log-point">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {tab === "stack" && (
        <section className="panel">
          <div className="panel-head">
            <div>02 / Stack — parts list</div>
            <button type="button" className="ghost-btn" onClick={() => openSheet("stack")}>
              FULL STACK ⤢
            </button>
          </div>
          <div className="fig-head">
            <span>Fig. 3 — Legend, tools I reach for</span>
          </div>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <div key={t.id} className="tool-cell">
                <span className="tool-id">{t.id}</span>
                {t.slug ? (
                  <img src={iconUrl(t.slug)} alt="" width="16" height="16" />
                ) : (
                  <span className="mono-chip">{t.mono}</span>
                )}
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {tab === "projects" && (
        <section className="panel">
          <div className="panel-head">
            <div>03 / Projects</div>
            <button type="button" className="ghost-btn" onClick={() => openSheet("projects")}>
              Expand ⤢
            </button>
          </div>
          <div className="project-groups">
            <article className="group-card">
              <div className="group-card__head">
                <span>Fig. 4 — Projects</span>
                <span className="mute">Group A</span>
              </div>
              <div className="hairline" />
              <p>Personal work — tools and experiments I built because I wanted to.</p>
              <div className="group-card__foot">
                <span className="mute">Drawings pending</span>
                <button type="button" className="ghost-btn" onClick={() => openSheet("projects")}>
                  Expand ↗
                </button>
              </div>
            </article>
            <article className="group-card">
              <div className="group-card__head">
                <span>Fig. 5 — Freelance</span>
                <span className="mute">Group B</span>
              </div>
              <div className="hairline" />
              <p>Client work — the websites and systems businesses actually run on.</p>
              <div className="group-card__foot">
                <span className="mute">1 sheet on file</span>
                <button type="button" className="ghost-btn" onClick={() => openSheet("freelance")}>
                  Expand ↗
                </button>
              </div>
            </article>
            <aside className="callout">
              <div>
                <div className="mute callout__kicker">Open to freelance & projects</div>
                <p>
                  Available for client builds and open to collaborating on personal
                  projects — websites, booking flows, internal tools, data pipelines,
                  and anything adjacent. Tell me what you are trying to ship, and I am
                  happy to contribute.
                </p>
              </div>
              <div className="callout__actions">
                <button type="button" className="ghost-btn" onClick={copyEmail}>
                  Copy email
                </button>
                <GhostLink href="https://linkedin.com/in/ayaan-syed">LinkedIn ↗</GhostLink>
                <GhostLink href="https://github.com/ayaan-cs">GitHub ↗</GhostLink>
              </div>
            </aside>
          </div>
        </section>
      )}

      {tab === "cv" && (
        <section className="panel">
          <div className="panel-head">
            <div>04 / CV — document</div>
            <span className="mute">Fig. 6 — Document sheet · 1 file slot</span>
          </div>
          <div className="cv-grid">
            <a className="cv-preview" href={CV_URL} target="_blank" rel="noopener noreferrer">
              <iframe title="Resume preview" src={`${CV_URL}#toolbar=0`} />
              <span>CV-01 · US Letter · Ayaan A. Syed</span>
            </a>
            <div className="cv-meta">
              <div>
                <div className="note-kicker">Title block</div>
                <p>
                  One-page CV — H-E-B Digital and Klein Sports Performance, three
                  shipped projects, and a B.A. in Computer Information Science from
                  St. Edward's.
                </p>
                <div className="cv-facts">
                  <span>Rev. — Aug 2026</span>
                  <span>Format — PDF</span>
                  <span>Pages — 1</span>
                </div>
              </div>
              <div className="cv-actions">
                <a className="solid-btn" href={CV_URL} download={CV_FILENAME}>
                  Download CV ↓
                </a>
                <a className="ghost-btn" href={CV_URL} target="_blank" rel="noopener noreferrer">
                  View in browser ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      </div>

      <footer className="sheet-footer">
        <button
          type="button"
          className="text-btn"
          onClick={() => {
            flash("1:1 · drawn by hand");
            setGridFlash(true);
            window.setTimeout(() => setGridFlash(false), 900);
          }}
        >
          Designed by Ayaan Syed · scale 1:1
        </button>
        <div>
          <GhostLink href="https://github.com/ayaan-cs">GitHub ↗</GhostLink>
          <GhostLink href="https://linkedin.com/in/ayaan-syed">LinkedIn ↗</GhostLink>
          <button type="button" className="text-btn" onClick={copyEmail}>
            Copy email
          </button>
        </div>
        <span>Sheet 01 of 01</span>
      </footer>

      {expanded && (
        <div className={reduced ? "overlay" : "overlay overlay--in"} role="dialog" aria-modal="true">
          <div className="overlay-bar">
            <span>{EXPAND_TITLES[expanded]}</span>
            <button type="button" className="ghost-btn" onClick={closeSheet}>
              Close esc
            </button>
          </div>
          <div className="overlay-body">
            {expanded === "about" && (
              <div className="about-full">
                <div className="about-full__intro">
                  <div>
                    <h2>Software & data engineer — scope, design, build, test, ship.</h2>
                    <p className="note-lead">
                      I'm a software & data engineer working across the full development
                      lifecycle — scoping a problem, designing a solution, building it,
                      testing it, and shipping it. The engineering itself is what I care
                      about most: turning something ambiguous into a system that actually
                      holds up once real people depend on it.
                    </p>
                    <p className="note-body">
                      In practice that means I build the pipelines carrying the data the
                      software runs on — nightly Cloud SQL metadata sync jobs, BigQuery
                      ingest-strategy tooling across thousands of tables, caching layers
                      that keep dashboards fast — and then the APIs and interfaces sitting
                      on top of them.
                    </p>
                    <p className="note-body mute-body">
                      Beyond my current focus, I've worked as a manufacturing technician
                      in semiconductor production, led machine-learning research for a
                      fitness application, and done remote geospatial data analysis
                      supporting environmental water-quality monitoring. Different
                      problems, same underlying instinct: build (or run) the thing that
                      turns raw input into something usable — whether that's data, code,
                      or a production line.
                    </p>
                  </div>
                  <aside className="note-card note-card--tint about-aside">
                    <div className="note-kicker">Outside of work</div>
                    <p className="note-lead note-lead--sm">{OUTSIDE_COPY}</p>
                    <FreelanceNote />
                    <div className="aside-meta">
                      <span>Location — Austin, TX</span>
                      <span>Education — CIS, St. Edward's Univ. '25</span>
                      <span>Status — Open to work</span>
                    </div>
                  </aside>
                </div>

                <div>
                  <div className="fig-head">
                    <span>Fig. A — Full experience log</span>
                    <span className="mute">Work · education · certifications</span>
                  </div>
                  <div className="log-kicker">
                    <span>A · Work experience</span>
                    <span className="mute">{WORK_ROLES.length} entries</span>
                  </div>
                  {WORK_ROLES.map((role) => (
                    <ExperienceRow key={role.org} role={role} />
                  ))}
                  <div className="log-kicker">
                    <span>B · Education</span>
                    <span className="mute">1 entry</span>
                  </div>
                  <ExperienceRow role={EDU_ROLE} />
                  <div className="log-kicker">
                    <span>C · Certifications</span>
                    <span className="mute">{CERTS.length} earned</span>
                  </div>
                  <div className="certs-grid">
                    {CERTS.map((c) => (
                      <article key={c.id} className="cert-card">
                        <div className="cert-card__id">ID {c.id}</div>
                        <div className="cert-card__name">{c.name}</div>
                        <div className="cert-card__issuer">{c.issuer}</div>
                        <div className="hairline" />
                        <div className="cert-card__skills">{c.skills}</div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="taste-grid">
                  <div>
                    <div className="fig-head">
                      <span>Fig. B — Favorite films</span>
                      <span className="mute">Letterboxd</span>
                    </div>
                    <div className="taste-panel">
                      <div className="taste-panel__bar">
                        <span>Detail — Favorite films</span>
                        <span className="lb-dots">
                          <i className="o" />
                          <i className="g" />
                          <i className="b" />
                          Letterboxd
                        </span>
                      </div>
                      <div className="posters">
                        {FILMS.map((film) => (
                          <a
                            key={film.title}
                            href={film.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={film.src} alt={film.title} />
                            <div>{film.title}</div>
                            <div className="year">{film.year}</div>
                          </a>
                        ))}
                      </div>
                      <a
                        className="taste-panel__foot"
                        href="https://boxd.it/kKuD1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Full list on Letterboxd ↗
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="fig-head">
                      <span>Fig. C — Favorite albums</span>
                    </div>
                    <div className="taste-panel">
                      <div className="taste-panel__bar">
                        <span>Detail — Favorite albums</span>
                      </div>
                      <div className="covers">
                        {ALBUMS.map((album) => (
                          <div key={album.title}>
                            <img src={album.src} alt={album.title} />
                            <div>{album.title}</div>
                            <div className="year">{album.meta}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {expanded === "stack" && (
              <div className="stack-full">
                <SkillSchematic playable />
                <div>
                  <div className="fig-head">
                    <span>Full schedule of components</span>
                    <span className="mute">
                      {STACK_CATS.reduce((n, c) => n + c.items.length, 0)} items · 10 categories
                    </span>
                  </div>
                  <div className="cats-grid">
                    {STACK_CATS.map((c) => (
                      <div key={c.ref} className="cat-block">
                        <div className="fig-head">
                          <span>{c.name}</span>
                          <span className="mute">{c.ref}</span>
                        </div>
                        {c.items.map((item) => (
                          <div key={item} className="cat-item">
                            {SLUGS[item] ? (
                              <img src={`https://cdn.simpleicons.org/${SLUGS[item]}/1C1B19`} alt="" width="16" height="16" />
                            ) : (
                              <span className="mono-chip">{MONOS[item] || item.slice(0, 3).toUpperCase()}</span>
                            )}
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <ApplicationNotes />
              </div>
            )}

            {expanded === "projects" && (
              <div className="pending-sheet">
                <h2>Projects</h2>
                <p className="mute">Sheet reserved · detail drawings pending</p>
                <div className="pending-box">Left blank intentionally, to be added when less busy.</div>
              </div>
            )}

            {expanded === "freelance" && (
              <div className="freelance-sheet">
                <h2>Freelance</h2>
                <p className="mute">Client work — design through ship</p>
                <article className="freelance-card">
                  <div className="fig-head">
                    <span>Fig. A — Paw Haven</span>
                    <span className="mute">
                      Freelance ·{" "}
                      <a href={PAW_HAVEN_URL} target="_blank" rel="noopener noreferrer">
                        pawhavenpetsitting.com ↗
                      </a>
                    </span>
                  </div>
                  <div className="freelance-card__grid">
                    <div>
                      <p className="note-lead note-lead--sm">
                        Full-scope build for Paw Haven, a pet-sitting business — the public
                        website, their booking service (Scritches), and client feedback forms.
                        Design through ship, end to end.
                      </p>
                      <div className="freelance-steps">
                        <div><span>01</span> Public marketing site — services, rates, coverage area</div>
                        <div><span>02</span> Booking service (Scritches) — request, schedule, confirm</div>
                        <div><span>03</span> Client feedback forms — post-visit reports back to owners</div>
                      </div>
                    </div>
                    <LivePreview />
                  </div>
                </article>
                <div className="pending-box">More work coming soon</div>
              </div>
            )}
          </div>
        </div>
      )}

      {paletteOpen && (
        <div className="palette-scrim" role="dialog" aria-modal="true" onClick={() => setPaletteOpen(false)}>
          <div className="palette" onClick={(e) => e.stopPropagation()}>
            <div className="palette__bar">
              <span>Console — instrument input</span>
              <span>↑↓ select · ↵ run · esc close</span>
            </div>
            <div className="palette__input">
              <span>&gt;</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                placeholder="type a command"
              />
            </div>
            <div className="palette__list">
              {filtered.length === 0 && <div className="palette__empty">No matching command.</div>}
              {filtered.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  className={i === cursor ? "is-active" : ""}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => {
                    setPaletteOpen(false);
                    c.run();
                  }}
                >
                  <span>
                    <b>{c.mark}</b>
                    {c.label}
                  </span>
                  <em>{c.kind}</em>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast" aria-live="polite">{toast}</div>}
      <Reticle enabled={!reduced} />
    </div>
  );
};
