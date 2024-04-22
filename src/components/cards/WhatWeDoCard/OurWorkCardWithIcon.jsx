import React from "react";

const OurWorkCardWithIcon = ({ imgSrc, altText, cardText }) => {
  return (
    <div>
      <div className="flex flex-col items-center pb-10 w-[70%] mx-auto">
        <img
          className="w-14 h-14 mb-3 rounded-full"
          src={imgSrc}
          alt={altText}
        />
        <span className="text-x font-poppinsRegular text-LetterColor md:w-full text-center">
          {cardText}
        </span>
      </div>
    </div>
  );
};

export default OurWorkCardWithIcon;
