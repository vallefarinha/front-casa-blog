import React from "react";

const CardNumberTitle = ({ wordBlue, wordWhite, textAlign }) => {
  return (
  <section className={`my-4 ml-5 md:text-2xl text-xl font-poppinsSemiBold w-full flex flex-col md:flex-row`}>
    <div className="text-LetterColor md:mr-4">{wordBlue}</div>
    <div className="text-white font-poppinsExtraBold mt-2 md:mt-0">{wordWhite}</div>
  </section>
  );
};

export default CardNumberTitle;
