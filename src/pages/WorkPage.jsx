import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { stateClass, stateLabel } from "@/lib/format";
import { SiteLayout } from "@/components/SiteLayout";

const cardRows = [
  ["Problem", "problem"],
  ["Data + provenance", "data"],
  ["Model(s)", "models"],
  ["Metrics + benchmark", "metrics"],
  ["Validation", "validation"],
  ["Known limitations", "limitations"],
  ["What I would not claim", "wouldNotClaim"],
];

export const WorkPage = ({ onOpenCommand }) => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <SiteLayout onOpenCommand={onOpenCommand}>
        <div className="container-page pt-32 pb-24">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/#work" className="ghost-button mt-6 inline-flex">Back to work</Link>
        </div>
      </SiteLayout>
    );
  }

  const others = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <SiteLayout onOpenCommand={onOpenCommand}>
      <article className="pt-28 pb-20">
        <div className="container-page">
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
            <ArrowLeft size={16} /> Work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="chip">{project.kicker}</span>
            <span className={`chip ${stateClass(project.state)}`}>{stateLabel(project.state)}</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold max-w-3xl">{project.title}</h1>
          <p className="mt-2 text-muted">{project.role}</p>
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="cosmic-button">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="ghost-button">
                Repository <ArrowUpRight size={16} />
              </a>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </div>

        {project.modelCard && (
          <section className="container-page mt-14">
            <h2 className="text-2xl font-semibold mb-4">Model card</h2>
            <div className="panel overflow-hidden">
              {cardRows.map(([label, key], index) => (
                <div
                  key={key}
                  className={`grid grid-cols-1 md:grid-cols-12 ${index !== 0 ? "border-t border-border" : ""}`}
                >
                  <div className="md:col-span-3 px-5 py-4 text-sm font-medium bg-secondary/50">{label}</div>
                  <div className="md:col-span-9 px-5 py-4 text-sm text-muted">{project.modelCard[key]}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.narrative && (
          <section className="container-page mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Notes</h2>
            <div className="space-y-4 text-muted">
              {project.narrative.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {project.neverClaim && (
          <section className="container-page mt-12">
            <h2 className="text-2xl font-semibold mb-4">Guardrails</h2>
            <ul className="panel divide-y divide-border">
              {project.neverClaim.map((item) => (
                <li key={item} className="px-5 py-3 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="container-page mt-16">
          <h2 className="text-lg font-semibold mb-4">More work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {others.map((item) => (
              <Link key={item.slug} to={`/work/${item.slug}`} className="panel p-4 hover:border-primary/50">
                <p className="text-xs text-muted">{item.kicker}</p>
                <p className="font-medium mt-1">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
};
