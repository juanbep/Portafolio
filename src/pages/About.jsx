import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text dark:text-white">
        Hola, Soy{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Juan David Beca
        </span>{" "}
      </h1>

      <div className="mt-5 flex flex-col gap-3 dark:text-white">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          quibusdam ab repellendus, error fugiat quia sint libero! Cumque
          eveniet, iure sequi quae tempora temporibus corporis assumenda ut,
          beatae atque fugiat.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <h3 className="subhead-text dark:text-white">Mis Habilidades</h3>
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
    </section>
  );
};

export default About;
