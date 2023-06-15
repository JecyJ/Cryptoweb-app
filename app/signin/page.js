'use client'

import Hero from '@/components/hero';
import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineGoogle, AiOutlineGithub} from 'react-icons/ai'
import {HiAtSymbol, HiFingerPrint} from 'react-icons/hi'
import { signIn } from "next-auth/react"
import {Formik, useFormik} from 'formik'
import signin_validate from '@/lib/validate';

const SignIn = () => {
    const [show, setShow] = useState(false)
    //formik hook for input login
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validate: signin_validate,
      onSubmit
    });
  
    console.log(formik.errors)
  
    async function onSubmit(values){
      console.log(values)
    }
  
    function showPassword() {
      return setShow(prevShow => !prevShow)
    }
  
    //Google signin function
    async function handleGoogleSignin() {
      signIn('google', {callbackUrl: 'http://localhost:3000'})
    }
  
    // Github signin function
    async function handleGithubSignin() {
      signIn('github', {callbackUrl: 'http://localhost:3000'})
    }
  
  
    return (
      <div>
        <Hero  className='relative h-screen' />
        <div className='absolute top-14 left-0 right-0 bottom-0 h-screen bg-black/80 z-[2]' />
        <div className='absolute top-14 left-4 md:left-60 flex flex-col  items-center justify-center max-w-[450px] md:max-w-[1000px] mx-auto w-full md:h-screen z-[2]'>
          <div className=' flex flex-col md:flex-row justify-center items-center border border-blue-500 rounded-3xl h-2/12 md:w-3/4 md:h-3/4'>
            <form onSubmit={formik.handleSubmit} className='w-full md:h-full p-7 flex flex-col justify-center items-center space-y-4 bg-white rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl'>
              <h1 className='text-4xl font-semibold text-[#468EF9]'>Login to Account</h1>
              <div className='flex items-center space-x-8'>
                <Link href='signin#github' onClick={handleGithubSignin} className='border rounded-full p-3 shadow-md hover:shadow-gray-500'>
                  <AiOutlineGithub size={20} />
                </Link>
                <Link href='signin#google'  onClick={handleGoogleSignin} className='border rounded-full p-3 shadow-md hover:shadow-gray-500'>
                  <AiOutlineGoogle size={20} />
                </Link>
              </div>
              <p className='text-gray-700 text-lg'>or use your email account</p>
              <div className='flex flex-col justify-center space-y-2 w-full'>
                <div className='relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'>
                  <input
                    className='bg-gray-300 py-2 w-full'
                    placeholder='Email'
                    type='email'
                    name='email'
                    {...formik.getFieldProps('email')}
                  />
                  <span className='text-slate-500'>
                    <HiAtSymbol size={20} />
                  </span>
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
                <div className={`${'relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input
                    className='bg-gray-300 py-2 w-full'
                    placeholder='Password'
                    type={show ? 'text' : 'password'}
                    name='password'
                    {...formik.getFieldProps('password')}
                  />
                  <span onClick={showPassword} className='text-slate-500 hover:text-blue-500'>
                    <HiFingerPrint size={20} />
                  </span>
                </div>
                {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
                <div className='flex justify-between'>
                  <div className='space-x-1'>
                    <input
                      type="checkbox" 
                      id="remember" 
                      name="scales"
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link href='/'>
                    <p>Forgot Password?</p>
                  </Link>
                </div>
              </div>
              <button type='submit' className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Log In</button> 
              {/* <Link href=''>
                <button type='submit' className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Log In</button> 
              </Link>              */}
            </form>
            <form className='bg-gradient-to-r from-blue-200 from-40% via-blue-300 via-60% to-blue-400 to-90% w-full md:h-full flex flex-col justify-center items-center space-y-4 p-4 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl'>
              <h1 className='text-4xl font-semibold text-gray-500'>Hello, Friend!</h1>
              <p className='text-gray-700 text-lg md:text-center'>fill up personal information and journey with us.</p>
              <Link href='/signup'>
              <button className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Sign Up</button>
              </Link>
            </form>
          </div>          
        </div>
      </div>
    )
}

export default SignIn;