import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'

const PasswordResetModal = () => {
  return (
    <Modal>
        <div className='bg-white flex flex-col gap-4 items-center p-5 md:p-10 w-full'>
                <h3 className='font-bold text-4xl md:text-5xl text-customBlue-200'>Congratulations!</h3>
                <p className='text-center  md:w-9/12 text-2xl font-light'>Your password has successfully been reset. You can now login with your new password.</p>
                <div>
                <Link to="/login" className=''><button className='authenication-btn px-8'>Login</button></Link>
                </div>
            </div>
    </Modal>
  )
}

export default PasswordResetModal