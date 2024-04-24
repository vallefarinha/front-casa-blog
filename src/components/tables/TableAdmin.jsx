import React, { useState, useEffect } from "react";
import ModalCrud from "../modal/ModalCrudNewPost";
import ModalCrudEdit from "../modal/ModalCrudEdit";
import ApiBackend from "../../services/ApiBackend.jsx";
import Swal from 'sweetalert2';


function TableAdmin() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isEditDeleteDropdownOpen, setIsEditDeleteDropdownOpen] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await ApiBackend.getAllPost(selectedCategory);
        setPosts(postsData.posts);
        const categoriesData = await ApiBackend.getAllCategories();
        setCategories(categoriesData.categories);
      } catch (error) {
        setErrorMessage(
          "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, [selectedCategory]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (postId) => {
    console.log(postId);
    setSelectedPostId(postId);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const toggleEditDeleteDropdown = (postId) => {
    setSelectedPostIndex((prevId) => (prevId === postId ? null : postId));
  };
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleCategoryChange = (e, categoryId) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedCategory(categoryId.toString());
    } else {
      setSelectedCategory("");
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
  };

  let filteredPosts = posts;
  if (selectedCategory !== "") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category_id.toString() === selectedCategory
    );
  }
  console.log("Posts filtrados pela categoria:", filteredPosts);
  if (searchText !== "") {
    filteredPosts = filteredPosts.filter((post) =>
      Object.values(post).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  const handlePageChange = (selectedPage) => {
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    if (selectedPage >= 0 && selectedPage < totalPages) {
      setCurrentPage(selectedPage);
      window.scrollTo(0, 0);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredPosts.length);

  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  const postId = filteredPosts[selectedPostIndex]?.id;

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Quieres eliminar el post?",
      text: "No puedes volver esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    });
  
    if (confirmDelete.isConfirmed) {
      try {  
        await ApiBackend.deletePost(id)  

        Swal.fire({
          title: "Eliminar",
          text: "El post fue eliminado",
          icon: "success"
        });
  
        console.log(`Post con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(`Error al eliminar el post con ID ${id}:`, error);
        Swal.fire({
          title: "Error!",
          text: `Error al eliminar el post con ID ${id}`,
          icon: "error"
        });
      }
    }
  };

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
                        viewbox="0 0 20 20"
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
                  +Añadir Post
                </button>
                <ModalCrud isOpen={isModalOpen} onClose={closeModal} />
                <div className="flex flex-col items-center space-x-3 w-full md:w-auto">
                  <button
                    id="filterDropdownButton"
                    onClick={toggleFilterDropdown}
                    aria-expanded={isFilterDropdownOpen ? "true" : "false"}
                    data-dropdown-toggle="filterDropdown"
                    className="md:w-auto flex items-center justify-left py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Filtrar por Categoria
                  </button>

                  <div
                    id="filterDropdown"
                    className={`z-10 ${
                      isFilterDropdownOpen ? "block" : "hidden"
                    } absolute right-0 mt-10 w-48 p-3 bg-white rounded-lg shadow`}
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                      Elija una categoria
                    </h6>
                    <ul
                      className="space-y-2 text-sm p-4"
                      aria-labelledby="filterDropdownButton"
                    >
                      {categories.map((category) => (
                        <li className="flex items-center" key={category.id}>
                          <input
                            id={category.id}
                            type="checkbox"
                            value={category.id}
                            onChange={(e) =>
                              handleCategoryChange(e, category.id)
                            }
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor={category.id}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            {category.name} (
                            {
                              posts.filter(
                                (post) => post.category_id === category.id
                              ).length
                            }
                            )
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto">
              <table className="w-full md:w-[97%] mx-auto text-sm text-left text-gray-500 p-6 m-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Título
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Contenido
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Categoría
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Autor
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Imagen
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => {
                    return (
                      <tr
                        key={post.id}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-wrap dark:text-white"
                        >
                          {post.title}
                        </th>
                        <td className="px-4 py-3">
                          {post.content.length > 50
                            ? `${post.content.substring(0, 50)}...`
                            : post.content}
                        </td>{" "}
                        <td className="px-4 py-3">{post.category_id}</td>
                        <td className="px-4 py-3">{post.author}</td>
                        <td className="px-4 py-3">
                          {post.image && (
                            <img
                              src={"http://localhost:8000/images/" + post.image}
                              alt={post.title}
                              className="w-24 h-24"
                            />
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative inline-block text-left">
                            <button
                              id={`editDeleteDropdownButton-${post.id}`}
                              onClick={() => toggleEditDeleteDropdown(post.id)}
                              aria-expanded={
                                selectedPostIndex === post.id ? "true" : "false"
                              }
                              className="ml-3 md:ml-0 flex items-center justify-center text-gray-900 focus:outline-none bg-white rounded-lg focus:z-10 focus:ring-4 focus:ring-gray-200"
                              type="button"
                            >
                              ...
                            </button>
                            <div
                              id={`editDeleteDropdown-${post.id}`}
                              className={`${
                                selectedPostIndex === post.id
                                  ? "block"
                                  : "hidden"
                              } absolute left-0 top-6 w-24 p-3 bg-white rounded-lg shadow`}
                            >
                              <div className="py-1">
                                <button
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                  onClick={() => openEditModal(post.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                  onClick={() => handleDelete(post.id)}
                                >
                                  Delete
                                </button>

                              </div>
                            </div>
                          </div>
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
                disabled={currentPosts.length < itemsPerPage}
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
                  {"  " + filteredPosts.length}
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
                  { length: Math.ceil(filteredPosts.length / itemsPerPage) },
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
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ModalCrudEdit
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          selectedPostIndex={selectedPostId}
        />
      </section>
    </div>
  );
}
export default TableAdmin;
