import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code, Database, Terminal, Globe, LineChart, Brain,
  Repeat, BarChart, Cloud, Layout, Layers, Search
} from "lucide-react";

const skills = [
  // Programming Languages
  {
    name: 'Python',
    level: 95,
    category: 'programming',
    icon: <Terminal size={20} />,
    yearsExperience: 5,
    description: 'Advanced Python development including web frameworks, data analysis libraries, and machine learning applications.'
  },
  {
    name: 'Java',
    level: 85,
    category: 'programming',
    icon: <Code size={20} />,
    yearsExperience: 4,
    description: 'Object-oriented programming, Android development, and enterprise applications.'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'programming',
    icon: <Code size={20} />,
    yearsExperience: 4,
    description: 'Modern JavaScript including ES6+, async programming, and frameworks like React.'
  },
  {
    name: 'TypeScript',
    level: 80,
    category: 'programming',
    icon: <Code size={20} />,
    yearsExperience: 2,
    description: 'Type-safe JavaScript development for building robust web applications.'
  },
  {
    name: 'R',
    level: 75,
    category: 'data-science',
    icon: <LineChart size={20} />,
    yearsExperience: 2,
    description: 'Statistical analysis, data visualization, and research methodology using R and its ecosystem.'
  },

  // Web Development
  {
    name: 'React',
    level: 85,
    category: 'web-development',
    icon: <Code size={20} />,
    yearsExperience: 2,
    description: 'Frontend development with React, including hooks, context API, and custom components.'
  },
  {
    name: 'HTML/CSS',
    level: 90,
    category: 'web-development',
    icon: <Layout size={20} />,
    yearsExperience: 3,
    description: 'Semantic HTML, responsive design, CSS Grid/Flexbox, and modern styling techniques.'
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    category: 'web-development',
    icon: <Layers size={20} />,
    yearsExperience: 2,
    description: 'Utility-first CSS framework for creating custom designs without leaving your HTML.'
  },
  {
    name: 'Next.js',
    level: 75,
    category: 'web-development',
    icon: <Globe size={20} />,
    yearsExperience: 1,
    description: 'Full-stack React framework with server-side rendering and API routes.'
  },

  // AI & ML
  {
    name: 'TensorFlow',
    level: 80,
    category: 'ai-ml',
    icon: <Brain size={20} />,
    yearsExperience: 2,
    description: 'Deep learning model development, training, and deployment using TensorFlow and Keras.'
  },
  {
    name: 'PyTorch',
    level: 70,
    category: 'ai-ml',
    icon: <Brain size={20} />,
    yearsExperience: 1,
    description: 'Neural network implementation and research using PyTorch for computer vision and NLP tasks.'
  },
  {
    name: 'Scikit-learn',
    level: 85,
    category: 'ai-ml',
    icon: <Brain size={20} />,
    yearsExperience: 3,
    description: 'Machine learning algorithms implementation, model training, and evaluation pipelines.'
  },
  {
    name: 'LangChain',
    level: 70,
    category: 'ai-ml',
    icon: <Repeat size={20} />,
    yearsExperience: 1,
    description: 'Building applications with LLMs through composability using the LangChain framework for RAG workflows.'
  },

  // Data Science
  {
    name: 'Pandas',
    level: 90,
    category: 'data-science',
    icon: <Database size={20} />,
    yearsExperience: 3,
    description: 'Data manipulation, cleaning, transformation, and analysis using Pandas DataFrames.'
  },
  {
    name: 'NumPy',
    level: 90,
    category: 'data-science',
    icon: <BarChart size={20} />,
    yearsExperience: 3,
    description: 'Numerical computing with multi-dimensional arrays and mathematical functions.'
  },
  {
    name: 'Data Visualization',
    level: 80,
    category: 'data-science',
    icon: <LineChart size={20} />,
    yearsExperience: 2,
    description: 'Creating interactive visualizations using libraries like Matplotlib, Seaborn, Plotly, and D3.js for data storytelling.'
  },

  // Cloud & Infrastructure
  {
    name: 'AWS Services',
    level: 75,
    category: 'cloud',
    icon: <Cloud size={20} />,
    yearsExperience: 2,
    description: 'Cloud infrastructure including EC2, S3, Lambda, SageMaker, and other AWS services.'
  },
  {
    name: 'Docker',
    level: 70,
    category: 'cloud',
    icon: <Database size={20} />,
    yearsExperience: 2,
    description: 'Containerization of applications and services for consistent development and deployment.'
  },
  {
    name: 'Google Earth Engine',
    level: 80,
    category: 'specialized',
    icon: <Globe size={20} />,
    yearsExperience: 2,
    description: 'Geospatial analysis and satellite imagery processing at scale for environmental monitoring.'
  },

  // Database
  {
    name: 'SQL',
    level: 80,
    category: 'database',
    icon: <Database size={20} />,
    yearsExperience: 3,
    description: 'Database design, query optimization, and data management using SQL and relational databases.'
  },
  {
    name: 'MongoDB',
    level: 65,
    category: 'database',
    icon: <Database size={20} />,
    yearsExperience: 1,
    description: 'NoSQL database development and document-based data storage solutions.'
  },
  {
    name: 'Firebase',
    level: 70,
    category: 'database',
    icon: <Database size={20} />,
    yearsExperience: 2,
    description: 'Real-time database, authentication, and hosting for web and mobile applications.'
  },

  // Tools
  {
    name: 'Git/GitHub',
    level: 90,
    category: 'tools',
    icon: <Code size={20} />,
    yearsExperience: 4,
    description: 'Version control, collaborative development, and project management using Git and GitHub.'
  },
  {
    name: 'VS Code',
    level: 95,
    category: 'tools',
    icon: <Terminal size={20} />,
    yearsExperience: 5,
    description: 'Advanced IDE usage with extensions and customizations for efficient development.'
  }
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "programming", name: "Programming" },
  { id: "web-development", name: "Web Development" },
  { id: "ai-ml", name: "AI/ML" },
  { id: "data-science", name: "Data Science" },
  { id: "cloud", name: "Cloud" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools" },
  { id: "specialized", name: "Specialized" }
];

