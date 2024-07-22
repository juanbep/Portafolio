import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

const Space = (isRotating) => {
  return (
    <Canvas
      style={{
        background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Stars isRotating={isRotating} />
    </Canvas>
  );
};

export default Space;
