import Link from "next/link";
import {
  SearchIcon,
  PlusCircleIcon,
  LoginIcon,
  LogoutIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Router from "next/router";
import Cookies from "universal-cookie";
import { useEffect, useState, useMemo } from "react";
import { AiFillDashboard } from "react-icons/ai";

function Header() {
  const cookie = new Cookies();
  const [logstatus, setLogstatus] = useState("");
  const [logged, setLogged] = useState(false);
  const [toggle, setToggle] = useState(false);
  const logout = async () => {
    cookie.remove("jwt");
    setLogstatus("logged out");
    setToggle(false)
    setTimeout(() => {
      setLogstatus("");
      Router.push("/");
    }, 700);
  };

  
  useEffect(() => {
    if (cookie.get("jwt")) setLogged(true);
    else setLogged(false);
  }, [logstatus]);

  return (
    <>
      <div className="flex sticky justify-between md:justify-around items-center pb-1 pt-1 shadow-md bg-white">
        <div className="w-36 h-full relative hidden lg:inline-grid">
          <Link href="/">
            <a className="relavtive w-full h-full">
              <img
                className="object-contain"
                src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
              />
            </a>
          </Link>
        </div>

        <div className="w-20 h-12 relative lg:hidden">
          <Link href="/">
            <a>
              <img
                className="w-full h-full object-contain"
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
              />
            </a>
          </Link>
        </div>

        <div className="flex justify-between items-center relative">
          <Link href="/">
            <a>
              {" "}
              <HomeIcon className="h-7 w-10 cursor-pointer hidden sm:inline" />{" "}
            </a>
          </Link>

          <Link href="/createPost">
            <a>
              {" "}
              <PlusCircleIcon className="h-6 w-10 cursor-pointer hidden sm:inline" />{" "}
            </a>
          </Link>

          <MenuAlt2Icon onClick={() => setToggle((prev) => !prev)} className="h-6 w-10 cursor-pointer sm:hidden"></MenuAlt2Icon>

          {logged ? (
            <LogoutIcon
              onClick={logout}
              className="h-6 w-10 cursor-pointer hidden sm:inline"
            ></LogoutIcon>
          ) : (
            <Link href="/login">
              <LoginIcon className="h-5 w-10 cursor-pointer hidden sm:inline" />
            </Link>
          )}
          {logged && <Link href='/'>
            <a className="w-[40px] h-[40px]  mr-2"> 
              <img className = 'rounded-[50%]' src="/user.png"/>
            </a>
          </Link>}
          <h4 className="abolute">{logstatus}</h4>
        </div>
      </div>


      <div className={toggle? "absolute z-10 w-36 h-[29rem] bg-gray-800 top-[56px] left-[246px] transition-[all_5s_ease-in-out]"     : "absolute z-10 w-36 h-[29rem] bg-white  top-[-30rem] left-[-9rem] transition-[all_5s_ease-in-out]" }>
        <div className="flex flex-col mt-5">
          <Link href="/">
            <a className="w-full flex justify-center">
              <div className="w-full flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mb-5 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <h1 className="text-2xl w-[72px] text-white justify-self-end">
                  Home
                </h1>
              </div>
            </a>
          </Link>

          {logged && (
            <Link href="/">
              <a className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mb-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="text-2xl w-[72px] text-white justify-self-end">
                    Profile
                  </h1>
                </div>
              </a>
            </Link>
          )}

          {logged && (
            <Link href="/createPost">
              <a className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mb-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="text-2xl w-[72px] text-white justify-self-end">
                    Create
                  </h1>
                </div>
              </a>
            </Link>
          )}

          {!logged && (
            <Link href="/registration">
              <a className="w-full flex justify-center">
                <div className="w-[144px] flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mb-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  <h1 className="text-2xl w-[72px] text-white justify-self-end">
                    Register
                  </h1>
                </div>
              </a>
            </Link>
          )}

          {!logged && (
            <Link href="/login">
              <a className="w-full flex justify-center">
                <div className="w-[144px] flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1 mb-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="text-2xl w-[72px] text-white justify-self-end">
                    Login
                  </h1>
                </div>
              </a>
            </Link>
          )}

          {logged && (
            <div onClick = {logout} className="w-[144px] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-1 mb-5 mr-2 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-xl w-[72px] text-white justify-self-end">
                Logout
              </h1>
            </div>
          )}

          {logged && (
            <Link href="/admin/dashboard">
              <a className="flex align-middle ">
                <AiFillDashboard className="w-6 h-6 text-white mr-3" />
                <h1 className="text-lg w-[72px] text-white justify-self-end">
                  Dashboard
                </h1>
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
