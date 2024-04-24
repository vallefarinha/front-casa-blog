import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import LogoNav from "../../assets/images/casaacogidaT.png";
import { Link, useLocation  } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleGestionClick = () => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (isLoggedIn) {
      window.location.href = "/admin";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="bg-white w-full h-auto mx-auto p-4 font-poppins flex flex-col md:flex-row shadow-xl border-t-2 border-gray-200 mt-10">
      <div className="flex-wrap md:flex md:flex-nowrap max-w-screen-xl mx-auto md:justify-between">
      <div className="flex w-full md:w-1/6 mx-auto lg:mx-0 md:justify-start">
        <Link to="/">
          <img src={LogoNav} className="w-1/2 h-auto mx-auto" alt="Logo" />
        </Link>
      </div>
      <div className="flex text-center w-full flex-wrap md:justify-between md:flex-nowrap md:w-3/4">
        <div className="w-full py-2 px-5 md:px-2 flex flex-col md:items-start md:text-start">
          <p className="text-primaryColor font-semibold">Información de contacto</p>
          <div className="flex gap-1 text-LetterColor hover:text-tertiaryColor">
            <IoLocationOutline className="size-6" />
            <p className="flex flex-wrap text-sm text-center md:text-start md:ml-2">
              Avda. del profesor Pérez Pimentel 105 Barrio de la Guía 33203
              Gijón - Asturias
            </p>
          </div>
          <div className="flex justify-center gap-1 text-LetterColor hover:text-tertiaryColor">
            <LuPhone className="size-4 ml-1" />
            <p className="text-sm ml-3 text-center md:text-start md:ml-3"> 985 363 314</p>
          </div>
          <div className="flex justify-center gap-1 text-LetterColor hover:text-tertiaryColor hover:ml-2">
            <HiOutlineMail className="size-4 ml-1" />
            <a href="mailto:casadeacogidaguia@hotmail.es" className="text-sm text-center md:text-start md:ml-3">
              casadeacogidaguia@hotmail.es
            </a>
          </div>
        </div>

         <div className="flex flex-col w-full py-2 px-5 md:px-2 md:items-center">
          <p className="text-primaryColor font-semibold">Enlaces Útiles</p>
          <ul className="flex-col flex-wrap gap-4 mb-6 text-center text-sm font-medium text-LetterColor sm:mb-0 md:text-start">
            <li className="hover:text-tertiaryColor">
              <Link to="/about">Quiénes Somos</Link>
            </li>
            <li className="hover:text-tertiaryColor">
              <Link to="/partnership">Colabora</Link>
            </li>
            <li className="hover:text-tertiaryColor">
              <Link to="/blog">Noticias</Link>
            </li>
             <li className="hover:text-tertiaryColor">
            <a href="#" onClick={handleGestionClick}>Gestión</a>
          </li>
          </ul>
        </div>
        <div className="flex-col w-full -mt-6 py-2 px-5 md:items-end md:max-w-fit sm:mt-0">
          <p className="text-primaryColor font-semibold md:text-start">Redes sociales</p>
          <ul className="flex-col flex-wrap mb-3 text-sm font-medium text-LetterColor sm:mb-0 md:w-1/2 md:items-start">
            <li className="my-1 md:max-w-fit">
              <a href="#" className="flex justify-center">
                <FaFacebook className="size-6 hover:text-tertiaryColor ml-1" />
              </a>
            </li>
            <li className="my-1 md:max-w-fit">
              <a href="#"  className="flex justify-center">
                <FaInstagram className="size-6 hover:text-tertiaryColor ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
  
    </div>
  );
};

export default Footer;