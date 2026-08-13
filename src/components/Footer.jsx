import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/content/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted mt-1">
            Applied AI · {profile.location}. Every headline number has a baseline.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link to="/playground" className="text-muted hover:text-foreground">Playground</Link>
          <a href="/#work" className="text-muted hover:text-foreground">Work</a>
          <a href={profile.github} className="text-muted hover:text-foreground" target="_blank" rel="noreferrer">
            <Github size={16} className="inline mr-1" />GitHub
          </a>
          <a href={profile.linkedin} className="text-muted hover:text-foreground" target="_blank" rel="noreferrer">
            <Linkedin size={16} className="inline mr-1" />LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-foreground">
            <Mail size={16} className="inline mr-1" />Email
          </a>
          <a href="/#hero" className="p-2 rounded-full border border-border" aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
      <p className="container-page mt-6 text-xs text-muted">
        © {new Date().getFullYear()} {profile.legalName}. Facts live in src/content.
      </p>
    </footer>
  );
};
