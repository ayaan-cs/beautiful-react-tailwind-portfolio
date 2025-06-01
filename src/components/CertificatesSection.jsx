import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Award, Calendar, ExternalLink, CheckCircle, Book, Code, Database,
    Shield, Brain, Globe, BarChart, ChevronDown
} from "lucide-react";

const certificates = [
    {
        id: 'microsoft-security-essentials',
        title: 'Microsoft Security Essentials Professional Certificate',
        organization: 'Microsoft and LinkedIn',
        issueDate: '2025-05-28',
        credentialId: 'd41ddaf7b5de0bfc86a5f272e65129ab93c6d3a5dcc5c1af2362d951b2a4276d',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/d41ddaf7b5de0bfc86a5f272e65129ab93c6d3a5dcc5c1af2362d951b2a4276d',
        category: 'Cybersecurity',
        description: 'Comprehensive program covering AI security, governance, risk management, compliance (GRC), and cloud security fundamentals.',
        skills: ['AI Security', 'Governance, Risk Management, and Compliance (GRC)', 'Cloud Security', 'Microsoft Security'],
        icon: <Shield size={24} />,
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 'generative-ai-essentials',
        title: 'Career Essentials in Generative AI',
        organization: 'Microsoft and LinkedIn',
        issueDate: '2025-05-09',
        credentialId: '64ef2fc8bcbaa4b642a0547c9745712d9a47fbe6e7f4c29979f357546d81e144',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/64ef2fc8bcbaa4b642a0547c9745712d9a47fbe6e7f4c29979f357546d81e144?u=35179268',
        category: 'Artificial Intelligence',
        description: 'Comprehensive program covering generative AI fundamentals, Microsoft Copilot, and responsible AI practices for business applications.',
        skills: ['Generative AI', 'Microsoft Copilot', 'Artificial Intelligence for Business', 'Responsible AI'],
        icon: <Brain size={24} />,
        color: 'from-blue-300 to-purple-700'
    },
    {
        id: 'microsoft-azure',
        title: 'Microsoft Azure AI Essentials Professional Certificate',
        organization: 'Microsoft and LinkedIn',
        issueDate: '2025-05-21',
        credentialId: '99a0ebd757994fc4f83a36307f4dcd645472bf25df0b7b891c70c413a02860c1',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/99a0ebd757994fc4f83a36307f4dcd645472bf25df0b7b891c70c413a02860c1?u=35179268',
        category: 'Artificial Intelligence',
        description: 'Advanced Azure AI services and cloud-based machine learning solutions for enterprise applications.',
        skills: ['Azure AI', 'Cloud Computing', 'Machine Learning Services', 'AI Solutions'],
        icon: <Brain size={24} />,
        color: 'from-blue-800 to-blue-400'
    },
    {
        id: 'github-professional',
        title: 'Career Essentials in GitHub Professional Certificate',
        organization: 'GitHub',
        issueDate: '2025-05-08',
        credentialId: 'e4a5f1f8cdb71baa96d0b898a087653fac85040a2c270322c0c7511f9ae58eae',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/e4a5f1f8cdb71baa96d0b898a087653fac85040a2c270322c0c7511f9ae58eae?u=35179268',
        category: 'Software Development',
        description: 'Professional-level GitHub skills including version control, collaboration, and project management using Git and GitHub.',
        skills: ['GitHub', 'Git Version Control', 'Collaborative Development', 'Project Management'],
        icon: <Code size={24} />,
        color: 'from-gray-700 to-gray-900'
    },
    {
        id: 'data-science-knime',
        title: 'Data Science Professional Certificate',
        organization: 'KNIME',
        issueDate: '2025-05-14',
        credentialId: 'afdf6ff61761b9cd448747aac3905d54dad8e41a4134e604848b95dc18489271',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/afdf6ff61761b9cd448747aac3905d54dad8e41a4134e604848b95dc18489271?u=35179268',
        category: 'Data Science',
        description: 'Advanced data science certification covering machine learning, artificial intelligence, and comprehensive data analysis workflows.',
        skills: ['Artificial Intelligence (AI)', 'Artificial Intelligence for Business', 'Data Science', 'KNIME Analytics Platform'],
        icon: <Database size={24} />,
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: 'statistics-foundations-wolfram',
        title: 'Statistics Foundations Professional Certificate',
        organization: 'Wolfram Research',
        issueDate: '2025-05-20',
        credentialId: 'af7d1e0b7ae5ddefc3a21f28c2c37663d8346cc74b466dfb5641b5470198b7e9',
        verificationUrl: 'https://www.linkedin.com/learning/certificates/af7d1e0b7ae5ddefc3a21f28c2c37663d8346cc74b466dfb5641b5470198b7e9?u=35179268',
        category: 'Data Science',
        description: 'Comprehensive statistics foundation covering statistical data analysis, Wolfram Language programming, and probability theory.',
        skills: ['Statistical Data Analysis', 'Wolfram Language', 'Statistics', 'Probability Theory'],
        icon: <BarChart size={24} />,
        color: 'from-red-500 to-pink-500'
    }
];

