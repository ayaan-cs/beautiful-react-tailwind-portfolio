import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { metrics } from "@/content/metrics";
import { ArrowUpDown } from "lucide-react";

const imdbAccuracy = metrics.filter(
  (row) => row.project === "IMDB Sentiment" && row.metric === "Accuracy"
);

export const PlaygroundPage = ({ onOpenCommand }) => {
  const [sortKey, setSortKey] = useState("value");
  const [sortDir, setSortDir] = useState("desc");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = metrics.filter((row) => {
      if (!needle) return true;
      return [row.project, row.model, row.task, row.metric].join(" ").toLowerCase().includes(needle);
    });
    const copy = [...filtered];
    copy.sort((a, b) => {
      const left = a[sortKey];
      const right = b[sortKey];
      if (typeof left === "number" && typeof right === "number") {
        return sortDir === "asc" ? left - right : right - left;
      }
      return sortDir === "asc"
        ? String(left).localeCompare(String(right))
        : String(right).localeCompare(String(left));
    });
    return copy;
  }, [query, sortKey, sortDir]);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir((dir) => (dir === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const maxAcc = Math.max(...imdbAccuracy.map((row) => row.value));

  return (
    <SiteLayout onOpenCommand={onOpenCommand}>
      <div className="container-page pt-28 pb-20">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Playground</p>
        <h1 className="text-4xl font-semibold mt-3">Model scorecard</h1>
        <p className="text-muted mt-3 max-w-2xl">
          Sortable table of measured results. A grey benchmark cell means I do not have a comparison yet, so the number is not a hero metric.
          Interactive shot maps and Qini curves stay out until I have real exports. This table is the artefact that does not need invented coordinates.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-2">IMDB accuracy vs class balance</h2>
          <p className="text-sm text-muted mb-6">
            Pink-equivalent (accent) is the model. Cyan is the ~50% baseline. DistilBERT was not fine-tuned.
          </p>
          <div className="space-y-3">
            {imdbAccuracy.map((row) => (
              <div key={row.model}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{row.model}</span>
                  <span className="mono-num">{row.valueLabel}</span>
                </div>
                <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                  {row.benchmark && (
                    <div
                      className="absolute inset-y-0 bg-cyan/30"
                      style={{ width: `${(row.benchmark.value / maxAcc) * 100}%` }}
                    />
                  )}
                  <div
                    className="absolute inset-y-0 bg-primary"
                    style={{ width: `${(row.value / maxAcc) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h2 className="text-xl font-semibold">All measured rows</h2>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter project, model, metric"
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm w-full md:w-72"
            />
          </div>
          <div className="panel overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase tracking-wide text-muted border-b border-border">
                <tr>
                  {[
                    ["project", "Project"],
                    ["model", "Model"],
                    ["metric", "Metric"],
                    ["value", "Value"],
                    ["benchmark", "Benchmark"],
                    ["dataset", "Dataset"],
                  ].map(([key, label]) => (
                    <th key={key} className="px-4 py-3 font-medium">
                      <button type="button" onClick={() => toggleSort(key)} className="inline-flex items-center gap-1">
                        {label} <ArrowUpDown size={12} />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.model}-${row.metric}-${row.valueLabel}`} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <Link to={`/work/${row.slug}`} className="text-primary">{row.project}</Link>
                    </td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="px-4 py-3">{row.metric}</td>
                    <td className="px-4 py-3 mono-num">{row.valueLabel}</td>
                    <td className={`px-4 py-3 mono-num ${row.benchmark ? "text-cyan" : "text-muted"}`}>
                      {row.benchmark ? `${row.benchmark.valueLabel} · ${row.benchmark.name}` : "No incumbent"}
                    </td>
                    <td className="px-4 py-3 capitalize">{row.dataset}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            Data provenance: hand-authored from the IMDB project page table. No row is fabricated at render time.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
};
