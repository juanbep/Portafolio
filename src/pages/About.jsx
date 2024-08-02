import Space from "../models/Space";
import SpaceBoy from "../models/SpaceBoy";
import { Canvas } from "@react-three/fiber";

const About = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
    </Canvas>
  );
};

export default About;
