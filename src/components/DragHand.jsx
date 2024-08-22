import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import drag_hand from "../assets/icons/drag-hand.json";

const DragHand = ({ isRotating }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isRotating) {
      setVisible(false);
    }
  }, [isRotating]);

  if (!visible) return null;

  return (
    <Html center>
      <div className="flex justify-center items-center">
        <Lottie
          loop
          animationData={drag_hand}
          play
          style={{ width: 120, height: 120 }}
        />
      </div>
    </Html>
  );
};

export default DragHand;
