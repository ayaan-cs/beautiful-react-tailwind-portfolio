import {Github, ChevronRight, Eye, Shield, Brain, BarChart, Music, BarChart3} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 'sentinelai',
        title: 'SentinelAI',
        description: 'Advanced AI-powered network intrusion detection system that leverages machine learning algorithms to identify malicious network activities in real-time.',
        image: '/projects/sentinelai.png',
        tags: ['Python', 'Scikit-learn', 'Streamlit', 'AI/ML', 'Cybersecurity'],
        demoUrl: 'https://sentinelaiapp.streamlit.app/',
        githubUrl: 'https://github.com/ayaan-cs/sentinelai',
        slug: 'sentinelai',
        icon: <Shield size={24} />,
        color: 'from-red-500 to-orange-500'
    },
    {
        id: 'music-sentiment-analyzer',
        title: 'Music Sentiment Analyzer',
        description: 'AI-powered sentiment analysis for music streaming service reviews using IBM Watson NLU. Transforms unstructured feedback into actionable business intelligence with real-time analytics.',
        image: '/projects/music-sentiment-analyzer.png',
        tags: ['Python', 'Flask', 'IBM Watson', 'SQLite', 'REST API', 'AI/ML'],
        demoUrl: 'https://your-demo-url.com',
        githubUrl: 'https://github.com/YOUR-USERNAME/music-sentiment-analyzer',
        slug: 'music-sentiment-analyzer',
        icon: <Music size={24} />,
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 'mindsight',
        title: 'MindSight',
        description: 'AI-Powered brain activity visualization and analysis tool using advanced machine learning to interpret neural patterns and mental states.',
        image: '/projects/mindsight.png',
        tags: ['React', 'JavaScript', 'Hugging Face API', 'AI', 'Data Visualization'],
        demoUrl: 'https://mindsight-app.netlify.app/',
        githubUrl: 'https://github.com/ayaan-cs/MindSight',
        slug: 'mindsight',
        icon: <Brain size={24} />,
        color: 'from-indigo-500 to-purple-500'
    },
    {
        id: 'laliga-tierlist',
        title: 'LaLiga Teams Tier List',
        description: 'Comprehensive data science analysis of LaLiga teams with AI-powered tier rankings, performance analytics, and predictive insights for fantasy football and player awards.',
        image: '/projects/laliga-tierlist.png',
        tags: ['Python', 'Streamlit', 'Data Science', 'Machine Learning', 'Sports Analytics'],
        demoUrl: 'https://laligatiersapp.streamlit.app/',
        githubUrl: 'https://github.com/ayaan-cs/LaLigaTL',
        slug: 'laliga-tierlist',
        icon: <BarChart size={24} />,
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 'imdb-sentiment',
            title: 'IMDB Sentiment Analysis',
        description: 'Enterprise-level sentiment analysis platform processing 50,000+ movie reviews using machine learning and Hugging Face transformers. Features 4 ML models, topic modeling, and interactive Streamlit dashboard.',
        image: '/projects/imdb-sentiment.png',
        tags: ['Python', 'ML', 'Hugging Face', 'NLP', 'Streamlit', 'Data Science'],
        demoUrl: 'https://imdbsentimentapp.streamlit.app/',
        githubUrl: 'https://github.com/ayaan-cs/Movie-Review-Sentiment-Analysis-Insights-Platform',
        slug: 'imdb-sentiment',
        icon: <BarChart3 size={24} />,
        color: 'from-black-500 to-yellow-500'
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                    performance, and cutting-edge technology implementation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
                        >
                            {/* Project Header with Gradient */}
                            <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 left-4 text-6xl opacity-20">{"< />"}</div>
                                    <div className="absolute bottom-4 right-4 text-4xl opacity-20">{"{ }"}</div>
                                </div>

                                <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                                    <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                                        {project.icon}
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute top-3 right-3 opacity-30">
                                    <div className="w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                                </div>
                                <div className="absolute bottom-3 left-3 opacity-30">
                                    <div className="w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                                            title="Live Demo"
                                        >
                                            <Eye size={18} className="mr-1" />
                                            <span className="text-sm font-medium">Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                                            title="Source Code"
                                        >
                                            <Github size={18} className="mr-1" />
                                            <span className="text-sm font-medium">Code</span>
                                        </a>
                                    </div>

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="flex items-center text-primary hover:gap-3 transition-all duration-300"
                                    >
                                        <span className="text-sm font-medium">Details</span>
                                        <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Coming Soon */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        More exciting projects coming soon! Check out my{" "}
                        <a
                            href="https://github.com/ayaan-cis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            GitHub
                        </a>{" "}
                        for additional work.
                    </p>
                </div>
            </div>
        </section>
    );
};