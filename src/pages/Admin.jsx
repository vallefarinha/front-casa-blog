import React from "react";
import TitleHistory from "../components/title/TitleHistory";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import TableAdmin from "../components/tableAdmin/TableAdmin";


function Admin() {
  return (
    <>
    <div className="flex">
      <aside
        className="left-0 z-40 w-[25%] h-screen transition-transform -translate-x-full bg-bgColor sm:translate-x-0 font-poppinsMedium text-LetterColor"
        aria-label="Sidebar"
      >
        <div className="h-full w-full px-3 ml-8 pb-4 overflow-y-auto bg-bgColor">
          <ul className="space-y-4 font-medium mt-2">
            <li>
              <TitleHistory wordBlue={"Hola,"} wordPink={"Admin!"} />
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <IoDocumentText
               className="text-2xl text-primaryColor" />

                <span className="ms-3">Posts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
           <HiOutlineInboxArrowDown
           className="text-2xl text-primaryColor" />

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Comentários
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiLogOut className="text-2xl text-primaryColor" />

                <span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
<TableAdmin></TableAdmin>
</div>
    </>
  );
}

export default Admin;
