export const EMAIL = "therealyaan9876@gmail.com";
export const COORDS = "N 30.27 / W 97.74";
export const CV_URL = "/uploads/Ayaan-Syed-Resume.pdf";
export const CV_FILENAME = "Ayaan Syed - Resume.pdf";

export const OUTSIDE_COPY =
  "Outside of engineering I listen widely — music and film from as many cultures as I can find — watch MMA, and read when I can. Coffee and tea are a craft I care about. Pickleball, very casually. I volunteer with animals at a local shelter. Travel and photography are newer.";

export const PAW_HAVEN_URL = "https://pawhavenpetsitting.com";

export const WORK_ROLES = [
  {
    mark: "HEB",
    logo: "/icons/mark-heb.png",
    org: "H-E-B Digital",
    title: "Software Engineer",
    when: "Jun 2026 – Present",
    where: "Austin, TX",
    points: [
      "Sole developer on a full-stack internal tool (Python backend, React frontend) automating BigQuery ingest-strategy recommendations across thousands of tables — 130+ story points in 6 weeks, cutting unnecessary full-load reprocessing cost.",
      "Designed and shipped a nightly Cloud SQL metadata sync pipeline caching table statistics (row counts, byte sizes, schemas), eliminating real-time BigQuery API lookups and measurably reducing dashboard page-load latency.",
      "Built an OAuth-integrated GitLab API feature that programmatically opens Merge Requests from UI-generated YAML diffs — closing the loop from recommendation to production config change.",
      "Worked across Data Engineering, Platform and UX in Agile sprints (Jira, Confluence); deployed services on Cloud Run with CI/CD, and authored the architecture diagrams presented to the engineering team.",
    ],
  },
  {
    mark: "SAS",
    logo: "/icons/mark-samsung.png",
    org: "Samsung Austin Semiconductor",
    title: "Manufacturing Technician",
    when: "Feb 2026 – June 2026",
    where: "Austin, TX",
    points: [
      "Operate, maintain and troubleshoot advanced semiconductor production equipment in a high-volume cleanroom environment.",
      "Perform preventive maintenance, monitor tool performance and analyze production data to optimize yield under strict safety and quality protocols.",
      "Work 12-hour compressed overnight shifts — flexible across any shift schedule at full-time workload.",
      "Use Microsoft 365 tooling for documentation, shift reporting and analysis.",
    ],
  },
  {
    mark: "KSP",
    logo: "/icons/mark-klein.png",
    org: "Klein Sports Performance, LLC",
    title: "AI Research Lead Intern",
    when: "Sep 2024 – Aug 2025",
    where: "Austin, TX",
    points: [
      "Led AI research for a fitness application, developing machine-learning models that recognize 100+ workout types.",
      "Built full-stack features on a Python/FastAPI backend with Streamlit dashboards for user-facing analytics.",
      "Developed a chatbot referencing 20+ research studies to deliver personalized fitness insights over a REST API.",
      "Integrated Redis caching to improve backend response times for frequently accessed workout data.",
    ],
  },
  {
    mark: "USD",
    logo: "/icons/mark-usda.png",
    org: "U.S. Department of Agriculture — Forest Service",
    title: "Data Science Intern",
    when: "Jun 2024 – Aug 2024",
    where: "Remote (Utah)",
    points: [
      "Two remote geospatial projects supporting Fiji's water-quality monitoring program.",
      "Built a Google Earth Engine pipeline flagging pollution across Fiji's main island, using erosion, discoloration and industrial runoff near ports as indicators of contamination and seasonal change.",
      "Ran Land Use Land Cover (LULC) photo-interpretation on sample plots for the 2021–2022 reporting period, writing R scripts to validate interpretation accuracy.",
      "Stack: Google Earth Engine, R.",
    ],
  },
];

export const EDU_ROLE = {
  mark: "EDU",
  logo: "/icons/mark-stedwards.png",
  org: "St. Edward's University",
  title: "B.A., Computer Information Science · Cum Laude",
  when: "Aug 2022 – Dec 2025",
  where: "Austin, TX",
  points: [
    "Coursework: Algorithmic Problem Solving, Computation-Based Programming, Web Development, Computer Architecture, Algorithms and Data Structures, Intro to AI, Database Theory, Software Engineering, Senior Undergraduate Research.",
    "Honors: President's Achievement Scholarship · Cum Laude graduate.",
  ],
};

