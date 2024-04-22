function TitleHistory({ wordBlue, wordPink, paddingClass }) {
    return (
      <h1 className={`text-left text-2xl md:text-3xl font-poppinsMedium ${paddingClass}`}>
        <span className="text-LetterColor">{wordBlue}</span>{" "}
        <span className="text-primaryColor font-poppinsExtraBold">{wordPink}</span>
      </h1>
    );
  }
  
export default TitleHistory