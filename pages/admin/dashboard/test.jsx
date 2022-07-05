
import React from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillHome, AiFillDashboard, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
function Test() {
    const router = useRouter()
  return (
    <Wrapper>
        <div className='bg-gray-700'>
            <div className="h-14 w-full bg-gray-900 md:h-full">
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
                                <a className={router.pathname == '/admin/dashboard' ? "flex py-1 md:py-3 pl-1 align-middle no-underline border-b-2 "+'border-pink-600' : "flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 hover:border-pink-500"}>
                                    <AiFillDashboard className="w-5 h-5 text-white mr-3" />
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                                        Dashboard
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link href="/admin/dashboard/user">
                            <a className={router.pathname == '/admin/dashboard/user' ? "flex py-1 md:py-3 pl-1 align-middle no-underline border-b-2 "+'border-pink-600' : "flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 hover:border-pink-500"}>
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
        <Container className='bg-gray-500'>
            <div className='bg-white'> 
                <Header/>
            </div>
            <div className='bg-gray-900'></div>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div `
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 15% 85%;
`
const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;

`




export default Test