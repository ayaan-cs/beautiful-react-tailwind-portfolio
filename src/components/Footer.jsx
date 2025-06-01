import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border">
            <div className="container mx-auto max-w-6xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div className="text-xl font-bold text-primary">
                            <span className="text-glow text-foreground">Ayaan</span> Syed
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Computer Information Science student passionate about AI, software development,
                            and data science. Building innovative solutions with cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
                            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a>
                            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a>
                            <a href="#certificates" className="text-muted-foreground hover:text-primary transition-colors text-sm">Certificates</a>
                            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Connect</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:therealyaan9876@gmail.com"
                                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                <Mail size={16} className="mr-2" />
                                therealyaan9876@gmail.com
                            </a>
                            <div className="flex space-x-3">
                                <a
                                    href="https://github.com/ayaan-cs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="http://www.linkedin.com/in/ayaan-syed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="mailto:therealyaan9876@gmail.com"
                                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                                    aria-label="Email"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Ayaan A. Syed. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <p className="text-xs text-muted-foreground">
                            Built with React, Tailwind CSS & ❤️
                        </p>
                        <a
                            href="#hero"
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};