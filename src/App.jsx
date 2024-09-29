import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import ParticlesComponent from "./hooks/particles";
import { Home, About, Projects } from "./pages";

const App = () => {
  return (
    <main>
      <Router basename="/Portafolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <ParticlesComponent />
                <About />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <ParticlesComponent />
                <Projects />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
