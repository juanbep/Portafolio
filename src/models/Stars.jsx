import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

const StarsModel = ({ isRotating }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += 0.0002; // change the animation rotation speed
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient Light */}
      <ambientLight intensity={0.1} />

      {/* Directional Light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Some Stars for effect */}
      <Stars
        radius={100} // Large radius so that the stars are more dispersed
        depth={50} // Depth of star area
        count={5000} // Number of stars
        factor={4} // Size of stars, reduce to make them thinner
        saturation={0} // Color saturation, 0 for white
        fade // Apply fading
      />
    </group>
  );
};

export default StarsModel;
