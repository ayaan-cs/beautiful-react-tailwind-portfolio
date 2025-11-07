import { ArrowLeft, Github, ExternalLink, Database, Brain, Server, Code, Shield, TrendingUp, Zap, CheckCircle2, Music, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StarBackground } from "../../components/StarBackground";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const MusicSentimentAnalyzerDetailPage = () => {
    const [showWipBanner, setShowWipBanner] = useState(true);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className={`pt-24 pb-16 px-4 ${showWipBanner ? 'mt-16' : ''}`}>
                    <div className="container mx-auto max-w-6xl">
                        <Link
                            to="/#projects"
                            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Projects
                        </Link>

                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm mb-4">
                                <Music size={16} className="mr-2" />
                                Full-Stack AI Application
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Music Sentiment <span className="text-primary">Analyzer</span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                AI-powered sentiment analysis for music streaming service reviews using IBM Watson NLU,
                                transforming unstructured feedback into actionable business intelligence.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    disabled
                                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/50 text-primary-foreground cursor-not-allowed opacity-50"
                                >
                                    <Github size={20} className="mr-2" />
                                    Coming Soon
                                </button>
                                <button
                                    disabled
                                    className="inline-flex items-center px-6 py-3 rounded-lg border border-primary/50 text-primary/50 cursor-not-allowed opacity-50"
                                >
                                    <ExternalLink size={20} className="mr-2" />
                                    Demo Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="py-8 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {['Python', 'Flask', 'IBM Watson NLU', 'SQLite', 'JavaScript', 'HTML/CSS', 'Chart.js', 'REST API'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                                >
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>

                        <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground mb-12">
                            <p className="text-lg leading-relaxed">
                                What if music streaming services could instantly understand what millions of users really
                                think about their platform? This AI-powered sentiment analysis tool transforms unstructured
                                user reviews into actionable intelligence, helping businesses make data-driven decisions
                                about user experience and feature development.
                            </p>
                            <p className="leading-relaxed">
                                The Music Sentiment Analyzer leverages IBM Watson's Natural Language Understanding API to
                                perform deep sentiment analysis on music streaming service reviews. It doesn't just
                                determine whether a review is positive or negative—it extracts key themes, identifies
                                mentioned features, and surfaces trending topics that matter most to users.
                            </p>
                            <p className="leading-relaxed">
                                Built as a full-stack web application, it provides real-time analytics through an intuitive
                                dashboard and a robust RESTful API. The system is designed to handle enterprise-scale
                                analysis while remaining accessible through a clean, mobile-responsive interface.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Brain size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">AI-Powered Analysis</h3>
                                        <p className="text-sm text-muted-foreground">
                                            IBM Watson NLU extracts sentiment, keywords, and entities from review text
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Server size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">RESTful API</h3>
                                        <p className="text-sm text-muted-foreground">
                                            6 endpoints for analysis, reviews, stats, comparison, and health monitoring
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Database size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Optimized Database</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Strategic indexing for fast query performance on SQLite
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Code size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Real-Time Dashboard</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Interactive visualizations with Chart.js for trends and comparisons
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Shield size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Security Hardened</h3>
                                        <p className="text-sm text-muted-foreground">
                                            SQL injection protection with parameterized queries and input validation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Zap size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">High Performance</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Fast response times with efficient processing architecture
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Implementation */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technical Implementation</h2>

                        <div className="space-y-8 max-w-4xl mx-auto">
                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <Code size={20} className="mr-3 text-primary" />
                                    Backend Architecture
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    The Flask backend follows a three-tier architecture with clear separation of concerns.
                                    The application serves as both the API layer and web server, handling request routing,
                                    business logic, and data validation.
                                </p>
                                <div className="bg-secondary/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                                <pre className="text-foreground">
{`# Database Optimization Example
CREATE INDEX idx_reviews_sentiment 
ON reviews(sentiment_score);

CREATE INDEX idx_reviews_service_date 
ON reviews(service_name, created_at);

-- Optimized query performance
SELECT service_name, AVG(sentiment_score) 
FROM reviews 
GROUP BY service_name;`}
                                </pre>
                                </div>
                            </div>

                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <Brain size={20} className="mr-3 text-primary" />
                                    IBM Watson Integration
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Integration with IBM Watson NLU for sentiment analysis, keyword extraction, and entity recognition.
                                    The system uses Watson's multi-feature analysis in a single API call to optimize usage.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                                        <span>IAM authentication with secure API key management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                                        <span>Automatic token refresh and retry logic for reliability</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                                        <span>Request batching and local caching to optimize API usage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                                        <span>Graceful degradation with queuing when API is unavailable</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4">API Endpoints</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <code className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">POST</code>
                                        <div>
                                            <code className="text-sm">/api/analyze</code>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Analyze review text and return sentiment, keywords, entities
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <code className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-sm">GET</code>
                                        <div>
                                            <code className="text-sm">/api/reviews</code>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Retrieve historical reviews with filtering options
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <code className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-sm">GET</code>
                                        <div>
                                            <code className="text-sm">/api/stats</code>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Aggregate analytics including sentiment trends and keywords
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <code className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-sm">GET</code>
                                        <div>
                                            <code className="text-sm">/api/compare</code>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Side-by-side comparison across services or time periods
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Challenges */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technical Challenges & Solutions</h2>

                        <div className="space-y-8 max-w-4xl mx-auto">
                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4 text-primary">
                                    Challenge 1: API Rate Limiting
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Problem</h4>
                                        <p className="text-muted-foreground">
                                            IBM Watson's free tier requires careful resource management to avoid quota exhaustion.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Solution</h4>
                                        <p className="text-muted-foreground">
                                            Implemented request batching, local caching of analyzed reviews, usage tracking,
                                            and graceful degradation with queuing when quota is exhausted.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4 text-primary">
                                    Challenge 2: Database Performance
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Problem</h4>
                                        <p className="text-muted-foreground">
                                            Analytical queries with GROUP BY and JOINs became slow as the database grew.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Solution</h4>
                                        <p className="text-muted-foreground">
                                            Added strategic indexes on frequently queried columns and optimized SQL queries
                                            by pushing filtering to WHERE clauses before aggregation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-8 card-hover">
                                <h3 className="text-xl font-semibold mb-4 text-primary">
                                    Challenge 3: Error Handling
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Problem</h4>
                                        <p className="text-muted-foreground">
                                            External API calls can fail for various reasons, requiring robust error handling.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Solution</h4>
                                        <p className="text-muted-foreground">
                                            Built comprehensive error handling with try-catch blocks, retry logic with
                                            exponential backoff, and user-friendly error messages with fallback modes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results & Impact */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp size={24} className="text-primary" />
                                    <h3 className="font-semibold text-lg">Technical Excellence</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">IBM Watson NLU integration with IAM authentication</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">RESTful API with 6 production-ready endpoints</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Optimized database queries with strategic indexing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Complete SQL injection protection</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code size={24} className="text-primary" />
                                    <h3 className="font-semibold text-lg">Skills Demonstrated</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Full-stack development with Flask and JavaScript</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Cloud AI/ML API integration and deployment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Database design and query optimization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-sm">Production-ready error handling and security</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Enhancements */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Future Enhancements</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="gradient-border p-6 text-center card-hover">
                                <h3 className="font-semibold mb-2">Multi-Language Support</h3>
                                <p className="text-sm text-muted-foreground">
                                    Extend Watson NLU for international reviews
                                </p>
                            </div>
                            <div className="gradient-border p-6 text-center card-hover">
                                <h3 className="font-semibold mb-2">Real-Time Alerting</h3>
                                <p className="text-sm text-muted-foreground">
                                    Notifications when sentiment drops below threshold
                                </p>
                            </div>
                            <div className="gradient-border p-6 text-center card-hover">
                                <h3 className="font-semibold mb-2">PostgreSQL Migration</h3>
                                <p className="text-sm text-muted-foreground">
                                    Upgrade for production-scale performance
                                </p>
                            </div>
                            <div className="gradient-border p-6 text-center card-hover">
                                <h3 className="font-semibold mb-2">User Authentication</h3>
                                <p className="text-sm text-muted-foreground">
                                    OAuth 2.0 for multi-tenant deployment
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};