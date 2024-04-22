import React from "react";

const TitleAboutUs = ({ firstword, secondword }) => {
  return (
    <h1 className="my-3 text-left text-2xl md:text-3xl font-poppinsSemiBold w-full">
      <span className="text-LetterColor">{firstword}</span>{" "}
      <span className="text-primaryColor font-poppinsExtraBold">
        {secondword}
      </span>
    </h1>
  );
};

export default TitleAboutUs;
