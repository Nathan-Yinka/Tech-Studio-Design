import React from 'react'
import mark from "../../assets/signup/Mark.svg"
import { Link } from 'react-router-dom'

const PasswordResetModal = () => {
  return (
    <div className='bg-black/80 h-screen w-screen fixed top-0 flex items-center transition-all'>
        <div className='md:w-8/12 lg:w-5/12 m-auto '>
            <div className=' bg-customBlue-200 flex justify-center p-3'>
                <img src={mark} alt="" />
            </div>
            <div className='bg-white flex flex-col gap-4 items-center p-6 md:p-10'>
                <h3 className='font-bold text-5xl text-customBlue-200'>Congratulations!</h3>
                <p className='text-center  md:w-9/12 text-2xl font-light'>Your password has successfully been reset. You can now login with your new password.</p>
                <div>
                <Link to="/login" className=''><button className='authenication-btn px-8'>Login</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PasswordResetModal