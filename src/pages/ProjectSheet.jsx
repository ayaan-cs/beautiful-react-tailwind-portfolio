/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Reticle } from "../components/sheet/Reticle";
import { COORDS, EMAIL, projectBySlug } from "../data/portfolio";
import { NotFound } from "./NotFound";

function GhostLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const ProjectSheet = () => {
  const { slug } = useParams();
  const project = projectBySlug(slug);

  const [reduced, setReduced] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  if (!project) return <NotFound />;

  const demoHost = project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={`sheet${reduced ? " is-reduced" : ""}`}>
      <header className="sheet-header">
        <div className="sheet-header__left">
          <Link to="/" state={{ expand: "projects" }} className="sheet-header__title text-btn">
            ← Back to Projects
          </Link>
          <span className="mute">{project.ref} · {project.name}</span>
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
        </div>
      </header>

      <div className={reduced ? undefined : "tab-enter"}>
        <section className="hero project-hero">
          <div className="kicker">03 / Projects — {project.ref}</div>
          <h1>{project.name}</h1>
          <p className="project-lead">{project.oneLine}</p>
          <div className="project-titleblock">
            <div className="project-titleblock__row">
              <span className="project-titleblock__k">Status</span>
              <span className="project-titleblock__v accent">{project.status}</span>
            </div>
            <div className="project-titleblock__row">
              <span className="project-titleblock__k">Dates</span>
              <span className="project-titleblock__v">{project.dates}</span>
            </div>
            <div className="project-titleblock__row">
              <span className="project-titleblock__k">Stack</span>
              <span className="project-titleblock__v">{project.stack.join(" · ")}</span>
            </div>
          </div>
        </section>

        <section className="panel project-panel">
          <div className="panel-head">
            <div>A / {project.name} — detail sheet</div>
            <a className="ghost-btn" href={project.demo} target="_blank" rel="noopener noreferrer">
              Open live ↗
            </a>
          </div>

          <div className="fig-head">
            <span>Fig. 1 — Current build, live &amp; interactive</span>
            <span className="mute">Try it below · pre-Rev. 02</span>
          </div>
          <div className="project-embed">
            <div className="project-embed__bar">
              <span className="project-embed__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="project-embed__url">{demoHost}</span>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Open live ↗
              </a>
            </div>
            <div className="project-embed__frame">
              <iframe
                src={project.demo}
                title={`${project.name}, live interactive preview`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="live-preview__note">
              <span>Live embed — interact with the current build right here</span>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Open in a new tab ↗
              </a>
            </div>
          </div>

          <div className="fig-head fig-head--spaced">
            <span>Fig. 2 — What it is</span>
            <span className="mute">Overview</span>
          </div>
          <div className="project-prose">
            {project.whatItIs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <div className="fig-head fig-head--spaced">
            <span>Fig. 3 — What is built</span>
            <span className="mute">{project.built.length} items</span>
          </div>
          <div className="project-log">
            {project.built.map((pt, i) => (
              <div key={pt} className="log-point">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="fig-head fig-head--spaced">
            <span>Fig. 4 — What Rev. 02 is changing</span>
            <span className="mute">UI redesign · in progress</span>
          </div>
          <div className="project-log project-log--rev">
            {project.rev02.map((pt, i) => (
              <div key={pt} className="log-point">
                <span>R{String(i + 1).padStart(2, "0")}</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <aside className="callout project-callout">
            <div>
              <div className="mute callout__kicker">Not what it is</div>
              <p>{project.notItIs}</p>
            </div>
            <div className="callout__actions">
              <GhostLink href={project.repo}>GitHub ↗</GhostLink>
            </div>
          </aside>
        </section>
      </div>

      <footer className="sheet-footer">
        <Link to="/" state={{ expand: "projects" }} className="text-btn">
          ← Back to Projects
        </Link>
        <div>
          <GhostLink href="https://github.com/ayaan-cs">GitHub ↗</GhostLink>
          <GhostLink href="https://linkedin.com/in/ayaan-syed">LinkedIn ↗</GhostLink>
          <button type="button" className="text-btn" onClick={copyEmail}>
            Copy email
          </button>
        </div>
        <span>{project.ref} · {project.name}</span>
      </footer>

      {toast && <div className="toast" aria-live="polite">{toast}</div>}
      <Reticle enabled={!reduced} />
    </div>
  );
};
