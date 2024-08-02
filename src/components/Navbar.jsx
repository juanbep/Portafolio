import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaUserAstronaut, FaLinkedin, FaDownload } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillHome, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const nodeRef = useRef(null);
  const contactNodeRef = useRef(null);

  return (
    <header className="header">
      <NavLink to="/" className="btn-navbar">
        <AiFillHome className="w-6 h-6 object-contain" aria-label="home_link" />
      </NavLink>
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="btn-navbar"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          aria-expanded={open}
        >
          <AiOutlineMenu
            className="w-6 h-6 object-contain"
            aria-label="menu_button"
          />
        </button>
        <CSSTransition
          in={open}
          timeout={200}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <div
            ref={nodeRef}
            className="absolute right-0 mt-2 w-40 bg-white divide-y divide-gray-300 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul className="py-2 text-base text-black-700 dark:text-gray-200">
              {[
                { to: "/about", icon: FaUserAstronaut, label: "Sobre mí" },
                { to: "/projects", icon: GoRocket, label: "Proyectos" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <item.icon
                      className="mr-2 object-contain"
                      aria-hidden="true"
                    />
                    <span className="font-semibold">{item.label}</span>
                  </NavLink>
                </li>
              ))}
              <li
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <button
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    setContactOpen(!contactOpen);
                  }}
                >
                  <AiOutlineMessage
                    className="mr-2 object-contain"
                    aria-hidden="true"
                  />
                  <span className="font-semibold">Contacto</span>
                </button>
                <CSSTransition
                  in={contactOpen}
                  timeout={100}
                  classNames="fade"
                  unmountOnExit
                  nodeRef={contactNodeRef}
                >
                  <div
                    ref={contactNodeRef}
                    className="absolute right-full top-0 mr-2 w-35 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul className="py-2 text-sm text-black-700 dark:text-gray-200">
                      <li>
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <IoLogoWhatsapp
                            className="mr-2 object-contain"
                            aria-hidden="true"
                          />
                          WhatsApp
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:jbecapillimue@gmail.com"
                          className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <SiGmail
                            className="mr-2 object-contain"
                            aria-hidden="true"
                          />
                          Correo
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/juan-david-beca-pillimue-aa3168207/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <FaLinkedin
                            className="mr-2 object-contain"
                            aria-hidden="true"
                          />
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>
                </CSSTransition>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="/"
                className="flex items-center px-4 py-2 text-base text-black-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaDownload
                  className="mr-2 object-contain"
                  aria-hidden="true"
                />
                Currículum
              </a>
            </div>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Navbar;
