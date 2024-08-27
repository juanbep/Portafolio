import { Link } from "react-router-dom";
import { projects } from "../constants";
import { Footer } from "../components";
import { FaGithub } from "react-icons/fa";
import ParticlesComponent from "../hooks/particles";
import { card } from "../assets/images";

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

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white border shadow-sm p-4 md:p-5 rounded"
            >
              <h2 className="text-lg font-bold text-gray-800">
                {project.name}
              </h2>
              <h3 className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                {project.skills}
              </h3>
              <p className="mt-2 pb-2 text-gray-500 dark:text-neutral-400">
                {project.description}
              </p>
              <Link to="/projects" className="button sm:w-1/4 max-sm:w-1/3">
                GitHub
                <FaGithub alt="arrow" className="icon object-contain" />
              </Link>
            </div>
          ))}
        </div>
        <hr className="border-slate-300" />
        <br />
        <Footer />
      </section>
    </div>
  );
};

export default Projects;
