import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left py-9">
        <section
          className="flex-1 flex flex-col items-center sm:items-start mb-6 sm:mb-0"
          role="contentinfo"
        >
          <h4 className="font-semibold">Inspired by:</h4>
          <a
            href="https://www.joshuas.world/"
            className="underline mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.joshuas.world
          </a>
          <h4 className="font-semibold">Thanks to:</h4>
          <a
            href="https://www.youtube.com/c/javascriptmastery"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Mastery
          </a>
        </section>

        <section
          className="flex-1 flex flex-col items-center mb-6 sm:mb-0"
          role="contentinfo"
        >
          <h4 className="font-semibold">Designed by:</h4>
          <p>Juan David Beca</p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <a
              href="https://github.com/juanbep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="h-6 w-6 object-contain"
                aria-hidden="true"
                aria-label="GitHub"
              />
            </a>
            <a
              href="https://x.com/sr_beca98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="h-6 w-6 object-contain"
                aria-hidden="true"
                aria-label="Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/mr.beca98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="h-6 w-6 object-contain"
                aria-hidden="true"
                aria-label="Instagram"
              />
            </a>
          </div>
        </section>

        <section
          className="flex-1 flex flex-col items-center sm:items-end"
          role="contentinfo"
        >
          <h4 className="font-semibold">3D model's credits:</h4>
          <a
            href="https://sketchfab.com/3d-models/blackhole-32f978d0e7354af293fa498f2998b14c"
            className="underline mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blackhole
          </a>
          <a
            href="https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60"
            className="underline mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            space boi
          </a>
          <a
            href="https://sketchfab.com/3d-models/x-wing-04b0147bd4234e61ba21bbf7a73ceecc"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            X-WING
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
