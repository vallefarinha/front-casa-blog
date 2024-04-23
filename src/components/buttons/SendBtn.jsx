import React from "react";

const SendBtn = ({data}) => {
  return (
    <button
    type="submit"
    className="text-LetterColor bg-tertiaryColor hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-tertiaryColor font-bold shadow-md text-xs p-2 rounded-2xl sm:text-sm sm:px-6 sm:py-2 sm:rounded-3xl  text-center"
  >
    {data}
  </button>
  )
}

export default SendBtn