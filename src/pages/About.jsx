import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ParticlesComponent from "../hooks/particles";
import { skills, experiences } from "../constants";
import { Footer } from "../components";

const About = () => {
  return (
    <div className="bg-black-500 w-full h-full">
      <section className="max-container">
        <ParticlesComponent />
        <h1 className="head-text text-white">
          Hola, Soy{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Juan David Beca
          </span>{" "}
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-white">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quibusdam ab repellendus, error fugiat quia sint libero! Cumque
            eveniet, iure sequi quae tempora temporibus corporis assumenda ut,
            beatae atque fugiat.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h3 className="subhead-text text-white">Mis Habilidades</h3>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="icon-grid">
            {skills.map((skill) => (
              <div className="tooltip icon-item" key={skill.name}>
                <div title={`${skill.name}`}>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <span className="tooltiptext">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text text-white">Experiencia</h3>
          <div className="mt-5 flex flex-col gap-3 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempore accusamus officia beatae incidunt recusandae dolor optio
              assumenda, ea asperiores reiciendis neque tenetur, ad quam
              explicabo eligendi voluptate et. Explicabo?
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline animate={true}>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={experience.date}
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
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-300" />
        <br />
        <Footer />
      </section>
    </div>
  );
};

export default About;
