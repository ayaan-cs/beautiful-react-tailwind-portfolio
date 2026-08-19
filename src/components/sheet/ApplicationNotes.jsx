export function ApplicationNotes() {
  return (
    <div className="app-notes">
      <div className="fig-head">
        <span>Fig. B — Application notes, how I use these</span>
        <span className="hint-live">
          <i className="hint-live__ring" />
          3 notes · traced to shipped work
        </span>
      </div>
      <div className="app-notes__grid">
        <article className="note-dwg">
          <div className="note-dwg__head">
            <span>Dwg. B-01 · NOTE-01</span>
            <span>Data pipelines end to end</span>
          </div>
          <svg viewBox="0 0 260 124" width="100%" height="124" role="img" aria-label="Pipeline: BigQuery tables, nightly sync job, Cloud SQL cache, dashboard">
            <line x1="12" y1="14" x2="12" y2="110" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <circle cx="12" cy="14" r="2.6" fill="#1C1B19" />
            <line x1="12" y1="14" x2="26" y2="14" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <text x="32" y="17.4" className="dwg-ink">BigQuery tables</text>
            <circle cx="12" cy="46" r="2.6" fill="#1C1B19" />
            <line x1="12" y1="46" x2="26" y2="46" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <text x="32" y="49.4" className="dwg-ink">Nightly sync job</text>
            <circle cx="12" cy="78" r="2.6" fill="#C1440E" />
            <line x1="12" y1="78" x2="26" y2="78" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <text x="32" y="81.4" className="dwg-rust">Cloud SQL cache</text>
            <circle cx="12" cy="110" r="2.6" fill="#1C1B19" />
            <line x1="12" y1="110" x2="26" y2="110" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <text x="32" y="113.4" className="dwg-ink">Dashboard</text>
            <polygon points="12,112 8.6,105 15.4,105" fill="rgba(28,27,25,0.55)" />
          </svg>
          <div className="note-dwg__src">Src — PRJ-001 Watermark Discovery Dashboard</div>
        </article>

        <article className="note-dwg">
          <div className="note-dwg__head">
            <span>Dwg. B-02 · NOTE-02</span>
            <span>Shipping full-stack features</span>
          </div>
          <svg viewBox="0 0 260 124" width="100%" height="124" role="img" aria-label="Frontend and backend lanes meeting at one REST contract junction">
            <text x="6" y="12" className="dwg-ink">FRONTEND</text>
            <line x1="6" y1="30" x2="124" y2="30" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <circle cx="14" cy="30" r="2.6" fill="#1C1B19" />
            <text x="24" y="26" className="dwg-ink">React UI</text>
            <text x="6" y="78" className="dwg-ink">BACKEND</text>
            <line x1="6" y1="96" x2="124" y2="96" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <circle cx="14" cy="96" r="2.6" fill="#1C1B19" />
            <text x="24" y="92" className="dwg-ink">FastAPI</text>
            <circle cx="78" cy="96" r="2.6" fill="#1C1B19" />
            <text x="70" y="116" className="dwg-ink">PostgreSQL</text>
            <path d="M124 30 C 158 30, 158 63, 186 63" fill="none" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <path d="M124 96 C 158 96, 158 63, 186 63" fill="none" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <circle cx="186" cy="63" r="2.6" fill="#C1440E" />
            <text x="196" y="60" className="dwg-rust">REST</text>
            <text x="196" y="74" className="dwg-rust">contract</text>
          </svg>
          <div className="note-dwg__src">Src — PRJ-002 MindSight</div>
        </article>

        <article className="note-dwg">
          <div className="note-dwg__head">
            <span>Dwg. B-03 · NOTE-03</span>
            <span>Cloud, CI/CD & observability</span>
          </div>
          <svg viewBox="0 0 260 124" width="100%" height="124" role="img" aria-label="Deploy loop: commit, CI/CD, Cloud Run, observability, back to commit">
            <rect x="34" y="36" width="152" height="52" fill="none" stroke="rgba(28,27,25,0.55)" strokeWidth="1" />
            <circle cx="34" cy="36" r="2.6" fill="#1C1B19" />
            <text x="8" y="28" className="dwg-ink">commit</text>
            <circle cx="186" cy="36" r="2.6" fill="#1C1B19" />
            <text x="152" y="28" className="dwg-ink">CI/CD</text>
            <circle cx="186" cy="88" r="2.6" fill="#C1440E" />
            <text x="140" y="106" className="dwg-rust">Cloud Run</text>
            <circle cx="34" cy="88" r="2.6" fill="#1C1B19" />
            <text x="8" y="106" className="dwg-ink">observability</text>
            <polygon points="112,36 105,32.6 105,39.4" fill="rgba(28,27,25,0.55)" />
            <polygon points="186,64 182.6,57 189.4,57" fill="rgba(28,27,25,0.55)" />
            <polygon points="108,88 115,84.6 115,91.4" fill="rgba(28,27,25,0.55)" />
            <polygon points="34,60 30.6,67 37.4,67" fill="rgba(28,27,25,0.55)" />
            <text x="70" y="66" className="dwg-ink">feedback</text>
          </svg>
          <div className="note-dwg__src">Src — PRJ-001 deployment</div>
        </article>
      </div>
    </div>
  );
}
