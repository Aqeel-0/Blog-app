import Link from 'next/link'
import Image from 'next/image'
import {SearchIcon, PlusCircleIcon, LoginIcon, LogoutIcon, MenuAlt2Icon} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
import Router from 'next/router'
import {useCookies} from 'react-cookie'
import { useState } from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'

function Header() {

  const [cookies, setCookies, removeCookies] = useCookies()
  const [logstatus, setLogstatus] = useState('')
  const logout = ()=>{
    removeCookies('jwt')  
    setLogstatus('logged out')
    setTimeout(() => {
      setLogstatus('')
    }, 700);
  }
  
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className='flex justify-around items-center pb-1 pt-1 shadow-md bg-white'>
          <div className = 'w-32 h-12 relative hidden lg:inline-grid'>
            <Link className = 'relavtive w-full h-full'  href='/'>
              <a className = 'relavtive w-full h-full'>
                <Image
                  src='https://s.w.org/style/images/about/WordPress-logotype-standard.png'
                  layout='fill'
                />
              </a>
            </Link>
          </div>

          <div className = 'w-20 h-12 relative lg:hidden'>
            <Link className = 'relavtive w-full h-full' href='/'>
              <a className = 'relavtive w-full h-full'>
                <Image
                  src='https://s.w.org/style/images/about/WordPress-logotype-wmark.png'
                  layout='fill'
                  objectFit='contain'
                />
              </a>
            </Link>
          </div>

          <div className='relative '>
              <div className='absolute top-[6px] left-0'>
                  <SearchIcon className = 'h-5 w-10 text-gray-500 cursor-pointer' />
              </div> 
              <input className='pl-10 w-full h-[2rem] rounded-md bg-gray-300 text-base sm:w-full sm:h-full' type='text' placeholder='search'></input>
          </div> 

          <div className='flex justify-between items-center relative'>
              <Link href='/'> 
                <a> <HomeIcon className='h-5 w-10 cursor-pointer hidden sm:inline'/> </a>
              </Link>

              <Link href='/createPost'>
                <a> 
                  <motion.div>
                    <PlusCircleIcon className='h-5 w-10 cursor-pointer hidden sm:inline'/>
                  </motion.div>
                </a>
              </Link>

              <MenuAlt2Icon onClick = {()=>setToggle(prev => !prev)} className='h-5 w-10 cursor-pointer sm:hidden'></MenuAlt2Icon>

              {cookies.jwt ? <LogoutIcon onClick = {logout} className='h-5 w-10 cursor-pointer'></LogoutIcon> :
              <Link href='/login'><LoginIcon className='h-5 w-10 cursor-pointer'/></Link>
              } 
              <h4 className='abolute'>{logstatus}</h4>
          </div>
          
          
      </div>

    </>
  )
}






export default Header

