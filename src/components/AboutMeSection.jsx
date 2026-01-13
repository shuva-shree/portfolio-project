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
            I am a passionate web developer with a knack for creating dynamic
            and responsive web applications. My journey in web development began
            with a curiosity for how websites work, and it has evolved into a
            full-fledged career. I love turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>

          <p className="text-muted-foreground">
            My journey in web development began with a curiosity for how
            websites work, and it has evolved into a full-fledged career. I am a
            passionate web developer with a knack for creating dynamic and
            responsive web applications. I love turning complex problems into
            simple, beautiful, and intuitive designs.  ̰{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {" "}
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 ">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
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
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
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
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
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
