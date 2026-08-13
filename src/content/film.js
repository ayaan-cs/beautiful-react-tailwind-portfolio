export const site = {
  name: "Ayaan Syed",
  email: "therealyaan9876@gmail.com",
  github: "https://github.com/ayaan-cs",
  linkedin: "https://www.linkedin.com/in/ayaan-syed",
  letterboxd: "https://boxd.it/kKuD1",
  location: "Austin",
  headline: "I build the things underneath the things you use.",
};

export const aboutCompact = {
  kicker: "About",
  headline: "I build the things underneath the things you use.",
  paragraphs: [
    "I build the systems that move data — and the models that make sense of it once it's there.",
    "Based in Austin, currently working on data infrastructure at scale, with a research background in machine learning before that. I like the unglamorous parts of engineering as much as the glamorous parts of design and testing — the pipeline nobody sees, the sync job that just has to work, the API that closes the loop between a recommendation and a real production change.",
    "Everything I've actually used to build — the tools, the models, the stack — is one scroll away.",
  ],
};

export const aboutExpanded = {
  part1: {
    title: "What I do",
    body: "I'm a software developer working across the full development lifecycle — scoping a problem, designing a solution, building it, testing it, and shipping it. The engineering itself is what I care about most: turning something ambiguous into a system that actually holds up once real people depend on it.",
  },
  part2: {
    title: "Other rooms",
    body: "Beyond my current focus, I've worked as a manufacturing technician in semiconductor production, led machine-learning research for a fitness application, and done remote geospatial data analysis supporting environmental water-quality monitoring. Different problems, same underlying instinct: build (or run) the thing that turns raw input into something usable — whether that's data, code, or a production line.",
  },
  part3: {
    title: "Outside of work",
    chips: [
      "Music",
      "Film",
      "Reading",
      "Coffee roasting",
      "Pickleball",
      "Animals",
      "Travel",
      "Photography",
    ],
    body: "Outside of engineering: music and film from as many cultures as I can find, reading, roasting my own coffee, pickleball, anything animal-related, and — most recently — travel and photography, which I'm still new to.",
  },
};

export const films = [
  { rank: 1, title: "Interstellar", year: 2014, href: "https://letterboxd.com/film/interstellar/" },
  { rank: 2, title: "Kal Ho Naa Ho", year: 2003, href: "https://letterboxd.com/film/kal-ho-naa-ho/" },
  { rank: 3, title: "John Wick", year: 2014, href: "https://letterboxd.com/film/john-wick/" },
  { rank: 4, title: "La La Land", year: 2016, href: "https://letterboxd.com/film/la-la-land/" },
];

export const compactStack = [
  { name: "Python", icon: "python", size: "lg" },
  { name: "TypeScript", icon: "typescript", size: "lg" },
  { name: "React", icon: "react", size: "lg" },
  { name: "Google Cloud", icon: "gcp", size: "lg" },
  { name: "SQL", icon: "sql", size: "md" },
  { name: "PostgreSQL", icon: "postgres", size: "md" },
  { name: "Docker", icon: "docker", size: "md" },
  { name: "GitHub", icon: "github", size: "sm" },
  { name: "VS Code", icon: "vscode", size: "sm" },
  { name: "Cursor", icon: "cursor", size: "sm" },
  { name: "DataGrip", icon: "datagrip", size: "sm" },
];

export const expandedStack = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "R", "SQL", "Swift"],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Backend / APIs",
    items: ["REST API Design", "Flask", "FastAPI"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "MLOps"],
  },
  {
    title: "Data Science",
    items: ["Pandas", "NumPy", "Jupyter", "Data Visualization", "Google Earth Engine"],
  },
  {
    title: "Cloud & Infra",
    items: ["AWS", "Google Cloud", "Docker", "Terraform", "Observability", "CI/CD"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Cloud SQL", "MongoDB", "Firebase"],
  },
  {
    title: "Practices",
    items: ["Agile / Scrum", "Code Review", "SDLC", "Linux", "Model Monitoring"],
  },
  {
    title: "Tools",
    items: ["Git / GitHub", "VS Code", "Cursor", "DataGrip"],
  },
  {
    title: "Everyday & working style",
    secondary: true,
    items: [
      "Microsoft 365",
      "Jira",
      "Confluence",
      "Cross-functional collaboration",
      "Technical communication",
      "Mentoring",
    ],
  },
];

