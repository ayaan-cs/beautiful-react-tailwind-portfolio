import { profile } from "@/content/profile";

export const MethodSection = () => {
  return (
    <section id="method" className="py-24 bg-secondary/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-semibold">
          How I <span className="text-primary">work</span>
        </h2>
        <p className="text-muted mt-3 max-w-2xl">
          Four habits. They are also the filter for what ships on this site: if I cannot show the baseline, the data source, or the demo, it stays off the hero.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.howIWork.map((item, index) => (
            <article key={item.title} className="panel p-6">
              <p className="mono-num text-xs text-primary mb-3">0{index + 1}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
