import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { SkillsSection } from "../components/SkillsSection";

export const AllSkillsPage = ({ onOpenCommand }) => {
  return (
    <SiteLayout onOpenCommand={onOpenCommand}>
      <div className="pt-24">
        <div className="container-page">
          <Link to="/" className="text-sm text-muted hover:text-foreground">Home</Link>
        </div>
        <SkillsSection all />
      </div>
    </SiteLayout>
  );
};
