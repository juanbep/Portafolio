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

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text dark:text-white">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
