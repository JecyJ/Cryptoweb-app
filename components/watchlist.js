import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Watchlist() {
  return (
    <div className='w-full h-full mb-12'>
      <div className='flex flex-col space-y-48 md:space-x-10 md:flex-row max-w-[450px] mx-auto md:max-w-[1250px] md:mx-auto'>
        <div className=''>
          <div className='relative'>
            <Image className='absolute right-7 z-[-2]' src='/images/sphere.png' alt='/' width={750} height={300} />
            <Image className='relative top-12 z-[2]' src='/images/atm-cards.png' alt='/' width={750} height={300} />
          </div>         
        </div>
        <div className=''>
          <h1 className='text-4xl max-w-[400px]  font-semibold'>Introducing the <span className='text-[#3984F4]'>NEFA</span> Credit Card</h1>
          <p className='text-gray-900 text-xl'>Subject to cardholder and rewards terms which will be available at application.</p>
          <ul className='space-y-4 text-lg font-medium list-inside'>
            <li className='flex'><Image className='mr-3' src='/images/check-circle.png' alt='/' width={24} height={24} /> Up to 3% back on purchases</li>
            <li className='flex'><Image className='mr-3' src='/images/check-circle.png' alt='/' width={24} height={24} /> Earn rewards in bitcoin or any crypto on NEFA</li>
            <li className='flex'><Image className='mr-3' src='/images/check-circle.png' alt='/' width={24} height={24} /> No annual fee</li>
          </ul>
          <Link href='/'>
            <button className='border rounded-3xl py-2 px-10 w-full md:w-2/5 my-4 border-[#468EF9] text-[#468EF9]'>Join the Watchlist</button>
          </Link>
        </div>        
      </div>      
    </div>
  )
}

export default Watchlist;
