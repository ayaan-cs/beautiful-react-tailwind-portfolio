import { HeroSection } from "../components/HeroSection";
import { ProofStrip } from "../components/ProofStrip";
import { FeaturedWork } from "../components/ProjectsSection";
import { MethodSection } from "../components/MethodSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AboutSection } from "../components/AboutSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactSection";
import { SiteLayout } from "../components/SiteLayout";
import { Link } from "react-router-dom";

export const Home = ({ onOpenCommand }) => {
  return (
    <SiteLayout onOpenCommand={onOpenCommand}>
      <HeroSection />
      <ProofStrip />
      <FeaturedWork />
      <section className="py-16 border-y border-border">
        <div className="container-page panel p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Playground</p>
            <h2 className="text-2xl font-semibold mt-2">The scorecard is the first demo</h2>
            <p className="text-muted mt-2 max-w-xl">
              Sort every measured model. Pitch maps and uplift curves wait on real exports. I would rather ship an empty state than a fake scatterplot.
            </p>
          </div>
          <Link to="/playground" className="cosmic-button">Open playground</Link>
        </div>
      </section>
      <MethodSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <CertificatesSection />
      <ContactSection />
    </SiteLayout>
  );
};
