import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast({
          title: "Email me directly",
          description: `The form is not configured in this environment. Use ${profile.email}.`,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      );

      toast({
        title: "Message sent",
        description: "Thanks. I will reply from the address on this page.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not send",
        description: `Try ${profile.email} instead.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/40 border-t border-border">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Get in <span className="text-primary">touch</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">
            Roles, collaborations, or a question about a demo. {profile.location}. {profile.citizenship}.
          </p>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm">
              <span className="p-2 rounded-full border border-border text-primary"><Mail size={16} /></span>
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-sm">
              <span className="p-2 rounded-full border border-border text-primary"><MapPin size={16} /></span>
              {profile.location}
            </p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm">
              <span className="p-2 rounded-full border border-border text-primary"><Github size={16} /></span>
              {profile.githubHandle}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm">
              <span className="p-2 rounded-full border border-border text-primary"><Linkedin size={16} /></span>
              linkedin.com/in/ayaan-syed
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="panel p-6 space-y-4">
          <label className="block text-sm">
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 resize-none"
            />
          </label>
          <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full", isSubmitting && "opacity-70")}>
            {isSubmitting ? "Sending..." : "Send"}
            <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  );
};
