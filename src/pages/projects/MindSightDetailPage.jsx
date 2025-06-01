import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Brain, Database, LineChart, Activity, Globe, Cpu, Eye, Github, Home
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { StarBackground } from '../../components/StarBackground';

const brainWaveTypes = [
    {
        type: 'Alpha Waves',
        description: 'Relaxed, calm mental state (8-13 Hz)',
        color: '#4CAF50',
        icon: <Activity size={20} />
    },
    {
        type: 'Beta Waves',
        description: 'Alert, actively thinking (13-30 Hz)',
        color: '#2196F3',
        icon: <Activity size={20} />
    },
    {
        type: 'Theta Waves',
        description: 'Deep meditation, sleep (4-8 Hz)',
        color: '#9C27B0',
        icon: <Activity size={20} />
    },
    {
        type: 'Delta Waves',
        description: 'Deep sleep, regeneration (0.5-4 Hz)',
        color: '#F44336',
        icon: <Activity size={20} />
    },
    {
        type: 'Gamma Waves',
        description: 'High cognitive processing (30-100 Hz)',
        color: '#FF9800',
        icon: <Activity size={20} />
    }
];

const features = [
    {
        name: 'Real-time Brain Wave Monitoring',
        description: 'Interactive visualization of alpha, beta, theta, delta, and gamma brain waves with real-time updates',
        icon: <LineChart size={24} />
    },
    {
        name: 'AI-Powered Neural Analysis',
        description: 'Integration with DeepSeek-R1 AI model for advanced pattern recognition and mental state analysis',
        icon: <Brain size={24} />
    },
    {
        name: 'Wave Pattern Correlation',
        description: 'Identification of relationships between different brain wave types and their significance for mental states',
        icon: <Database size={24} />
    },
    {
        name: 'Confidence-Scored Insights',
        description: 'Analysis results include confidence scores to indicate reliability of detected patterns',
        icon: <Cpu size={24} />
    }
];

