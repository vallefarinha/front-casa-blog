import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../../buttons/PrimaryBtn";

function PostCard({ id, img, imgDescription, title, tag, created }) {
  const createdDate = created.split("T")[0];

  return (
    <div className="w-72 h-96 bg-white border border-gray-200 rounded-lg shadow">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          className="object-cover w-full h-full"
          src={"http://localhost:8000/images/" + img}
          alt={imgDescription}
        />
      </div>

      <div className="px-4 py-2">
        <div className="bg-blue-100 text-LetterColor text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
          {tag}
        </div>
        <div className="mt-2">
          <h5 className="text-xl font-bold tracking-tight text-LetterColor">
            {title}
          </h5>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium text-LetterColor">{createdDate}</p>
          <Link to={`/post/${id}`} className="cursor-pointer">
            <PrimaryBtn data={"Leer más"}></PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
