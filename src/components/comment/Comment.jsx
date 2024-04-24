import React, { useState } from "react";

function Comment({author, created, content}) {
  const [showFullComment, setShowFullComment] = useState(false);

  const toggleShowFullComment = () => {
    setShowFullComment(!showFullComment);
  };

  const createdDate = created.split("T")[0];

  return (
    <>
      <article>
        <div className="font-poppinsMedium text-LetterColor mb-4 dark:text-white text-sm">
          <p>
            {author}
            <time className="block text-sm text-gray-500 dark:text-gray-400">
              {"Creado el  "+createdDate}
            </time>
          </p>
        </div>
        <p
          className={`mb-2 text-gray-500 dark:text-gray-400 font-poppinsRegular text-sm ${
            showFullComment ? "" : "truncate"
          }`}
        >
          {showFullComment ? content : content.slice(0, 140)}
        </p>
        {!showFullComment ? (
          <button
            onClick={toggleShowFullComment}
            className="block mb-5 text-sm font-medium text-tertiaryColor hover:underline dark:text-blue-500"
          >
            Leer más
          </button>
        ) : (
          <button
            onClick={toggleShowFullComment}
            className="block mb-5 text-sm font-medium text-tertiaryColor hover:underline dark:text-blue-500"
          >
            Leer menos
          </button>
        )}
      </article>
    </>
  );
}

export default Comment;
