import React from 'react'
import Image from 'next/image';

function Partners() {
  return (
    <div className='my-5 bg-gray-200'>
        <div className='max-w-[450px] m-auto md:max-w-[1250px] py-5'>
            <div>
                <h1 className='text-3xl text-center font-semibold mt-4'>Trusted Partners Worldwide</h1>
                <p className='text-xl my-6 text-center'>We are partners with countless major organisations around the globe</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <Image src='/images/clever.png' alt='/' width={300} height={300} />
                <Image src='/images/diamond.png' alt='/' width={300} height={300} />
                <Image src='/images/swissfinance.png' alt='/' width={300} height={300} />
                <Image src='/images/gambio.png' alt='/' width={300} height={300} />
            </div>
        </div>
    </div>
  )
}

export default Partners;
