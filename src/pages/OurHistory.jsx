import React from "react";
import ImgCruz from "../assets/images/imagenCruz.png";
import ImgCasa1963 from "../assets/images/imagenCasa1963.png";
import ImgCasa1968 from "../assets/images/imagenCasa1968.png";
import ImgCasa2006 from "../assets/images/imagenCasa2006.png";
import card1 from "../assets/images/casa/IMG_6332.png";
import card2 from "../assets/images/casa/IMG_6385.png";
import card3 from "../assets/images/casa/IMG_6282.png";
import ArrowButton from "../components/arrowbuttons/ArrowButton";
import TitleHistory from "../components/title/TitleHistory";
import { IoIosArrowDown } from "react-icons/io";

const OurHistory = () => {
  const handleButtonClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });

      targetSection.classList.add("animate__animated", "animate__zoomIn");

      setTimeout(() => {
        targetSection.classList.remove("animate__animated", "animate__zoomIn");
      }, 2000); 
    }
  };

  const handleDropdownToggle = () => {
    const menu = document.getElementById("dropdownOffsetButton");
    const dropdownMenu = document.getElementById("dropdownSkidding");
  
    if (menu.classList.contains("px-5")) {
      menu.classList.remove("px-5");
      menu.classList.add("px-14");
    } else {
      menu.classList.remove("px-14");
      menu.classList.add("px-5");
    }
  
    dropdownMenu.classList.toggle("hidden");
  };

  return (
    <div className=" mx-auto our-history-container">
      <div className="absolute z-20">
        <button
          id="dropdownOffsetButton"
          data-dropdown-toggle="dropdownSkidding"
          className="mt-2 lg:mt-6 bg-primaryColor hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-400 font-medium rounded-e-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={handleDropdownToggle}
        >
          <IoIosArrowDown className="text-LetterColor " />
        </button>

        <div
          id="dropdownSkidding"
          className="z-10 hidden bg-bgColor divide-y divide-gray-100 rounded-lg shadow-xl w-30 dark:bg-gray-700 "
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section1");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1947-1957
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section2");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1963-1965
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section3");
                  handleDropdownToggle();
                }}
                href="#Section3"
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1967-1968
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section4");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1972
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section5");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2006-2010
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section6");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2011
              </div>
            </li>
            <li>
              <div
                onClick={() => {handleButtonClick("Section7");
                handleDropdownToggle();
              }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2012-Actual
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="our-history-section bg-inherit h-screen custom-height overflow-y-auto"
        id="Section1"
      >
        <div className="relative">
          <div className="absolute right-4 top-4">
            <ArrowButton onClick={() => handleButtonClick("Section2")} />
          </div>
        </div>
        <div className="h-screen my-auto flex flex-wrap justify-around w-[80%] mx-auto sm:py-10 md:py-0 custom-height">
          <div className="lg:w-[45%] my-auto ">
            <TitleHistory wordBlue={"Nuestra "} wordPink={" Historia"} />
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1947
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Las Madres de Desamparados habíamos llegado a Gijón con los
                Jesuitas a la fundación de Natahoyos.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1957
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Nos mudamos a la Avenida de Portugal, donde acogimos a niñas
                pobres y desamparadas.
              </p>
            </div>
          </div>
          <div className="md:w-[45%] my-auto">
            <img
              src={ImgCruz}
              alt="Imagen de una cruz"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-quarteryColor bg-opacity-60 h-sreen overflow-y-auto custom-height pt-2"
        id="Section2"
      >
        <div className="relative">
          <div className="absolute right-14 top-3">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section1")}
            />
          </div>
          <div className="absolute right-4 top-3">
            <ArrowButton onClick={() => handleButtonClick("Section3")} />
          </div>
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto h-screen  custom-height">
          <div className="md:w-[40%] my-auto">
            <img
              src={ImgCasa1963}
              alt="Imagen de la casa en 1963"
              className="lg:w-[80%] md:mx-auto h-auto"
            />
          </div>
          <div className="lg:w-[45%] my-auto">
            <div className="my-6">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1963
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                La Madre General nos informó sobre la próxima fundación en
                Oviedo para niñas huérfanas y pobres, pero necesitábamos un
                lugar más grande. Buscamos una casa con patios y espacios
                adecuados, y encontramos un chalet que requería algunas obras.
              </p>
            </div>
            <div className="my-6">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1965
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Se propone la compra de dicha finca en Gijón “Ya las huerfanitas
                tenían casa”. En Gijón, vivíamos todas en la Avenida de
                Portugal. Algunas Madres se trasladaron al Colegio Virgen Reina,
                mientras que otras, las destinadas a la Casa de la Guía,
                permanecimos un tiempo en Portugal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-inherit py-10 h-screen overflow-y-auto custom-height"
        id="Section3"
      >
        <div className="relative">
          <div className="absolute right-14 -top-6 lg:top-0">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section2")}
            />
          </div>
          <div className="absolute right-4 -top-6 lg:top-0">
            <ArrowButton onClick={() => handleButtonClick("Section4")} />
          </div>
        </div>
        <div className="w-[80%] lg:px-10 mx-auto">
          <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
            1967
          </h2>
          <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify mb-1">
            El 27 de abril de 1967 marcó un hito importante, ya que fue la
            primera vez que las madres y las niñas durmieron juntas en la Guía.
          </p>
          <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
            En octubre de 1967 se inauguró la Casa de la Guía, creando así dos
            comunidades en Gijón (en las calles Avilés y La Guía).Se celebraba
            la Eucaristía diariamente en la casa y las niñas recibían todo lo
            necesario; eran muy queridas por los asturianos, quienes a menudo
            ayudaban económicamente con limosnas generosas y pequeños donativos
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto py-2">
          <div className="lg:w-[45%] my-8">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
              1968
            </h2>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Para 1968, se reconoció que la casa era demasiado pequeña para
              nuestras actividades y era necesario construir. Se consideró la
              posibilidad de adquirir terrenos adyacentes, pero parecía
              imposible.
            </p>
          </div>
          <div className="md:w-[40%] my-auto ">
            <img
              src={ImgCasa1968}
              alt="Imagen de la casa en 1967"
              className="lg:w-[60%] md:mx-auto h-auto"
            />
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-quarteryColor bg-opacity-60 py-4 lg:py-4 px-4 lg:px-3 h-screen overflow-y-auto custom-height"
        id="Section4"
      >
        <div className="relative">
          <div className="absolute right-14 lg:right-10 pt-2">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section3")}
            />
          </div>
          <div className="absolute right-4 lg:right-0 pt-2">
            <ArrowButton onClick={() => handleButtonClick("Section5")} />
          </div>
        </div>
        <div className="border-dashed border-4 border-secondaryColor w-[99%] lg:w-[85%] p-4 mx-auto rounded-lg">
          <div className="w-[92%] lg:w-[95%] mx-auto flex flex-col gap-5 lg:gap-2">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold mt-5 md:mt-3 lg:mt-0">
              1972
            </h2>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Se tomó la decisión de que las niñas de la Casa Hogar asistieran a
              clases en el colegio durante el día y regresaran por la noche para
              dormir. Sin embargo, esta situación fue de corta duración. El 19
              de octubre de 1972, se decidió unificar las dos comunidades,
              cerrando la Casa de la Guía y trasladando a todas las niñas al
              Colegio Virgen Reina, lo que llevó al cierre definitivo de la Casa
              Hogar en 1972.
            </p>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Una de las madres recuerda con tristeza el día en que dejaron la
              Casa de la Guía. Arrodilladas junto al pozo en el prado, rezaron a
              San José y, con gran pesar, decidió arrojar una pequeña imagen del
              santo al fondo del pozo, pidiéndole que cuidara de la Casa donde
              habían sido tan felices con las niñas. A partir de ese momento, la
              Casa de la Guía quedó al servicio de la comunidad del Colegio de
              Gijón. Durante mucho tiempo, se utilizó como parvulario del
              colegio y también para convivencias de los alumnos, así como
              colonias de verano para los niños de los hogares. Con el tiempo,
              la casa se deterioró al no estar habitada.Por ese motivo la venta
              no fue posible.
            </p>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Las experiencias de las niñas del Hogar de Madrid que venían a
              veranear inspiraron la idea de reavivar el futuro de esta casa, ya
              que su especial carácter no se entendía sin vida y sin niños.
              Cuando la vieja Casa Indiana se hundió, surgieron muchas voces que
              hablaban de reconstruirla, pensando en crear un hogar para niños
              necesitados, que fue el motivo principal por el que la
              Congregación la adquirió.
            </p>
          </div>
        </div>
      </div>

      <div
        className="our-history-section pt-4 h-screen overflow-y-auto custom-height"
        id="Section5"
      >
        <div className="relative">
          <div className="absolute right-14 top-3">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section4")}
            />
          </div>
          <div className="absolute right-4 top-3">
            <ArrowButton onClick={() => handleButtonClick("Section6")} />
          </div>
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto">
          <div className="lg:w-[40%] my-auto">
            <img
              src={ImgCasa2006}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto"
            />
          </div>
          <div className="lg:w-[45%]">
            <div className="mt-3">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2006
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Recibieron una llamada de alguien vinculado al Hogar en Madrid,
                interesado en buscar ayuda para restaurar la Casa de la Guía y
                permitir que las niñas pudieran ir allí en verano. Se entregaron
                planos para avanzar en el proyecto de un nuevo hogar. Mientras
                tanto, la casa vieja fue demolida y se preparó el terreno para
                la nueva construcción.
              </p>
            </div>
            <div className="my-2">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2008
              </h2>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                El presidente de la vecindad de la Casa de la Guía propuso
                construir una ermita para la Virgen de la Guía en el terreno
                donde se estaba construyendo la nueva casa.(Se aceptó)
              </p>
            </div>
            <div className="my-2">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2010
              </h2>
              <p className="text-LetterColor font-poppinsRegular  text-xl md:text-lg  text-justify">
                La obra nueva se completó el 29 de octubre de 2010.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-quarteryColor bg-opacity-60 px-4 lg:px-7 h-screen py-7 overflow-y-auto custom-height"
        id="Section6"
      >
        <div className="relative">
          <div className="absolute right-14 lg:right-7 lg top-2">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section5")}
            />
          </div>
          <div className="absolute right-4 lg:-right-3 top-2">
            <ArrowButton onClick={() => handleButtonClick("Section7")} />
          </div>
        </div>
        <div className="border-dashed border-4 w-[99%] lg:w-[85%] border-secondaryColor py-12 mx-auto rounded-lg">
          <div className="w-[92%] lg:w-[95%] mx-auto flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
              2011
            </h2>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              El Sr. Arzobispo de Oviedo recibió a Nuestra Madre y tres
              consejeras para discutir todo lo relacionado con la Ermita, y su
              construcción comenzó ese mismo año. También miembros del grupo
              próvida CIDEVIDA se reunieron con la Madre General y su consejo
              para proponer que la Casa de la Guía se convirtiera en un hogar
              para madres gestantes, apoyando la maternidad y luchando contra el
              aborto.
            </p>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              La propuesta fue acogida y se acordó brindar toda la ayuda
              necesaria para emprender este proyecto, que se llamó "Casa de
              Acogida para Madres Gestantes Nuestra Señora de los Desamparados".
            </p>
            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Así, las Madres de Desamparados, junto con un grupo comprometido
              por la vida, han seguido este camino de acuerdo con la voluntad de
              Dios. El 25 de marzo, Monseñor Jesús Sanz bendijo las
              instalaciones de la casa de acogida con gran celebración,
              agradeciendo a Dios por la entrañable misión que nos había
              preparado, siguiendo el legado de Nuestra Fundadora, la Beata
              Petra, de “ser madres para los desamparados, como las madres son
              para sus hijos por amor natural”.
            </p>
          </div>
        </div>
      </div>

      <div
        id="Section7"
        className="our-history-section py-10 h-screen overflow-y-auto custom-height"
      >
        <div className="relative">
          <div className="absolute right-14 md:-top-10 lg:-top-2">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section6")}
            />
          </div>
          <div className="absolute right-4 md:-top-10 lg:-top-2">
            <ArrowButton onClick={() => handleButtonClick("Section1")} />
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-[90%] lg:w-[80%] mx-auto lg:px-9 px-2">
          <div className="md:w-1/4 mb-4">
            <div className="shadow-xl shadow-quarteryColor rounded-3xl">
              <img
                src={card1}
                alt="capilla"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
          <div className="md:w-1/4 mb-4">
            <div className="shadow-xl shadow-quarteryColor rounded-3xl">
              <img
                src={card2}
                alt="capilla"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
          <div className="md:w-1/4 mb-4">
            <div className="shadow-xl shadow-quarteryColor rounded-3xl">
              <img
                src={card3}
                alt="capilla"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="w-[90%] lg:w-[80%] mx-auto mt-8 px-2 lg:px-9">
          <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
            2012
          </h2>
          <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
            Desde diciembre de 2012, la Casa ha estado acogiendo con cariño a
            futuras mamás. Se han recibido a madres embarazadas y a madres con
            sus hijos, dando lugar al nacimiento de muchos bebés y brindando
            apoyo a numerosas mujeres. Esta labor ha generado grandes
            expectativas para el futuro en las madres acogidas.
          </p>
          <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
            En reconocimiento a este valioso trabajo, agradecemos a Dios, quien
            es partícipe y promotor de esta labor, y le damos toda la Gloria.
            Asimismo, extendemos nuestro honor a las mujeres por su valentía y
            entereza en este camino.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
