import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import Typewriter from "typewriter-effect";
import clicAnimation from "../assets/icons/clicAnimation.json";

const HomeInfo = ({ currentStage }) => {
  const style = {
    height: 32,
    width: 32,
  };

  const options = {
    loop: true,
    autoplay: true,
    animationData: clicAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, style);

  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-4 px-8 text-black mx-5">
        Hola, Soy Juan David
        <span className="font-semibold mx-2">Beca</span>
        👋
        <br />
        Estudiante de ingeniería de sistemas de la
        <span className="font-semibold mx-2 inline-flex items-center">
          Universidad del Cauca
        </span>
        👨‍💻
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="text-center sm:text-xl">
          He sido monitor académico en diferentes ocasiones, en donde he
          adquirido muchas habilidades en el camino...
        </p>
        <Link
          to="/about"
          className="flex items-center justify-center font-bold underline text-black-500"
        >
          Saber más
          {View}
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="text-center sm:text-xl">
          He trabajado en diferentes proyectos académicos y personales. <br />
          ¿Sientes curiosidad de saber de qué se tratan?
        </p>

        <Link
          to="/projects"
          className="flex items-center justify-center font-bold underline text-black-500"
        >
          Visita mi portafolio
          {View}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="text-center sm:text-xl">
          ¿Necesitas realizar un proyecto o buscas un desarrollador?
        </p>
        <div className="font-semibold sm:text-xl text-center text-black-500">
          <Typewriter
            options={{
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString("¡No dudes en contactarme!")
                .start();
            }}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
