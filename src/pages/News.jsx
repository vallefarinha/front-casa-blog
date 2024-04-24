import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import InstagramAPI from "../services/InstagramAPI";
import Pagination from "../components/pagination/Pagination";
import Help from "../components/banners/Help";
import Title from "../components/title/Title";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPosts = await InstagramAPI();
        setPosts(dataPosts);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
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
    <div>
      <div className=" mx-auto w-[90%] lg:w-[80%] my-6 sm:my-10">
        <div className="my-10">
          {" "}
          <Title
            wordBlue={"Mantente actualizado en la "}
            wordPink={" Casa de la Guia"}
          />
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-wrap gap-5">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className=" flex overflow-hidden rounded-lg group w-[350px] h-[170px] lg:w-[400px] lg:h-[200px] shadow-xl shadow-LetterColor hover:shadow-primaryColor cursor-pointer mx-auto"
            onClick={() => handlePostClick(post.permalink)}
          >
            {post.media_type === "IMAGE" && (
              <div className="flex w-full">
                <div className="w-1/2">
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
            {post.media_type === "VIDEO" && (
              <div className="flex w-full">
                <div className="w-1/2">
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="object-contain w-full h-[100%]"
                  >
                    <source src={post.media_url} type="video/mp4" />
                    Tu navegador no soporta este video.
                  </video>
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}

            {post.media_type === "CAROUSEL_ALBUM" && (
              <div className="flex w-full">
                <div className=" w-1/2 ">
                  <div className="w-full mx-auto my-auto ">
                    <ImageGallery
                      items={post.children.data.map((child) => ({
                        original: child.media_url,
                        thumbnail: child.media_url,
                      }))}
                      showPlayButton={false}
                      showFullscreenButton={false}
                      showThumbnails={false}
                      showNav={false}
                      showBullets={false}
                      autoPlay={true}
                      slideInterval={4000}
                      renderItem={(item) => (
                        <img
                          src={item.original}
                          alt={post.caption}
                          className="object-contain"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Pagination
        totalItems={posts.length} // Usar el total de posts para la paginación
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      <Help />
    </div>
  );
};

export default News;
