import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/content/certificates";

const categories = ["all", ...Array.from(new Set(certificates.map((cert) => cert.category)))];

export const CertificatesSection = () => {
  const [active, setActive] = useState("all");
  const visible = certificates.filter((cert) => active === "all" || cert.category === active);

  return (
    <section id="certificates" className="py-24 border-t border-border">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Certificates <span className="text-primary">you can verify</span>
        </h2>
        <p className="text-muted mt-3 mb-8 max-w-2xl">
          LinkedIn Learning professional certificates. Each card links out to the credential.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={active === category ? "cosmic-button text-sm" : "ghost-button text-sm"}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visible.map((cert) => (
            <article key={cert.id} className="panel p-5 flex flex-col">
              <p className="text-xs text-muted">{cert.organization}</p>
              <h3 className="font-semibold mt-1">{cert.title}</h3>
              <p className="text-xs text-muted mt-2">
                {new Date(cert.issueDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {cert.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-primary"
              >
                Verify <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
