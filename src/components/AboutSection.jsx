import { Book, Calendar, MapPin } from "lucide-react";
import { profile } from "@/content/profile";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-primary">Ayaan</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="cosmic-button">Get in touch</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ghost-button">GitHub</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="panel p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Book size={20} />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <h4 className="font-medium">{profile.education.school}</h4>
            <p className="text-sm text-muted">{profile.education.degree}</p>
            <p className="text-sm text-muted mt-2 inline-flex items-center gap-2">
              <Calendar size={14} /> {profile.education.period}
            </p>
            <p className="text-sm text-muted mt-1 inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.education.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.education.honors.map((honor) => (
                <span key={honor} className="chip state-live">{honor}</span>
              ))}
            </div>
            <p className="text-xs text-muted mt-4">
              Coursework: {profile.education.coursework.join(", ")}.
            </p>
            <p className="text-xs text-muted mt-3">{profile.citizenship}.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
