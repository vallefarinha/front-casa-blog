function Title({ wordBlue, wordPink, textAlign }) {
  return (
    <h1 className={`${textAlign} text-4xl font-poppinsMedium w-full md:text-6xl`}>
      <span className="text-LetterColor">{wordBlue}</span>{" "}
      <span className="text-primaryColor font-poppinsExtraBold">
        {wordPink}
      </span>
    </h1>
  );
}

export default Title;
