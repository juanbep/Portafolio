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
          
        </p>
        <SwiperProjects />
      </section>
    </div>
  );
};

export default Projects;
