/*"Animated Astronaut in Space Suit Loop" (https://skfb.ly/o9UDY) by LasquetiSpice
is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).*/
import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import astronaut_scene from "../assets/3D_Models/astronaut.glb";

const Astronaut = () => {
  const astronaut_ref = useRef();
  // Load the 3D model and animations from the provided glb file
  const { scene, animations } = useGLTF(astronaut_scene);
  // Get access to the animations for the 3D model
  const { actions } = useAnimations(animations, astronaut_ref);
  // State to manage the astronaut's velocity
  const [velocity, setVelocity] = useState({ x: 0.01, y: 0, z: -0.01 });

  // Play the "PixCap Animation" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    const action = actions["Animation"];
    if (action) {
      action.timeScale = 2; // change the animation speed
      action.play();
    }
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate motion using a sine wave
    astronaut_ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the 3D model reached a certain endpoint relative to the camera
    if (astronaut_ref.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the 3D model 180 degrees on the y-axis
      astronaut_ref.current.rotation.y = 6;
    } else if (astronaut_ref.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the 3D model's rotation
      astronaut_ref.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (astronaut_ref.current.rotation.y === 0) {
      // Moving forward
      astronaut_ref.current.position.x += 0.01;
      astronaut_ref.current.position.z -= 0.01;
      astronaut_ref.current.rotation.set(0, 0, 0);
      
    } else {
      // Moving backward
      astronaut_ref.current.position.x -= 0.02;
      astronaut_ref.current.position.z += 0.02;
      astronaut_ref.current.rotation.x += 0.01;
      astronaut_ref.current.rotation.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh
      position={[-5, 2, 1]}
      scale={[0.4, 0.4, 0.4]}
      
      ref={astronaut_ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Astronaut;
