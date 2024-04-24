import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalCategoryCreate from "../modal/ModalCategoryCreate.jsx";
import ModalCategoryEdit from "../modal/ModalCategoryEdit.jsx";
import ApiBackend from "../../services/ApiBackend.jsx";

function TableCategories() {
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [selectedcategoryId, setCategoryId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const categoriesData = await ApiBackend.getAllCategories();
      setCategories(categoriesData.categories);
    } catch (error) {
      setErrorMessage(
        "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const handleModalSubmit = async () => {
    await fetchData(); 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (categoryId) => {
    setCategoryId(categoryId);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
  };

  let filterCategory = categories;

  if (searchText !== "") {
    filterCategory = filterCategory.filter((category) =>
      Object.values(category).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  const handlePageChange = (selectedPage) => {
    const totalPages = Math.ceil(filterCategory.length / itemsPerPage);
    if (selectedPage >= 0 && selectedPage < totalPages) {
      setCurrentPage(selectedPage);
      window.scrollTo(0, 0);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filterCategory.length);

  const currentCategories = filterCategory.slice(startIndex, endIndex);
  const categoryId = filterCategory[selectedPostIndex]?.id;

  return (
    <div className="w-[95%]">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white relative shadow-md sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  className="flex items-center justify-center text-LetterColor border bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={openModal}
                >
                  +Añadir Categoria
                </button>
                <ModalCategoryCreate isOpen={isModalOpen} onClose={closeModal} onSubmit={handleModalSubmit}/>
              </div>
            </div>
            <div className="overflow-y-auto">
              <table className="w-full md:w-[97%] mx-auto text-sm text-left text-gray-500 p-6 m-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-4 py-3">
                      NOMBRE DE LA CATEGORIA
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentCategories.map((category) => {
                    return (
                      <tr
                        key={category.id}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-wrap dark:text-white"
                        >
                          {category.id}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-wrap dark:text-white"
                        >
                          {category.name}
                        </th>
                        <td className="px-4 py-3">
                          <button
                            className="block bg-secondaryColor px-4 py-2 text-sm text-LetterColor rounded-xl font-poppinsBold hover:bg-tertiaryColor"
                            onClick={() => openEditModal(category.id)}
                          >
                            Edit
                          </button>
                         
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <nav className="flex justify-between items-center mt-3 p-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentCategories.length < itemsPerPage}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-pointer"
              >
                Próximo
              </button>
            </nav>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  {"  " + startIndex + 1}-{endIndex + "  "}
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  {"  " + filterCategory.length}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                {Array.from(
                  { length: Math.ceil(filterCategory.length / itemsPerPage) },
                  (_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        onClick={() => handlePageChange(i)}
                        className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                          currentPage === i ? "font-semibold" : ""
                        }`}
                      >
                        {i + 1}
                      </a>
                    </li>
                  )
                )}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentCategories.length < itemsPerPage}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ModalCategoryEdit
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          categoryId={selectedcategoryId}
          onSubmit={handleModalSubmit}
        />
      </section>
    </div>
  );
}
export default TableCategories;
