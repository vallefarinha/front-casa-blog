import OurValorsCard from "../components/cards/WhatWeDoCard/OurValorsCard";
import compromiso from "../assets/icons/compromiso.svg";
import security from "../assets/icons/security.svg";
import autonomy from "../assets/icons/autonomy.svg";
import respect from "../assets/icons/respect.svg";
import formation from "../assets/icons/formation.svg";
import development from "../assets/icons/development.svg";
import TextImage from "../components/textimages/TextImage";
import Title from "../components/title/Title";
import ourmision from "../assets/images/ourmision.png";
import TextImageOurMission from "../components/textimages/TextImageOurMission";
import ourvisionnew from "../assets/images/ourvisionnew.png";
import TitleAboutUs from "../components/title/TitleAboutUs";

function AboutUs() {
  return (
    <div className="w-[80%] mx-auto mb-10">
      <div className="flex flex-col mx-auto ">
        <div className="w-full mb-3">
          <Title wordBlue={"Quienes"} wordPink={"somos"}></Title>
          <TextImage></TextImage>
        </div>
        <div className="w-full mb-3">
          <TitleAboutUs
            firstword={"Nuestra"}
            secondword={"misión"}
          ></TitleAboutUs>

          <TextImageOurMission
            paragraph="En Casa de Acogida para Madres Gestantes La Guía, nuestra misión es brindar un entorno de apoyo y cuidado integral para las madres gestantes, ofreciendo acompañamiento emocional, mejorando su calidad de vida, fomentando la responsabilidad, desarrollando valores humanos, capacitando en habilidades maternales y descubriendo potencialidades. "
            image={ourmision}
          ></TextImageOurMission>
        </div>
        <div className="w-full mb-3">
          <TitleAboutUs
            firstword={"Nuestra"}
            secondword={"visión"}
          ></TitleAboutUs>
          <TextImageOurMission
            paragraph="Nos visualizamos como un refugio seguro y acogedor donde cada madre gestante encuentra el apoyo necesario para enfrentar los desafíos de la maternidad, desarrollarse como individuos íntegros y criar a sus hijos en un ambiente de amor y cuidado. Aspiramos a ser reconocidos como un modelo de excelencia en la atención y acompañamiento a madres gestantes, inspirando a otras instituciones y comunidades a seguir nuestro ejemplo de servicio y compasión. "
            image={ourvisionnew}
          ></TextImageOurMission>
        </div>
      </div>
      <TitleAboutUs
        firstword={"Nuestras"}
        secondword={"valores"}
      ></TitleAboutUs>
      <OurValorsCard
        title={"Empatia y compromiso"}
        icon={compromiso}
        alt={"compromiso"}
        text={
          "Demostramos empatía y compromiso al acompañar a cada madre en su camino, brindándole apoyo emocional para superar dificultades y asegurando que nunca se sienta sola."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Dignidad y Seguridad:"}
        icon={security}
        alt={"security"}
        text={
          "Promovemos la dignidad y seguridad de cada madre al mejorar su calidad de vida, proporcionándole un entorno estable y digno donde pueda sentirse protegida y cuidada."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Responsabilidad y Autonomía:"}
        icon={autonomy}
        alt={"autonomy"}
        text={
          "Fomentamos la responsabilidad y autonomía de nuestras residentes, apoyándolas en la toma de decisiones conscientes y en el control de su futuro."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Respeto y Autenticidad:"}
        icon={respect}
        alt={"respect"}
        text={
          "Cultivamos valores humanos esenciales como el respeto y la autenticidad, que son fundamentales para establecer relaciones interpersonales sólidas y saludables."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Formación y Crianza Responsable:"}
        icon={formation}
        alt={"formation"}
        text={
          "Valoramos la formación en habilidades maternales, incluyendo la ternura, la paciencia y el sacrificio, para capacitar a las madres en la crianza de sus hijos con amor y seguridad."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Empoderamiento y Desarrollo Personal:"}
        icon={development}
        alt={"development"}
        text={
          "Promovemos el descubrimiento y desarrollo de potencialidades en cada madre, proporcionándoles recursos y oportunidades que les permitan sentirse empoderadas y confiadas en sí mismas."
        }
      ></OurValorsCard>
    </div>
  );
}

export default AboutUs;
