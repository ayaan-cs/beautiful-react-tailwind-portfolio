import { Book, Calendar, MapPin, Code, Brain, Database } from "lucide-react";

export const AboutSection = () => {
  return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate About AI & Innovation
              </h3>

              <p className="text-muted-foreground">
                I'm a Computer Information Science student at St. Edwards University with a passion for technology and innovation.
                My expertise spans software development, AI, and data science, allowing me to develop customized solutions for complex problems.
              </p>

              <p className="text-muted-foreground">
                I'm skilled in collaborating with stakeholders and translating client needs into technical solutions using my programming expertise
                in Python, Java, and AWS services. I have experience in AI-driven applications, cloud computing, and full-stack development.
              </p>

              <p className="text-muted-foreground">
                I speak and write in English and Urdu, and I am experienced in Hindi. When I'm not coding, I volunteer as an Animal Caretaker,
                providing care for animals and ensuring their well-being.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>
                <a
                    href="/resume.pdf"
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Developing intelligent systems with TensorFlow, PyTorch, and advanced ML algorithms for real-world applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Software Development</h4>
                    <p className="text-muted-foreground">
                      Building responsive web applications and robust backend systems using modern frameworks and cloud services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Science</h4>
                    <p className="text-muted-foreground">
                      Analyzing complex datasets and creating data visualizations using Python, R, and advanced statistical methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16 gradient-border p-8 card-hover">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">St. Edwards University</h4>
                    <p className="text-muted-foreground">BA, Computer Information Science</p>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar size={16} className="mr-2" />
                      <span>August 2022 - Current</span>
                      <MapPin size={16} className="ml-4 mr-2" />
                      <span>Austin, TX</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Relevant Coursework</h5>
                      <p className="text-muted-foreground text-sm">
                        Concepts I & II, Algorithmic Problem Solving, Computation-Based Programming, Web Development,
                        Computer Architecture, Data Structures, Intro to AI, Database Theory, Software Engineering
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Honors & Awards</h5>
                      <p className="text-muted-foreground text-sm">President's Achievement Scholarship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};