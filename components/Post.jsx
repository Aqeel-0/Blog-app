
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/outline";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

import jsonwebtoken from "jsonwebtoken";


function Post({blogItem}) {

  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const [likes, setLikes] = useState(blogItem.likes_count);
  const [hasliked, setHasliked] = useState(false);
  const [status, setStaus] = useState('')

  useEffect(() => {
    if (token) {
      const verified = jsonwebtoken.verify(token, "sfshfhsdifhsiuhf"); // convert this to env later
      if (blogItem.likes && verified._id in blogItem.likes) {
        setHasliked(true)
      }
    }
    else setHasliked(false)
  }, []);

  const handleLike = async (e) => {
    const id = e.target.parentNode.id;
    try {
      const result = await axios({
        method: "patch",
        url: `http://localhost:5000/${id}`,
        headers: { "auto-token": cookies.get("jwt") || "" },
      });
      if (result.data.message === "liked") {
        setLikes((prevLikes) => prevLikes + 1);
        setHasliked(true);
        setStaus('post liked')
      } else {
        setLikes((prevLikes) => prevLikes - 1);
        setHasliked(false);
        setStaus('post disliked')
      }
    } catch (error) {
      setStaus(error.response.data.err)
    }
    setTimeout(()=>{
      setStaus('')
    }, 700)
  };

  

  return (
    <div
      key={blogItem._id}
      className="shadow-2xl mt-6 mb-6 mx-auto w-4/5 h-[25rem] rounded-sm relative bg-gray-800 sm:h-auto"
    > 
      {status && <h1 className="text-lg text-red-700 absolute top-[-25px] left-[42%]">{status}</h1>}
      <div className="flex mb-10 w-full m-auto mt-2 py-4 pb-8 px-4 flex-col items-start h-full sm:flex-row sm:h-[20rem]">
        <div className="relative basis-2/4 sm:h-full w-full sm:shrink-0">
          <img
            className="w-full h-full object-fit sm:h-full"
            src={blogItem.image}
          />
        </div>
        <div className="basis-2/4 h-full w-full overflow-hidden sm:ml-4 text-[#cdcdcd]">
          <p className="text-left text-3xl">{blogItem.title}</p>
          <p className="mt-2 text-sm ">{blogItem.body}</p>
        </div>
      </div>
      <div
        id={blogItem._id}
        className="flex items-center absolute bottom-[6px] left-[20px]"
      >
        {hasliked ? (
          <svg
            id={blogItem._id}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="red"
          >
            <path
              onClick={handleLike}
              fillRule="fill"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <HeartIcon
            onClick={handleLike}
            className="w-full h-5 text-red-700 cursor-pointer"
          />
        )}

        <h2 className="ml-2 text-[#cdcdcd]">{likes}</h2>
      </div>
      <div className="absolute bottom-[2px] right-[4px]">
        <Link href={`/${blogItem._id}`}>
          <a className="text-white">continue reading...</a>
        </Link>
      </div>
    </div>
  );
}

export default Post;
