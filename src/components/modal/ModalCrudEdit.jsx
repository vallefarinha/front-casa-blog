import { useState, useEffect } from "react";
import ApiBackend from "../../services/ApiBackend.jsx";
import SimpleAlert from "../../components/alerts/SimpleAlert.jsx";
import { Spinner } from "flowbite-react";

function ModalCrudEdit({ isOpen, onClose, selectedPostIndex , onSubmit}) {
  
  const [categories, setCategories] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    content: "",
    category_id: "",
    author: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postInfo = await ApiBackend.getPostById(selectedPostIndex);
        setPostData(postInfo.post);
        const getCategories = await ApiBackend.getAllCategories();
        setCategories(getCategories.categories);
      } catch (error) {
        console.error("Error al obtener la información:", error);
        // setShowAlert(true);
      }
    };

    fetchData();
  }, [selectedPostIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setPostData({ ...postData, image: selectedImage });
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const postDataWithoutImage = { ...postData };
      if (!postData.image) {
        delete postDataWithoutImage.image;
      }
      const formData = new FormData();
      formData.append("title", postData.title);
      formData.append("content", postData.content);
      formData.append("category_id", postData.category_id);
      formData.append("author", postData.author);
      formData.append("image", postData.image);

      await ApiBackend.updatePost(selectedPostIndex, formData);
      setSuccessMessage(
        "Post actualizado exitosamente"
      );
      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
      onSubmit();
    } catch (error) {
      console.error("Error al atualizar el post:", error);
      setErrorMessage("Error al actualizar el post, intentelo de nuevo más tarde");
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
                Actualizar el Post
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
            {/* {showAlert && <SimpleAlert icon="error" text={alertMessage} />} */}
            {postData ? (
              <form
                className="p-4 md:p-5"
                onSubmit={handleEditSubmit}
                encType="multipart/form-data"
              >
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
                      required=""
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="image"
                    >
                      Selecciona una Imagen
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="image"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="category_id"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Categoría
                    </label>
                    <select
                      name="category_id"
                      id="category_id"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={postData.category_id}
                    >
                      <option value="">Categoria</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="author"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Autor
                    </label>
                    <input
                      type="text"
                      name="author"
                      id="author"
                      value={postData.author}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required=""
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
                      name="content"
                      id="content"
                      rows="4"
                      value={postData.content}
                      onChange={handleChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center mb-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Editar post
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
            ) : (
              <p className="font-poppinsMedium text-LetterColor text-center">
                <Spinner
                  color="pink"
                  className="text-tertiaryColor"
                  size="xl"
                  aria-label="Pink spinner example"
                />{" "}
                Cargando información del post...
              </p>
            )}
            {/* {showEditAlert && <SimpleAlert icon="error" text="Error al actualizar el post. Intentelo de nuevo más tarde." />} */}
          </div>
        </div>
      </div>
    </>
  );
}
export default ModalCrudEdit;
