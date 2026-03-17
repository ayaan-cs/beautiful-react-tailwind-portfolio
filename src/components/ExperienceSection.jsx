import { Calendar, MapPin, Briefcase, Brain, Database } from "lucide-react";
import { useState } from "react";

const experiences = [
    {
        id: 'samsung-manufacturing-tech',
        title: 'Manufacturing Technician',
        company: 'Samsung Austin Semiconductor',
        type: 'Full-time',
        period: 'Feb 2026 - Current',
        location: 'Austin, TX',
        description:
            'Operate, maintain, and troubleshoot advanced semiconductor production equipment in a high-volume cleanroom environment. Perform preventive maintenance, monitor tool performance, and analyze production data to optimize yield while following strict safety and quality protocols. Role is based on 12-hour compressed overnight shifts, demonstrating flexibility for any shift schedule and full-time workload, while leveraging Microsoft 365 tools for documentation, reporting, and analysis.',
        icon: <Briefcase className="h-6 w-6" />,
        logo: '/assets/samsung-logo.svg',
        color: 'from-blue-600 to-blue-700'
    },
    {
        id: 'ai-lead',
        title: 'AI Research Lead',
        company: 'Klein Sports Performance, LLC',
        type: 'Internship/Research',
        period: 'Sep 2024 - August 2025',
        location: 'Remote, based in Austin, TX',
        description: 'Lead researcher for the AI component of a fitness app, responsible for developing machine learning algorithms to learn 100+ workouts, personalize workouts, and analyze user performance. Collaborated with data science/development teams to feed our ChatBot information across 20+ studies, optimizing feedback and enhancing user fitness outcomes through tailored insights.',
        icon: <Brain className="h-6 w-6" />,
        logo: '/assets/klein-logo.png',
        color: 'from-slate-900 to-red-600'
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        company: 'USDA Forest Service',
        type: 'Internship',
        period: 'Jun 2024 - Aug 2024',
        location: 'Remote, based in Austin, TX',
        description: 'My role comprised two main projects. I developed a data science solution using Google Earth Engine to monitor water quality in Fiji, applying different indices for detecting pollution and analyzing seasonal trends. The other involved Land Use Land Cover (LULC) for Fiji. My job was to photo-interpret sample plots of land, write R scripts for the interpretations\' accuracy, and compile my data for the 2021-2022 reporting period.',
        icon: <Database className="h-6 w-6" />,
        logo: '/assets/usda-logo.svg',
        color: 'from-green-700 to-yellow-500'
    },
    {
        id: 'heb-multi-role',
        company: 'H-E-B',
        icon: <Briefcase className="h-6 w-6" />,
        logo: '/assets/heb-logo.svg',
        color: 'from-red-600 to-red-800',
        roles: [
            {
                id: 'heb-swe-intern',
                title: 'Software Engineering Intern',
                type: 'Internship',
                period: 'May 2026 - Aug 2026',
                location: 'Austin, TX',
                description:
                    'Software engineering internship on H-E-B Digital\'s AI Platform team, focused on building infrastructure, microservices, and automation tools that power machine learning and real-time decision-making across retail, supply chain, and e-commerce. Applied an MLOps mindset to support model training, deployment, and monitoring, contributed to cloud infrastructure and CI/CD automation, and collaborated with data scientists and engineers to ship production-ready AI features that improve customer and Partner experiences.'
            },
            {
                id: 'retail-sales',
                title: 'Retail Sales Representative',
                type: 'Part-time',
                period: 'Apr 2023 - May 2026',
                location: 'Austin, TX',
                description:
                    'Perishables associate representative that overlooks the floor of the department, making sure that all items are stocked and that premium customer service is provided. Also trained and experienced with the preparation of in-store items and organization of the storage area with power tools.'
            }
        ]
    }
];

export const ExperienceSection = () => {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    My professional journey spans AI research, data science, and cutting-edge technology applications
                    in real-world scenarios.
                </p>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden"
                            onMouseEnter={() => setActiveCard(exp.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Gradient header */}
                            <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                            <div className="p-8">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Icon / Logo */}
                                    <div className="p-0 flex-shrink-0 flex items-center justify-center">
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="h-12 w-12 object-contain"
                                            />
                                        ) : (
                                            <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-primary`}>
                                                {exp.icon}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        {/* Single-role experience */}
                                        {!exp.roles && (
                                            <>
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-foreground mb-1">
                                                            {exp.title}
                                                        </h3>
                                                        <p className="text-primary font-medium">{exp.company}</p>
                                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mt-2">
                                                            {exp.type}
                                                        </span>
                                                    </div>

                                                    <div className="mt-4 md:mt-0 md:text-right">
                                                        <div className="flex items-center md:justify-end text-muted-foreground mb-2">
                                                            <Calendar size={16} className="mr-2" />
                                                            <span className="text-sm">{exp.period}</span>
                                                        </div>
                                                        <div className="flex items-center md:justify-end text-muted-foreground">
                                                            <MapPin size={16} className="mr-2" />
                                                            <span className="text-sm">{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-muted-foreground leading-relaxed">
                                                    <p>{exp.description}</p>
                                                </div>
                                            </>
                                        )}

                                        {/* Multi-role experience (e.g., H-E-B) */}
                                        {exp.roles && (
                                            <div className="space-y-6">
                                                {exp.roles.map((role, idx) => (
                                                    <div key={role.id}>
                                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                                            <div>
                                                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                                                    {role.title}
                                                                </h3>
                                                                <p className="text-primary font-medium">{exp.company}</p>
                                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mt-2">
                                                                    {role.type}
                                                                </span>
                                                            </div>

                                                            <div className="mt-4 md:mt-0 md:text-right">
                                                                <div className="flex items-center md:justify-end text-muted-foreground mb-2">
                                                                    <Calendar size={16} className="mr-2" />
                                                                    <span className="text-sm">{role.period}</span>
                                                                </div>
                                                                <div className="flex items-center md:justify-end text-muted-foreground">
                                                                    <MapPin size={16} className="mr-2" />
                                                                    <span className="text-sm">{role.location}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-muted-foreground leading-relaxed">
                                                            <p>{role.description}</p>
                                                        </div>

                                                        {/* Divider between roles */}
                                                        {idx < exp.roles.length - 1 && (
                                                            <div className="my-4 border-t border-border opacity-60" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Animated bottom border */}
                            <div
                                className={`h-0.5 bg-gradient-to-r ${exp.color} transition-all duration-500 ${
                                    activeCard === exp.id ? 'opacity-100' : 'opacity-0'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center gradient-border p-6 card-hover">
                        <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                            <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-muted-foreground">Years Experience</div>
                    </div>

                    <div className="text-center gradient-border p-6 card-hover">
                        <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                            <Brain className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-muted-foreground">ML Algorithms Developed</div>
                    </div>

                    <div className="text-center gradient-border p-6 card-hover">
                        <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                            <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">10+</div>
                        <div className="text-muted-foreground">Projects/Collaborations Ongoing</div>
                    </div>
                </div>
            </div>
        </section>
    );
};