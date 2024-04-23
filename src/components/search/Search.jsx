const Search = ({ onSearchChange }) => {
    return (
      <>
        <div className="my-10 flex w-[90%] sm:w-2/3 md:w-1/2  shadow-md border-2 rounded-full">
          <input
            type="search"
            className="relative m-0 -me-0.5 block flex-auto rounded-full text-LetterColor bg-transparent bg-clip-padding px-3 py-[0.25rem] border-none font-poppinsRegular leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:LetterColor focus:z-[3] focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            placeholder="Buscar"
            aria-label="Buscar"
            id="exampleFormControlInput3"
            aria-describedby="button-addon3"
            onChange={onSearchChange}
          />
          <button
            className="z-[2] inline-block font-bold rounded-full bg-tertiaryColor shadow-xl px-6 pb-[6px] pt-2 text-xs font-poppinsBold uppercase leading-normal text-LetterColor transition duration-150 ease-in-out hover:bg-primaryColor focus:primaryColor focus:bg-primaryColor focus:text-quarteryColor focus:outline-none active:font-poppinsExtraBold"
            data-twe-ripple-init
            data-twe-ripple-color="white"
            type="button"
            id="button-addon3"
          >
            Buscar
          </button>
        </div>
      </>
    );
  };
  
  export default Search;