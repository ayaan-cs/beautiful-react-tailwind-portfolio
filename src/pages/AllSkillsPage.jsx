import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { SkillsSection } from "../components/SkillsSection";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const AllSkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Header / breadcrumb similar to project pages */}
        <section className="pt-24 pb-4 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Home size={16} className="mr-2" />
                Home
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground">All Skills</span>
            </div>
          </div>
        </section>
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

