/*
"BB8 (Animated)" (https://skfb.ly/6pLXW) by StarWars-Universe is licensed under 
CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/
import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import bb8_scene from "../assets/3D_Models/bb8_animated.glb";

const BB8 = () => {
  const bb8_ref = useRef();
  // Load the 3D model and animations from the provided glb file
  const { scene, animations } = useGLTF(bb8_scene);
  // Get access to the animations for the 3D model
  const { actions } = useAnimations(animations, bb8_ref);

  // Play the "PixCap Animation" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    const action = actions["Animation"];
    if (action) {
      action.timeScale = 2; // change the animation speed
      action.play();
    }
  }, []);

  return (
    // to create and display 3D objects
    <mesh
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
      scale={[10, 10, 10]}
      ref={bb8_ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default BB8;
