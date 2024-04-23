import React, { useState, useRef } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";
import spiralMoney from "../../assets/icons/spiralMoney.svg";
import diamondMoney from "../../assets/icons/diamondMoney.svg";

const DonationOption = () => {

  const [selectedAmountDonation, setSelectedAmount] = useState("");
  const inputRef = useRef();

  const handleSelectClick = (amount) => {
    setSelectedAmount(amount);
    if (inputRef && inputRef.current) {
      inputRef.current.value = amount;
    }
  };
  
  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">        
        <TitleForm wordBlue="¿Deseas recibir certificado de" wordPink="donación?" textAlign="center" />
      
        <div className="flex flex-wrap justify-center space-x-4 mt-8 relative">    
        <img src={spiralMoney} alt="spiralmoney"  className="w-[55px] h-[59px] absolute top-[20%] left-[-5%] transform -translate-x-1/2 -translate-y-1/2 md:w-[128px] md:h-[120px] md:left-[-20%] md:top-[42%]" />
        <img src={diamondMoney} alt="diamonMoney"  className="w-[35px] h-[39px] absolute top-[50%] left-[105%] transform -translate-x-1/2 -translate-y-1/2 md:w-[78px] md:h-[58px] md:left-[170%] md:top-[42%]" />
          <BoxSelect amount="SÍ" customStyle={{width: '100px', height: '50px'}} textSize="lg" className="mb-4 md:mb-0" inputRef={inputRef} onClick={handleSelectClick} isSelected={selectedAmountDonation === "SÍ"}/>
          <BoxSelect amount="NO" customStyle={{width: '100px', height: '50px'}} textSize="lg" className="mb-4 md:mb-0" inputRef={inputRef} onClick={handleSelectClick} isSelected={selectedAmountDonation === "NO"}/>
          <input type="text" ref={inputRef} name="selectedAmountDonation" value={selectedAmountDonation} style={{ display: 'none' }} />
        </div>
      
    </div>
  );
};

export default DonationOption;
