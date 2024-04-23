import React from "react";

const TextImageOurMission = ({ paragraph, image }) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <p className="font-poppinsRegular text-lg lg:text-xl text-LetterColor  text-justify lg:w-1/2 ">
        {paragraph}
      </p>
      <div className="lg:w-1/2">

      <img
        className="md:w-[30%] lg:w-[43%] mx-auto my-auto"
        src={image}
      />
      </div>
    </div>
  );
};

export default TextImageOurMission;
