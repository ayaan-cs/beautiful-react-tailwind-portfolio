import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Database, Server, Brain, Network, LineChart, Terminal,
  AlertTriangle, Zap, Globe, Eye, Github, ArrowLeft, Home
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { StarBackground } from '../../components/StarBackground';

const attackTypes = [
  {
    type: 'Port Scanning',
    description: 'Reconnaissance attacks probing network services',
    method: 'Temporal pattern analysis + protocol anomaly detection',
    icon: <Terminal size={20} />
  },
  {
    type: 'Brute Force',
    description: 'Credential attacks against authentication systems',
    method: 'Rate limiting anomalies + destination profiling',
    icon: <Zap size={20} />
  },
  {
    type: 'Data Exfiltration',
    description: 'Unauthorized data transfers',
    method: 'Volumetric anomaly detection + destination analysis',
    icon: <Database size={20} />
  },
  {
    type: 'Denial of Service',
    description: 'Resource exhaustion attacks',
    method: 'Statistical outlier detection + protocol analysis',
    icon: <AlertTriangle size={20} />
  }
];

const features = [
  {
    name: 'Multi-model AI Detection Engine',
    description: 'Combines Isolation Forest, One-Class SVM, and DBSCAN algorithms in an ensemble approach for superior threat detection'
  },
  {
    name: 'Neural Feature Engineering',
    description: 'Automatically extracts and analyzes over 20 network flow characteristics using neural-inspired feature extraction'
  },
  {
    name: 'Zero-Day Threat Detection',
    description: 'Identifies previously unknown attack patterns through behavioral analysis and unsupervised learning'
  },
  {
    name: 'Explainable Security Intelligence',
    description: 'Provides human-readable insights into detection decisions, enabling rapid incident response'
  }
];

export const SentinelAIDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'features', name: 'Features' },
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
              <span className="text-foreground">SentinelAI</span>
            </div>

            {/* Project Header */}
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                <Shield size={64} className="text-red-400" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">SentinelAI</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Advanced AI-powered network intrusion detection system that leverages machine learning
                algorithms to identify malicious network activities in real-time.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-900/50 text-red-200">
                  AI-Powered
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200">
                  Cybersecurity
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-900/50 text-green-200">
                  Machine Learning
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                  Python
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://sentinelaiapp.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Eye size={18} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/ayaan-cs/sentinelai"
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
                    <h2 className="text-3xl font-bold mb-6">Cybersecurity Intelligence, Amplified</h2>
                    <p className="text-muted-foreground mb-6">
                      SentinelAI is a cutting-edge, AI-driven network intrusion detection system that leverages
                      multiple machine learning algorithms to identify malicious network activities in real-time.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Using advanced anomaly detection techniques and explainable AI, SentinelAI not only detects
                      potential threats but provides security analysts with clear, actionable insights into why
                      activities were flagged.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        <span>Develop an AI-powered system capable of detecting both known and unknown network threats</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        <span>Create explainable AI mechanisms that security professionals can understand and trust</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        <span>Implement real-time monitoring capabilities with minimal false positives</span>
                      </li>
                    </ul>
                  </div>

                  <div className="gradient-border p-8 card-hover">
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Terminal size={20} className="mr-3 text-primary" />
                      Technical Specifications
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Core Architecture</h4>
                        <p className="text-muted-foreground text-sm">Python-based system with ensemble machine learning</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Models Implemented</h4>
                        <p className="text-muted-foreground text-sm">Isolation Forest, One-Class SVM, DBSCAN</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Feature Engineering</h4>
                        <p className="text-muted-foreground text-sm">20+ network flow characteristics analyzed</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Python</span>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Scikit-learn</span>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Streamlit</span>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Pandas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attack Types */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-center">Attack Vectors Detected</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {attackTypes.map((attack, index) => (
                      <div key={index} className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {attack.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2">{attack.type}</h4>
                            <p className="text-muted-foreground text-sm mb-3">{attack.description}</p>
                            <p className="text-primary text-xs font-medium">{attack.method}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Advanced Security Features</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    SentinelAI combines cutting-edge machine learning with practical security applications
                    to deliver comprehensive threat detection capabilities.
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
              </div>
            )}

            {/* Technology Tab */}
            {activeTab === 'technology' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">AI Technology Stack</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Built with modern machine learning frameworks and designed for scalability and performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="gradient-border p-8 card-hover">
                    <h3 className="text-xl font-semibold mb-6">Ensemble Learning Approach</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">Isolation Forest</h4>
                          <p className="text-muted-foreground text-sm">Efficiently isolates anomalies by recursively partitioning the data space</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">One-Class SVM</h4>
                          <p className="text-muted-foreground text-sm">Creates a boundary around normal behavior to identify outliers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">DBSCAN</h4>
                          <p className="text-muted-foreground text-sm">Identifies clusters of normal behavior and flags points that don't belong</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-8 card-hover">
                    <h3 className="text-xl font-semibold mb-6">Explainable AI Insights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">Feature Importance Analysis</h4>
                          <p className="text-muted-foreground text-sm">Identifies which network characteristics contributed most to anomaly detection</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">Comparative Visualization</h4>
                          <p className="text-muted-foreground text-sm">Shows how anomalous flows differ from normal network behavior</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <div>
                          <h4 className="font-medium">Natural Language Insights</h4>
                          <p className="text-muted-foreground text-sm">Translates complex detection patterns into actionable security intelligence</p>
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
                  <h2 className="text-3xl font-bold mb-4">Interactive Security Dashboard</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Experience the full capabilities of SentinelAI through our interactive demo dashboard.
                  </p>
                </div>

                <div className="gradient-border p-12 card-hover text-center">
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-8">
                      <Shield size={80} className="mx-auto text-primary mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">Live Demo Available</h3>
                      <p className="text-muted-foreground mb-8">
                        The demo includes synthetic network flow data that simulates both normal traffic
                        and various attack patterns, showcasing real-time threat detection and analysis.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="https://sentinelaiapp.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button w-full max-w-sm mx-auto flex items-center justify-center gap-3"
                      >
                        <Eye size={20} />
                        Launch Interactive Demo
                      </a>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="text-center p-4">
                          <Network size={32} className="mx-auto text-primary mb-2" />
                          <h4 className="font-medium">Real-time Monitoring</h4>
                          <p className="text-muted-foreground text-sm">Monitor network traffic and anomalies as they occur</p>
                        </div>
                        <div className="text-center p-4">
                          <Brain size={32} className="mx-auto text-primary mb-2" />
                          <h4 className="font-medium">AI Insights</h4>
                          <p className="text-muted-foreground text-sm">Understand why specific activities were flagged</p>
                        </div>
                        <div className="text-center p-4">
                          <LineChart size={32} className="mx-auto text-primary mb-2" />
                          <h4 className="font-medium">Performance Metrics</h4>
                          <p className="text-muted-foreground text-sm">View detection accuracy and model performance</p>
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
            <h2 className="text-3xl font-bold mb-6">Experience SentinelAI in Action</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our interactive demo to see how SentinelAI detects and explains network anomalies in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://sentinelaiapp.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2"
              >
                <Eye size={18} />
                Launch Demo
              </a>
              <a
                href="https://github.com/ayaan-cs/sentinelai"
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