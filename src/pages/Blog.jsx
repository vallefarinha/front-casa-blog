import React from "react";
import Title from "../components/title/Title.jsx";
import Search from "../components/search/Search.jsx";
import PostCard from "../components/cards/blog/card-post/PostCard.jsx";
import Pagination from "../components/pagination/Pagination.jsx";
import { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import ApiBackend from "../services/ApiBackend.jsx";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getPosts = await ApiBackend.getAllPost();
        setPosts(getPosts.posts);
        const getCategories = await ApiBackend.getAllCategories();
        setCategories(getCategories.categories);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setErrorMessage(
          "Error al obtener datos. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0);
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
  if (searchText !== "") {
    filteredPosts = filteredPosts.filter((post) =>
      Object.values(post).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="flex items-center mt-12">
          <Title wordBlue={"Nuestro"} wordPink={"Blog"} />
        </div>
        <div className="flex flex-wrap mt-5 md:mt-0 md:gap-4 mb-4 justify-center md:justify-between">
          <div className="flex items-center gap-2">
            <IoFilter className="text-primaryColor text-3xl" />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 border border-slate-300 rounded-2xl bg-inherit font-poppinsRegular text-gray-600"
            >
              <option value="">Todas las Categorías</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <Search onSearchChange={handleSearchChange} />
        </div>
        <div className="flex flex-col justify-around items-center my-8">
        {filteredPosts.length === 0 ? (
          <p className="font-poppinsRegular text-LetterColor text-center">No hay coincidencias.</p>
        ) : (
          <>
          <div className="flex flex-wrap gap-x-1 md:gap-x-8 gap-y-8  w-full justify-center md:justify-between">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                img={post.image}
                imgDescription={post.title}
                title={post.title}
                tag={
                  categories.find(
                    (category) => category.id === post.category_id
                  )?.name || "Desconocida"
                }
                created={post.created_at}
              ></PostCard>
            ))}
          </div>
          <Pagination
            totalItems={filteredPosts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
           </>
        )}
        </div>
      </div>
    </>
  );
};

export default Blog;
