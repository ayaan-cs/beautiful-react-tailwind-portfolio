import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/content/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-y border-border bg-secondary/40">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Experience <span className="text-primary">timeline</span>
        </h2>
        <p className="text-muted mt-3 max-w-2xl mb-10">
          Roles as titled. Overlaps are real: retail at H-E-B ran alongside school, then the Digital internship.
        </p>
        <ol className="relative border-l border-border ml-3 space-y-8">
          {experiences.map((job) => (
            <li key={job.id} className="pl-8">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
              <article className="panel p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    {job.logo && (
                      <img src={job.logo} alt="" className="h-10 w-10 object-contain" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-primary text-sm">{job.company}</p>
                      <span className="chip mt-2">{job.type}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted md:text-right">
                    <p className="inline-flex items-center gap-2">
                      <Calendar size={14} /> {job.period}
                    </p>
                    <p className="inline-flex items-center gap-2 md:flex md:justify-end mt-1">
                      <MapPin size={14} /> {job.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted mt-4">{job.summary}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
