import { SwiperProjects } from "../components";

const Projects = () => {
  return (
    <div>
      <section className="max-container relative">
        <h1 className="head-text text-white">
          Mis{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Proyectos
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed font-mono">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
        <SwiperProjects />
      </section>
    </div>
  );
};

export default Projects;
