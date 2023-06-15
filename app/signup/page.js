'use client'

import Hero from '@/components/hero';
import Link from 'next/link';
import { useState } from 'react';
import {HiAtSymbol, HiFingerPrint} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {Formik, useFormik } from 'formik';
import register_validate from '@/lib/validatereg';

const SignUp = () => {
    const [show, setShow] = useState(false)

    //formik hook for input register
    const formik = useFormik ({
      initialValues: {
        username: '',
        email: '',
        password: '',
        cpassword: ''
      },
      validate: register_validate,
      onSubmit
    })
  
    console.log(formik.errors)
  
    async function onSubmit(values) {
      console.log(values)
    }
  
    function showPassword() {
      return setShow(prevShow => !prevShow)
    }
  
  
    return (
      <div>
        <Hero  className='relative h-screen' />
        <div className='absolute top-14 left-0 right-0 bottom-0 h-screen bg-black/80 z-[2]' />
        <div className='absolute top-32 md:top-8 left-4 md:left-60 flex flex-col items-center justify-center max-w-[450px] md:max-w-[1000px] mx-auto w-full md:h-screen z-[2]'>
          <div className=' flex flex-col md:flex-row justify-center items-center border border-blue-500 rounded-3xl h-96 w-96 md:w-3/4 md:h-3/4'>
            <form onSubmit={formik.handleSubmit} className='w-full md:h-full p-7 flex flex-col justify-center items-center space-y-4 bg-white rounded-2xl'>
              <h1 className='text-4xl font-semibold text-[#468EF9]'>Register</h1>
              <p className='text-gray-700 text-lg'>Fill up the form to Register</p>
              <div className='flex flex-col justify-center space-y-2 w-full'>
                <div className={`${'relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                  <input
                    className='bg-gray-300 py-2 w-full'
                    placeholder='Username'
                    type='text'
                    name='username'
                    {...formik.getFieldProps('username')}
                  />
                  <span className='text-slate-500'>
                    <FaUserAlt size={20} />
                  </span>
                </div>
                {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}
                <div className={`${'relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
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
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
                <div onClick={showPassword} className={`${'relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input
                    className='bg-gray-300 py-2 w-full'
                    placeholder='Password'
                    type={show ? 'text' : 'password'}
                    name='password'
                    {...formik.getFieldProps('password')}
  
                  />
                  <span className='text-slate-500 hover:text-blue-500'>
                    <HiFingerPrint size={20} />
                  </span>
                </div>
                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}
                <div onClick={showPassword} className={`${'relative flex items-center px-3 border border-gray-300 bg-gray-300 rounded-lg'} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                  <input
                    className='bg-gray-300 py-2 w-full'
                    placeholder='Confirm Password'
                    type={show ? 'text' : 'password'}
                    name='cpassword'
                    {...formik.getFieldProps('cpassword')}
                  />
                  <span className='text-slate-500 hover:text-blue-500'>
                    <HiFingerPrint size={20} />
                  </span>
                </div>
                {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}
              </div>
              <button type='submit' className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Sign Up</button> 
              {/* <Link href=''>
                <button type='submit' className='border py-2 w-48 rounded-3xl text-lg mb-4 md:mb-0 bg-[#468EF9] border-[#468EF9] text-white'>Sign Up</button> 
              </Link>              */}
            </form>
          </div>          
        </div>
      </div>
    )
}

export default SignUp;