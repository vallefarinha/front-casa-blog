import React, { useState, useEffect } from "react";
import InstagramAPI from "../../services/InstagramAPI";
import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowButton from "../arrowbuttons/ArrowButton";

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPosts = await InstagramAPI();
        const last5Posts = dataPosts.slice(0, 5);
        setPosts(last5Posts);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="prev-arrow absolute bottom-[-45px] left-[36%] md:left-[40%] lg:left-[44%] z-10"
    >
      <ArrowButton rotate="left" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="next-arrow absolute bottom-[-45px] right-[40%]  lg:right-[44%] z-10"
    >
      <ArrowButton />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePostClick = (permalink) => {
    window.open(permalink, "_blank");
  };


  return (
    <div className="container mx-auto mb-20">
      <Slider {...settings}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden rounded-lg group bg-inherit shadow-xl shadow-LetterColor cursor-pointer"
            onClick={() => handlePostClick(post.permalink)}
          >
            {post.media_type === "IMAGE" && (
              <div className="relative w-full h-full flex justify-around">
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center p-4 overflow-y-auto">
                  <p className="text-white text-center text-sm">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
            {post.media_type === "VIDEO" && (
              <div className="relative w-full h-full flex justify-around">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  className="object-contain w-auto h-[100%]"
                >
                  <source src={post.media_url} type="video/mp4" />
                  Tu navegador no soporta este video.
                </video>
                <div className="absolute top-0 left-0 right-0 bottom-1/3 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 p-4 overflow-y-auto ">
                  <p className="text-white text-center text-sm">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
            {post.media_type === "CAROUSEL_ALBUM" && (
              <div className="relative w-full h-full">
                <div className="w-full h-full">
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
                    style={{objectFit:"contain", width: "100%", height: "100%"}}
                  />
                </div>
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramPosts;
