import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import casa1 from "../../assets/images/homeBannerSlider.svg";
import casa2 from "../../assets/images/BannerMadrePetra.svg";
import casa3 from "../../assets/images/BannerHomeCasa.svg";

const images = [
  {
    original: casa1,
    thumbnail: casa1,
  },
  {
    original: casa2,
    thumbnail: casa2,
  },
  {
    original: casa3,
    thumbnail: casa3,
  },
];

const HomeBannerSlider = () => {
    return (
      <div className="w-full relative overflow-hidden">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={4000}
          style={{ width: "100%" }}
          renderItem={renderItem}
        />
      </div>
    );
  };

export default HomeBannerSlider;

const renderItem = (item) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', maxHeight: '100%' }}
        />
      </div>
    );
  };