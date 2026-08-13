import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { featuredProjects, projects } from "@/content/projects";
import { stateClass, stateLabel } from "@/lib/format";

const ProjectCard = ({ project }) => {
  const headline = project.metrics?.[0];

  return (
    <article className="panel p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:border-primary/50">
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="text-xs uppercase tracking-[0.14em] text-muted">{project.kicker}</p>
        <span className={`chip ${stateClass(project.state)}`}>{stateLabel(project.state)}</span>
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-muted mt-1">{project.role}</p>
      <p className="text-sm mt-4 text-muted flex-1">{project.summary}</p>
      {headline && (
        <div className="mt-5 rounded-xl border border-border bg-secondary/70 p-3">
          <div className="flex items-baseline justify-between gap-3">
            <span className="mono-num text-lg text-primary">{headline.value}</span>
            {headline.benchmark && (
              <span className="mono-num text-xs text-cyan">{headline.benchmark}</span>
            )}
          </div>
          <p className="text-xs text-muted mt-1">{headline.label}</p>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link to={`/work/${project.slug}`} className="inline-flex items-center text-sm text-primary">
          Details <ChevronRight size={16} />
        </Link>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground" aria-label={`${project.title} repository`}>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
};

export const FeaturedWork = () => {
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="py-24">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Featured <span className="text-primary">work</span>
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Five pieces with a mix of live demos, measured NLP, and a game still in the shop. Cards link to model cards, not vibe summaries.
            </p>
          </div>
          <Link to="/playground" className="ghost-button">Open the scorecard</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {rest.length > 0 && (
          <div className="mt-14">
            <h3 className="text-lg font-semibold mb-4">Also in the shop</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rest.map((project) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="panel px-4 py-3 flex items-center justify-between hover:border-primary/50"
                >
                  <div>
                    <p className="font-medium">{project.title}</p>
                    <p className="text-xs text-muted">{project.kicker}</p>
                  </div>
                  <span className={`chip ${stateClass(project.state)}`}>{stateLabel(project.state)}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
