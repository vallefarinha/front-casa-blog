import React, { useState } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";
import kinMoney from "../../assets/icons/kinMoney.svg";
import jigsawMoney from "../../assets/icons/jigsawMoney.svg";

const MoneySelect = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
        <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
          <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
        </button>
        {isOpen && (
          <div className="flex flex-wrap justify-center space-x-4 mt-8 relative">
            <img src={kinMoney} alt="Kin Money" className="w-[65px] h-[69px] absolute top-[40%] left-[8%] transform -translate-x-1/2 -translate-y-1/2 md:w-[120px] md:h-[100px] md:left-[1%] md:top-[42%]" />
            <img src={jigsawMoney} alt="jigsaw" className="w-[45px] h-[49px] absolute top-[10%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 md:w-[98px] md:h-[70px] md:left-[112%] md:top-[42%]" />
            <BoxSelect amount="20 €" customStyle={{width: '100px', height: '50px'}} textSize="2xl" className="mb-4 md:mb-0 z-20" />
            <BoxSelect amount="40 €" customStyle={{width: '100px', height: '50px'}} textSize="2xl" className="mb-4 md:mb-0 z-20" />
            <BoxSelect amount="80 €" customStyle={{width: '100px', height: '50px'}} textSize="2xl" className="mb-4 md:mb-0 z-20" />
            <BoxSelect amount="otra cantidad" customStyle={{width: '100px', height: '50px'}} textSize="xl" className="mb-4 md:mb-0 z-20" />
         </div>
        )}
      </div>
    );
};

export default MoneySelect;
