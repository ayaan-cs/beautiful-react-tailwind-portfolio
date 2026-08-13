import { films, site } from "@/content/film";

export const LetterboxdMark = ({ size = 22 }) => (
  <span
    className="letterboxd-mark"
    style={{ width: size * 2.15, height: size }}
    aria-hidden="true"
  >
    <i />
    <i />
    <i />
  </span>
);

const PosterArt = ({ tone }) => {
  if (tone === "space") {
    return (
      <div className="lb-poster-art space">
        <div className="absolute left-1/2 top-[38%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-[38%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
      </div>
    );
  }
  if (tone === "gold") {
    return (
      <div className="lb-poster-art gold">
        <div className="absolute inset-x-6 top-8 h-px bg-white/40" />
        <div className="absolute inset-x-10 top-10 h-px bg-white/25" />
      </div>
    );
  }
  if (tone === "noir") {
    return (
      <div className="lb-poster-art noir">
        <div className="absolute left-1/2 top-[32%] h-10 w-10 -translate-x-1/2 rounded-full border-2 border-[#c9a227]" />
        <div className="absolute left-1/2 top-[32%] h-3 w-3 -translate-x-1/2 translate-y-3 rounded-full bg-[#c9a227]" />
      </div>
    );
  }
  return (
    <div className="lb-poster-art sunset">
      <div className="absolute bottom-10 left-1/2 h-16 w-px -translate-x-1/2 bg-black/50" />
      <div className="absolute bottom-[4.6rem] left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#1a1430]" />
    </div>
  );
};

export const LetterboxdWidget = () => {
  return (
    <section className="lb-widget mt-14 max-w-xl shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
      <a
        href={site.letterboxd}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-4 pt-4 pb-3"
      >
        <LetterboxdMark size={20} />
        <span className="text-[17px] font-semibold tracking-tight text-white" style={{ letterSpacing: "-0.03em" }}>
          Letterboxd
        </span>
      </a>
      <p className="px-4 pb-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#9ab]">
        Favorite films
      </p>
      <div className="lb-posters px-4 pb-4">
        {films.map((film) => (
          <a
            key={film.title}
            href={film.href}
            target="_blank"
            rel="noreferrer"
            className="lb-poster group"
            aria-label={`${film.title} (${film.year})`}
          >
            <PosterArt tone={film.tone} />
            <span className="lb-poster-meta opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="block text-[11px] font-semibold leading-tight text-white">{film.title}</span>
              <span className="block text-[10px] text-white/70">{film.year}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
