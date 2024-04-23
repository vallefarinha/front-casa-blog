import React from 'react'
import bannerColabora from '../../assets/banners/bannerColabora.svg';
import bannerColaboraMobile from '../../assets/banners/colabora-banner-mobile.svg';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


function Help() {
  const isMobile = useMediaQuery({ query: '(max-width: 758px)' });
  return (
    <Link to='/partnership'>
    {isMobile ? (
      <img
        src={bannerColaboraMobile}
        alt="Banner"
        className="h-auto m-auto"
      />
    ) : (
      <img
        src={bannerColabora}
        alt="Banner"
        className="w-[80%] h-auto m-auto"
      />
    )}
  </Link>
  )
}

export default Help