export const MindSightDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'brain-waves', name: 'Brain Waves' },
        { id: 'technology', name: 'Technology' },
        { id: 'demo', name: 'Live Demo' }
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
                            <span className="text-foreground">MindSight</span>
                        </div>

                        {/* Project Header */}
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-6">
                                <Brain size={64} className="text-indigo-400" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="text-gradient">MindSight</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                AI-Powered brain activity visualization and analysis tool using advanced machine learning
                                to interpret neural patterns and mental states.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200">
                  AI-Powered
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                  Neuroscience
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-900/50 text-green-200">
                  Data Visualization
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-200">
                  React
                </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://mindsight-app.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button flex items-center gap-2"
                                >
                                    <Eye size={18} />
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/ayaan-cs/MindSight"
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
                                        <h2 className="text-3xl font-bold mb-6">Neural Data Visualized</h2>
                                        <p className="text-muted-foreground mb-6">
                                            MindSight is an AI-powered tool for visualizing and analyzing brain wave activity using advanced
                                            machine learning. Built with React and integrating with Hugging Face's DeepSeek-R1 model, it
                                            demonstrates the potential of AI in neuroscience applications.
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            The application provides a real-time visualization of different brain wave frequencies and uses
                                            AI to identify patterns and correlations that indicate specific mental states.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Create an intuitive interface for brain wave visualization</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Integrate with DeepSeek-R1 for advanced neural pattern analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Provide meaningful insights into brain activity patterns</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                                            <Brain size={20} className="mr-3 text-primary" />
                                            Technical Specifications
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-medium">Core Architecture</h4>
                                                <p className="text-muted-foreground text-sm">React-based single-page application with real-time visualization</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">AI Integration</h4>
                                                <p className="text-muted-foreground text-sm">Hugging Face DeepSeek-R1 model via Inference API</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Data Processing</h4>
                                                <p className="text-muted-foreground text-sm">Real-time synthetic data generation with 5 wave types</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Technology Stack</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">React</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Recharts</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Hugging Face API</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">JavaScript</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {features.map((feature, index) => (
                                            <div key={index} className="gradient-border p-6 card-hover">
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-primary/10 rounded-lg">
                                                        {feature.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg mb-2">{feature.name}</h4>
                                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Brain Waves Tab */}
                        {activeTab === 'brain-waves' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Brain Wave Types</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        MindSight visualizes and analyzes five primary types of brain waves, each associated
                                        with different mental states and cognitive processes.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {brainWaveTypes.map((wave, index) => (
                                        <div key={index} className="gradient-border p-6 card-hover">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div
                                                    className="p-2 rounded-lg"
                                                    style={{ backgroundColor: `${wave.color}20`, color: wave.color }}
                                                >
                                                    {wave.icon}
                                                </div>
                                                <h4 className="font-semibold text-lg">{wave.type}</h4>
                                            </div>
                                            <p className="text-muted-foreground">{wave.description}</p>
                                            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-1000"
                                                    style={{
                                                        backgroundColor: wave.color,
                                                        width: `${70 + index * 5}%`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-4">Neural Pattern Analysis</h3>
                                    <p className="text-muted-foreground">
                                        MindSight's AI component analyzes the relationships between different brain wave types to identify
                                        patterns that indicate specific mental states. The system can detect correlations between alpha and
                                        beta waves suggesting a relaxed but alert state, theta spikes indicating deep focus, and gamma bursts
                                        corresponding to complex information processing.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Technology Tab */}
                        {activeTab === 'technology' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Built with modern web technologies and advanced AI models for neuroscience applications.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6">DeepSeek-R1 Integration</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Natural Language Understanding</h4>
                                                    <p className="text-muted-foreground text-sm">Translates neural patterns into human-readable insights</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Pattern Recognition</h4>
                                                    <p className="text-muted-foreground text-sm">Identifies significant correlations between different wave types</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Confidence Scoring</h4>
                                                    <p className="text-muted-foreground text-sm">Provides reliability metrics for each detected pattern</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6">React & Recharts</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">React Components</h4>
                                                    <p className="text-muted-foreground text-sm">Modular architecture for maintainability and reusability</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Recharts Visualization</h4>
                                                    <p className="text-muted-foreground text-sm">Interactive line charts for real-time brain wave monitoring</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Modern UI Design</h4>
                                                    <p className="text-muted-foreground text-sm">Intuitive interface with dark mode for extended viewing sessions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Demo Tab */}
                        {activeTab === 'demo' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Visualization Dashboard</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Experience the full capabilities of MindSight through our interactive demo dashboard.
                                    </p>
                                </div>

                                <div className="gradient-border p-12 card-hover text-center">
                                    <div className="max-w-2xl mx-auto">
                                        <div className="mb-8">
                                            <Brain size={80} className="mx-auto text-primary mb-6" />
                                            <h3 className="text-2xl font-semibold mb-4">Interactive Demo Available</h3>
                                            <p className="text-muted-foreground mb-8">
                                                The demo showcases synthetic brain wave data visualization and real-time AI analysis
                                                using the DeepSeek-R1 model for neural pattern recognition.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <a
                                                href="https://mindsight-app.netlify.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cosmic-button w-full max-w-sm mx-auto flex items-center justify-center gap-3"
                                            >
                                                <Eye size={20} />
                                                Launch Interactive Demo
                                            </a>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                                <div className="text-center p-4">
                                                    <LineChart size={32} className="mx-auto text-primary mb-2" />
                                                    <h4 className="font-medium">Real-time Visualization</h4>
                                                    <p className="text-muted-foreground text-sm">Monitor brain waves as they change over time</p>
                                                </div>
                                                <div className="text-center p-4">
                                                    <Brain size={32} className="mx-auto text-primary mb-2" />
                                                    <h4 className="font-medium">AI-powered Insights</h4>
                                                    <p className="text-muted-foreground text-sm">Neural pattern analysis with confidence scoring</p>
                                                </div>
                                                <div className="text-center p-4">
                                                    <Database size={32} className="mx-auto text-primary mb-2" />
                                                    <h4 className="font-medium">Data Export Options</h4>
                                                    <p className="text-muted-foreground text-sm">Save and share your data in multiple formats</p>
                                                </div>
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
                        <h2 className="text-3xl font-bold mb-6">Experience MindSight in Action</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Try our interactive demo to see how MindSight visualizes brain wave activity and provides
                            AI-powered analysis in real-time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://mindsight-app.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center gap-2"
                            >
                                <Eye size={18} />
                                Launch Demo
                            </a>
                            <a
                                href="https://github.com/ayaan-cs/MindSight"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                            >
                                <Github size={18} />
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};