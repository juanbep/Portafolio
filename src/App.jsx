import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects } from "./pages";
import ParticlesComponent from "./hooks/particles";

const App = () => {
  const location = useLocation();

  return (
    <main className="bg-black-500 relative">
      {/* {location.pathname !== "/" && <ParticlesComponent />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default App;
