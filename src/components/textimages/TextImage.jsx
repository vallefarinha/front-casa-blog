import React from "react";

const TextImage = () => {
  return (
    <>
      <div className="mb-5 mt-3 flex flex-wrap justify-evenly lg:justify-between">
        <p className="font-poppinsRegular text-lg lg:text-xl text-LetterColor text-justify lg:w-1/2  my-auto">
          La Casa de Acogida Nuestra Señora de los Desamparados tiene sus raíces
          en el año 1967, cuando fue establecida como una alternativa de
          atención para la infancia y la juventud. En la actualidad, se ha
          convertido en un refugio seguro para madres gestantes y/o con hijos
          pequeños que se encuentran en situación de riesgo.<br></br>
          <br></br>Formando parte de la Congregación religiosa “Madres de
          Desamparados y San José de la Montaña”, fundada en 1881 por la Beata
          Petra de San José, nuestra casa está arraigada en una tradición de
          servicio y compasión hacia los más necesitados. La Beata Petra de San
          José fue un verdadero testigo de la misericordia de Dios, dedicando su
          vida a ayudar a aquellos que más lo necesitaban.
        </p>
        <div className="lg:w-1/2">

        <img
          className="md:w-[80%] mx-auto"
          src="../src/assets/images/Homeimage.png"
        />
        </div>
      </div>
    </>
  );
};

export default TextImage;
