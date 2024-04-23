const RegularText30 = ({ text, textAlign, size }) => (
    <h1 className={`my-4 mb-6 font-poppinsRegular w-full text-${size} text-${textAlign}`}>
        <span className="text-LetterColor">{text}</span>
    </h1>
);

export default RegularText30;

