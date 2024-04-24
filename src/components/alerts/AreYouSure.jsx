import React from "react";

function AreYouSure(confirm) {
  const handleDeleteConfirm = () => {
    onConfirm(true);
  };

  const handleDeleteCancel = () => {
    onConfirm(false);
  };

  return (
    <>
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-poppinsBold rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="popup-modal"
        tabindex="-1"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-LetterColor bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-LetterColor w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-poppinsBold text-gray-500 dark:text-LetterColor">
                Seguro que quieres eliminar este post?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-primaryColor hover:bg-primaryColor-800 focus:ring-4 focus:outline-none focus:primaryColor font-poppinsBold rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={handleDeleteConfirm}
              >
                Sí
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-poppinsBold text-LetterColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                onClick={handleDeleteCancel}
              >
                No{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreYouSure;
