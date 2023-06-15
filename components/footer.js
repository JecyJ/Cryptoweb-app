import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div>
      <div className='max-w-[450px] mx-auto md:max-w-[1250px] md:mx-auto pt-10'>
        <div className='block md:flex md:flex-row items-center justify-between px-5 mb-3'>
          <div className='block md:flex text-xl border-t md:border-t-0 md:hover:border-r-2 border-gray-300 py-5 md:text-center md:w-4/12'>
            <Link href='/'>
             <Image className='w-28 py-7 md:mx-6' src='/images/Logo.png' alt='/' width={50} height={50} />
            </Link>
            <ul className='text-gray-700 text-sm md:text-base md:text-center md:px-7'>
              <Link href='/'>
               <li className='pb-2'>Buy Crypto</li>
              </Link>
              <Link href='/'>
               <li className='pb-2'>Exchanges</li>
              </Link>
              <Link href='/'>
               <li className='pb-2'>Watchlist</li>
              </Link>
              <Link href='/'>
               <li className='pb-2'>Portfolio</li>
              </Link>
              <Link href='/'>
               <li>NFT</li>
              </Link>
            </ul>           
          </div>
          <div className='text-sm md:text-base text-gray-700 border-t md:border-t-0 md:hover:border-r-2 border-gray-300 py-5 md:text-center md:w-2/12'>
            <ul>
             <Link href='/'>
              <li className='pb-2'>Products</li>
             </Link>
             <Link href='/'>
              <li className='pb-2'>About Us</li>
             </Link>
             <Link href='/'>
              <li className='pb-2'>Careers</li>
             </Link>
             <Link href='/'>
              <li className='pb-2'>Blog</li>
             </Link>
             <Link href='/'>
              <li>Security</li>
             </Link>
            </ul>
          </div>
          <div className='text-sm md:text-base text-gray-700 border-t md:border-t-0 md:hover:border-r-2 border-gray-300 py-5 md:text-center md:w-2/12'>
            <ul>
              <Link href='/'>
                <li className='pb-2'>Help Center</li>
              </Link>
              <Link href='/'>
                <li className='pb-2'>Contact Us</li>
              </Link>
              <Link href='/'>
                <li className='pb-2'>System Status</li>
              </Link>
              <Link href='/'>
                <li className='pb-2'>Area of Avaibility</li>
              </Link>
              <Link href='/'>
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
          <div className='py-7 border-t md:border-t-0 border-gray-300 pl-4'>           
            <form>
              <label htmlFor='newsletter'>
                <h2 className='text-base md:text-lg text-gray-700 font-semibold'>Newsletter</h2>
                <p className='py-4 text-sm md:text-base text-gray-600'>Never miss anything crypto when you are on the go</p>
              </label>
              <input
                className='border border-gray-700 h-14 w-2/3 pl-2 rounded-xl text-base md:text-lg'
                type='Email'
                placeholder='Enter your Email'
              />
              <button className='h-14 ml-3 px-3 border border-[#468EF9] bg-[#468EF9] text-white rounded-lg'><BsArrowRight /></button>
            </form>            
          </div>
        </div>
        <div className=' flex flex-row items-center space-x-2 justify-center border-t border-gray-300 mx-auto py-4 text-lg text-gray-700'>
          <AiOutlineCopyrightCircle size={20} />         
          <span>Copyright 2022 NEFA LLC. All rights reserved</span>
        </div>
      </div>      
    </div>
  )
}

export default Footer;
