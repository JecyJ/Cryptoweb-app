import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Getstarted() {
  return (
    <div className='bg-gray-200'>
      <div className='block md:flex md:flex-col items-center max-w-[450px] mx-auto md:max-w-[1250px] md:mx-auto py-10'>
        <h1 className='text-center text-4xl font-semibold mb-8'>Get started in just a few minutes</h1>
        <div className='block md:flex md:justify-between'>
          <div className='flex flex-col items-center'>
              <Image src='/images/bitlogo.png' alt='/' width={250} height={250} />
              <Link href='/'>
                <h1 className='text-xl font-semibold my-3'>Sign Up</h1>
              </Link>              
              <p className='text-center max-w-[290px] md:max-w-[350px] text-gray-700'>Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends</p>
          </div>
          <div className='hidden md:flex items-center'>
            <Image src='/images/arrow.png' alt='/' width={130} height={50} />
          </div>          
          <div className='flex flex-col items-center my-5 md:my-0'>
              <Image src='/images/fundlogo.png' alt='/' width={250} height={250} />
              <Link href='/'>
                <h1 className='text-xl font-semibold my-3'>Fund</h1>
              </Link>              
              <p className='text-center max-w-[290px] md:max-w-[350px] text-gray-700'>Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet</p>
          </div>
          <div className='hidden md:flex items-center'>
            <Image src='/images/arrow.png' alt='/' width={130} height={50} />
          </div>
          <div className='flex flex-col items-center'>
              <Image src='/images/cryptlogo.png' alt='/' width={250} height={250} />
              <Link href='/'>
                <h1 className='text-xl font-semibold my-3'>Buy Crypto</h1>
              </Link>              
              <p className='text-center max-w-[290px] md:max-w-[350px] text-gray-700'>Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getstarted;