const SkillCard = ({ skill, isExpanded, toggleExpand }) => {
  return (
      <div
          className={cn(
              "bg-card rounded-lg shadow-xs relative overflow-hidden transition-all duration-300 transform cursor-pointer",
              isExpanded ? "scale-105 shadow-lg ring-1 ring-primary/50" : "hover:shadow-lg hover:scale-102"
          )}
          onClick={toggleExpand}
      >
        {/* Skill level indicator bar */}
        <div className="h-1 bg-secondary/50">
          <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
          />
        </div>

        {/* Basic View */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                  "p-2 rounded-md bg-primary/10 text-primary transition-all duration-300",
                  isExpanded ? "scale-110 rotate-6" : ""
              )}>
                {skill.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.yearsExperience} {skill.yearsExperience === 1 ? 'year' : 'years'} experience</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{skill.level}%</div>
            </div>
          </div>

          {/* Expanded View */}
          <div className={cn(
              "overflow-hidden transition-all duration-300",
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="pt-4 border-t border-border/50">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skills
      .filter(skill => activeCategory === "all" || skill.category === activeCategory)
      .filter(skill =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const toggleSkillExpand = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
      <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolbox of languages, frameworks, and technologies with a focus on AI,
            data science, and software development.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                        activeCategory === category.id
                            ? "cosmic-button"
                            : "bg-secondary/70 text-foreground hover:bg-secondary border border-border"
                    )}
                >
                  {category.name}
                </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
                <SkillCard
                    key={skill.name}
                    skill={skill}
                    isExpanded={expandedSkill === skill.name}
                    toggleExpand={() => toggleSkillExpand(skill.name)}
                />
            ))}
          </div>

          {/* Empty state for search */}
          {searchQuery && filteredSkills.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                <Search size={48} className="mx-auto mb-4 opacity-50" />
                <p>No skills match your search criteria.</p>
              </div>
          )}

          {/* Languages Section */}
          <div className="mt-16 gradient-border p-8 card-hover">
            <h3 className="text-2xl font-semibold mb-8 text-center">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">English</div>
                  <div className="text-muted-foreground">Native</div>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full w-full transition-all duration-1000" />
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">Urdu</div>
                  <div className="text-muted-foreground">Fluent</div>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full w-full transition-all duration-1000" />
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">Hindi</div>
                  <div className="text-muted-foreground">Experienced</div>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full w-4/5 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};