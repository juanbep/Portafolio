import { Html } from "@react-three/drei";
import Lottie from "react-lottie-player";
import drag_hand from "../assets/icons/drag-hand.json";

const DragHand = () => {
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