export const constellationNodes = [
  { id: "python", label: "Python", category: "Languages", x: 18, y: 32, projects: ["SentinelAI", "IMDB Sentiment", "LaLiga TL"] },
  { id: "ts", label: "TypeScript", category: "Languages", x: 34, y: 18, projects: ["This site"] },
  { id: "js", label: "JavaScript", category: "Languages", x: 46, y: 28, projects: ["MindSight"] },
  { id: "java", label: "Java", category: "Languages", x: 12, y: 52, projects: [] },
  { id: "r", label: "R", category: "Languages", x: 24, y: 68, projects: ["USDA LULC"] },
  { id: "sql", label: "SQL", category: "Languages", x: 38, y: 58, projects: ["Music Sentiment"] },
  { id: "swift", label: "Swift", category: "Languages", x: 8, y: 22, projects: [] },
  { id: "react", label: "React", category: "Web", x: 58, y: 20, projects: ["MindSight", "This site"] },
  { id: "next", label: "Next.js", category: "Web", x: 72, y: 14, projects: [] },
  { id: "tailwind", label: "Tailwind", category: "Web", x: 68, y: 32, projects: ["This site"] },
  { id: "node", label: "Node.js", category: "Web", x: 80, y: 26, projects: [] },
  { id: "flask", label: "Flask", category: "Backend", x: 52, y: 48, projects: ["Music Sentiment"] },
  { id: "fastapi", label: "FastAPI", category: "Backend", x: 64, y: 56, projects: [] },
  { id: "sklearn", label: "Scikit-learn", category: "AI/ML", x: 78, y: 48, projects: ["SentinelAI", "IMDB Sentiment"] },
  { id: "tf", label: "TensorFlow", category: "AI/ML", x: 88, y: 38, projects: [] },
  { id: "torch", label: "PyTorch", category: "AI/ML", x: 90, y: 58, projects: ["Quanta"] },
  { id: "hf", label: "Hugging Face", category: "AI/ML", x: 76, y: 68, projects: ["IMDB Sentiment", "MindSight"] },
  { id: "langchain", label: "LangChain", category: "AI/ML", x: 62, y: 74, projects: [] },
  { id: "pandas", label: "Pandas", category: "Data", x: 42, y: 78, projects: ["LaLiga TL", "IMDB Sentiment"] },
  { id: "gee", label: "Earth Engine", category: "Data", x: 28, y: 84, projects: ["USDA water quality"] },
  { id: "gcp", label: "Google Cloud", category: "Cloud", x: 50, y: 10, projects: [] },
  { id: "aws", label: "AWS", category: "Cloud", x: 60, y: 6, projects: [] },
  { id: "docker", label: "Docker", category: "Cloud", x: 84, y: 18, projects: ["ContainerGuard"] },
  { id: "tfia", label: "Terraform", category: "Cloud", x: 92, y: 24, projects: [] },
  { id: "postgres", label: "PostgreSQL", category: "Data", x: 32, y: 42, projects: [] },
  { id: "git", label: "GitHub", category: "Tools", x: 16, y: 12, projects: ["Everything public"] },
  { id: "vscode", label: "VS Code", category: "Tools", x: 6, y: 38, projects: [] },
  { id: "cursor", label: "Cursor", category: "Tools", x: 10, y: 8, projects: ["This site"] },
];

export const constellationCategories = ["All", "Languages", "Web", "Backend", "AI/ML", "Data", "Cloud", "Tools"];

const near = (a, b) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy < 420;
};

export const constellationEdges = constellationNodes.flatMap((node, i) =>
  constellationNodes.slice(i + 1).flatMap((other) => {
    const same = node.category === other.category;
    if (same && near(node, other)) return [{ from: node.id, to: other.id }];
    if (!same && near(node, other) && Math.abs(node.x - other.x) < 16) return [{ from: node.id, to: other.id }];
    return [];
  })
);
