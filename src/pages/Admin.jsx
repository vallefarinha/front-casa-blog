import React, { useState, useEffect } from "react";
import TitleHistory from "../components/title/TitleHistory";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import TableAdmin from "../components/tables/TableAdmin";
import TableComment from "../components/tables/TableComment";
import { useNavigate } from "react-router-dom";
import ApiBackend from "../services/ApiBackend.jsx";

function Admin() {
  const [selectedItem, setSelectedItem] = useState("posts");
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se há um token de autenticação ativo
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Define o estado de login com base na presença do token
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setShowLogoutMessage(true);
        await ApiBackend.logout(token);
        localStorage.removeItem("token");
        setTimeout(() => {
          setShowLogoutMessage(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Erro durante o logout:", error);
    }
  };

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <div className="">
        <div className="font-poppinsMedium text-LetterColor">
          <div className="flex justify-center">
            <TitleHistory wordBlue={"Hola,"} wordPink={"Admin!"} />
          </div>
          <nav className="flex flex-wrap justify-center mr-8 space-x-5 py-5">
            <button
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                selectedItem === "posts" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("posts")}
            >
              <IoDocumentText className="text-2xl text-primaryColor" />
              <span className="ml-2">Posts</span>
            </button>
            <button
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                selectedItem === "comments" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleItemClick("comments")}
            >
              <HiOutlineInboxArrowDown className="text-2xl text-primaryColor" />
              <span className="ml-2">Comentarios</span>
            </button>
            <button
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={handleLogout}
            >
              <FiLogOut className="text-2xl text-primaryColor" />
              <span className="ml-2">Salir</span>
            </button>
          </nav>
        </div>

        <div className="w-full flex justify-center">
          {selectedItem === "posts" && <TableAdmin />}
          {selectedItem === "comments" && <TableComment />}
        </div>
      </div>
      {showLogoutMessage && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full"
        >
          <div className="relative p-4 w-full max-w-xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <h3 className="mb-5 text-lg font-poppinsBlack text-primaryColor">
                  Saliendo
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Admin;
