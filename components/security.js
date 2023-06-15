import React from 'react'
import Image from 'next/image';

function Security() {
  return (
    <div className='w-full h-full mb-12'>
      <div className='block md:flex items-center max-w-[450px] mx-auto md:max-w-[1250px] md:mx-auto'>
        <div>
            <Image src='/images/vault.png' alt='/' width={750} height={300} />
        </div>
        <div className='md:max-w-[500px] mx-auto mt-7 pl-8'>
            <h1 className='text-4xl font-semibold mb-8'>Industry-leading security from day one</h1>
            <h2 className='flex text-xl font-semibold mb-3'> <Image className='mr-3' src='/images/check-circle.png' alt='/' width={28} height={28} /> Safety, security and compliance</h2>
            <p className='text-lg text-gray-700 mb-6'>NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.</p>
            <h2 className='flex text-xl font-semibold mb-3'> <Image className='mr-3' src='/images/check-circle.png' alt='/' width={28} height={28} /> Hardware security keys</h2>
            <p className='text-lg text-gray-700 mb-6'>With NEFA you can secure your account with a hardware security key via WebAuthn.</p>
            <h2 className='flex text-xl font-semibold mb-3'> <Image className='mr-3' src='/images/check-circle.png' alt='/' width={28} height={28} /> SOC Certifications</h2>
            <p className='text-lg text-gray-700 mb-6'>NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world's first cryptocurrency exchange and custodian to complete these exams.</p>
        </div>
      </div>
    </div>
  )
}

export default Security;
