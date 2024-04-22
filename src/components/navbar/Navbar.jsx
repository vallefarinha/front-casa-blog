import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoNav from "../../assets/images/casaacogidaT.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-bgColor fixed w-full z-50 top-0 start-0">

        <div className="max-w-screen-xl z-50 flex flex-wrap md:flex-nowrap md:text-sm lg:text-base items-center justify-between mx-auto p-3 sm:p-3">
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={LogoNav} className="w-14 sm:w-20 z-50 " alt="Logo" />
          </Link>
          <div className=" z-50 flex  md:order-2 space-x-2 md:space-x-3 rtl:space-x-reverse">
          <PrimaryBtn data={"Dona"} go="partnership"></PrimaryBtn>
          <PrimaryBtn data={"Hazte Socio"} go="form"></PrimaryBtn>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 sm:w-10 sm:h-10 justify-center text-sm text-LetterColor rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-primaryColor dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isOpen ? "hidden" : "block"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <svg
                className={`w-5 h-5 ${isOpen ? "block" : "hidden"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M14.33 5.424l.943.943L10 11.886l-5.273-5.52.943-.943L10 10l4.33-4.576z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-bgColor md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-bgColor">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-LetterColor rounded hover:bg-gray-100 "
                  aria-current="page"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li className="relative" onClick={toggleDropdown}>
                <a className="block py-2 px-3  text-LetterColor rounded hover:bg-gray-100 cursor-pointer">
                  <div className="flex gap-2 items-center">
                    <span>Sobre Nosotros</span>
                    {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </a>
                <ul
                  className={`md:absolute ${
                    isDropdownOpen ? "block" : "hidden"
                  } bg-bgColor pt-2 pb-4 border border-gray-200 rounded-md text-md font-normal text-start z-10 left-0 md:left-auto`}
                >
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Quiénes Somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/work"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Qué Hacemos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/history"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Nuestra Historia
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/house"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Nuestra Casa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/petra"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Beata Petra
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sanjose"
                      className="block px-4 py-2 text-LetterColor hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      San José de La Montaña
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/partnership"
                  className="block py-2 px-3 text-LetterColor rounded hover:bg-gray-100 "
                  onClick={closeMenu}
                >
                  Colabora
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="block py-2 px-3 text-LetterColor rounded hover:bg-gray-100 "
                  onClick={closeMenu}
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 px-3 text-LetterColor rounded hover:bg-gray-100 "
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
