import React from 'react'
import Image from 'next/image';
import {RiArrowDropDownLine} from 'react-icons/ri'
import Link from 'next/link';

function Exchanges() {
  return (
    <div>
      <div className='block flex-col md:flex md:flex-row h-full w-full md:space-x-12 max-w-[450px] mx-auto md:max-w-[1250px]'>
        <div className='order-2'>
          <Image src='/images/exchange-globe.png' alt='/' width={750} height={200} />
        </div>
        <div className='flex flex-col justify-center md:max-w-[450px]'>
          <h1 className='text-4xl font-semibold leading-tight'>Buy & trade on the original crypto exchanges</h1>
          <p className='text-lg mb-4'>buy now and get 40% extra bonus minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency</p>
          <div className='flex justify-between'>
            <input
              className='border py-3 w-2/3 rounded-xl'
              type='button'
              value={'Amount | 5,000'}
            />
            <button className='border flex items-center justify-center py-3 px-6 rounded-xl'>
              <Image src='/images/flag.png' alt='/' width={30} height={30} />
                USD
                <RiArrowDropDownLine />
            </button>
          </div>
          <div className='flex justify-between mt-5'>
            <input
              className='border py-3 w-2/3 rounded-xl'
              type='button'
              value={'Amount | 5,000'}
            />
            <button className='border flex items-center justify-center py-3 px-6 rounded-xl'>
              <Image src='/images/flag.png' alt='/' width={30} height={30} />
                USD
                <RiArrowDropDownLine />
            </button>
          </div>          
          <Link className='flex justify-center mt-4' href='/'>
              <button className='border rounded-xl py-2 w-full bg-[#468EF9] text-white'>Buy Now</button>
            </Link>           
        </div>                
      </div>
    </div>
  )
}

export default Exchanges;
