import React, { useState } from "react";

const BoxBlue = ({ titleBox, squareBlue, type, pattern, name}) => {
  const [isValid, setIsValid] = useState(true);

  const validateInput = (event) => {
    setIsValid(event.target.validity.valid);
  };

  return (
    <div className="flex flex-col mb-6 w-full px-2">
      <label htmlFor={titleBox} className="text-LetterColor font-poppinsBold text-sm mb-1">{titleBox}</label>
      <input
        type={type}
        id={titleBox}
        placeholder={squareBlue}
        pattern={pattern}
        name={name}
        required
        className={`border-2 ${isValid ? 'border-quarteryColor' : 'border-red-500'} rounded-lg py-2 px-4 shadow-xl focus:outline-none  bg-white`}
        onChange={validateInput}
      />
    </div>
  );
};

export default BoxBlue;
