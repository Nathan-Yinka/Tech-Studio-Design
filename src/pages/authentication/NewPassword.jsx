import React, { useState } from 'react'
import PasswordHeader from '../../components/PasswordHeader'
import eyeOpen from "../../assets/login/eye-open.svg";
import eyeClose from "../../assets/login/eye-close.svg";
import PasswordResetModal from './PasswordResetModal';

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showModal,setShowModal] = useState(false)
  return (
    <div>
        <PasswordHeader/>
        <div className='flex flex-col space-y-10 justify-center mt-10 md:w-8/12 lg:w-5/12  m-auto container mb-5 p-1 md:p-0'>
            <h3 className='font-semibold text-2xl text-center'>To reset your password, please enter a new password below.</h3>
           <div className=''>
           <div className="flex flex-col gap-3  relative mt-4">
              <label htmlFor="password" className=" text-sm font-bold">
                Password
              </label>
              <input
                type={showPassword?"text":"password"}
                className=" outline-none pl-2 pr-[40px] rounded-sm border-black/50 border-[0.794px] py-3 placeholder:text-black/75"
                id="password"
                placeholder='Enter new password'
              />
              {showPassword ? (
                <div className=" absolute w-6 h-6 top-[56%] right-[10px] cursor-pointer">
                  <img src={eyeOpen} alt="" onClick={()=>setShowPassword(!showPassword)} className="img-fluid object-fill w-[100%]" />
                </div>
              ) : (
                <div className=" absolute w-6 h-6 top-[56%] right-[10px] cursor-pointer">
                  <img src={eyeClose} alt="" onClick={()=>setShowPassword(!showPassword)} className="w-[100%]"/>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3  relative mt-4">
              <label htmlFor="password-confirm" className=" text-sm font-bold">
               Confirm Password 
              </label>
              <input
                type={showConfirmPassword?"text":"password"}
                className=" outline-none pl-2 pr-[40px] rounded-sm border-black/50 border-[0.794px] py-3 placeholder:text-black/75"
                id="password-confirm"
                placeholder='Confirm new password'
              />
              {showConfirmPassword ? (
                <div className=" absolute w-6 h-6 top-[56%] right-[10px] cursor-pointer">
                  <img src={eyeOpen} alt="" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="img-fluid object-fill w-[100%]" />
                </div>
              ) : (
                <div className=" absolute w-6 h-6 top-[56%] right-[10px] cursor-pointer">
                  <img src={eyeClose} alt="" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="w-[100%]"/>
                </div>
              )}
            </div>

            <div>
                <button className="authenication-btn mt-8 py-3" onClick={()=>setShowModal(!showModal)}>Reset Password</button>
            </div>
           </div>

        </div>
        {showModal &&  <PasswordResetModal/>}
    </div>
  )
}

export default NewPassword