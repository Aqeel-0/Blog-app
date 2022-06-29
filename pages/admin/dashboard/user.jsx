import Header from "../../../components/Header";

function User() {
    return (
        <div className="flex flex-col h-screen justify-between md:flex-row-reverse">
            <div className="w-full h-full md:basis-[85%]">
                <Header />
                <div className="flex flex-col justify-around sm:flex-row">
                    <div className="w-full h-auto flex flex-wrap justify-around mt-10 basis-[60%]">
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md"></div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md"></div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md"></div>
                        <div className="basis-[46%] h-[8rem] bg-sky-900 mb-8 rounded-md"></div>
                    </div>
                    <div className=' sm:basis-[35%] h-auto bg-black mt-10'></div>
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

export default User;
