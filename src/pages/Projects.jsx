import { projects } from "../constants";
import { Footer } from "../components";
import { FaGithub, FaStar } from "react-icons/fa";
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
              <div className="container-button sm:w-1/4 max-sm:w-1/3">
                <a
                  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                  href="#"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <div className="flex items-center">
                    <FaGithub alt="github" className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-white">GitHub</span>
                  </div>
                  <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                    <FaStar
                      alt="star"
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                    />
                    <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">
                      6
                    </span>
                  </div>
                </a>
              </div>
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
