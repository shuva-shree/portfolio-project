import { MapPin, Phone,Mail, Instagram ,Linkedin,Facebook,Twitter, Send} from "lucide-react";

export const ContactsSection = () => {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-foreground">
            {" "}
            Contact Information
          </h3>

          <div className="space y-6 justify-center">
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
                <h4 className="font-medium text-lg text-foreground">Location</h4>
                <p className="text-muted-foreground">Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4>Connect with Me</h4>
            <div className="flex space-x-4 justify-center mt-4">
                <a href="https://www.linkedin.com/in/shuvashreebaisya/"><Linkedin/></a>
                <a href="#"><Twitter/></a>
                <a href="#"><Instagram /></a>
                <a href="#"><Facebook/></a>
            </div>
          </div>
        </div>

        <div className="bg-card shadow-xs rounded-lg overflow-hidden p-6 card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-4">Send Me a Message</h3>
            

            <form className="space-y-4">
                <div>
                    <label htmlFor="name"  className="block text-sm font-medium mb-2">{" "}Name</label>
                    <input type="text" id="name" placeholder="Shuvashree Baisya..." name="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" placeholder="baisya14shuvashree@gmail.com" name="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" placeholder="Hello, I'd like to talk about..." required name="message" rows="4" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"></textarea>
                </div>

                <button type="submit" className="cosmic-button w-full text-center">
                    <Send size={16} />
                </button>
            </form>
            </div>
        </div>
    </section>
  );
};


export default ContactsSection;
