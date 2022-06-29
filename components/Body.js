import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Body({ content }) {
  const blogarr = content.map((blogItem) => {
    return (
      <div
        key={blogItem._id}
        className="shadow-2xl mt-6 mb-6 mx-auto w-4/5 h-[25rem] rounded-sm relative bg-gray-800 sm:h-auto">
        <div className="flex mb-10 w-full m-auto mt-2 py-4 pb-8 px-4 flex-col items-start h-full sm:flex-row">
          <div className="relative basis-2/4 sm:h-full w-full sm:shrink-0">
            <img className="w-full h-full object-cover sm:h-full" src="/mr.jpg" />
          </div>
          <div className="basis-2/4 h-full w-full overflow-hidden sm:ml-4 ">
            <p className="text-left text-3xl">{blogItem.title}</p>
            <p className="mt-2 text-sm ">
              {blogItem.body}
            </p>
          </div>
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
