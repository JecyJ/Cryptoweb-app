'use client'

import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
// import { useSession, signOut } from "next-auth/react"



function Navbar() {
    const [nav, setNav] = useState()
    // const { data: session } = useSession()
    

    // function handleSession() {
    //   if(session) {
    //     return <>
    //       <h1 className='text-lg font-medium text-gray-700'>Welcome {session.user.name}</h1>          
    //       <button className='border py-2 w-32 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white' onClick={() => signOut()}>Sign out</button>
    //     </>
    //   }
    //   return <>
    //     <Link href='/signin'>
          
    //     </Link>
    //     <Link href='/signup'>
          
    //     </Link>
    //   </>
    // }


    function handleNav() {
      return setNav(prevNav => !prevNav)
    }

    return (
      <div className='sticky w-full h-auto left-0 top-0 z-10 ease-in duration-300 bg-gradient-to-r from-blue-200 from-40% via-blue-300 via-60% to-blue-400 to-90%'>
        <div className='max-w-[450px] md:max-w-[1180px] sm:max-w-[650px] m-auto flex justify-between items-center py-1 px-5'>
          <Link href='/'>
            <Image src='/images/Logo.png' alt='/' width={100} height={100} />
          </Link>
          <ul className='hidden md:flex items-center space-x-2 lg:space-x-6 text-sm lg:text-lg'>
            <Link href='/crypto'>
                <li>Cryptocurrency</li>
            </Link>
            <Link href='/#exchanges'>
                <li>Exchanges</li>
            </Link>
            <Link href='/#watchlist'>
                <li>Watchlist</li>
            </Link>
            <Link href='/nft'>
                <li>NFT</li>
            </Link>
            <Link href='/#portfolio'>
                <li>Portfolio</li>
            </Link>
            <Link href='/#products'>
                <li className='flex items-center'>
                Products <RiArrowDropDownLine size={20} /></li>
            </Link>
          </ul>
          <div className='space-x-1 hidden md:flex items-center'>
            <button className='border py-1 w-28 rounded-3xl text-sm mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Sign In</button>

            <button className='border py-1 w-28 rounded-3xl text-sm border-[#468EF9] text-white'>Sign Up</button>
          </div>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={20} />
          </div>
          <div className={nav ? 'fixed md:hidden left-0 top-0 right-0 bottom-0 w-[100%] h-full bg-[#3984F4] ease-in-out duration-700' : 'fixed md:hidden bottom-[-100%] h-full bg-[#3984F4] ease-in-out duration-700'}>
            <div className='max-w-[450px] sm:max-w-[650px] m-auto flex justify-between items-center py-1 px-5'>
              <Link href='/'>
                <Image onClick={handleNav} src='/images/Logo.png' alt='/' width={100} height={100} />
              </Link>
              <div onClick={handleNav}>
              <AiOutlineClose size={20} />        
              </div>
            </div>          
            <ul className='max-w-[450px] sm:max-w-[650px] m-auto py-1 px-5 text-3xl mt-10 text-center text-white'>
              <Link href='/crypto'>
                  <li onClick={handleNav} className='py-3'>Cryptocurrency</li>
              </Link>
              <Link href='/#exchanges'>
                  <li onClick={handleNav} className='py-3'>Exchanges</li>
              </Link>
              <Link href='/#watchlist'>
                  <li onClick={handleNav} className='py-3'>Watchlist</li>
              </Link>
              <Link href='/nft'>
                  <li onClick={handleNav} className='py-3'>NFT</li>
              </Link>
              <Link href='/#portfolio'>
                  <li onClick={handleNav} className='py-3'>Portfolio</li>
              </Link>
              <Link href='/#products'>
                  <li onClick={handleNav} className='py-3'>Products</li>
              </Link>
            </ul>
            <div onClick={handleNav} className='flex flex-col justify-center items-center max-w-[450px] sm:max-w-[650px] m-auto py-6 px-5 space-x-5 font-medium'>
              <button className='border py-2 w-32 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Sign In</button>

              <button className='border py-2 w-32 rounded-3xl text-lg border-[#468EF9] text-white'>Sign Up</button>
            </div>
          </div>   
        </div>      
      </div>
    )
}

export default Navbar;