import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, Lock, Database, Server, Activity, BarChart, Terminal,
    AlertTriangle, Zap, Globe, Eye, Github, Home, Network, Clock
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { StarBackground } from '../../components/StarBackground';

const threatTypes = [
    {
        type: 'SQL Injection',
        description: 'Malicious SQL commands inserted into API parameters',
        method: 'Pattern recognition + AI classification',
        icon: <Database size={20} />
    },
    {
        type: 'Rate Limiting Abuse',
        description: 'Abnormal request frequencies from single sources',
        method: 'Statistical analysis + distributed rate tracking',
        icon: <Clock size={20} />
    },
    {
        type: 'Authorization Bypass',
        description: 'Attempts to access unauthorized resources',
        method: 'Token validation + permission analysis',
        icon: <Lock size={20} />
    },
    {
        type: 'Data Exfiltration',
        description: 'Unusually large outbound data transfers',
        method: 'Response size monitoring + anomaly detection',
        icon: <AlertTriangle size={20} />
    }
];

const technologies = [
    {
        name: 'Concurrent Processing',
        description: 'Leverages Golang\'s goroutines and channels for high-performance parallel processing',
        icon: <Zap size={20} />
    },
    {
        name: 'Real-time Analytics',
        description: 'Streaming analytics pipeline for immediate threat detection and response',
        icon: <Activity size={20} />
    },
    {
        name: 'In-memory Caching',
        description: 'Redis-backed caching for fast lookup of threat signatures and rate limits',
        icon: <Database size={20} />
    },
    {
        name: 'WebSocket Alerts',
        description: 'Real-time notifications and dashboard updates via WebSockets',
        icon: <Globe size={20} />
    },
    {
        name: 'Docker Containerization',
        description: 'Containerized deployment for easy scaling and distribution',
        icon: <Server size={20} />
    }
];

const features = [
    {
        name: 'High-Performance Proxy Architecture',
        description: 'Golang-powered reverse proxy with minimal latency overhead, capable of handling thousands of requests per second'
    },
    {
        name: 'Real-time Threat Detection Engine',
        description: 'Pattern matching and heuristic analysis to identify common API attack vectors like SQL injection, XSS, and CSRF attempts'
    },
    {
        name: 'Distributed Rate Limiting',
        description: 'Redis-backed rate limiting system to prevent brute force and DDoS attacks across multiple server instances'
    },
    {
        name: 'Analytics Dashboard',
        description: 'Real-time visualization of API traffic patterns, threat detections, and system performance metrics'
    }
];

