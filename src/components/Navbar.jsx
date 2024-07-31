import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaUserAstronaut, FaLinkedin } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);

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
                { to: "/contact", icon: RiMessage2Line, label: "Contacto" },
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
            </ul>
            <div className="py-2">
              <a
                href="https://www.linkedin.com/in/juan-david-beca-pillimue-aa3168207/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-base text-black-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <FaLinkedin
                  className="mr-2 object-contain"
                  aria-hidden="true"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Navbar;
