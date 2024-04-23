function WhatWeDoCardWithImageLeft({img, title, text, shadowColor}) {
  return (
    <>
<div className={`flex flex-col w-full bg-bgColorWithOpacity shadow-xl ${shadowColor} md:h-48 rounded-lg md:flex-row hover:bg-gray-100 z-20 `}>
  <div className="flex flex-col w-full md:w-1/2">
  <img className="object-cover w-full rounded md:h-full md:rounded-none md:rounded-s-lg" src={img} alt=""/>
  </div>
  
    <div className="flex flex-col justify-center text-center p-4 leading-normal w-full md:w-1/2 transition-transform duration-200 transform hover:scale-105">
        <h5 className="mb-2 text-xl font-poppinsBlack tracking-tight text-LetterColor dark:text-white ">{title}</h5>
        <p className="mb-3 font-normal font-poppinsRegular text-LetterColor">{text}</p>
    </div>
</div>
</>
);
}

export default WhatWeDoCardWithImageLeft;