import { useState, useEffect } from "react";
import ApiBackend from "../../services/ApiBackend.jsx";
import SimpleAlert from '../../components/alerts/SimpleAlert.jsx';

function ModalCrudNewPost({ isOpen, onClose, onSubmit }) {
  const [categories, setCategories] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    category_id: "",
    author: "Casa de Acogida de la Guia",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await ApiBackend.getAllCategories();

        setCategories(categoriesData.categories);
      } catch (error) {
        console.error("Error al obtener categorias:", error);
        setShowAlert(true);
        setAlertMessage("Error al obtener categorias. Tente novamente.");
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "author") {
      setPostData({ ...postData, [name]: "Casa de Acogida de la Guia" });
    } else if (name === "category") {
      setPostData({ ...postData, category_id: value });
    } else if (name === "image") {
      if (files && files.length > 0) {
        setImageFile(files[0]);
      }
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", postData.title);
      formData.append("content", postData.content);
      formData.append("category_id", postData.category_id);
      formData.append("author", postData.author);

      formData.append("image", imageFile);

      await ApiBackend.createPost(formData);
      setSuccessMessage(
        "Post creado con exito"
      );
      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
      onSubmit();
    } catch (error) {
      console.error("Erro ao criar post:", error);
      setErrorMessage("Error al crear el post, intentelo de nuevo más tarde");
        setTimeout(() => {
          setErrorMessage(null);
        }, 6000);
    }
  };

  return (
    <>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? "fixed" : "hidden"
        } top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-3xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Nuevo post
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                X
              </button>
            </div>
            {showAlert && <SimpleAlert icon="error" text={alertMessage} />}
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Título
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={postData.title}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Digite o título do post"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Categoria
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={postData.category_id}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Categoria</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contenido
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows="4"
                    value={postData.content}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe el post aqui"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear
              </button>
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
            </form>
          </div>
        </div>
        </div>
    </>
  );
}
export default ModalCrudNewPost;
