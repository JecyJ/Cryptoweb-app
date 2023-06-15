import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function NFT() {
  return (
    <div className='w-full h-full mb-12 bg-gray-200'>
        <div className='block md:flex items-center max-w-[450px] mx-auto md:max-w-[1250px] md:mx-auto'>
            <div className='order-2'>
            <Image src='/images/nft.png' alt='/' width={750} height={300} />
            </div>
            <div className='md:max-w-[500px] mx-auto mt-7 pl-8'>
                <h1 className='text-4xl font-semibold mb-8'>Advanced Trading <span className='text-[#3984F4]'>Tools</span></h1>
                <h2 className='text-xl font-semibold mb-3'>Professional Access, Non-stop Availability</h2>
                <p className='text-lg text-gray-700 mb-6'>We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</p>
                <h2 className='text-xl font-semibold mb-3'>A Range of Powerful Apis</h2>
                <p className='text-lg text-gray-700 mb-6'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
                <h2 className='text-xl font-semibold mb-3'>Customer Support</h2>
                <p className='text-lg text-gray-700 mb-6'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                <div className='block md:flex items-center md:space-x-9'>
                    <Link href='/'>
                        <button className='border border-[#3984F4] text-[#3984F4] rounded-full py-2 w-full md:w-44'>Get Started</button>
                    </Link>
                    <Link href='/'>
                        <button className='w-full md:w-44 underline py-2 my-6 text-[#3984F4]'>Learn More</button>
                    </Link>            
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFT;
