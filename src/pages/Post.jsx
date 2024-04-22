import React from 'react'
import casa from '../assets/images/casaNatal.jpg'
import TitleHistory from '../components/title/TitleHistory'
import ArrowButton from '../components/arrowbuttons/ArrowButton'
import Comment from '../components/comment/Comment'
import CommentInput from '../components/comment/CommentInput'
import { useNavigate } from "react-router-dom"; 

function Post() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate("/blog");
  };
  return (
<>

<div className="flex flex-col w-[80%] mx-auto">
  <div className='my-10'>
  <ArrowButton  rotate='left'  onClick={handleClick} />
  </div>

<div className="bg-white">
   
      <img className="rounded-t-lg w-full h-96" src={casa} alt="" />
   
    <div className="my-6">
    <TitleHistory
          wordBlue="algun"
          wordPink="titulo"
        
        />
      <p className="my-3 font-normal text-gray-700 ">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates totam aspernatur ipsum cumque laborum doloremque itaque velit officiis reiciendis saepe a nobis iste eos quisquam eius atque excepturi esse ratione quibusdam, est optio dolorum harum. Architecto ducimus quidem veritatis nisi laborum saepe corporis quam quos repudiandae maiores debitis magnam atque vero labore voluptates est, molestiae quas illum fugiat laboriosam commodi? Hic fugit officia quidem quibusdam maiores unde doloribus rerum iste error deserunt ad iusto, voluptas magnam nulla cumque assumenda doloremque natus. Voluptates laborum voluptas quasi rerum quo culpa dicta animi ipsa beatae atque, rem quibusdam! Voluptatem nostrum laboriosam tenetur, aut explicabo perferendis ullam omnis dolores sed accusamus expedita, beatae accusantium dignissimos ratione reprehenderit alias voluptate exercitationem molestiae eligendi error iste? Quaerat iure nemo facere quam perspiciatis eum accusamus dolores, voluptate veniam reiciendis officia. Ducimus placeat est qui rem nisi totam dignissimos laudantium ut, unde inventore corporis delectus natus quaerat nobis recusandae repellat tempore quidem error voluptatibus incidunt? Dolore inventore molestias, esse tempore necessitatibus obcaecati est nulla atque. Placeat, vel ex nam non voluptates quod quis eaque doloremque corrupti perferendis eos quos sint ullam, sed tenetur repellendus. Quasi iure animi neque, inventore vel, voluptate veniam ratione nisi, nemo placeat iusto enim delectus totam illum repellat sit rem quo perferendis molestias. Non sapiente quis eos ab explicabo quae aut aspernatur numquam pariatur tempore. Est cumque esse laborum recusandae iure? Minus, consequuntur eaque! Fugiat, eaque error nobis labore, eos placeat nisi sapiente commodi est, consectetur nihil corporis sint. Ab ullam eum at, harum facere perferendis odio non doloribus nihil exercitationem ea amet adipisci placeat. Quis iure aliquam rerum! Molestias, illo dolorem fugiat modi tempora ipsa adipisci. Temporibus facilis, eius quisquam officia hic ex accusantium, a et aliquid dicta perspiciatis asperiores debitis nobis nam voluptas cum tempore, libero illo aliquam fuga sequi labore. Tenetur exercitationem, cumque cupiditate provident fugit itaque ratione quisquam repellat nesciunt repellendus inventore eveniet pariatur quibusdam obcaecati quia architecto, illo cum perspiciatis optio commodi dolorum laboriosam distinctio saepe d
     </p> 
    </div>
</div>
<Comment/>
<CommentInput/>
</div>
</>
  )
}

export default Post