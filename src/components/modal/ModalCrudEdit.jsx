import { useState, useEffect } from "react";
import ApiBackend from "../../services/ApiBackend.jsx";

function ModalCrudEdit({ isOpen, onClose, selectedPostIndex, filteredPosts }) {
    const [categories, setCategories] = useState([]);
    const [editingPostData, setEditingPostData] = useState({
        title: "",
        content: "",
        category_id: "",
        image: "",
    });


    useEffect(() => {
        if (
            selectedPostIndex !== null &&
            filteredPosts &&
            filteredPosts.length > 0 &&
            selectedPostIndex < filteredPosts.length
        ) {
            const postToEdit = filteredPosts[selectedPostIndex];
            console.log("Post selecionado para edição:", postToEdit);

            if (postToEdit) {
                setEditingPostData({
                    title: postToEdit.title || "",
                    content: postToEdit.content || "",
                    category_id: postToEdit.category_id || "",
                    image: postToEdit.image || "",
                });
            }
        }
    }, [selectedPostIndex, filteredPosts]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await ApiBackend.getAllCategories();
                if (
                    categoriesData.categories &&
                    Array.isArray(categoriesData.categories)
                ) {
                    setCategories(categoriesData.categories);
                } 
            } catch (error) {
                console.error("Erro ao obter categorias:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingPostData({ ...editingPostData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditingPostData({ ...editingPostData, image: file });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", editingPostData.title);
            formData.append("content", editingPostData.content);
            formData.append("category_id", editingPostData.category_id);
            formData.append("image", editingPostData.image);
            const response = await ApiBackend.updatePost(postId, formData);
            if (response) {
                console.log("Post atualizado com sucesso:", response);
            } else {
                console.error("Erro ao atualizar o post.");
            }
        } catch (error) {
            console.error("Erro ao atualizar o post:", error);
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
                        <form className="p-4 md:p-5" onSubmit={handleEditSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                                    <input type="text" name="title" id="name" value={editingPostData.title} onChange={handleEditChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o título do post" required="" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={handleImageChange} />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={editingPostData.category_id} onChange={handleEditChange}>
                                        <option value="">Categoria</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenido</label>
                                    <textarea id="description" rows="4" value={editingPostData.content} onChange={handleEditChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe el post aqui"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Editar post
                            </button>
                        </form>
            
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalCrudEdit;
