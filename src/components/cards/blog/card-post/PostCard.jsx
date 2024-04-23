import React from 'react'
import { Link } from "react-router-dom";
import PrimaryBtn from '../../../buttons/PrimaryBtn';

function PostCard({img, imgDescription, title, content, tag, created}) {
  return (  

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <Link to="/post">
        <img className="rounded-t-lg" src={img} alt={imgDescription} />
    </Link>
    <div className="pl-2 py-5">
    <Link to="/post" className="bg-blue-100 text-LetterColor text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
            </svg>
            {tag}
        </Link>
        <div className="flex flex-col mt-3">
        <Link to="/post">
            <h5 className="mb-2 text-xl font-poppinsBold tracking-tight text-LetterColor">{title}</h5>
        </Link>
        <p className="mb-3 font-poppinsRegular text-LetterColor">{content}</p>
        </div>
<div className='flex items-end justify-between pr-2'>
<p className="text-sm font-poppinsMediumItalic text-LetterColor">{created}</p>
<PrimaryBtn data={"Ler más"} go="partnership"></PrimaryBtn>

</div>
    </div>
</div>

  )
}

export default PostCard