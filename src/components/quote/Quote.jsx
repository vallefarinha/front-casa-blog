import comillasDerechas from "../../assets/icons/comillas-derecha.svg";
import comillasIzquierdas from "../../assets/icons/comillas-izquierda.svg";

function Quote({quote, bgClass }) {
    return (
      <>

<div className={`bg-cover bg-no-repeat bg-center text-center text-xl font-poppinsMediumItalic relative ${bgClass} m-6`}>
      <img src={comillasIzquierdas} className="h-8 absolute left-0 top-0" alt="" />
      <p className="text-xl md:text-xl lg:text-xl p-6 font-poppinsRegular text-LetterColor mb-4">{quote}</p>
      <img src={comillasDerechas} className="h-8 absolute right-0 bottom-0" alt="" />
    </div>
    
      </>
    );
  }
  
export default Quote