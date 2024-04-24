/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalCrud from "../modal/ModalCrudNewPost";
import ModalCrudEdit from "../modal/ModalCrudEdit";
import ApiBackend from "../../services/ApiBackend.jsx";

function TableComment() {
  const [posts, setPosts] = useState([]);
  const [postData, setPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);
  // const [selectedPostId, setSelectedPostId] = useState(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  // const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await ApiBackend.getAllComments();
        setComments(commentsData.comments);

        const postsData = await ApiBackend.getAllPosts();
        setPosts(postsData.posts);


        const postData = await getPostById(post.id);
            setPostData(postData.post)
      } catch (error) {
        setErrorMessage(
          "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

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

  let filteredComments = comments;
  if (selectedCategory !== "") {
    filteredComments = filteredComments.filter(
      (comment) => comment.post_id.category_id.toString() === selectedCategory
    );
  }
  console.log("Comments filtrados pela categoria:", filteredComments);
  if (searchText !== "") {
    filteredComments = filteredComments.filter((post) =>
      Object.values(post).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  const handlePageChange = (selectedPage) => {
    const totalPages = Math.ceil(filteredComments / itemsPerPage);
    if (selectedPage >= 0 && selectedPage < totalPages) {
      setCurrentPage(selectedPage);
      window.scrollTo(0, 0);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredComments.length);

  const currentComments = filteredComments.slice(startIndex, endIndex);
  const commentId = filteredComments[selectedCommentIndex]?.id;

  // const currentPosts = filteredPosts.slice(startIndex, endIndex);
  // const postId = filteredPosts[selectedPostIndex]?.id;

  const handleDelete = async (id) => {
    // Mostrar alerta de confirmación
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este post?"
    );

    if (confirmDelete) {
      try {
        await ApiBackend.deleteComment(id);

        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== id)
        );

        console.log(`Post con ID ${id} eliminado con éxito`);
      } catch (error) {
        console.error(`Error al eliminar el post con ID ${id}:`, error);
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
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
            </div>
            <div className="overflow-y-auto">
              <table className="w-full md:w-[97%] mx-auto text-sm text-left text-gray-500 p-6 m-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Contenido
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Autor
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Correo
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Título del Post
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                {currentComments.map((comment) => {
  // Encontre o post correspondente ao post_id do comentário
  const post = posts.find((post) => post.id === comment.post_id);
  console.log(post)
  // Verifique se o post foi encontrado antes de acessar seu título
  const postTitle = post ? post.title : 'Título não encontrado';

  return (
    <tr key={comment.id} className="border-b dark:border-gray-700">
      <td className="px-4 py-3">
        {comment.content.length > 50
          ? `${comment.content.substring(0, 50)}...`
          : comment.content}
      </td>
      <td className="px-4 py-3">{comment.author}</td>
      <td className="px-4 py-3">{comment.email}</td>
      {/* Exiba o título do post em vez do ID */}
      <td className="px-4 py-3">{comment.post_id}</td>
      <td className="px-4 py-3">
        <button
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          onClick={() => handleDelete(comment.id)}
        >
          Delete
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
                disabled={currentComments.length < itemsPerPage}
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
                  {startIndex + 1}-{endIndex}
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredComments.length}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
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
                  </a>
                </li>
                {Array.from(
                  { length: Math.ceil(filteredComments.length / itemsPerPage) },
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
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TableComment;
