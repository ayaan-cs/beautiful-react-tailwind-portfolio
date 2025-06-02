import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
      <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="inline-block animate-[fade-in_0.7s_ease-out_forwards]">Hi, I'm</span>
              {" "}
              <span className="text-primary inline-block animate-[fade-in_0.7s_ease-out_0.2s_forwards]">
                Ayaan
              </span>
              {" "}
              <span className="inline-block animate-[fade-in_0.7s_ease-out_0.4s_forwards]">
                <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                  Syed
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-[fade-in_0.7s_ease-out_0.6s_forwards]">
              Computer Information Science student passionate about AI, software development,
              and data science. I create innovative solutions with cutting-edge technologies.
            </p>

            <div className="pt-4 animate-[fade-in_0.7s_ease-out_0.8s_forwards]">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
  );
};