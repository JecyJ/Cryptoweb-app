import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {RiArrowDropDownLine} from 'react-icons/ri'

function Hero() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-200 from-40% via-blue-300 via-60% to-blue-400 to-90%'>
      <div className='flex md:flex items-center h-screen w-screen max-w-[450px] mx-auto sm:max-w-[900px] md:max-w-[1250px] md:mr-0 md:pl-5'>
        <div className='flex flex-col items-center justify-center mx-auto md:mr-6 md:items-start'>
          <div className='md:flex space-x-48 p-5'>
            <Link href='/'>
              <h2 className='text-xl text-[#468EF9] font-medium'>SIGN UP TODAY</h2>
            </Link>            
            <Image className='hidden w-7 md:block items-end' src='/images/Star 2.png' alt='/' width={30} height={30} />
          </div>          
          <h1 className='text-6xl sm:text-5xl md:text-6xl text-center md:text-left leading-tight font-semibold'>The Worlds <p className='text-[#3984F4]'>Fastest Growing</p> Crypto Web App</h1>
          <p className='hidden md:block text-lg my-4'>Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</p>
          <div className='flex flex-col mt-5 md:flex-row md:space-x-5 font-medium'>
            <Link href='/crypto'>
              <button className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Get Started</button>
            </Link>
            <Link href='/'>
              <button className='flex justify-center items-center border py-2 w-48 rounded-3xl text-lg border-[#468EF9] text-[#468EF9]'>Download App<RiArrowDropDownLine size={20} /></button>
            </Link>           
          </div>          
        </div>
        <div>
        <Image className='hidden md:block pt-10' src='/images/crypto-ball.png' alt='/' width={1500} height={1500} /> 
        </div>
      </div>
    </div>   
  )
}

export default Hero;
