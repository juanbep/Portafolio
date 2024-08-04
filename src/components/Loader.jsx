import { Html } from "@react-three/drei";
import Lottie from "react-lottie-player";
import loading from "../assets/icons/loading.json";

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <Lottie
          loop
          animationData={loading}
          play
          style={{ width: 100, height: 100 }}
        />
      </div>
    </Html>
  );
};

export default Loader;
