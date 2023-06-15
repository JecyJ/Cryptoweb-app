'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {HiArrowNarrowUp} from 'react-icons/hi'

function FAQ() {
    const [arrow1, setArrow1] = useState()
    const [arrow2, setArrow2] = useState()
    const [arrow3, setArrow3] = useState()
    const [arrow4, setArrow4] = useState()
    const [backToTop, setBackToTop] = useState(false)
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY >= 90) {
          setBackToTop(true)
        } else {
          setBackToTop(false)
        }
      })
    }, [])

    function scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  
    function Arrow1() {
      return setArrow1(prevArrow1 => !prevArrow1)
    }
    function Arrow2() {
      return setArrow2(prevArrow2 => !prevArrow2)
    }
    function Arrow3() {
      return setArrow3(prevArrow3 => !prevArrow3)
    }
    function Arrow4() {
      return setArrow4(prevArrow4 => !prevArrow4)
    }
    return (
      <div>
        <div className='max-w-[450px] mx-auto md:max-w-[1250px] md:mx- h-full pt-10'>
          <div className='block md:flex md:flex-row items-center'>
            <div className='relative mb-10'>
              <Image className='relative' src='/images/Faq.png' alt='/' width={750} height={300} />
              <Image className='absolute w-28 top-14 left-5 md:top-32 md:left-24' src='/images/d-coin.png' alt='/' width={140} height={140} />
              <Image className='absolute w-28 bottom-2 right-14 md:bottom-14 md:right-36' src='/images/t-coin.png' alt='/' width={140} height={140} />
            </div>
            <div className='md:max-w-[625px]'>
              <h3 className='text-[#3984F4] text-lg px-5 font-semibold mb-4'>SUPPORT</h3>
              <h1 className='text-center md:text-left md:px-5 text-4xl font-semibold mb-10'>Frequently asked  questions</h1>
              <div className='px-5'>
                <div onClick={Arrow1}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b'>Why should I choose NEFA? <RiArrowDropDownLine size={28} /></h3>
                  <p className={!arrow1 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>We are industry pioneers, having been in the cryptocurrency industry since 2016. We have facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we are trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.</p>
                </div>
                <div onClick={Arrow2}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b'>How secure is NEFA? <RiArrowDropDownLine size={28} /></h3>
                  <p className={!arrow2 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>
                <div onClick={Arrow3}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b'>Do I have to buy a whole Bitcoin? <RiArrowDropDownLine size={28} /></h3>
                  <p className={!arrow3 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>The idea of “buying a bitcoin” might seem out of reach if you know what the price of bitcoin is lately, but the good news is that you do not need to buy a whole bitcoin in order to purchase this cryptocurrency.</p>
                </div>
                <div onClick={Arrow4}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b'>How do I actually buy Bitcoin? <RiArrowDropDownLine size={28} /></h3>
                  <p className={!arrow4 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>After choosing an exchange, you have to fund your account before beginning to invest in Bitcoin. Check if your exchange has a Bitcoin wallet built into its platform. If not, you will need to find one of your own. Once your account is funded, you can place your first order to buy Bitcoin.
                  Depending on the platform you are using, you may be able to purchase it by tapping a button, or you may have to enter Bitcoins ticker symbol (BTC). You will then have to input the amount you want to invest.</p>
                </div>            
              </div>
            </div>               
          </div>
          <div onClick={scrollToTop} className='flex items-center justify-center mt-20'>
            {backToTop && <button className='border flex items-center justify-center bg-gray-300 py-1 px-5 rounded-lg'>Back to Top <HiArrowNarrowUp /></button>}
          </div>
          
        </div>      
      </div>
    )
}

export default FAQ;
