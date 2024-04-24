import Title from "../components/title/Title.jsx";
import ArrowButton from "../components/arrowbuttons/ArrowButton.jsx";
import TitleHistory from "../components/title/TitleHistory.jsx";
import Number from "../components/title/Number.jsx";
import burnletters from "../assets/images/burnletters.png";
import churchimg from "../assets/images/churchimg.png";
import imgsj from "../assets/images/imgsj.png";
import sanjose from "../assets/images/sanjose.png";
import cinta from "../assets/images/cinta.png";
import { IoIosArrowDown } from "react-icons/io";

const SanJose = () => {
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
      <div className="absolute z-20 mt-4">
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
            className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
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
              La historia
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
                La imagen
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
                El Santuario
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
                El cordón
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
                Quema Cartas
              </div>
            </li>        
          </ul>
        </div>
      </div>

      <div
        className="our-history-section bg-inherit h-screen py-12 sm:py-10 md:py-0 custom-height mt-4  overflow-y-auto"
        id="Section1"
      >
        <div className="relative">
          <div className="absolute right-4 -top-6 sm:-top-4 md:top-4">
            <ArrowButton onClick={() => handleButtonClick("Section2")} />
          </div>
        </div>
        <div className="h-screen  flex flex-wrap mt-10 justify-around w-[80%] mx-auto custom-height">
          <div className="lg:w-[60%] my-auto pt-4">
            <Title wordBlue={"La historia de"} wordPink={"San José"} />
            <div className="my-8">
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                San José es una figura central en la tradición cristiana,
                conocido como el esposo de María y el padre adoptivo de Jesús.
                Mencionado en los Evangelios, se describe como un carpintero de
                Nazaret y un hombre justo. Según la tradición católica, San José
                es considerado el patrón de la Iglesia Universal, de las
                familias, de los trabajadores, de los padres adoptivos y de la
                buena muerte. Su vida ejemplar de humildad, obediencia y cuidado
                hacia la Sagrada Familia ha inspirado a generaciones de fieles.
                Aunque no hay muchos relatos detallados sobre la vida de San
                José en los Evangelios, su importancia en la vida de Jesús es
                innegable. Fue elegido por Dios para desempeñar un papel crucial
                en la historia de la salvación, protegiendo y cuidando al Hijo
                de Dios durante su infancia y juventud terrenal. La devoción a
                San José ha crecido a lo largo de los siglos, con muchos fieles
                recurriendo a él en busca de protección, orientación e
                intercesión. Su fiesta litúrgica se celebra el 19 de marzo en
                muchas tradiciones cristianas, y su ejemplo de fe y humildad
                continúa inspirando a millones de personas en todo el mundo.
              </p>
            </div>
          </div>
          <div className="md:w-[35%] my-auto float-right">
            <img
              src={imgsj}
              alt="Imagen de una cruz"
              className="max-w-full h-auto "
            />
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-secondaryColor bg-opacity-60 h-screen custom-height pt-2  overflow-y-auto"
        id="Section2"
      >
        <div className="relative">
          <div className="absolute right-14 top-4">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section1")}
            />
          </div>
          <div className="absolute right-4 top-4">
            <ArrowButton onClick={() => handleButtonClick("Section3")} />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-20 w-[80%] mx-auto h-screen custom-height">
          <div className="md:w-[40%] my-auto">
            <img
              src={sanjose}
              alt="Imagen de san jose"
              className="lg:w-[80%] md:mx-auto h-auto"
            />
          </div>
          <div className="lg:w-[60%] my-auto">
            <div className="my-6 ">
              <div className="mb-4">
              <Number wordBlue="La imagen" />
     <TitleHistory wordBlue={"Historia de "} wordPink={"San José de la Montaña"} />
              </div>            
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
            Madre Petra, una devota de San José, experimentó un acontecimiento extraordinario cuando la cabeza de la imagen de San José se inclinó suavemente hacia el lugar donde ella había estado orando. Este suceso llevó a considerar la imagen como milagrosa. Poco después, una señorita llegó a la casa de Madre Petra ofreciendo donar unos terrenos conocidos como la "Montaña Pelada" para construir una casa grande y una iglesia dedicada a San José. Con el tiempo, la capilla donde se colocó la imagen de San José atrajo a muchas personas, y la fama del lugar creció rápidamente. La curación milagrosa de una mujer que dejó una nota escrita a los pies de San José fortaleció esta fama, y el lugar comenzó a ser conocido como "San José de la Montaña". Esta devoción se extendió tanto que en 1934 la congregación de Madre Petra pudo agregar el nombre "San José de la Montaña" a su denominación original. Hoy en día, el Santuario de San José de la Montaña recibe cartas de peticiones de todo el mundo, que son ofrecidas y quemadas como parte de un acto de devoción conocido como la quema de cartas a San José de la Montaña.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-inherit py-10 h-screen custom-height  overflow-y-auto"
        id="Section3"
      >
        <div className="relative">
          <div className="absolute right-14 -top-4 lg:top-0">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section2")}
            />
          </div>
          <div className="absolute right-4 -top-4 lg:top-0">
            <ArrowButton onClick={() => handleButtonClick("Section4")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-10 h-screen justify-around w-[80%] mx-auto py-2 items-center custom-height">
          <div className="lg:w-[45%] my-auto">
            <div className="mb-4">
            <Number wordBlue="El Santuário" />
            <TitleHistory wordBlue={"Historia del Real Santuario de "} wordPink={"San José de la Montaña"} />  
            </div>
      
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              El Real Santuario de San José de la Montaña se encuentra en Barcelona, en lo que antes era una montaña pelada. Fue construido a finales del siglo XIX gracias a la donación de una torre por parte de la señorita Carme Masferrer a la congregación Madres de Desamparados de la Madre Petra. El edificio fue diseñado por el arquitecto Francisco Berenger i Mestre, colaborador de Gaudí, y fue inaugurado el 20 de abril de 1902. A lo largo de los años, el santuario ha sido objeto de diversas restauraciones y ampliaciones, y ha sido reconocido con el título de Real por el rey Alfonso XIII en 1908 y con la Coronación Canónica por el Papa Benedicto XV en 1920. A pesar de sufrir daños durante la guerra civil española, el santuario fue restaurado y continúa siendo un lugar de devoción y peregrinación para miles de fieles.
              </p>
          </div>
          <div className="md:w-[40%] my-auto ">
            <img
              src={churchimg}
              alt="Imagen de la iglesia"
              className="lg:w-[70%] md:mx-auto h-auto"
            />
          </div>
        </div>
      </div>

      <div
        className="our-history-section pt-4 bg-secondaryColor bg-opacity-60 h-screen custom-height  overflow-y-auto"
        id="Section4"
      >
        <div className="relative">
          <div className="absolute right-14 top-3">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section3")}
            />
          </div>
          <div className="absolute right-4 top-3">
            <ArrowButton onClick={() => handleButtonClick("Section5")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 justify-around h-screen w-[80%] mx-auto">
          <div className="lg:w-[40%] my-auto">
            <img
              src={cinta}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto"
            />
          </div>
          <div className="lg:w-[50%] my-auto">
            <div className="mt-3">
              <div className="mb-3">
              <Number wordBlue="El cordón de San José" />
            <TitleHistory wordBlue={"Protección para las mujeres embarazadas y deseo de "} wordPink={"fertilidad"} />
              </div>
            
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              El Cordón de San José: Protección para las mujeres embarazadas y deseo de fertilidad
El Cordón de San José es una tradición que consiste en colocar una cinta alrededor de la cintura o barriga de las mujeres embarazadas para obtener la protección de San José para el bebé. Esta práctica, que se remonta a siglos atrás, también ha sido utilizada por mujeres que desean quedar embarazadas, ya que se cree que la protección del patriarca favorece la predisposición de la mujer a concebir. La devoción al cordón de San José se originó en Amberes en 1657, cuando una religiosa agustina llamada Isabel Sillevoort experimentó una curación milagrosa después de confiarse a la protección de San José y utilizar un cordón bendecido en su honor. Esta devoción se ha extendido por todo el mundo cristiano, y la cinta suele ser blanca con siete nudos en recuerdo de los siete Dolores y Gozos de San José.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section pt-4 h-screen custom-height  overflow-y-auto"
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
          <ArrowButton
           rotate={""}
           onClick={() => handleButtonClick("Section1")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 justify-around w-[80%] mx-auto h-screen">
          <div className="lg:w-[40%] my-auto">
            <img
              src={burnletters}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto"
            />
          </div>
          <div className="lg:w-[55%] my-auto">
            <div className="mt-3">
              <div className="mb-3">
              <Number wordBlue="Quema Cartas" />
            <TitleHistory wordBlue={"La origen de ese"} wordPink={"ritual"} />
              </div>
         
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              La devoción a San José de la Montaña tiene su origen en Barcelona, donde se construyó el Santuario de San José de la Montaña a finales del siglo XIX. La práctica de quemar cartas a San José comenzó cuando la Beata Petra,  fundadora de la congregación Madres de Desamparados, recibió la visita de un anciano que le mostró una carta con un sello brillante y le dijo que estaba "hecho arriba". Posteriormente, una mujer enferma que dejó una carta a los pies de San José experimentó una curación milagrosa. Esta práctica se extendió rápidamente, y cada mes se quemaban miles de cartas en el Santuario de San José de la Montaña, atrayendo a miles de personas. A pesar de la oposición inicial de algunas autoridades eclesiásticas, la devoción a San José de la Montaña fue finalmente aprobada por la Santa Sede, y la práctica de quemar cartas continúa hasta el día de hoy como una expresión de fe y confianza en la intercesión de San José.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanJose;
