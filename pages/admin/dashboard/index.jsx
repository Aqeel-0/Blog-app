import Header from "../../../components/Header";
import { useState } from "react";
import Link from 'next/link'
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useCookies } from "react-cookie";
function Index({ posts }) {

    const [cookies, setCookie, removeCookie] = useCookies();
    const [err, setErr] = useState("");
    const handleEdit = (e)=>{

    }
    const handleDelete = async (e)=>{
        const postId = e.target.parentNode.id
        const options = axios.create({
            baseURL: "http://localhost:5000",
            headers: { "auto-token": cookies.jwt || ''},
        });
        try {
            const result = await options.delete(`${postId}`)
            setErr("post deleted");
        } catch (error) {
            console.log(error.response.data.err)
            setErr(error.response.data.err);
        }
    }


    const arr = posts.map((post) => {
        return (
            <div
                key={post._id}
                id={post._id}
                className="flex items-center h-12 rounded-md border border-white bg-gray-900 pl-3 mb-2 overflow-hidden"
            >
                <h1 className="text-white text-lg ">{post.title}</h1>
                <div id={post._id} className=" flex ml-auto p-4">
                    <Link href={`/admin/dashboard/editpost/${post._id}`}>
                        <a><PencilIcon onClick={handleEdit} className="w-5 h-5 mr-2 text-white cursor-pointer"></PencilIcon></a>
                    </Link>
                    <TrashIcon  onClick={handleDelete} className="w-5 h-5 text-white cursor-pointer"></TrashIcon>
                </div>
            </div>
        );
    });

    return (
        <div className="flex flex-col justify-between md:flex-row-reverse sm:h-screen">
            <div className="w-full md:basis-[85%] border-l-2 border-sky-600 ">
                <Header />
                <div className="flex flex-col justify-around sm:flex-row">
                    <div className="w-full h-full flex flex-wrap justify-around mt-10 basis-[60%]">
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md p-2">
                            <h2>Total posts: 400</h2>
                            <h2>Total viewer: 10k</h2>
                            <h2>Total revenue: 6k</h2>
                            <h2>Monthy reach: 3k</h2>
                        </div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md p-2 ">
                            <h2>Total likes: 5k</h2>
                            <h2>Total comments: 5k</h2>
                            <h2>Total shares: 5k</h2>
                            <h2>Total review: 5k</h2>
                        </div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md p-2 "></div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md p-2 "></div>
                    </div>
                    <div className="w-auto  mx-2 sm:basis-[35%] h-[26rem] mt-10 overflow-y-auto overflow-x-hidden">
                        <div className="flex justify-between transition-all">
                            <h1 className="text-white text-xl mb-2">All posts</h1>
                            <h1 className={err ? "text-red-800 text-lg" : "text-red-800 text-lg hidden"}>{err}</h1>
                        </div> 
                        {arr}
                    </div>
                </div>
            </div>
            <div className="h-14 w-full bg-gray-900 md:basis-[15%] md:h-full">
                <div className="md:relative mx-auto lg:float-right lg:px-6">
                    <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
                            >
                                <i className="fas fa-link pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
                            >
                                <i className="fas fa-link pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600"
                            >
                                <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                                    Active Link
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
                            >
                                <i className="fas fa-link pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                    Link
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await axios.get("http://localhost:5000");
    return {
        props: {
            posts: response.data,
        },
    };
}

export default Index;