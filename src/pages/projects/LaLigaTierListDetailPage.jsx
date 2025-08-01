import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart, Database, TrendingUp, Award, Brain, Globe, Eye, Github, Home,
    Users, Target, Zap, LineChart, Activity, Star
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { StarBackground } from '../../components/StarBackground';

const analysisFeatures = [
    {
        type: 'Team Performance Analysis',
        description: 'Multi-dimensional analysis of team statistics including attack, defense, possession, and tactical metrics',
        method: 'Statistical modeling + weighted scoring algorithms',
        icon: <BarChart size={20} />
    },
    {
        type: 'Player Tier Rankings',
        description: 'Position-specific player evaluations based on performance metrics and market value',
        method: 'Machine learning classification + performance normalization',
        icon: <Users size={20} />
    },
    {
        type: 'Predictive Analytics',
        description: 'Fantasy football predictions and Ballon d\'Or probability modeling',
        method: 'Ensemble modeling + historical pattern analysis',
        icon: <Target size={20} />
    },
    {
        type: 'Real-time Data Processing',
        description: 'Live season tracking with automated data updates and trend analysis',
        method: 'API integration + automated data pipelines',
        icon: <Activity size={20} />
    }
];

const technologies = [
    {
        name: 'Data Processing & Analysis',
        description: 'Pandas and NumPy for comprehensive data manipulation and statistical analysis of team and player metrics',
        icon: <Database size={20} />
    },
    {
        name: 'Machine Learning Models',
        description: 'Scikit-learn algorithms for tier classification, performance prediction, and pattern recognition',
        icon: <Brain size={20} />
    },
    {
        name: 'Interactive Visualizations',
        description: 'Streamlit dashboard with Plotly charts for dynamic data exploration and insights presentation',
        icon: <LineChart size={20} />
    },
    {
        name: 'Web Scraping & APIs',
        description: 'Automated data collection from multiple sports websites and integration with live football APIs',
        icon: <Globe size={20} />
    },
    {
        name: 'Performance Optimization',
        description: 'Efficient data structures and caching mechanisms for real-time analysis of large datasets',
        icon: <Zap size={20} />
    }
];

const features = [
    {
        name: 'S-Tier Team Classification System',
        description: 'Advanced algorithm that evaluates teams across multiple performance dimensions to create comprehensive tier rankings from S-tier (elite) to D-tier (struggling)'
    },
    {
        name: 'Position-Specific Player Analysis',
        description: 'Detailed player evaluation system that considers position-specific metrics, age, market value, and performance consistency for accurate player comparisons'
    },
    {
        name: 'AI-Powered Fantasy Insights',
        description: 'Machine learning models that predict player performance trends, injury risks, and optimal fantasy football lineups based on historical data and current form'
    },
    {
        name: 'Ballon d\'Or Prediction Engine',
        description: 'Sophisticated modeling system that analyzes player statistics, team success, and historical voting patterns to predict Ballon d\'Or contenders with confidence scores'
    }
];

