import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Simple Storage App",
    description:
      "A simple storage application that allows users to store and retrieve data securely.",
    technologies: ["React", "Java", "Springboot", "PostgreSQL"],
    imageUrl: "/projects/Cloud-Storage.png",
    projectUrl: "https://github.com/shuva-shree/simple-cloud-storage",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description:
      "A fitness tracking application that allows users to log their workouts and monitor their progress.",
    technologies: ["React", "Java", "Springboot", "PostgreSQL"],
    imageUrl: "/projects/fitness-tracker.png",
    projectUrl: "https://github.com/shuva-shree/fitness-microservices",
  },
  {
    id: 3,
    title: "Notion Clone",
    description:
      "A note-taking application that allows users to create and organize their notes.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: "/projects/notion-clone.png",
    projectUrl: "https://github.com/shuva-shree/notion-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the
          project titles to view the source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card shadow-xs rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted px-2 py-1 text-sm font-medium bg-secondary text-secondary border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1 px-6">
                {project.title}
              </h3>
              <p className="text-muted-foreground px-6 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex justify-betweeen items-center">
                <div className="flex space-x-3">
                  <a>
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline px-6 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/shuva-shree"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
