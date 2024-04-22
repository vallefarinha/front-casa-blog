import React from "react";
import TitleHistory from "../components/title/TitleHistory.jsx";
import Title from "../components/title/Title.jsx";
import Search from "../components/search/Search.jsx";
import PostCard from "../components/cards/blog/card-post/PostCard.jsx";
import sunset from "../assets/images/sunset.png";
import Pagination from "../components/pagination/Pagination.jsx";
import  { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import JumboCard from "../components/cards/blog/card-post/JumboCard.jsx";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

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

  const handlePostClick = (permalink) => {
    window.open(permalink, "_blank");
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  };
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex items-center mt-12">
          <Title wordBlue={"Nuestro"} wordPink={"Blog"} />
        </div>
        <div className="flex justify-between items-center">
        <Search />
        <IoFilter  className="text-primaryColor text-3xl"/>
        </div>       
        <div className="grid gap-4 justify-center md:grid-cols-3">
        {/* <JumboCard
        img={sunset}
        ></JumboCard> */}

<PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
          <PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
             <PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
              <PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
              <PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
              <PostCard
            img={sunset}
            imgDescription="sunset"
            title="Título"
            content="conteúdo"
            tag="familia"
            created="20 de abril de 2023"
          ></PostCard>
        </div>
        <Pagination
          totalItems={posts.length} 
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        ></Pagination>
      </div>
    </>
  );
};

export default Blog;
