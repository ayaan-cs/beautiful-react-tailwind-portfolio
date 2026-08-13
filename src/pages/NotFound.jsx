import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";

export const NotFound = ({ onOpenCommand }) => {
  return (
    <SiteLayout onOpenCommand={onOpenCommand}>
      <div className="container-page pt-32 pb-24">
        <p className="mono-num text-muted">404</p>
        <h1 className="text-4xl font-semibold mt-2">Page not found</h1>
        <p className="text-muted mt-3">That route is not in the map. Try work, playground, or home.</p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="cosmic-button">Home</Link>
          <Link to="/playground" className="ghost-button">Playground</Link>
        </div>
      </div>
    </SiteLayout>
  );
};
