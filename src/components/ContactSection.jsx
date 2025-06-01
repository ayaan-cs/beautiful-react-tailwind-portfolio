import {
  Linkedin,
  Mail,
  MapPin,
  Send,
  Github
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and innovative ideas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                        href="mailto:therealyaan9876@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      therealyaan9876@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">Austin, TX, USA</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                        href="https://github.com/ayaan-cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/ayaan-cs
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-6">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                      href="http://www.linkedin.com/in/ayaan-syed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                      href="https://github.com/ayaan-cs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                      href="mailto:therealyaan9876@gmail.com"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="gradient-border p-6 card-hover">
                <h4 className="font-semibold mb-3 text-primary">Let's Build Something Amazing</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm passionate about collaborating on innovative projects, especially those involving
                  AI, data science, and cutting-edge web technologies. Whether you have a specific project
                  in mind or just want to discuss ideas, I'd love to hear from you!
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello Ayaan, I'd like to discuss..."
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                >
                  {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                  ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                  )}
                </button>
              </form>

              {/* Quick contact options */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Prefer a different way to connect?</p>
                <div className="flex gap-3">
                  <a
                      href="mailto:therealyaan9876@gmail.com"
                      className="flex-1 px-4 py-2 text-center text-sm bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                  >
                    Email Directly
                  </a>
                  <a
                      href="http://www.linkedin.com/in/ayaan-syed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};