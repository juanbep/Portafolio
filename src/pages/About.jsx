import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="max-container relative">
        <h1 className="head-text text-white">
          Hola, Soy{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Juan David Beca
          </span>{" "}
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500 font-mono">
          <p>
            Soy un desarrollador Full-Stack con experiencia en lenguajes como
            JavaScript, PHP y Java. Mi área de enfoque es el desarrollo web o
            Front-End, donde me especializo en crear interfaces atractivas,
            funcionales y óptimas. En el backend, aplico buenas prácticas de
            programación como los principios SOLID, patrones de diseño y
            arquitecturas según el contexto, como hexagonal, microservicios,
            MVC, entre otros. Estoy comprometido con el aprendizaje continuo y
            siempre me mantengo al día con las últimas tecnologías y tendencias.
            Mis habilidades para trabajar en equipo, junto con una buena
            capacidad de comunicación y dedicación, me convierten en un valioso
            miembro para cualquier proyecto de desarrollo de software que se
            adpate a mis habilidades.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h3 className="subhead-text text-white">
            Mis<span className="blue-gradient_text"> Habilidades</span>
          </h3>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="icon-grid">
            {skills.map((skill) => (
              <div className="tooltip icon-item" key={skill.name}>
                <div title={`${skill.name}`} className="flex justify-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <span className="tooltiptext">
                  {skill.name}
                  <br />
                  <div className="range">
                    <div
                      className="fill"
                      style={{ width: `${skill.percentage}` }}
                    >
                      <span className="percentage-text">{`${skill.percentage}`}</span>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text blue-gradient_text">Experiencia</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 font-mono">
            <p>
              He acumulado experiencia valiosa como desarrollador freelance,
              trabajando en una variedad de proyectos que abarcan tanto el
              desarrollo Front-End como el Back-End. Además, he desempeñado en
              varias ocasiones el rol de monitor en la Universidad del Cauca, lo
              que me permitió desarrollar habilidades técnicas y de comunicación
              en un entorno académico, además de poner en práctica algunos de
              los conocimientos adquiridos durante mi formación académica.
            </p>
          </div>

          <div className="mt-12 flex overflow-hidden">
            <VerticalTimeline animate={true}>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={experience.date}
                  className=".vertical-timeline-element-content"
                  dateClassName=".vertical-timeline-element-date"
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[100%] h-[100%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "0px",
                    borderStyle: "solid",
                    borderBottomColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <div className="vertical-line"></div>
                  <div>
                    <h3 className="text-black ml-1 text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </h4>
                  </div>
                  {experience.points.map((point, index) => (
                    <p
                      className="vertical-timeline-element-subtitle-paragraph font-mono"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </p>
                  ))}
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(2 6 23)", color: "#fff" }}
                icon={<FaCode />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
