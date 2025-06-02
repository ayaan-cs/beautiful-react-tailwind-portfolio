import { Calendar, MapPin, Briefcase, Brain, Database } from "lucide-react";
import { useState } from "react";

const experiences = [
    {
        id: 'ai-lead',
        title: 'AI Research Lead',
        company: 'Klein Sports Performance, LLC',
        type: 'Internship',
        period: 'Sep 2024 - Current',
        location: 'Austin, TX',
        description: 'Lead researcher for the AI component of a fitness app, responsible for developing machine learning algorithms to learn 100+ workouts, personalize workouts, and analyze user performance. Collaborated with data science/development teams to feed our ChatBot information across 20+ studies, optimizing feedback and enhancing user fitness outcomes through tailored insights.',
        icon: <Brain className="h-6 w-6" />,
        color: 'from-purple-500 to-blue-500'
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        company: 'USDA Forest Service',
        type: 'Internship',
        period: 'Jun 2024 - Aug 2024',
        location: 'Austin, TX',
        description: 'My role comprised two main projects. I developed a data science solution using Google Earth Engine to monitor water quality in Fiji, applying different indices for detecting pollution and analyzing seasonal trends. The other involved Land Use Land Cover (LULC) for Fiji. My job was to photo-interpret sample plots of land, write R scripts for the interpretations\' accuracy, and compile my data for the 2021-2022 reporting period.',
        icon: <Database className="h-6 w-6" />,
        color: 'from-green-500 to-teal-500'
    },
    {
        id: 'retail-sales',
        title: 'Retail Sales Representative',
        company: 'H-E-B',
        type: 'Part-time',
        period: 'Apr 2023 - Present',
        location: 'Austin, TX',
        description: 'Perishables associate representative that overlooks the floor of the department, making sure that all items are stocked and that premium customer service is provided. Also trained and experienced with the preparation of in-store items and organization of the storage area with power tools.',
        icon: <Briefcase className="h-6 w-6" />,
        color: 'from-red-500 to-red-700'
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
                                    {/* Icon */}
                                    <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 flex-shrink-0`}>
                                        <div className="text-primary">
                                            {exp.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
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

                                        {/* Description */}
                                        <div className="text-muted-foreground leading-relaxed">
                                            <p>{exp.description}</p>
                                        </div>
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