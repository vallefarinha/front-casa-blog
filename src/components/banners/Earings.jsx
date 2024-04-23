import React from 'react';
import bannerPendientes from '../../assets/banners/bannerPendientes.svg';
import bannerPendientesMobile from '../../assets/banners/pendientes-banner-mobile.svg';
import { useMediaQuery } from 'react-responsive';

function Earings() {
  const isMobile = useMediaQuery({ query: '(max-width: 758px)' });

  return (
    <>
      {isMobile ? (
        <img
          src={bannerPendientesMobile}
          alt="Banner"
          className="w-full h-auto max-w-full mx-auto"
          style={{ maxWidth: '100%' }}
        />
      ) : (
        <img
          src={bannerPendientes}
          alt="Banner"
          className="w-full h-auto max-w-[80%] mx-auto"
          style={{ maxWidth: '80%' }}
        />
      )}
    </>
  );
}

export default Earings;