export const GoGuardianDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'features', name: 'Features' },
        { id: 'threats', name: 'Threat Detection' },
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
                            <span className="text-foreground">GoGuardian</span>
                        </div>

                        {/* Project Header */}
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full mb-6">
                                <Shield size={64} className="text-teal-400" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="text-gradient">GoGuardian</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                High-Performance API Security Monitoring System built with Golang, leveraging concurrent
                                processing to detect and mitigate threats in real-time.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-900/50 text-teal-200">
                  Golang
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-900/50 text-red-200">
                  Cybersecurity
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200">
                  API Protection
                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                  Real-time Analytics
                </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/ayaan-cs/goguardian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button flex items-center gap-2"
                                >
                                    <Eye size={18} />
                                    View Demo
                                </a>
                                <a
                                    href="https://github.com/ayaan-cs/goguardian"
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
                                        <h2 className="text-3xl font-bold mb-6">API Security, Accelerated</h2>
                                        <p className="text-muted-foreground mb-6">
                                            GoGuardian is a high-performance API security monitoring system built with Golang, designed to
                                            protect web services from common attack vectors while maintaining extremely low latency.
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            Leveraging Golang's powerful concurrency model through goroutines and channels, GoGuardian can
                                            process thousands of API requests per second, analyzing each for potential security threats
                                            without impacting application performance.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Create a high-performance API security layer with minimal latency overhead</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Implement real-time threat detection for common API attack vectors</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 mt-1 text-primary">•</span>
                                                <span>Demonstrate Golang's capabilities for concurrent processing and network applications</span>
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
                                                <p className="text-muted-foreground text-sm">Golang-based reverse proxy with concurrent processing</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Performance</h4>
                                                <p className="text-muted-foreground text-sm">Processes 5,000+ requests/second with &lt;5ms added latency</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Threat Detection</h4>
                                                <p className="text-muted-foreground text-sm">Pattern matching, rate analysis, and anomaly detection</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Technology Stack</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Golang</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Docker</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Redis</span>
                                                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">WebSockets</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Code Example */}
                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-6">Golang Implementation Example</h3>
                                    <div className="bg-card p-6 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-muted-foreground">
{`package main

import (
    "context"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"
)

// Simplified threat detection function
func detectThreats(req *http.Request) (bool, string) {
    // SQL Injection check (simplified example)
    if containsSQLInjection(req.URL.Query().Encode()) {
        return true, "SQL Injection attempt detected"
    }
    
    // Rate limiting check would go here
    return false, ""
}

func main() {
    // Create a WaitGroup for concurrent processing
    var wg sync.WaitGroup
    
    // Security middleware
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        // Process security checks concurrently
        threatChan := make(chan struct {
            detected bool
            message  string
        })
        
        wg.Add(1)
        go func() {
            defer wg.Done()
            detected, message := detectThreats(r)
            threatChan <- struct {
                detected bool
                message  string
            }{detected, message}
        }()
        
        // Get threat detection result
        result := <-threatChan
        
        if result.detected {
            log.Printf("Threat detected: %s", result.message)
            w.WriteHeader(http.StatusForbidden)
            w.Write([]byte("Access denied due to security policy"))
            return
        }
        
        // No threat detected, continue processing
        fmt.Fprintf(w, "Request processed safely")
    })
    
    log.Println("GoGuardian starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}`}
                    </pre>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Features Tab */}
                        {activeTab === 'features' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        GoGuardian combines cutting-edge technology with practical security applications
                                        to deliver comprehensive API protection.
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

                        {/* Threats Tab */}
                        {activeTab === 'threats' && (
                            <div className="space-y-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Advanced Threat Detection</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        GoGuardian is designed to identify and mitigate a wide range of API security threats in real-time.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {threatTypes.map((threat, index) => (
                                        <div key={index} className="gradient-border p-6 card-hover">
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    {threat.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-2">{threat.type}</h4>
                                                    <p className="text-muted-foreground text-sm mb-3">{threat.description}</p>
                                                    <p className="text-primary text-xs font-medium">{threat.method}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="gradient-border p-8 card-hover">
                                    <h3 className="text-xl font-semibold mb-4">Golang-powered Pattern Recognition</h3>
                                    <p className="text-muted-foreground">
                                        GoGuardian leverages Golang's powerful string manipulation and regular expression capabilities to
                                        efficiently identify malicious patterns in API requests. The system's concurrent processing architecture
                                        enables it to check each request against hundreds of threat signatures with minimal latency impact.
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
                                        Built with modern technologies and designed for scalability and performance.
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
                                        <h3 className="text-xl font-semibold mb-6">Why Golang?</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Concurrent Processing</h4>
                                                    <p className="text-muted-foreground text-sm">Goroutines enable efficient parallel security checks with minimal overhead</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Low Latency</h4>
                                                    <p className="text-muted-foreground text-sm">Fast compilation to machine code enables sub-millisecond processing</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Memory Safety</h4>
                                                    <p className="text-muted-foreground text-sm">Built-in memory management reduces vulnerabilities in security code</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gradient-border p-8 card-hover">
                                        <h3 className="text-xl font-semibold mb-6">Redis Integration</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Distributed Rate Limiting</h4>
                                                    <p className="text-muted-foreground text-sm">Tracks request frequencies across multiple service instances</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">Threat Intelligence Sharing</h4>
                                                    <p className="text-muted-foreground text-sm">Enables real-time sharing of detected threats across the system</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-primary">•</span>
                                                <div>
                                                    <h4 className="font-medium">IP Reputation Database</h4>
                                                    <p className="text-muted-foreground text-sm">Maintains dynamic scoring of client IP addresses based on behavior</p>
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
                        <h2 className="text-3xl font-bold mb-6">Explore GoGuardian</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Check out the source code to see how Golang's concurrency model is leveraged to create
                            a high-performance API security system.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://github.com/ayaan-cs/goguardian"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center gap-2"
                            >
                                <Github size={18} />
                                View Source Code
                            </a>
                            <a
                                href="https://github.com/ayaan-cs/goguardian#getting-started"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Getting Started Guide
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};