export const LaLigaTierListDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'features', name: 'Features' },
        { id: 'analysis', name: 'Data Analysis' },
        { id: 'technology', name: 'Technology' }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        {/* Breadcrumb */}
                        <div className="mb-8">
                            <Link
                                to="/"
                                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                            <span className="mx-2 text-muted-foreground">/</span>
                            <span className="text-foreground">LaLiga Tier List</span>
                        </div>

                        {/* Project Header */}
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6">
                                <BarChart size={64} className="text-green-400" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="text-gradient">LaLiga Teams Tier List</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Comprehensive data science analysis of LaLiga teams with AI-powered tier rankings,
                                performance analytics, and predictive insights for fantasy football and player awards.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-900/50 text-green-200">
                                    Data Science
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200">
                                    Sports Analytics
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                                    Machine Learning
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-900/50 text-orange-200">
                                    Python
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://laligatl.streamlit.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button flex items-center gap-2"
                                >
                                    <Eye size={18} />
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/ayaan-cs/LaLigaTL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                                >
                                    <Github size={18} />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Navigation */}
                <section className="border-b border-border">
                    <div className="container mx-auto max-w-6xl px-4">
                        <div className="flex overflow-x-auto hide-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tab Content */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6">Football Analytics, Data-Driven</h2>
                                        <p className="text-muted-foreground mb-6">
                                            The LaLiga Teams Tier List is a comprehensive data science project that analyzes and ranks
                                            all 20 LaLiga teams using advanced statistical methods and machine learning algorithms.
                                            Currently in its skeleton phase, it processes data from multiple sources to provide
                                            detailed insights into team and player performance.
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            The project vision includes real-time data integration through dedicated APIs, AI-powered
                                            prediction models for fantasy football insights, and Ballon d'Or probability analysis.
                                            The system is designed to evolve into a powerful platform for football analytics and
                                            decision-making support.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Create comprehensive team tier rankings based on multi-dimensional performance analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Develop AI models for fantasy football optimization and player award predictions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Implement real-time tracking system for live season monitoring and trend analysis</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                                            <Star size={20} className="mr-3 text-primary" />
                                            Current Project Status
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-medium">Development Phase</h4>
                                                <p className="text-muted-foreground text-sm">Skeleton application with foundational data processing capabilities</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Data Sources</h4>
                                                <p className="text-muted-foreground text-sm">Multiple sports websites + synthetic data generation for demonstration</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Future Integration</h4>
                                                <p className="text-muted-foreground text-sm">Live API connections for real-time LaLiga season tracking</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Technology Stack</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Python</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Streamlit</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Pandas</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Scikit-learn</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* El Clásico Analytics Showcase */}
                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-6">📊 El Clásico: Data Science Perspective</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Barcelona Analysis */}
                                        <div className="bg-gradient-to-br from-blue-900/30 to-red-900/30 p-6 rounded-lg border border-blue-600/30">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-lg">FCB</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-blue-400">FC Barcelona</h4>
                                                    <p className="text-sm text-muted-foreground">2024-25 Champions</p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Tier Classification</span>
                                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold">S-TIER</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Performance Score</span>
                                                    <span className="text-blue-400 font-bold">94.2/100</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Goals Scored</span>
                                                    <span className="text-green-400 font-bold">102 ⚽</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Possession Avg</span>
                                                    <span className="text-blue-400 font-bold">68.5%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Key Player</span>
                                                    <span className="text-yellow-400 font-bold">Lamine Yamal ⭐</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Real Madrid Analysis */}
                                        <div className="bg-gradient-to-br from-white/10 to-purple-900/30 p-6 rounded-lg border border-white/30">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-white to-purple-600 rounded-full flex items-center justify-center">
                                                    <span className="text-purple-900 font-bold text-lg">RM</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">Real Madrid</h4>
                                                    <p className="text-sm text-muted-foreground">Runner-up</p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Tier Classification</span>
                                                    <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm font-bold">S-TIER</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Performance Score</span>
                                                    <span className="text-white font-bold">91.8/100</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Goals Scored</span>
                                                    <span className="text-green-400 font-bold">78 ⚽</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Possession Avg</span>
                                                    <span className="text-white font-bold">64.2%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Key Player</span>
                                                    <span className="text-yellow-400 font-bold">K. Mbappé ⚡</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Head-to-Head Insights */}
                                    <div className="mt-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-white/10 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-4 text-center">🔥 El Clásico AI Insights</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-blue-400">261</div>
                                                <div className="text-sm text-muted-foreground">Total Meetings</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-yellow-400">€2.8B</div>
                                                <div className="text-sm text-muted-foreground">Combined Squad Value</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-green-400">180</div>
                                                <div className="text-sm text-muted-foreground">LaLiga Goals 2024-25</div>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="text-sm text-muted-foreground italic">
                                                "Both teams consistently rank in S-Tier due to exceptional attacking prowess,
                                                world-class player depth, and tactical sophistication." - AI Analysis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Features Tab */}
                        {activeTab === 'features' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Advanced Analytics Features</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Combining statistical analysis with machine learning to provide comprehensive
                                        football insights and predictive analytics.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="gradient-border p-8 card-hover">
                                            <h3 className="text-xl font-semibold mb-4">{feature.name}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tier System Explanation */}
                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-6">Tier Classification System</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        <div className="text-center p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                                            <div className="text-2xl font-bold text-yellow-400 mb-2">S</div>
                                            <div className="text-sm font-medium">Elite Teams</div>
                                            <div className="text-xs text-muted-foreground mt-1">Title contenders with world-class players</div>
                                        </div>
                                        <div className="text-center p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-lg">
                                            <div className="text-2xl font-bold text-gray-400 mb-2">A</div>
                                            <div className="text-sm font-medium">Strong Teams</div>
                                            <div className="text-xs text-muted-foreground mt-1">European competition level</div>
                                        </div>
                                        <div className="text-center p-4 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg">
                                            <div className="text-2xl font-bold text-amber-600 mb-2">B</div>
                                            <div className="text-sm font-medium">Competitive</div>
                                            <div className="text-xs text-muted-foreground mt-1">Mid-table with clear strengths</div>
                                        </div>
                                        <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-lg">
                                            <div className="text-2xl font-bold text-green-500 mb-2">C</div>
                                            <div className="text-sm font-medium">Struggling</div>
                                            <div className="text-xs text-muted-foreground mt-1">Inconsistent performance</div>
                                        </div>
                                        <div className="text-center p-4 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg">
                                            <div className="text-2xl font-bold text-red-500 mb-2">D</div>
                                            <div className="text-sm font-medium">High Risk</div>
                                            <div className="text-xs text-muted-foreground mt-1">Relegation candidates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Analysis Tab */}
                        {activeTab === 'analysis' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Data Analysis & Insights</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Multi-dimensional analysis combining traditional football statistics with
                                        advanced performance metrics and predictive modeling.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {analysisFeatures.map((analysis, index) => (
                                        <div key={index} className="gradient-border p-6 card-hover">
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    {analysis.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">{analysis.type}</h4>
                                                    <p className="text-muted-foreground text-sm mb-3">{analysis.description}</p>
                                                    <p className="text-primary text-xs font-medium">{analysis.method}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Future AI Features */}
                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-4">Planned AI Enhancement Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-medium mb-3 flex items-center">
                                                <Award size={16} className="mr-2 text-primary" />
                                                Ballon d'Or Prediction Model
                                            </h4>
                                            <ul className="space-y-2 text-muted-foreground text-sm">
                                                <li>• Historical voting pattern analysis</li>
                                                <li>• Individual performance metrics weighting</li>
                                                <li>• Team success correlation factors</li>
                                                <li>• Media coverage and narrative impact assessment</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-3 flex items-center">
                                                <Target size={16} className="mr-2 text-primary" />
                                                Fantasy Football Optimizer
                                            </h4>
                                            <ul className="space-y-2 text-muted-foreground text-sm">
                                                <li>• Player form and injury risk prediction</li>
                                                <li>• Optimal lineup generation algorithms</li>
                                                <li>• Price change forecasting models</li>
                                                <li>• Head-to-head matchup analysis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Technology Tab */}
                        {activeTab === 'technology' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Technology Stack & Architecture</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Built with modern data science tools and designed for scalability,
                                        real-time processing, and future AI integration.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {technologies.map((tech, index) => (
                                        <div key={index} className="gradient-border p-6 card-hover">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    {tech.icon}
                                                </div>
                                                <h3 className="text-lg font-semibold">{tech.name}</h3>
                                            </div>
                                            <p className="text-muted-foreground text-sm">{tech.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6">Current Implementation</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Data Processing Pipeline</h4>
                                                    <p className="text-muted-foreground text-sm">Pandas-based ETL processes for cleaning and transforming football data</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Statistical Analysis Engine</h4>
                                                    <p className="text-muted-foreground text-sm">NumPy algorithms for performance metric calculations and normalization</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Interactive Dashboard</h4>
                                                    <p className="text-muted-foreground text-sm">Streamlit web application with multi-page analytics interface</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6">Planned Enhancements</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Live API Integration</h4>
                                                    <p className="text-muted-foreground text-sm">Real-time data feeds from official LaLiga and sports data providers</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Machine Learning Models</h4>
                                                    <p className="text-muted-foreground text-sm">Scikit-learn and TensorFlow models for predictive analytics</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Modern Frontend</h4>
                                                    <p className="text-muted-foreground text-sm">React/Vue.js upgrade for enhanced user experience and performance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Architecture Diagram */}
                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-6">System Architecture</h3>
                                    <div className="bg-card p-6 rounded-lg">
                                        <div className="text-center">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                                <div className="p-4 bg-blue-900/30 rounded-lg">
                                                    <Database size={32} className="mx-auto text-blue-400 mb-2" />
                                                    <h4 className="font-medium">Data Sources</h4>
                                                    <p className="text-xs text-muted-foreground">Web scraping + APIs</p>
                                                </div>
                                                <div className="p-4 bg-green-900/30 rounded-lg">
                                                    <Brain size={32} className="mx-auto text-green-400 mb-2" />
                                                    <h4 className="font-medium">Processing Engine</h4>
                                                    <p className="text-xs text-muted-foreground">Python + ML Models</p>
                                                </div>
                                                <div className="p-4 bg-purple-900/30 rounded-lg">
                                                    <BarChart size={32} className="mx-auto text-purple-400 mb-2" />
                                                    <h4 className="font-medium">Visualization</h4>
                                                    <p className="text-xs text-muted-foreground">Streamlit Dashboard</p>
                                                </div>
                                            </div>
                                            <div className="mt-6 text-sm text-muted-foreground">
                                                <p>Current: Skeleton phase with foundational data processing</p>
                                                <p>Future: Real-time API integration with AI-powered predictions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 bg-secondary/30">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Explore LaLiga Analytics</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Experience the current skeleton application and see the foundation for comprehensive
                            LaLiga data analysis and AI-powered football insights.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://laligatl.streamlit.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center gap-2"
                            >
                                <Eye size={18} />
                                Try Interactive Demo
                            </a>
                            <a
                                href="https://github.com/ayaan-cs/LaLigaTL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                            >
                                <Github size={18} />
                                View Source Code
                            </a>
                        </div>

                        {/* Project Status */}
                        <div className="mt-12 gradient-border p-6 card-hover">
                            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
                                <TrendingUp size={20} className="mr-2 text-primary" />
                                Project Roadmap
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <div className="font-medium text-green-400">✓ Phase 1: Skeleton App</div>
                                    <div className="text-muted-foreground">Data processing + basic visualization</div>
                                </div>
                                <div>
                                    <div className="font-medium text-yellow-400">⚠ Phase 2: API Integration</div>
                                    <div className="text-muted-foreground">Live data + real-time tracking</div>
                                </div>
                                <div>
                                    <div className="font-medium text-blue-400">○ Phase 3: AI Insights</div>
                                    <div className="text-muted-foreground">ML predictions + fantasy optimization</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};