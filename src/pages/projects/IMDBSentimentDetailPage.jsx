import { ArrowLeft, Github, ExternalLink, Brain, Database, Sparkles, TrendingUp, Zap, Star, BarChart3, Code, FileText, Award, Target, Cpu, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { StarBackground } from "../../components/StarBackground";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const IMDBSentimentDetailPage = () => {
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        setStatsVisible(true);
    }, []);

    // Animated counter for stats
    const AnimatedStat = ({ end, duration = 2000, suffix = "" }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!statsVisible) return;

            let startTime;
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;

                if (progress < 1) {
                    setCount(Math.floor(end * progress));
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(animate);
        }, [statsVisible, end, duration]);

        return <span>{count.toLocaleString()}{suffix}</span>;
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-background"></div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <Link
                            to="/#projects"
                            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Projects
                        </Link>

                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-300 text-sm mb-4">
                                <Brain size={16} className="mr-2" />
                                Data Science & AI
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                IMDB Movie Review <span className="text-primary">Sentiment Analysis</span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                Enterprise-Level Sentiment Analysis Platform powered by Machine Learning and AI.
                                Processing 50,000+ reviews with 88% accuracy using traditional ML and Hugging Face transformers.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-12">
                                <a
                                    href="https://imdbsentimentapp.streamlit.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button flex items-center gap-2"
                                >
                                    <Sparkles size={18} />
                                    View Live Dashboard
                                </a>
                                <a
                                    href="https://github.com/ayaan-cs/Movie-Review-Sentiment-Analysis-Insights-Platform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                                >
                                    <Github size={18} />
                                    View Source Code
                                </a>
                            </div>

                            {/* Animated Stats Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                <div className="gradient-border p-6 card-hover">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {statsVisible && <AnimatedStat end={50} suffix="K+" />}
                                    </div>
                                    <div className="text-sm text-muted-foreground">Reviews Analyzed</div>
                                </div>
                                <div className="gradient-border p-6 card-hover">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {statsVisible && <AnimatedStat end={88} suffix="%" />}
                                    </div>
                                    <div className="text-sm text-muted-foreground">Model Accuracy</div>
                                </div>
                                <div className="gradient-border p-6 card-hover">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {statsVisible && <AnimatedStat end={15} suffix="+" />}
                                    </div>
                                    <div className="text-sm text-muted-foreground">Visualizations</div>
                                </div>
                                <div className="gradient-border p-6 card-hover">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {statsVisible && <AnimatedStat end={5} />}
                                    </div>
                                    <div className="text-sm text-muted-foreground">Topic Themes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Badges */}
                <section className="py-8 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {['Python', 'scikit-learn', 'Hugging Face', 'Streamlit', 'NLTK', 'pandas', 'Plotly', 'DistilBERT'].map((tech) => (
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

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-red-900/20">
                                        <Target size={24} className="text-red-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Problem</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Manual sentiment analysis of thousands of movie reviews is time-consuming and inconsistent.
                                    Need automated, scalable solution for production environments.
                                </p>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-blue-900/20">
                                        <Zap size={24} className="text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Solution</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Comprehensive platform combining traditional ML (4 models) with modern AI (DistilBERT),
                                    featuring statistical analysis and interactive deployment.
                                </p>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-green-900/20">
                                        <TrendingUp size={24} className="text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Impact</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Demonstrates production-ready data science skills: from data engineering to model
                                    deployment, with enterprise-level accuracy and scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Special Feature Boxes (El Clásico Style) */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            Standout <span className="text-primary">Features</span>
                        </h2>

                        <div className="space-y-8">
                            {/* AI-Powered Intelligence Box */}
                            <div className="relative overflow-hidden rounded-lg card-hover">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40"></div>
                                <div className="absolute inset-0 backdrop-blur-sm"></div>

                                <div className="relative p-8 border border-purple-500/30">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-full bg-purple-900/50 backdrop-blur-md">
                                            <Brain size={40} className="text-purple-300" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-2xl font-bold">AI-Powered Intelligence</h3>
                                                <span className="px-3 py-1 rounded-full bg-purple-900/50 text-purple-200 text-xs font-medium">
                                                Cutting-Edge
                                            </span>
                                            </div>

                                            <p className="text-muted-foreground mb-6">
                                                Integrated Hugging Face's DistilBERT transformer for zero-shot sentiment classification.
                                                Achieved 88.60% accuracy without additional training, showcasing transfer learning mastery
                                                and modern NLP deployment capabilities.
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-purple-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-purple-300 mb-1">83.60%</div>
                                                    <div className="text-xs text-muted-foreground">Transformer Accuracy</div>
                                                </div>
                                                <div className="bg-purple-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-purple-300 mb-1">Zero-Shot</div>
                                                    <div className="text-xs text-muted-foreground">No Fine-Tuning</div>
                                                </div>
                                                <div className="bg-purple-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-purple-300 mb-1">DistilBERT</div>
                                                    <div className="text-xs text-muted-foreground">SOTA Model</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Big Data Mastery Box */}
                            <div className="relative overflow-hidden rounded-lg card-hover">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-green-900/40 to-emerald-900/40"></div>
                                <div className="absolute inset-0 backdrop-blur-sm"></div>

                                <div className="relative p-8 border border-teal-500/30">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-full bg-teal-900/50 backdrop-blur-md">
                                            <Database size={40} className="text-teal-300" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-2xl font-bold">Big Data Mastery</h3>
                                                <span className="px-3 py-1 rounded-full bg-teal-900/50 text-teal-200 text-xs font-medium">
                                                Enterprise-Scale
                                            </span>
                                            </div>

                                            <p className="text-muted-foreground mb-6">
                                                Processed 50,000+ IMDB reviews totaling 11.6 million words with professional data engineering.
                                                Implemented statistical significance testing, correlation analysis, and rigorous validation
                                                methodologies for production-ready insights.
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-teal-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-teal-300 mb-1">50,000+</div>
                                                    <div className="text-xs text-muted-foreground">Reviews Processed</div>
                                                </div>
                                                <div className="bg-teal-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-teal-300 mb-1">11.6M</div>
                                                    <div className="text-xs text-muted-foreground">Words Analyzed</div>
                                                </div>
                                                <div className="bg-teal-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-teal-300 mb-1">232</div>
                                                    <div className="text-xs text-muted-foreground">Avg. Words/Review</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Interactive Dashboard Box */}
                            <div className="relative overflow-hidden rounded-lg card-hover">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-red-900/40 to-pink-900/40 animate-pulse" style={{ animationDuration: '3s' }}></div>
                                <div className="absolute inset-0 backdrop-blur-sm"></div>

                                <div className="relative p-8 border border-orange-500/30">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-full bg-orange-900/50 backdrop-blur-md">
                                            <Sparkles size={40} className="text-orange-300" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-2xl font-bold">Live Interactive Dashboard</h3>
                                                <span className="px-3 py-1 rounded-full bg-orange-900/50 text-orange-200 text-xs font-medium animate-pulse">
                                                Try It Now!
                                            </span>
                                            </div>

                                            <p className="text-muted-foreground mb-6">
                                                Deployed production-ready Streamlit web application with real-time sentiment predictions.
                                                Compare traditional ML vs. AI transformer models, analyze text metrics (polarity, subjectivity),
                                                and process batch reviews—all with an intuitive interface.
                                            </p>

                                            <div className="grid md:grid-cols-4 gap-4">
                                                <div className="bg-orange-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-orange-300 mb-1">Real-Time</div>
                                                    <div className="text-xs text-muted-foreground">Predictions</div>
                                                </div>
                                                <div className="bg-orange-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-orange-300 mb-1">Dual Model</div>
                                                    <div className="text-xs text-muted-foreground">Comparison</div>
                                                </div>
                                                <div className="bg-orange-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-orange-300 mb-1">Text Stats</div>
                                                    <div className="text-xs text-muted-foreground">Analytics</div>
                                                </div>
                                                <div className="bg-orange-900/20 rounded-lg p-4 backdrop-blur-sm">
                                                    <div className="text-2xl font-bold text-orange-300 mb-1">Batch</div>
                                                    <div className="text-xs text-muted-foreground">Processing</div>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <a
                                                    href="https://imdbsentimentapp.streamlit.app/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white transition-all"
                                                >
                                                    <ExternalLink size={18} />
                                                    Launch Dashboard Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Model Performance Comparison */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Model Performance</h2>

                        <div className="gradient-border p-8 card-hover mb-8">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                <Award size={24} className="text-primary" />
                                Comprehensive Model Comparison
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { name: 'Logistic Regression', accuracy: 88.45, f1: 88.35, roc: 95.52, badge: 'Best Model' },
                                    { name: 'Naive Bayes', accuracy: 85.21, f1: 85.18, roc: 93.12 },
                                    { name: 'Random Forest', accuracy: 84.31, f1: 84.29, roc: 92.45 },
                                    { name: 'Gradient Boosting', accuracy: 80.69, f1: 80.67, roc: 89.34 },
                                    { name: 'DistilBERT (Transformer)', accuracy: 83.60, f1: 83.52, roc: 91.20, badge: 'AI Model' },
                                ].map((model, index) => (
                                    <div key={index} className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="font-semibold">{model.name}</span>
                                                {model.badge && (
                                                    <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">
                                                    {model.badge}
                                                </span>
                                                )}
                                            </div>
                                            <span className="text-2xl font-bold text-primary">{model.accuracy}%</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <div className="text-muted-foreground">Accuracy</div>
                                                <div className="font-semibold">{model.accuracy}%</div>
                                            </div>
                                            <div>
                                                <div className="text-muted-foreground">F1 Score</div>
                                                <div className="font-semibold">{model.f1}%</div>
                                            </div>
                                            <div>
                                                <div className="text-muted-foreground">ROC AUC</div>
                                                <div className="font-semibold">{model.roc}%</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technical Architecture</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Database size={24} className="text-primary" />
                                    <h3 className="font-semibold">Data Pipeline</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Hugging Face datasets integration</li>
                                    <li>• 50K reviews (balanced dataset)</li>
                                    <li>• Text cleaning & normalization</li>
                                    <li>• Tokenization & lemmatization</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code size={24} className="text-primary" />
                                    <h3 className="font-semibold">NLP Processing</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• TF-IDF vectorization</li>
                                    <li>• N-gram analysis (1-3 grams)</li>
                                    <li>• Sentiment polarity scoring</li>
                                    <li>• Topic modeling (LDA)</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Brain size={24} className="text-primary" />
                                    <h3 className="font-semibold">Model Training</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• 4 scikit-learn models</li>
                                    <li>• Cross-validation (5-fold)</li>
                                    <li>• Hyperparameter tuning</li>
                                    <li>• Performance benchmarking</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Cpu size={24} className="text-primary" />
                                    <h3 className="font-semibold">AI Integration</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Hugging Face DistilBERT</li>
                                    <li>• Zero-shot classification</li>
                                    <li>• Transfer learning</li>
                                    <li>• Model comparison pipeline</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <BarChart3 size={24} className="text-primary" />
                                    <h3 className="font-semibold">Visualization</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• 15+ professional charts</li>
                                    <li>• Interactive Plotly graphs</li>
                                    <li>• Word clouds & heatmaps</li>
                                    <li>• Statistical plots</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <Activity size={24} className="text-primary" />
                                    <h3 className="font-semibold">Deployment</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Streamlit web framework</li>
                                    <li>• Real-time predictions</li>
                                    <li>• Interactive UI/UX</li>
                                    <li>• Cloud hosting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Insights */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Key Insights Discovered</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Star size={20} className="text-primary" />
                                    Topic Modeling Results
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Latent Dirichlet Allocation (LDA) identified 5 distinct themes in movie reviews:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li>• <strong>Plot & Story:</strong> Narrative structure and storytelling</li>
                                    <li>• <strong>Acting Performance:</strong> Cast and character portrayals</li>
                                    <li>• <strong>Production Quality:</strong> Cinematography and technical aspects</li>
                                    <li>• <strong>Entertainment Value:</strong> Overall enjoyment and engagement</li>
                                    <li>• <strong>Genre Elements:</strong> Horror, comedy, drama characteristics</li>
                                </ul>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <TrendingUp size={20} className="text-primary" />
                                    Statistical Findings
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-secondary/30 rounded-lg p-4">
                                        <div className="font-semibold mb-2">Strong Polarity Correlation</div>
                                        <div className="text-sm text-muted-foreground">
                                            Sentiment polarity shows -0.56 correlation with negative reviews,
                                            making it a reliable predictor of overall sentiment.
                                        </div>
                                    </div>
                                    <div className="bg-secondary/30 rounded-lg p-4">
                                        <div className="font-semibold mb-2">Word Count Patterns</div>
                                        <div className="text-sm text-muted-foreground">
                                            Positive reviews average 233 words vs. 230 for negative,
                                            with statistical significance (p &lt; 0.001).
                                        </div>
                                    </div>
                                    <div className="bg-secondary/30 rounded-lg p-4">
                                        <div className="font-semibold mb-2">Top Predictive Features</div>
                                        <div className="text-sm text-muted-foreground">
                                            Chi-square testing identified "excellent", "poor", "brilliant",
                                            and "waste" as top discriminative terms.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learning Outcomes */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Skills Demonstrated</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Advanced NLP', desc: 'Text preprocessing, TF-IDF, topic modeling, sentiment analysis' },
                                { title: 'Machine Learning', desc: 'Model training, evaluation, comparison, hyperparameter tuning' },
                                { title: 'Deep Learning', desc: 'Transformer integration, transfer learning, zero-shot classification' },
                                { title: 'Statistical Analysis', desc: 'Hypothesis testing, correlation analysis, significance testing' },
                                { title: 'Data Visualization', desc: '15+ professional charts, interactive plots, insightful graphics' },
                                { title: 'Production Deployment', desc: 'Web app development, cloud hosting, user interface design' },
                            ].map((skill, index) => (
                                <div key={index} className="gradient-border p-6 card-hover text-center">
                                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Future Enhancements */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Future Roadmap</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Fine-tune transformer on IMDB dataset',
                                'Aspect-based sentiment analysis',
                                'Multi-class sentiment (1-5 stars)',
                                'REST API deployment',
                                'Real-time streaming analysis',
                                'Mobile app integration',
                            ].map((enhancement, index) => (
                                <div key={index} className="gradient-border p-4 card-hover flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <span className="text-sm">{enhancement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to <span className="text-primary">Explore?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Try the live dashboard, explore the code, or dive into the detailed analysis report.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://imdbsentimentapp.streamlit.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center gap-2"
                            >
                                <Sparkles size={18} />
                                Launch Dashboard
                            </a>
                            <a
                                href="https://github.com/ayaan-cs/Movie-Review-Sentiment-Analysis-Insights-Platform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                            >
                                <Github size={18} />
                                View GitHub
                            </a>
                            <a
                                href="https://github.com/ayaan-cs/Movie-Review-Sentiment-Analysis-Insights-Platform/blob/b6c2a67558b82225ae71d0b0f8cce3bfd8fe60d0/analysis_results/FINAL_REPORT.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                            >
                                <FileText size={18} />
                                Read Report
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};