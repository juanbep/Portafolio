import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import SpaceBoy from "../models/SpaceBoy";
import Space from "../models/Space";
import Spaceship from "../models/Spaceship";
import BlackHole from "../models/BlackHole";
import Astronaut from "../models/Astronaut";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustSpaceBoyForScreenSize = () => {
    let screenScale, screenPosition;

    // Si el ancho de la pantalla es inferior a 768px, ajusta la escala y la posición
    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [4.2, 4.2, 4.2];
      screenPosition = [0, -6, -43.5];
    }

    return [screenScale, screenPosition];
  };

  const adjustSpaceshipForScreenSize = () => {
    let screenScale, screenPosition;

    // Si el ancho de la pantalla es inferior a 768px, ajusta la escala y la posición
    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [-0.5, -1, 0.5];
    } else {
      screenScale = [0.6, 0.6, 0.6];
      screenPosition = [-2, -1, -1];
    }

    return [screenScale, screenPosition];
  };

  const [spaceBoyScale, spaceBoyPosition] = adjustSpaceBoyForScreenSize();
  const [spaceshipScale, spaceshipPosition] = adjustSpaceshipForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Space isRotating={isRotating} />
      <div
        className="absolute bottom-28 left-0 right-0 z-10 flex
      items-center justify-center"
      >
         {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 100 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[1.0, 1.0, 1.0]}
            intensity={1.0}
            color={"#FFFFFF"}
          />
          <ambientLight intensity={1.0} />
          {/* <pointLight position={[-3, 4, 6]} intensity={3} />
          <spotLight
            position={[-2, 3, 4]}
            angle={0.15}
            penumbra={5}
            intensity={5}
          />
          <hemisphereLight
            skyColor="#464342"
            groundColor="#464342"
            intensity={2}
          />  */}
          {/* <BlackHole /> */}
          <Astronaut />
          <SpaceBoy
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={spaceBoyPosition}
            scale={spaceBoyScale}
            rotation={[0.1, 6, 0]}
          />
          {/* <Spaceship
            isRotating={isRotating}
            position={spaceshipPosition}
            scale={spaceshipScale}
            rotation={[0.1, -1.2, -0.4]}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
