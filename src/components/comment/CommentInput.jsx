import React, { useState } from "react";
import TitleHistory from "../../components/title/TitleHistory";
import ApiBackend from "../../services/ApiBackend";

function CommentInput({id}) {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      content: content,
      author: author,
      email: email,
      post_id:id
    };
    try {
      const response = await ApiBackend.createComment(commentData);
      if (response) {
        console.log("Comentario creado exitosamente:", response);
        setSuccessMessage("Comentario creado exitosamente, la página se recargará");
        setTimeout(() => {
          window.location.reload();
        }, 5000); 
      } else {
        console.error("Error al crear el comentario");
        setErrorMessage("Error al crear el comentario");
        setTimeout(() => {
          setErrorMessage(null);
        }, 10000); 
      
      }
    } catch (error) {
      console.error("Error al crear el comentario:", error); setErrorMessage("Error al crear el comentario");
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000); 
    }
  };
  return (
    <>
      <TitleHistory wordBlue="Deja tu" wordPink="comentario" />
      <div className="bg-tertiaryColor p-6 rounded-2xl mt-10">
        <form className="w-[70%] mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Juan perez"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="usuario123@example.com"
              required
            />
          </div>

          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Comentario
          </label>
          <textarea
            id="content"
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="escribe un comentario sobre el post..."
          ></textarea>
          <button
            type="submit"
            className="text-white bg-primaryColor hover:bg-LetterColor my-4 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </form>
         {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
          {successMessage}
        </div>
      )}
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 mb-4">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
}

export default CommentInput;
