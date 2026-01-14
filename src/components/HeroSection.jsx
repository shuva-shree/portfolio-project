import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center  px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground space-y-4">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Shuvashree </span>
            <span className="opacity-0 animate-fade-in-delay-2">Baisya</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Software Developer, PWC | Tech Enthusiast | Problem Solver
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work

            </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -transform-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
      <ArrowDown className="mt-2 h-6 w-6 text-primary"/>

      </div>
    </section>
  );
};
export default HeroSection;
