import { Briefcase, Code, User } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 mx-44 px-4 relative">
      {" "}
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold ">Passionate Web Developer</h3>
          <p className="text-muted-foreground ml-10">
            I am a software developer with strong experience in building scalable,
  full-stack web applications using Java, Spring Boot, and React. Currently
  working at PwC, I have contributed to enterprise-level pricing platforms
  for global e-commerce clients, designing APIs, optimizing CI/CD pipelines,
  and supporting successful international go-lives that drove measurable
  business impact.
          </p>

          <p className="text-muted-foreground">
              My journey began with a curiosity about how web applications work and
  gradually evolved into a passion for solving real-world problems through
  clean architecture and intuitive user experiences. From developing secure
  cloud storage systems to architecting microservices with Kafka and AI-powered
  recommendations, I enjoy turning complex technical challenges into reliable,
  user-focused solutions.
</p>

       <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
           <a
    href="/Shuvashree_Baisya_Resume_New.pdf"
    download
    className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    {" "}
    Download CV
  </a>
          </div>
        </div>   

        <div className="grid grid-cols-1 gap-2 ">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Building scalable web applications using Java, Spring Boot, React,
          and RESTful APIs with a focus on performance, security, and clean
          architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Enterprise & Business Solutions</h4>
                <p className="text-muted-foreground">
                  Developing enterprise-grade systems for global clients, translating
          complex business requirements into reliable software that delivers
          measurable impact.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">System Design & Architecture</h4>
                <p className="text-muted-foreground">
                  Designing modular and distributed systems using microservices,
          Kafka, cloud storage, and CI/CD pipelines to ensure scalability,
          resilience, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
