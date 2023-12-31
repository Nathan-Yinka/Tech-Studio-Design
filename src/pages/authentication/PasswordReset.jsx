import React from 'react'
import PasswordHeader from '../../components/PasswordHeader'

const PasswordReset = () => {
  return (
    <div className=''>
        <PasswordHeader/>
        <div className='flex flex-col space-y-10 justify-center mt-10 md:w-8/12 lg:w-5/12  m-auto container mb-5 p-1 md:p-0'>
            <h2 className='text-center text-4xl font-bold'>Reset Your Password.</h2>
            <p className='font-light text-center text-lg'>To reset your password, enter the email address associated with your account. We’ll send you a link to create a new password.</p>

            <input type="email" name="" id="" placeholder='Enter your email address' className='border-[1px] px-2 py-3 text-lg border-[#BABABA] text-black font-light placeholder:text-black/75 outline-none rounded-md'/>

            <button className=' py-3 text-md authenication-btn'>Request Password Reset</button>
        </div>
    </div>
  )
}

export default PasswordReset