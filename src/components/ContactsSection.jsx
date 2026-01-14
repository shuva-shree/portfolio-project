import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Send,
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export const ContactsSection = () => {
  const { toast } = useToast();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-center">
        Get in <span className="text-primary">Touch</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, collaborations, or just
        connecting with like-minded individuals. Feel free to reach out to me
        through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
        <div className="space-y-8 bg-card overflow-hidden shadow-xs rounded-lg p-6 card-hover">
          <h3 className="text-xl font-semibold text-foreground">
            {" "}
            Contact Information
          </h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-foreground">Email</h4>
                <a
                  href="mailto:baisya14shuvashree@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  baisya14shuvashree@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-foreground">Phone</h4>
                <a
                  href="tel:+917044260989"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 7044 260 989
                </a>
              </div>
            </div>
          </div>

          <div className="space y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-foreground">
                  Location
                </h4>
                <p className="text-muted-foreground">Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4>Connect with Me</h4>
            <div className="flex space-x-4 justify-center mt-4">
              <a href="https://www.linkedin.com/in/shuvashreebaisya/">
                <Linkedin />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/byshuvs.lens/?igsh=MW03cnV1aGFmd2E1ZA%3D%3D&utm_source=qr#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card shadow-xs rounded-lg overflow-hidden p-6 card-hover">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Send Me a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 space-x-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {" "}
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Shuvashree Baisya..."
                name="name"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="baisya14shuvashree@gmail.com"
                name="email"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hello, I'd like to talk about..."
                required
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
