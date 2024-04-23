function Number({ wordBlue, paddingClass }) {
  return (
    <h1 className={`text-left text-2xl mb-2 md:text-4xl font-poppinsBlack ${paddingClass}`}>
      <span className="text-LetterColor">{wordBlue}</span>{" "}
    </h1>
  );
}

export default Number;