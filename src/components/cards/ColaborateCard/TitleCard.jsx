import React from "react";
import TitleAboutUs from "../../title/TitleAboutUs";

const TitleCard = ({ TitleAboutUs }) => {
  return (
    <div className=" bg-bgColorColaborateCards h-20 rounded-xl flex items-center justify-start">
      {" "}
      {TitleAboutUs}
    </div>
  );
};

export default TitleCard;
