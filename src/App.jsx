import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Footer, Particles } from "./components";
import { Home, About, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-black-500">
      <Router basename="/Portafolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Particles />
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
