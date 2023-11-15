import React from 'react'
import box from "../../assets/talent/box.svg"
import layer1 from "../../assets/talent/Layer_1.svg"
import layer2 from "../../assets/talent/layer2.svg"
import layer3 from "../../assets/talent/Слой_1.svg"
import Navbar from '../../components/Navbar'

const FindTalent = () => {
  return (
    <div className='p-1 md:p-0'>
        <Navbar/>
        <div className=' relative '>
        <div className='flex container mx-auto justify-between flex-col md:flex-row  h-[500px]' >
            <div className='flex flex-col gap-4 md:w-1/2 md:mt-28'>
                <h3 className='text-2xl lg:text-4xl font-bold text-customBlue-200 text-center md:text-left'>Find the best talents <br/>to grow your team</h3>
                <p className='md:pr-28 text-lg font-light'>TechStudio is relied upon by a good amount of great companies for finding competent talents. We mould our talents to fit into their needed positions and your company culture.</p>
            </div>
            <div className='md:p-10 md:pr-20 lg:p-20 md:bg-[#DCE9FE]  md:w-1/2 md:absolute right-0 lg:pr-40  h-[500px]' style={{zIndex:"10000000"}}>
                <div className='relative'>
                <div className='hidden md:block absolute  -right-10' style={{top:"13.7rem"}}>
                        <img src={box} alt="" className='  '/>
                </div>
                <form action="" className='bg-white flex flex-col gap-12 mt-6 md:mt-0  md:p-10 md:shadow-xl absolute w-full' style={{zIndex:"10000000"}}>
                    <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='Your Full Name'
                    />
                    <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='Your Email'
                    />
                <button className="authenication-btn py-3">Get Started</button>    
                </form>
                </div>
            </div>
        </div>
        </div>

        <div className='bg-[#F5F6FA] relative md:mt-20 pb-10'>
            <div className='container flex flex-col gap-14 py-16 mx-auto'>
                <h3 className='font-bold text-2xl md:text-3xl text-customBlue-200 text-center'>How Techstudio works for employers</h3>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='md:w-1/3 bg-white shadow-md p-3 flex flex-col gap-3'>
                        <div className='w-7/12'>
                            <img src={layer1} alt="" />
                        </div>
                        <h3 className='font-bold '>Post a Job</h3>
                        <p className='font-light'>Create an account and a befitting profile to attract job offers with ease. Your profile shows employers what make you</p>
                    </div>
                    <div className='md:w-1/3 bg-white shadow-md p-3 flex flex-col gap-3'>
                        <div className='w-7/12'>
                            <img src={layer2} alt="" />
                        </div>
                        <h3 className='font-bold '>Review & Shortlist</h3>
                        <p className='font-light'>Create a position on Hired and specify the skills and experience you ‘re looking for</p>
                    </div>
                    <div className='md:w-1/3 bg-white shadow-md p-3 flex flex-col gap-3'>
                        <div className='w-7/12'>
                            <img src={layer3} alt="" />
                        </div>
                        <h3 className='font-bold '>Interview & Hire</h3>
                        <p className='font-light'>Create an account and a befitting profile to attract job offers with ease.</p>
                    </div>
                </div>    
            </div>
        </div>

        <div className='container mt-16'>
        <h3 className='font-bold text-2xl md:text-3xl text-customBlue-200 text-center'>How Techstudio works for employers</h3>
        </div>
    </div>
  )
}

export default FindTalent