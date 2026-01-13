import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "Java", level: 80, category: "Programming Language" },
  { name: "SpringBoot", level: 80, category: "Backend" },
  { name: "Redis", level: 80, category: "Backend" },
  { name: "Kafka", level: 80, category: "Backend" },
//   { name: "Python", level: 75, category: "Programming Language" },
  { name: "JavaScript", level: 70, category: "Programming Language" },
  { name: "React", level: 65, category: "Frontend" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "SQL", level: 70, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "Git/Github", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 60, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Groovy", level: 70, category: "Programming Language" },
];
const categories =["all", "frontend", "backend", "Programming language", "database", "tools"];
export const SkillsSection = () => {
    const [activeSkill, setActiveSkill] = useState("all");
    const filteredSkills = activeSkill === "all"
    ? skills
    : skills.filter((skill) => skill.category.toLowerCase() === activeSkill.toLowerCase());
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-12 text-center">
          My <span className=" text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((category) => (
                <button
                key={category}
                className={cn("py-2 px-5 rounded-full transition-colors duration-300 capitalize",
                  activeSkill === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
                onClick={() => setActiveSkill(category)}
              >
                {category}
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-card shadow-xs card-hover rounded-lg"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 relative overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow-1.5s_ease_in_out]"
                  style={{ width: `${skill.level}%` }}
                />
                <div
                  className="text-right mt-1"
                >
                    <span className="text-sm text-foreground font-medium">
                        {skill.level}%
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
