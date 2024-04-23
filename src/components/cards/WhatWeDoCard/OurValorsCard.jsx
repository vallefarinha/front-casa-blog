import { Accordion } from "flowbite-react";
import React from "react";

function OurValorsCard({ title, text, icon, alt }) {
  return (
    <div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className=" font-poppinsBold  text-xl lg:text-2xl text-LetterColor">
            <div className="flex gap-5">
              {" "}
              <img className="w-14 h-14 mb-3" src={icon} alt={alt} />
              {title}
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 font-poppinsRegular text-lg lg:text-xl text-LetterColor ml-10 pl-10">
              {text}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default OurValorsCard;
