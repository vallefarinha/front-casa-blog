import React, { useRef } from "react";
import SendMail from "../services/SendMail";
import DonationCard from "../components/cards/ColaborateCard/DonationCard";
import RegularText30 from "../components/texts/RegularText30";
import Title from "../components/title/Title";
import ColaboraRegularText from "../components/colaboration/ColaboraRegularText";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation";
import Tax from "../components/form/Tax";
import TaxForm from "../components/form/TaxForm";
import SimpleAlert from "../components/alerts/SimpleAlert";
import penform from "../assets/icons/penForm.svg";
import heart from "../assets/images/Corazon.png"
import octagon from "../assets/images/octagono.png";
import TitleForm from "../components/form/TitleForm";

function Collaborate() {
  const refForm = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_TAXES;
    try {
      const result = await SendMail(templateID, refForm.current);
      SimpleAlert({
        icon: "success",
        text: "Su petición ha sido enviada con éxito. Revise su email.",
      });
    } catch (error) {
      SimpleAlert({
        icon: "error",
        text: "Ha ocurrido un error en el envío de sus datos. Por favor inténtelo más tarde o póngase en contacto con casadeacogidaguia@hotmail.es.",
      });
    }
  };

  return (
    <div className="md:w-[80%] w-[90%] mx-auto">
      <div className="flex flex-col items-center mx-auto">
                <Title wordBlue="Haz una" wordPink="donacion" textAlign="center" />
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto">
          <RegularText30
                 text={
					"Puedes donar lo que estimes oportuno, mediante un ingreso o transferencia en la cuenta 	corriente de la Casa de Acogida."
				 }></RegularText30>
        </div>
      <DonationCard></DonationCard>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <ColaboraRegularText
            wordone={"Contribuye de forma periódica haciéndote socio"}
          />
          <ColaboraRegularText
            wordone={"Envíanos tu solicitud usando "}
            wordtwo={"ESTE FORMUALARIO. "}
          />
        </div>
      </div>
        <div className="flex flex-col items-center mx-auto pt-10">
            <TitleForm wordBlue=" ¿Quieres incluirlo en la desgravación" wordPink="fiscal?" textAlign="center" />
      </div>
      <div className="w-[80%] mx-auto">
          <RegularText30
                 text={
                  "Para incluir el donativo en la Desgravación Fiscal (Declaración de la Renta) es necesario que cubras el siguiente formulario o nos facilites la información (nombre, apellidos, dirección postal, DNI y email) a nuestra cuenta de correo."}
				 ></RegularText30>
        </div>
        <img src={penform} alt="penForm" className="absolute z-0" />
        <form ref={refForm} onSubmit={handleSubmit}>
          <TaxForm></TaxForm>
          <SendButtonForm />
        </form>
      <Tax />
      <div className="flex justify-around" style={{ height: "60px" }}>
        <img src={heart} alt="Corazon" />
        <img src={octagon} alt="octagono" />
      </div>
      <Legislation></Legislation>
    </div>
  );
}

export default Collaborate;
