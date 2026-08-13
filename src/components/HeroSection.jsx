import { ArrowDown } from "lucide-react";
import { profile } from "@/content/profile";

export const HeroSection = () => {
  const [lead, verb, rest] = profile.headline;

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
      <div className="container-page">
        <p className="text-xs uppercase tracking-[0.18em] text-muted mb-6">{profile.eyebrow}</p>
        <h1 className="text-[clamp(2.4rem,6vw,4.25rem)] font-semibold max-w-4xl">
          {lead}{" "}
          <span className="text-gradient">{verb}</span>{" "}
          {rest}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.lede}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {profile.ctas.map((cta) =>
            cta.external ? (
              <a key={cta.label} href={cta.href} target="_blank" rel="noreferrer" className="ghost-button">
                {cta.label}
              </a>
            ) : (
              <a key={cta.label} href={cta.href} className={cta.primary ? "cosmic-button" : "ghost-button"}>
                {cta.label}
              </a>
            )
          )}
        </div>
      </div>
      <a href="#proof" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted text-xs">
        Scroll
        <ArrowDown className="h-4 w-4 mt-1 text-primary" />
      </a>
    </section>
  );
};
