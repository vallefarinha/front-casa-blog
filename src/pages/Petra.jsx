import Title from "../components/title/Title.jsx";
import ArrowButton from "../components/arrowbuttons/ArrowButton.jsx";
import TitleHistory from "../components/title/TitleHistory.jsx";
import Number from "../components/title/Number.jsx";
import { IoIosArrowDown } from "react-icons/io";
import imageMadrePetra from "../assets/images/imageMadrePetra.svg";
import madreYellowcircle from "../assets/images/madreYellowcircle.png";
import casaNatal from "../assets/images/casaNatal.jpg";
import beata from "../assets/images/beata.jpg";
import ciudad from "../assets/images/ciudad.jpg"
import capilla from "../assets/images/capilla-pucol.jpg";
import photo1994 from "../assets/images/photo1994.png";
import Quote from "../components/quote/Quote.jsx";
import madreHondoAzul from "../assets/images/madreHondoAzul.png";

const Petra = () => {
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
    <div className="my-8 mx-auto our-history-container">
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
                Beata Petra
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
                1845
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
                1873
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
                1878
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
                1881
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
                1892
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section7");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1906
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleButtonClick("Section8");
                  handleDropdownToggle();
                }}
                className="font-poppinsRegular text-base block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                1994
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="our-history-section mt-4  bg-inherit h-screen custom-height overflow-y-auto"
        id="Section1"
      >
        <div className="relative">
          <div className="absolute right-4 top-4">
            <ArrowButton onClick={() => handleButtonClick("Section2")} />
          </div>
        </div>
        <div className="h-screen my-auto flex flex-wrap mt-16 justify-around w-[80%] mx-auto custom-height">
          <div className="lg:w-[60%] my-auto pt-4">
            <Title wordBlue={"Beata"} wordPink={"Petra de San José"} />
            <div className="my-8">
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Ana Josefa fue un gran apóstol, orante y contemplativa. Supo
                tocar las fibras más sensibles de los que sufrían cualquiera que
                fuese la razón de su dolor. A continuación, revisa su historia
                hermosa e inspiradora.
              </p>
            </div>
          </div>
          <div className="md:w-[35%] my-auto float-right">
            <img
              src={imageMadrePetra}
              alt="madre petra"
              className="max-w-full h-auto "
            />
          </div>
        </div>
      </div>

      <div
        className="our-history-section mt-4 bg-primaryColor bg-opacity-60 h-screen custom-height overflow-y-auto pt-2"
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
        <div className="flex flex-wrap justify-around w-[80%] mx-auto h-screen my-16">
          <figure className="md:w-[40%] my-auto">
            <img
              src={casaNatal}
              alt="Imagen de la casa natal"
              className="lg:w-[80%] md:mx-auto h-auto rounded-3xl"
            />
            <figcaption className="text-xs font-poppinsMediumItalic mx-auto h-auto md:w-[80%]">
              Casa natal de Madre Petra - imagen proporcionada por la
              Congregación Madres de Desamparados y San José de La Montaña
            </figcaption>
          </figure>
          <div className="lg:w-[60%] my-auto">
            <div className="my-6 ">
              <div className="mb-4">
                <Number wordBlue="1845" />
                <TitleHistory wordBlue={"El comienzo de "} wordPink={"todo"} />
              </div>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Ana Josefa Pérez Florido nació en el magnífico Valle de
                Abdalajís, Málaga, España, el 7 de diciembre de 1845. Fue la
                última de cinco hermanos. Perdió a su madre siendo niña y se
                cobijó en María adoptándola como tal:
              </p>
              <div className="flex w-full justify-center">
                <Quote
                  quote="Me postré delante de la Virgen suplicándole que no dejara de ser mi Madre, que yo procuraría santificarme ayudada por su gracia."
                  bgClass="bg-bgQuote"
                />
              </div>
              <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-8">
                Aunque heredó la fe de sus padres, crecía sin que nada hiciera
                pensar que su vida iba a dar un giro hacia la consagración. De
                hecho, se prometió con José Mir, un muchacho del pueblo. Rompió
                con él para seguir a Cristo: la gracia me solicitaba, explicó
                con posterioridad. Su padre no compartía su idea de ingresar en
                un convento, por lo que ese anhelo solo pudo hacerlo realidad
                cuando falleció.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-inherit py-10 h-screen  custom-height overflow-y-auto"
        id="Section3"
      >
        <div className="relative">
          <div className="absolute right-14 -top-4">
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
              <Number wordBlue="1873" />
              <TitleHistory
                wordBlue={"La abertura de la"}
                wordPink={"Casa de los Pobres"}
              />
            </div>

            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Otros habrían desistido de su empeño dejando que se enfriara el
              celo apostólico inicial, o juzgando que tal vez su camino era
              distinto. Pero ella persistió en el intento con fe, prodigando el
              bien a su alrededor. En ese compás de espera, hasta que la
              voluntad de Dios se manifestó permitiéndole seguir adelante con su
              vocación, oraba y atendía a las personas más débiles del pueblo,
              en particular a los enfermos y ancianos que vivían una situación
              de abandono. Pensando en ellos, en 1873 abrió la conocida Casa de
              los pobres en la calle Alameda, cuya sede fue trasladada después
              frente a la parroquia de san Lorenzo. Compartían su ideal
              Frasquita, Isabel, Josefita, y Rafaela; todas fueron conocidas
              entre el vecindario como Hermanitas de los Pobres.
            </p>
          </div>
          <figure className="md:w-[40%] my-auto ">
            <img
              src={ciudad}
              alt="Imagen de la iglesia"
              className="lg:w-[70%] md:mx-auto h-auto rounded-3xl"
            />
            <figcaption className="text-xs font-poppinsMediumItalic mx-auto h-auto md:w-[70%]">
              Valle de Abdalajís, Málaga, - imagen proporcionada por la
              Congregación Madres de Desamparados y San José de La Montaña
            </figcaption>
          </figure>
        </div>
      </div>

      <div
        className="our-history-section pt-4 bg-primaryColor bg-opacity-60 h-screen custom-height overflow-y-auto"
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
        <div className="flex flex-wrap mt-14 justify-around h-screen w-[80%] mx-auto">
          <div className="lg:w-[40%] my-auto">
            <img
              src={beata}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto rounded-3xl"
            />
          </div>
          <div className="lg:w-[50%] my-auto">
            <div className="mt-3">
              <div className="mb-3">
                <Number wordBlue="1878" />
                <TitleHistory
                  wordBlue={"Ingresión en la "}
                  wordPink={"Congregación de las Mercedarias de la Caridad"}
                />
              </div>

              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                En 1878, después de morir su padre, fiel al sentimiento que
                latía en su corazón: Señor, Vos sobre todas las cosas, y bien
                orientada por su confesor, ingresó en la Congregación de las
                Mercedarias de la Caridad. Siguieron sus pasos Frasquita, Isabel
                y Rafaela, artífices junto a ella de las obras de caridad en
                Abdalajís y en Álora. Josefita, con la ayuda de otras personas,
                continuó durante años al frente de la casa abierta en el Valle
                de Abdalajís.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section pt-4 h-screen custom-height"
        id="Section5"
        style={{ overflowY: "auto" }}
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
              onClick={() => handleButtonClick("Section6")}
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 justify-around w-[80%] mx-auto h-screen custom-height">
          <div className="lg:w-[40%] my-auto">
            <img
              src={madreYellowcircle}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto"
            />
          </div>
          <div className="lg:w-[55%] my-auto">
            <div className="mt-3">
              <div className="mb-3">
                <Number wordBlue="1881" />
                <TitleHistory
                  wordBlue={"Adopta el nombre"}
                  wordPink={"Petra de San José"}
                />
              </div>

              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Poco duró la estancia de las cuatro mujeres en el convento,
                porque a los pocos meses comprendieron que no era su camino.
                Fueron instantes difíciles ya que si bien querían seguir a
                Cristo, ignoraban la vía que debían tomar. Ana Josefa abrió su
                corazón al obispo de Málaga, D. Manuel Gómez Salazar, quien le
                marcó su sendero: ser fundadora. Y junto a las tres compañeras
                erigió la Congregación de Hermanas Madres de Desamparados y San
                José de la Montaña con el carisma Amor misericordioso. Su
                experiencia personal de orfandad que le había hecho volver sus
                ojos a María tomándola como Madre, revivió con particular fuerza
                en esos momentos. No tenía duda de que, en medio de la
                consagración y teniendo su vida centrada en Cristo, las
                religiosas podrían llevar la ternura maternal a todas las
                personas que carecían de hogar y de cariño, ya fuesen niños,
                jóvenes o ancianos. En 1881 profesó los votos temporales en la
                iglesia de San Juan Bautista, de Vélez-Málaga y tomó el nombre
                religioso de Petra de San José.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section pt-4 bg-primaryColor bg-opacity-60 h-screen custom-height overflow-y-auto"
        id="Section6"
      >
        <div className="relative">
          <div className="absolute right-14 top-3">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section5")}
            />
          </div>
          <div className="absolute right-4 top-3">
            <ArrowButton onClick={() => handleButtonClick("Section7")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 justify-around h-screen w-[80%] mx-auto">
          <div className="lg:w-[40%]">
            <img
              src={madreHondoAzul}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto md:mt-32"
            />
          </div>
          <div className="lg:w-[50%] my-auto">
            <div className="mt-3">
              <div className="mb-3">
                <Number wordBlue="1892" />
                <TitleHistory
                  wordBlue={"La fuerza de la "}
                  wordPink={"virtud"}
                />
              </div>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                En 1892 en la iglesia de la casa de Ronda emitió los
                definitivos. Selló este instante con la siguiente determinación:
              </p>
              <div className="flex w-full justify-center">
                <Quote
                  quote="Me postré delante de la Virgen suplicándole que no dejara de ser mi Madre, que yo procuraría santificarme ayudada por su gracia."
                  bgClass="bg-bgQuote"
                />
              </div>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Por fortuna, sus numerosas cualidades le sirvieron para
                sobrellevar todos los contratiempos que surgieron. Era una mujer
                de recia personalidad, carácter equilibrado, y admirable
                capacidad para afrontar el día a día en medio del rigor, siempre
                con esperanza, alegría y sencillez, sabiéndose en manos de Dios.
                Las dificultades de distinto signo, calumnias y persecuciones
                incluidas, no hicieron más que acrecentar sus virtudes. Quienes
                la vituperaron no hallaron en ella más respuesta que la caridad
                y el perdón. De algún modo previno a sus hijas de lo que podía
                recaer sobre la comunidad. Así, un día, celebrando
                entrañablemente la festividad de la epifanía en la que cada una
                ofrecía al Niño lo que brotaba de su interior, la fundadora les
                advirtió:
              </p>
              <div className="flex w-full justify-center">
                <Quote
                  quote="Hijas, si esto que hemos ofrecido ha sido de verdad, Nuestro Señor lo ha recibido y hay que prepararse para grandes trabajos. Pronto veremos los efectos de esta oblación. Pongamos el hombro para una cruz muy grande, y de seguro que estará cerca, porque Nuestro Señor no acostumbra a dilatar esta clase de gracias, cuando se las pedimos de todo corazón. Digo gracias porque no dejan de ser los trabajos favores extraordinarios que reserva el Señor para los suyos. Más tarde, en días de tribulación, recordábamos el ofrecimiento del día de Reyes, que una ofrecía su honra por amor a Jesucristo; la otra, quedarse desnuda y vivir pobre como Él; otra, desear ser perseguida."
                  bgClass="bg-bgQuote"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-history-section bg-inherit py-10 h-screen custom-height overflow-y-auto"
        id="Section7"
      >
        <div className="relative">
          <div className="absolute right-14 -top-4 lg:top-0">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section6")}
            />
          </div>
          <div className="absolute right-4 -top-4 lg:top-0">
            <ArrowButton onClick={() => handleButtonClick("Section8")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-16  h-screen justify-around w-[80%] mx-auto py-2 items-center custom-height">
          <div className="lg:w-[45%] my-auto">
            <div className="mb-4">
              <Number wordBlue="1906" />
              <TitleHistory wordBlue={"El triste"} wordPink={"adiós"} />
            </div>

            <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
              Al final de su generosa vida en pro de los necesitados, y después
              de haber fundado 10 casas, le sorprendió una grave enfermedad que
              le produjo gran sufrimiento, uniéndose a los muchos que ya había
              padecido. Entregó su alma a Dios en Barcelona, a los 60 años, el
              16 de agosto de 1906. A fuerza de amar llegaba a la cima soñada de
              la que habló a sus religiosas:{" "}
            </p>
            <div className="flex w-full justify-center">
              <Quote
                quote="Hijas es el amor quien debe prestarnos alas para subir más arriba."
                bgClass="bg-bgQuotePink"
              />
            </div>
          </div>
          <figure className="md:w-[40%] my-auto ">
            <img
              src={capilla}
              alt="Imagen de la iglesia"
              className="lg:w-[70%]  md:mx-auto h-auto rounded-3xl"
            />
            <figcaption className="text-xs font-poppinsMediumItalic mx-auto h-auto md:w-[70%]">
              Nueva capilla en Puzol - imagen proporcionada por elperiodic.com
            </figcaption>
          </figure>
        </div>
      </div>

      <div
        className="our-history-section pt-4 bg-primaryColor bg-opacity-60 h-screen overflow-y-auto custom-height"
        id="Section8"
        style={{ overflowY: "auto" }}
      >
        <div className="relative">
          <div className="absolute right-14 top-3">
            <ArrowButton
              rotate={"left"}
              onClick={() => handleButtonClick("Section7")}
            />
          </div>
          <div className="absolute right-4 top-3">
            <ArrowButton onClick={() => handleButtonClick("Section1")} />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 justify-around h-screen w-[80%] mx-auto">
          <div className="lg:w-[40%] my-auto">
            <img
              src={photo1994}
              alt="Imagen de la demolicion de la casa"
              className="md:w-[60%] md:mx-auto lg:w-[70%] h-auto"
            />
          </div>
          <div className="lg:w-[50%] my-auto">
            <div className="mt-3 ">
              <div className="mb-3">
                <Number wordBlue="1994" />
                <TitleHistory
                  wordBlue={"La beatificación de la "}
                  wordPink={"Madre Petra"}
                />
              </div>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Su devoción a san José, en cuyo honor había tomado su nombre, le
                ha conferido el título de apóstol josefino del siglo XIX. Dio a
                sus hijas como modelo para su santificación el de la Sagrada
                Familia. Aludiendo a Cristo, confesaba humildemente:
              </p>
              <div className="flex w-full justify-center">
                <Quote
                  quote="¡Ojalá que yo pudiese aprender las lecciones que siempre me ha dado! Pero soy tan miserable que parece que vamos a porfía: Él, con tanta misericordia a regalarme, y yo, con tanta frialdad e indiferencia en su santo servicio. Él me perdone y reciba mis deseos y buena voluntad, que ésta siempre la he tenido."
                  bgClass="bg-bgQuote"
                />
              </div>
              <p className="text-LetterColor font-poppinsRegular text-xl md:text-lg  text-justify">
                Juan Pablo II la beatificó el 16 de octubre de 1994.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petra;
