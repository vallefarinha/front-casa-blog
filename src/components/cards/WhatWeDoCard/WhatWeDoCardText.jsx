function WhatWeDoCardText({ title, description, shadowColor }) {
  return (
    <div className={`h-48 mt-2 w-full md:w-1/2 bg-bgColorWithOpacity  content-center md:max-w-2xl rounded-lg shadow-xl ${shadowColor} transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100`}>
    <h5 className="mb-2 text-xl font-poppinsBlack tracking-tight text-LetterColor text-center">{title}</h5>
    <p className="font-poppinsRegular text-LetterColor text-center px-4">{description}</p>
    </div>
  );
  }
  
  export default WhatWeDoCardText;
