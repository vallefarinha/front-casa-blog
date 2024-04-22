


const RegularText = ({ text, base,large, small,color}) => (
    <span className={`font-poppinsRegular text-justify mb-4 w-full text-${color} text-${base} lg:text-${large} sm:text-${small} `}>
        {text}
    </span>
);


export default RegularText;

