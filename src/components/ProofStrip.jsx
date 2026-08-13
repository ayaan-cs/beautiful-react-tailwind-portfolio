import { proofStats } from "@/content/proof";

export const ProofStrip = () => {
  return (
    <section id="proof" className="border-y border-border bg-secondary/60">
      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {proofStats.map((stat, index) => (
          <div
            key={stat.caption}
            className={`py-8 ${index < proofStats.length - 1 ? "lg:border-r border-border sm:pr-6 lg:px-6" : "lg:pl-6"}`}
          >
            <div className="mono-num text-3xl text-primary">{stat.value}</div>
            <p className="mt-2 text-sm font-medium">{stat.caption}</p>
            <p className="mt-1 text-xs text-muted">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
