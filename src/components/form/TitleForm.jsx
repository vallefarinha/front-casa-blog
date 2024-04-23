import React from 'react';

function TitleForm({ wordBlue, wordPink }) {
  return (
    <div className="h-[75px] relative bg-rose-50 rounded-[20px] shadow flex items-center justify-center md:w-[900px] w-full">
      <h1 className="text-xl md:text-2xl font-poppinsMedium">
        <span className="text-cyan-950">{wordBlue}</span>{" "}
        <span className="text-rose-500 font-poppinsExtraBold">
          {wordPink}
        </span>
      </h1>
    </div>
  );
}

export default TitleForm;
