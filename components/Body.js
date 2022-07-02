
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/outline";
import axios from "axios";

export default function Body({ content }) {
  

  const handleLike = async (e) => {
    const id = e.target.parentNode.id;
    try {
      const result = await axios({
        method: "patch",
        url: `http://localhost:5000/${id}`,
        headers: { "auto-token": cookies.jwt || "" },
      });

    } catch (error) {
        console.log(error)
    }
  };

  const blogarr = content.map((blogItem) => {
    return (
      <div
        key={blogItem._id}
        className="shadow-2xl mt-6 mb-6 mx-auto w-4/5 h-[25rem] rounded-sm relative bg-gray-800 sm:h-auto"
      >
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
          <HeartIcon
            onClick={handleLike}
            className="w-full h-5 text-red-700 cursor-pointer"
          ></HeartIcon>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg> */}
          <h2 className="ml-2 text-[#cdcdcd]">{blogItem.likes_count}</h2>
        </div>
        <div className="absolute bottom-[2px] right-[4px]">
          <Link href={`/${blogItem._id}`}>
            <a className="text-white">continue reading...</a>
          </Link>
        </div>
      </div>
    );
  });

  return <>{blogarr}</>;
}
