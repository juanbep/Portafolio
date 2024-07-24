import React from "react";
import { Link } from "react-router-dom";
import Lottie, { useLottie } from "lottie-react";
import { arrow } from "../assets/icons";
import clicAnimation from "../assets/icons/json/clicAnimation.json";

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
        <span className="font-semibold mx-2 text-black">Beca</span>
        👋
        <br />
        Ingeniero de sistemas de la Universidad del Cauca
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          He sido monitor académico en diferentes ocasiones,
          <br />
          en donde he adquirido muchas habilidades en el camino...
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
        <p className="font-medium text-center sm:text-xl">
          He trabajado en diversos proyectos académicos y personales. <br />
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
        <p className="font-medium sm:text-xl text-center">
          ¿Necesitas realizar un proyecto o buscas un desarrollador?
          <br />
          ¡Házmelo saber con tan solo un clic!
        </p>

        <Link
          to="/contact"
          className="flex items-center justify-center font-bold underline text-black-500"
        >
          Contáctame
          {View}
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
