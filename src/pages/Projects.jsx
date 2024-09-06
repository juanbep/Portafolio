import { projects } from "../constants";
import { Footer } from "../components";
import ParticlesComponent from "../hooks/particles";

const Projects = () => {
  return (
    <div className="bg-black-500 w-full h-full">
      <ParticlesComponent />
      <section className="max-container relative">
        <h1 className="head-text text-white">
          Mis{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Proyectos
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>

        <div className="grid grid-cols-1 gap-6 my-20">
        
        </div>
        <hr className="border-slate-300" />
        <br />
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