export const CERTS = [
  {
    name: "Microsoft Security Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn",
    id: "a427bd",
    skills:
      "AI Security · Governance, Risk Management and Compliance (GRC) · Cloud Security",
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    id: "81e144",
    skills: "Generative AI · Microsoft Copilot · Artificial Intelligence for Business",
  },
  {
    name: "Microsoft Azure AI Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn",
    id: "28b0c1",
    skills: "Azure AI · Cloud Computing · Machine Learning Services",
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub",
    id: "e58eee",
    skills: "GitHub · Git Version Control · Collaboration Development",
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "KNIME",
    id: "489271",
    skills:
      "Artificial Intelligence (AI) · Artificial Intelligence for Business · Data Science",
  },
  {
    name: "Statistics Foundations Professional Certificate",
    issuer: "Wolfram Research",
    id: "98b1e9",
    skills: "Statistical Data Analysis · Wolfram Language · Statistics",
  },
];

export const FILMS = [
  {
    title: "Interstellar",
    year: "2014",
    href: "https://letterboxd.com/film/interstellar/",
    src: "/uploads/images-e25bd487.jpg",
  },
  {
    title: "Kal Ho Naa Ho",
    year: "2003",
    href: "https://letterboxd.com/film/kal-ho-naa-ho/",
    src: "/uploads/images.jpg",
  },
  {
    title: "John Wick",
    year: "2014",
    href: "https://letterboxd.com/film/john-wick/",
    src: "/uploads/images-2fb20f92.jpg",
  },
  {
    title: "Yi Yi",
    year: "2000",
    href: "https://letterboxd.com/film/yi-yi/",
    src: "/uploads/images-707c553a.jpg",
  },
];

export const ALBUMS = [
  {
    title: "good kid, m.A.A.d city",
    meta: "Kendrick Lamar · 2012",
    src: "/uploads/images-072bb55e.jpg",
  },
  {
    title: "Laminate Pet Animal",
    meta: "Snowmine · 2011",
    src: "/uploads/images-97f32e9f.jpg",
  },
  {
    title: "Luv(sic) Hexalogy",
    meta: "Nujabes · 2015",
    src: "/uploads/images-16a8cac4.jpg",
  },
  {
    title: "Aaja Nachle",
    meta: "Salim–Sulaiman · 2007",
    src: "/uploads/images-851b0dd0.jpg",
  },
];

export const TOOLS = [
  { id: "01", label: "Python", slug: "python" },
  { id: "02", label: "TypeScript", slug: "typescript" },
  { id: "03", label: "React", slug: "react" },
  { id: "04", label: "SQL", mono: "DB" },
  { id: "05", label: "Google Cloud", slug: "googlecloud" },
  { id: "06", label: "PostgreSQL/Cloud SQL", slug: "postgresql" },
  { id: "07", label: "Docker", slug: "docker" },
  { id: "08", label: "Git/GitLab", slug: "gitlab" },
  { id: "09", label: "VS Code", slug: "visualstudiocode" },
  { id: "10", label: "Cursor", mono: "CUR" },
  { id: "11", label: "DataGrip", mono: "DG" },
];

export const STACK_CATS = [
  { name: "Languages", ref: "LNG", items: ["Python", "Java", "JavaScript", "TypeScript", "R", "SQL", "Swift"] },
  { name: "Web Development", ref: "WEB", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Node.js"] },
  { name: "Backend/APIs", ref: "API", items: ["REST API Design", "Flask", "FastAPI"] },
  { name: "AI/ML", ref: "MLX", items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "MLOps"] },
  { name: "Data Science", ref: "DSC", items: ["Pandas", "NumPy", "Jupyter", "Data Visualization", "Google Earth Engine"] },
  { name: "Cloud & Infra", ref: "INF", items: ["AWS", "GCP", "Docker", "Terraform", "Observability & Monitoring", "CI/CD"] },
  { name: "Database", ref: "DBS", items: ["PostgreSQL", "Cloud SQL", "MongoDB", "Firebase"] },
  { name: "Practices", ref: "PRC", items: ["Agile/Scrum", "Code Review", "SDLC", "Linux", "Model Monitoring"] },
  { name: "Tools", ref: "TLS", items: ["Git/GitLab", "VS Code", "Cursor", "DataGrip"] },
  { name: "Everyday tools/working style", ref: "EVD", items: ["Microsoft 365", "Jira", "Confluence", "Cross-functional Collaboration", "Technical Communication", "Mentoring"] },
];

export const iconUrl = (slug) =>
  `https://cdn.simpleicons.org/${slug}/1C1B19`;
