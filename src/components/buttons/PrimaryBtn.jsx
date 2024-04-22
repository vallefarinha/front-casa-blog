import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({data, go}) => {
  return (
    <>
      <Link
        to={go} 
        type="button"
        className="text-LetterColor bg-tertiaryColor hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-tertiaryColor font-bold shadow-md rounded-3xl text-sm sm:text-base px-4 sm:px-4 py-2 text-center"
      >
        {data}
      </Link>
    </>
  );
};

export default PrimaryBtn;