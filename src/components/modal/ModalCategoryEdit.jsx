import React from "react";
import { useState, useEffect } from "react";
import ApiBackend from "../../services/ApiBackend.jsx";

const ModalCategoryEdit = ({ isOpen, onClose, categoryId, onSubmit  }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryInfo = await ApiBackend.getCategoryById(categoryId);
        setCategory(categoryInfo.category);
      } catch (error) {
        console.error("Error al obtener la categoria:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiBackend.updateCategory(categoryId , category);

      setSuccessMessage(
        "Categoría actualizada con exito"
      );
      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
      onSubmit();
    } catch (error) {
        console.error("Error al actualizar la categoria:", error);
        setErrorMessage("Error al actualizar la categoria, intentelo de nuevo más tarde");
        setTimeout(() => {
          setErrorMessage(null);
        }, 6000);
    }
  };


  return (
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
              Actualizar Categoría
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

          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre de la Categoría
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={category.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Escribe el nombre de la categoría"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white mb-2 inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Actualizar
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
  );
};

export default ModalCategoryEdit;
