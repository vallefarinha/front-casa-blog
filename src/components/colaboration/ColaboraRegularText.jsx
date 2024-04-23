import React from "react";

const ColaboraRegularText = ({ textAlign, wordone, wordtwo }) => {
  return (
    <h1 className={`my-4 ml-5 ${textAlign} text-2xl font-poppinsMedium w-full`}>
      <span className="text-LetterColor">{wordone}</span>{" "}
      <a href="" className="underline text-primaryColor">
        <span>{wordtwo}</span>
      </a>
    </h1>
  );
};

export default ColaboraRegularText;
