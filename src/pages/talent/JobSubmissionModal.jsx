import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Modal from '../../components/Modal';

const JobSubmissionModal = () => {
    return (
        <Modal>
            <div className='bg-white flex flex-col gap-4 items-center p-5 md:p-10 w-full'>
                <h3 className='font-bold text-4xl md:text-5xl text-customBlue-200'>Congratulations!</h3>
                <p className='text-center  md:w-9/12 text-2xl font-light'>Your job posting has been successfully submitted and is now under review by our team.</p>
                <div>
                <Link to="/talent" className=''><button className='authenication-btn px-8'>close</button></Link>
                </div>
            </div>
        </Modal>
      )
}

export default JobSubmissionModal