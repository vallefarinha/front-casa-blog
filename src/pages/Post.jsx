import React, { useState, useEffect } from "react";
import ArrowButton from "../components/arrowbuttons/ArrowButton";
import Comment from "../components/comment/Comment";
import CommentInput from "../components/comment/CommentInput";
import { useNavigate } from "react-router-dom";
import ApiBackend from "../services/ApiBackend.jsx";
import { useParams } from "react-router-dom";
function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const postInfo = await ApiBackend.getPostById(id);
        setPostData(postInfo.post);
      } catch (error) {
        console.error("Error al obtener información:", error);
      }
    };

    getPostData();
  }, [id]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog");
  };

  return (
    <div className="flex flex-col w-[80%] mx-auto">
      {postData ? (
        <>
          <div className="my-3">
            <ArrowButton rotate="left" onClick={handleClick} />
          </div>
          <div className="bg-inherit">
            <div className="my-6">
              <h1 className="text-4xl font-poppinsMedium w-full md:text-6xl text-primaryColor">
                {postData.title}
              </h1>
              <div className="clearfix my-10">
                <img
                  className="object-cover w-full md:w-[30%] mb-4 float-left mr-6 rounded-xl"
                  src={"http://localhost:8000/images/" + postData.image}
                  alt={postData.title}
                />
                <div
                  className="my-3 font-poppinsRegular text-LetterColor"
                  dangerouslySetInnerHTML={{ __html: postData.content }}
                />
              </div>
              <div className="flex justify-between font-poppinsMedium text-LetterColor">
                <span>{postData.author}</span>
                <span>{postData.created_at.split("T")[0]}</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mt-5 mb-10">
            <h2 className="font-poppinsBold text-primaryColor mt-3 mb-5">
              Comentarios
            </h2>
            <div className="max-h-[420px] overflow-y-auto">
              {postData.comments.map((comment) => (
                <>
                  <Comment
                    author={comment.author}
                    created={comment.created_at}
                    content={comment.content}
                  />
                  <hr className="border-gray-300 my-6" />
                </>
              ))}
            </div>
          </div>

          <CommentInput />
        </>
      ) : (
        <p>Cargando información del post...</p>
      )}
    </div>
  );
}

export default Post;
