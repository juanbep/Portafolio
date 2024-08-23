import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left py-9">
        <section
          className="flex-1 flex flex-col items-center sm:items-start mb-6 sm:mb-0"
          role="contentinfo"
        >
          <h4 className="font-semibold text-neutral-50">Inspired by:</h4>
          <a
            href="https://www.joshuas.world/"
            className="underline mb-2 text-neutral-100 hover:text-slate-950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="joshuas.world website"
          >
            www.joshuas.world
          </a>
          <h4 className="font-semibold text-neutral-50">Thanks to:</h4>
          <a
            href="https://www.youtube.com/c/javascriptmastery"
            className="underline text-neutral-100 hover:text-slate-950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="javascript mastery youtube channel"
          >
            JavaScript Mastery
          </a>
        </section>

        <section
          className="flex-1 flex flex-col items-center mb-6 sm:mb-0"
          role="contentinfo"
        >
          <h4 className="font-semibold text-neutral-50">Designed by:</h4>
          <p className="text-neutral-100">Juan David Beca</p>
          <div className="flex justify-center items-center space-x-3 mt-2 hover:text-blue-700">
            <a
              href="https://github.com/juanbep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a GitHub"
            >
              <FaGithub
                className="h-6 w-6 object-contain text-neutral-100 hover:text-slate-950"
                aria-hidden="false"
                aria-label="GitHub"
              />
            </a>
          </div>
        </section>

        <section
          className="flex-1 flex flex-col items-center sm:items-end"
          role="contentinfo"
        >
          <h4 className="font-semibold text-neutral-50">3D model's credits:</h4>
          <a
            href="https://sketchfab.com/3d-models/blackhole-32f978d0e7354af293fa498f2998b14c"
            className="underline mb-2 text-neutral-100 hover:text-slate-950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="3D model Blackhole"
          >
            Blackhole
          </a>
          <a
            href="https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60"
            className="underline mb-2 text-neutral-100 hover:text-slate-950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="3D model space boi"
          >
            space boi
          </a>
          <a
            href="https://sketchfab.com/3d-models/x-wing-04b0147bd4234e61ba21bbf7a73ceecc"
            className="underline text-neutral-100 hover:text-slate-950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="3D X-WING"
          >
            X-WING
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