const categories = ['all', ...Array.from(new Set(certificates.map(cert => cert.category))).sort()];

const CertificateCard = ({ cert, isExpanded, toggleExpand }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    const isValidCertificate = (cert) => {
        if (!cert.expiryDate) return true;
        return new Date(cert.expiryDate) > new Date();
    };

    return (
        <div className="bg-card rounded-xl overflow-hidden shadow-xs card-hover group">
            {/* Certificate Header */}
            <div className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-2 text-4xl opacity-30">🎓</div>
                    <div className="absolute bottom-2 right-2 text-3xl opacity-30">✓</div>
                </div>

                <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                        {cert.icon}
                    </div>
                </div>

                {/* Validity indicator */}
                <div className="absolute top-3 right-3">
                    {isValidCertificate(cert) ? (
                        <div className="p-1 bg-green-500 rounded-full" title="Valid">
                            <CheckCircle size={16} className="text-white" />
                        </div>
                    ) : (
                        <div className="p-1 bg-red-500 rounded-full" title="Expired">
                            <Award size={16} className="text-white" />
                        </div>
                    )}
                </div>
            </div>

            {/* Certificate Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                </h3>

                <p className="text-primary text-sm font-medium mb-2">
                    {cert.organization}
                </p>

                <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>Earned: {formatDate(cert.issueDate)}</span>
                    {cert.expiryDate && (
                        <span className="ml-2">
              | Expires: {formatDate(cert.expiryDate)}
            </span>
                    )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                        <span
                            key={skill}
                            className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
              {skill}
            </span>
                    ))}
                    {cert.skills.length > 3 && (
                        <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">
              +{cert.skills.length - 3} more
            </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    {cert.verificationUrl ? (
                        <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
                        >
                            <ExternalLink size={14} className="mr-1" />
                            Verify
                        </a>
                    ) : (
                        <span className="text-muted-foreground text-sm">No verification link</span>
                    )}

                    {cert.credentialId && (
                        <span className="text-muted-foreground text-xs">
              ID: {cert.credentialId.slice(-6)}
            </span>
                    )}
                </div>

                {/* Expandable skills section */}
                {cert.skills.length > 3 && (
                    <div className="border-t border-border mt-4 pt-4">
                        <div
                            className="cursor-pointer flex justify-between items-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand();
                            }}
                        >
              <span className="text-muted-foreground text-sm">
                {isExpanded ? 'Hide all skills' : `View all ${cert.skills.length} skills`}
              </span>
                            <ChevronDown
                                size={16}
                                className={cn(
                                    "text-muted-foreground transition-transform duration-200",
                                    isExpanded ? 'rotate-180' : ''
                                )}
                            />
                        </div>

                        {isExpanded && (
                            <div className="mt-3 animate-fade-in">
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs font-medium px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export const CertificatesSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [expandedCert, setExpandedCert] = useState(null);

    const filteredCertificates = certificates.filter(cert =>
        activeCategory === 'all' || cert.category === activeCategory
    );

    const toggleExpand = (certId) => {
        setExpandedCert(expandedCert === certId ? null : certId);
    };

    return (
        <section id="certificates" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Certifications & <span className="text-primary">Achievements</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Professional certifications and courses completed to enhance skills and stay current with industry trends.
                </p>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center mb-10 gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-all duration-300 transform capitalize",
                                activeCategory === category
                                    ? "cosmic-button"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary border border-border hover:scale-105"
                            )}
                        >
                            {category === 'all' ? 'All Certificates' : category}
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredCertificates.map((cert, index) => (
                        <CertificateCard
                            key={cert.id}
                            cert={cert}
                            isExpanded={expandedCert === cert.id}
                            toggleExpand={() => toggleExpand(cert.id)}
                        />
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="gradient-border p-8 card-hover">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
                            <div className="text-muted-foreground">Total Certificates</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-400 mb-2">
                                {certificates.filter(cert => !cert.expiryDate || new Date(cert.expiryDate) > new Date()).length}
                            </div>
                            <div className="text-muted-foreground">Currently Valid</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-2">{categories.length - 1}</div>
                            <div className="text-muted-foreground">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-400 mb-2">
                                {Array.from(new Set(certificates.flatMap(cert => cert.skills))).length}
                            </div>
                            <div className="text-muted-foreground">Skills Covered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};