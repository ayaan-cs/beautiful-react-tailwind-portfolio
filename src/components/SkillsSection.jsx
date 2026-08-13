import { Link } from "react-router-dom";
import { skillCategories, skills } from "@/content/skills";

export const SkillsSection = ({ all = false }) => {
  const grouped = skillCategories.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  const visible = all
    ? grouped
    : grouped.map((group) => ({ ...group, items: group.items.slice(0, 6) }));

  return (
    <section id="stack" className="py-24">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Stack <span className="text-primary">I actually use</span>
            </h2>
            <p className="text-muted mt-3 max-w-2xl">
              Tools that appear in committed code or in a named role. Years are approximate tenure, not a skill bar. No 95% meters.
            </p>
          </div>
          {!all && (
            <Link to="/skills" className="ghost-button">Full list</Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {visible.map((group) => (
            <div key={group.category} className="panel p-5">
              <h3 className="font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="mono-num text-xs text-muted">{skill.years}y</span>
                    </div>
                    <p className="text-xs text-muted">{skill.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
