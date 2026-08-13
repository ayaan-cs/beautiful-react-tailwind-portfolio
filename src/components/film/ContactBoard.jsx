import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { site } from "@/content/film";

export const ContactBoard = () => {
  return (
    <section id="connect" className="corkboard mt-24 py-24">
      <div className="page-wrap">
        <p className="readout">Connect</p>
        <h2 className="mt-3 font-serif text-4xl">Pin this to the board.</h2>
        <article
          className="relative mx-auto mt-12 max-w-md bg-[#f4ead8] p-8 text-[#2a211c] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          style={{ transform: "rotate(-1.8deg)" }}
        >
          <span className="absolute left-1/2 top-[-10px] h-5 w-5 -translate-x-1/2 rounded-full bg-[var(--safelight)] shadow-[0_6px_10px_rgba(0,0,0,0.35)]" aria-hidden="true" />
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm opacity-70">{site.location}</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2">
              <Mail size={14} /> {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Github size={14} /> github.com/ayaan-cs
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Linkedin size={14} /> linkedin.com/in/ayaan-syed
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={14} /> {site.location}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
