import { Link } from "react-router-dom";
import { projects } from "../constants";
import { Footer } from "../components";
import { FaArrowCircleRight } from "react-icons/fa";
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
          {projects.map((project) => (
            <div className="max-w-sm rounded overflow-hidden bg-white">
              <img
                className="w-full"
                src={card}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #PHP
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Symfony
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #JavaScript
                </span>
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
