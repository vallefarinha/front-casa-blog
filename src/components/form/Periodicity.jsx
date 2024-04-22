import React, { useState } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";
import heart from "../../assets/icons/heart.svg";


const Periodicity = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
      <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
        <TitleForm wordBlue="¿Qué periodicidad" wordPink="quieres?" textAlign="center" />
      </button>
      {isOpen && (
        <div className="flex flex-wrap justify-center space-x-4 mt-8 relative">
        <img src={heart} alt="heart"  className="w-[55px] h-[59px] absolute top-[40%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 md:w-[108px] md:h-[100px] md:left-[111%] md:top-[42%]" />
          <BoxSelect amount="MENSUAL" customStyle={{width: '100px', height: '50px'}} textSize="lg" className="mb-4 md:mb-0" />
          <BoxSelect amount="TRIMESTRAL" customStyle={{width: '100px', height: '50px'}} textSize="md" className="mb-4 md:mb-0" />
          <BoxSelect amount="SEMESTRAL" customStyle={{width: '100px', height: '50px'}} textSize="md" className="mb-4 md:mb-0" />
          <BoxSelect amount="ANUAL" customStyle={{width: '100px', height: '50px'}} textSize="lg" className="mb-4 md:mb-0" />
        </div>
      )}
    </div>
  );
};

export default Periodicity;
