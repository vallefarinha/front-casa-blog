import React from "react";

const ArrowButton = ({ rotate, onClick }) => {
  let rotationClass = "";

  switch (rotate) {
    case "left":
      rotationClass = "rotate-180";
      break;
    case "down":
      rotationClass = "rotate-90";
      break;
    case "up":
      rotationClass = "-rotate-90";
      break;
    default:
      rotationClass = "";
  }

  return (
    <button
      type="button"
      className={`text-LetterColor bg-tertiaryColor hover:bg-gray-400 focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 transform ${rotationClass}`}
      onClick={onClick}
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default ArrowButton;