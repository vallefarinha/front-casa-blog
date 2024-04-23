import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Spinner } from "flowbite-react";
import ArrowButton from '../arrowbuttons/ArrowButton';
import casa1 from '../../assets/images/casa/IMG_6282.png';
import casa2 from '../../assets/images/casa/IMG_6272.png';
import casa4 from '../../assets/images/casa/IMG_6274.png';
import casa5 from '../../assets/images/casa/IMG_6275.png';
import casa6 from '../../assets/images/casa/IMG_6277.png';
import casa7 from '../../assets/images/casa/IMG_6279.png';
import casa8 from '../../assets/images/casa/20240402_201015.png';
import casa9 from '../../assets/images/casa/IMG_6286.png';
import casa10 from '../../assets/images/casa/IMG_6291.png';
import casa11 from '../../assets/images/casa/IMG_6292.png';
import casa12 from '../../assets/images/casa/IMG_6293.png';
import casa13 from '../../assets/images/casa/IMG_6295.png';
import casa14 from '../../assets/images/casa/IMG_6297.png';
import casa15 from '../../assets/images/casa/IMG_6299.png';
import casa16 from '../../assets/images/casa/IMG_6300.png';
import casa17 from '../../assets/images/casa/IMG_6304.png';
import casa18 from '../../assets/images/casa/IMG_6305.png';
import casa19 from '../../assets/images/casa/IMG_6311.png';
import casa20 from '../../assets/images/casa/IMG_6314.png';
import casa21 from '../../assets/images/casa/IMG_6315.png';
import casa22 from '../../assets/images/casa/IMG_6320.png';
import casa23 from '../../assets/images/casa/IMG_6323.png';
import casa24 from '../../assets/images/casa/IMG_6325.png';
import casa25 from '../../assets/images/casa/IMG_6332.png';
import casa26 from '../../assets/images/casa/IMG_6337.png';
import casa27 from '../../assets/images/casa/IMG_6362.png';
import casa28 from '../../assets/images/casa/IMG_6368.png';
import casa29 from '../../assets/images/casa/IMG_6374.png';
import casa30 from '../../assets/images/casa/IMG_6380.png';
import casa31 from '../../assets/images/casa/IMG_6383.png';
import casa32 from '../../assets/images/casa/IMG_6385.png';
import casa33 from '../../assets/images/casa/IMG_6392.png';
import casa34 from '../../assets/images/casa/IMG_6393.png';
import casa35 from '../../assets/images/casa/IMG_6394.png';

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
    original: casa4,
    thumbnail:casa4,
  },
  {
    original: casa5,
    thumbnail: casa5,
  },
  {
    original: casa6,
    thumbnail: casa6,
  },
  {
    original: casa7,
    thumbnail: casa7,
  },
  {
    original: casa8,
    thumbnail: casa8,
  },
  {
    original: casa9,
    thumbnail: casa9,
  },
  {
    original: casa10,
    thumbnail: casa10,
  },
  {
    original: casa11,
    thumbnail: casa11,
  },
  {
    original: casa12,
    thumbnail: casa12,
  },
  {
    original: casa13,
    thumbnail: casa13,
  },
  {
    original: casa14,
    thumbnail: casa14,
  },
  {
    original: casa15,
    thumbnail: casa15,
  },
  {
    original: casa16,
    thumbnail: casa16,
  },
  {
    original: casa17,
    thumbnail: casa17,
  },
  {
    original: casa18,
    thumbnail: casa18,
  },
  {
    original: casa19,
    thumbnail: casa19,
  },
  {
    original: casa20,
    thumbnail: casa20,
  },
  {
    original: casa21,
    thumbnail: casa21,
  },
  {
    original: casa22,
    thumbnail: casa22,
  },
  {
    original: casa23,
    thumbnail: casa23,
  },
  {
    original: casa24,
    thumbnail: casa24,
  },
  {
    original: casa25,
    thumbnail: casa25,
  },
  {
    original: casa26,
    thumbnail: casa26,
  },
  {
    original: casa27,
    thumbnail: casa27,
  },
  {
    original: casa28,
    thumbnail: casa28,
  },
  {
    original: casa29,
    thumbnail: casa29,
  },
  {
    original: casa30,
    thumbnail: casa30,
  },
  {
    original: casa31,
    thumbnail: casa31,
  },
  {
    original: casa32,
    thumbnail: casa32,
  },
  {
    original: casa33,
    thumbnail: casa33,
  },
  {
    original: casa34,
    thumbnail: casa34,
  },
  {
    original: casa35,
    thumbnail: casa35,
  },
];

const CustomLeftNav = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    disabled={disabled}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 cursor-pointer z-10"
  >
    <ArrowButton rotate="left"/>
  </div>
);

const CustomRightNav = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    disabled={disabled}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 cursor-pointer z-10"
  >
    <ArrowButton />
  </div>
);

const HouseGallery = () => {
  const [cachedImages, setCachedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  useEffect(() => {
    const cachedImagesFromStorage = localStorage.getItem('cachedImages');
    if (cachedImagesFromStorage) {
      setCachedImages(JSON.parse(cachedImagesFromStorage));
    } else {
      setCachedImages(images.map(image => image.original));
      localStorage.setItem('cachedImages', JSON.stringify(images.map(image => image.original)));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  const handleImageLoad = () => {
    setLoadedImagesCount(prevCount => prevCount + 1);
    if (loadedImagesCount === images.length - 1) {
      setLoading(false);
    }
  };

  const renderItem = (item) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '100%', maxHeight: '100%' }}
          onLoad={handleImageLoad} 
        />
      </div>
    );
  };

  return (
    <div className="gallery-container relative">
      {loading ? (
        <div className='flex justify-around py-5'>
          <Spinner color="pink" className='text-tertiaryColor' size="xl" aria-label="Pink spinner example" />
        </div>
      ) : (
        <ImageGallery
          items={images}
          showNav={true}
          showBullets={false}
          thumbnailPosition='left'
          renderLeftNav={(onClick, disabled) => (
            <CustomLeftNav onClick={onClick} disabled={disabled} />
          )}
          renderRightNav={(onClick, disabled) => (
            <CustomRightNav onClick={onClick} disabled={disabled} />
          )}
          renderItem={renderItem}
        />
      )}
    </div>
  );
};

export default HouseGallery;