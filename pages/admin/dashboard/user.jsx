import Header from "../../../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    AiFillHome,
    AiFillDashboard,
    AiOutlineUser,
    AiOutlineLogout,
} from "react-icons/ai";
function User() {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-between md:flex-row-reverse sm:h-screen">

            <div className="w-full h-[84vh] md:basis-[85%] border-l-2 border-sky-600 ">
                <Header />
                <div className="flex flex-col justify-around sm:flex-row">
                    <div class="flex justify-center items-center h-full ">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">Sliver</td>
                                    <td class="px-6 py-4">Laptop</td>
                                    <td class="px-6 py-4">$2999</td>
                                    <td class="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                    <td class="px-6 py-4">Laptop PC</td>
                                    <td class="px-6 py-4">$1999</td>
                                    <td class="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                    <td class="px-6 py-4">Accessories</td>
                                    <td class="px-6 py-4">$99</td>
                                    <td class="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="h-14 w-full bg-gray-900 md:basis-[15%] md:h-full">
                <div className="md:relative mx-auto lg:float-right lg:px-6">
                    <ul className="list-reset flex flex-row md:flex-col text-center md:text-left mt-10">
                        <li className="mr-3 flex-1">
                            <Link href="/">
                                <a className="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                    <AiFillHome className="w-5 h-5 text-white mr-3" />
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                        Home
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link href="/admin/dashboard">
                                <a
                                    className={
                                        router.pathname == "/admin/dashboard"
                                            ? "flex py-1 md:py-3 pl-1 align-middle no-underline border-b-2 " +
                                              "border-pink-600"
                                            : "flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 hover:border-pink-500"
                                    }
                                >
                                    <AiFillDashboard className="w-5 h-5 text-white mr-3" />
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                        Dashboard
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link href="/admin/dashboard/user">
                                <a
                                    className={
                                        router.pathname ==
                                        "/admin/dashboard/user"
                                            ? "flex py-1 md:py-3 pl-1 align-middle no-underline border-b-2 " +
                                              "border-pink-600"
                                            : "flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 hover:border-pink-500"
                                    }
                                >
                                    <AiOutlineUser className="w-5 h-5 text-white mr-3" />
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                        Users
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <a className="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <AiOutlineLogout className="w-5 h-5 text-white mr-3" />
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                    LogOut
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default User;
