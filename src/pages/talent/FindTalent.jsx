import React, { useEffect, useState } from 'react'
import box from "../../assets/talent/box.svg"
import layer1 from "../../assets/talent/Layer_1.svg"
import layer2 from "../../assets/talent/layer2.svg"
import layer3 from "../../assets/talent/Слой_1.svg"
import vector1 from "../../assets/talent/Vector1.svg"
import vector2 from "../../assets/talent/Vector2.svg"
import vector3 from "../../assets/talent/Vector3.svg"
import vector4 from "../../assets/talent/Vector4.svg"
import vector5 from "../../assets/talent/Vector5.svg"
import { useNavigate } from 'react-router-dom'
import useAxiosPost from '../../hooks/useAxiosPost'
import Spinners from '../loaders/Spinner'

const FindTalent = () => {
    const apiUrl = "https://techstudiocommunity.onrender.com";
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [error,setError] = useState({})
    const { triggerPost, response, isPosting, postError } = useAxiosPost();

  useEffect(()=>{
    if (response && !postError){
        navigate(`/job-poster?email=${mail}`);
    }
},[response])

  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorFound = false

    if (name === "") {
        setError(prevError => ({ ...prevError, nameError: true }));
      errorFound = true
    }
    if (mail === "" || !mail.includes("@") || !mail.includes(".com")) {
        setError(prevError => ({ ...prevError, mailError: true }));
        setMail("")
        errorFound = true
    }

    if (errorFound) return;

    var formdata = new FormData();
    formdata.append("email", mail);
    formdata.append("full_name", name);
    triggerPost(formdata,`${apiUrl}/api/jobs/`);    
}

function handlecheck(e) {
    if (e.target.name === "email") setError(prevError => ({ ...prevError, mailError: "" }));
    if (e.target.name === "name")setError(prevError => ({ ...prevError, nameError: "" }));
  }

  return (
    <div className=''>
        {/* <Navbar/> */}
        <div className=' relative '>
        <div className='flex page-width justify-between flex-col md:flex-row  h-[500px] md:mt-10' >
            <div className='flex flex-col gap-4 md:w-1/2 md:mt-28 mt-5'>
                <h3 className='text-2xl lg:text-4xl font-bold text-customBlue-200 text-center md:text-left'>Find the best talents <br/>to grow your team</h3>
                <p className='md:pr-28 text-lg font-light'>TechStudio is relied upon by a good amount of great companies for finding competent talents. We mould our talents to fit into their needed positions and your company culture.</p>
            </div>
            <div className='md:p-10 md:pr-20 lg:p-20 md:bg-[#DCE9FE]  md:w-1/2 md:absolute right-0 lg:pr-40  h-[500px]' style={{zIndex:"1"}}>
                <div className='relative'>
                <div className='hidden md:block absolute  -right-10' style={{top:"13.7rem"}}>
                        <img src={box} alt="" className=''/>
                </div>
                <form onSubmit={handleSubmit} action="" className='bg-white flex flex-col gap-12 mt-6 md:mt-0  md:p-10 md:shadow-xl absolute w-full rounded-lg' style={{zIndex:"2"}}>
                    <input type="text"
                    className={`h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75 ${error.nameError && "form-error"}`}
                    placeholder={`${error.nameError?"Enter your name":'Your Full Name'}`}
                    value={name}
                    name="name"
                    onChange={(e)=>{setName(e.target.value); handlecheck(e)}}
                    />
                    <input type="text"
                    className={`h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75 ${error.mailError && "form-error"}`}
                    placeholder={`${error.mailError?"Enter a vaild mail":'Your Email'}`}
                    value={mail}
                    name="email"
                    onChange={(e)=>{setMail(e.target.value); handlecheck(e)}}
                    />
                <button className="authenication-btn py-3 ">{isPosting?<Spinners/>:"Get Started"}</button>    
                </form>
                </div>
            </div>
        </div>
        </div>

        <div className='bg-[#F5F6FA] relative md:mt-20 pb-10'>
            <div className='page-width mx-auto flex flex-col gap-5 md:gap-14 md:py-16'>
                <h3 className='font-bold text-2xl md:text-3xl text-customBlue-200 text-center'>How Techstudio works for employers</h3>
                <div className='flex flex-wrap w-full gap-5 md:gap-10'>
                    <div className=' md:w-60 grow  bg-white shadow-md p-3 flex flex-col gap-3 rounded-md'>
                        <div className='w-7/12'>
                            <img src={layer1} alt="" />
                        </div>
                        <h3 className='font-bold '>Post a Job</h3>
                        <p className='font-light'>Create an account and a befitting profile to attract job offers with ease. Your profile shows employers what make you</p>
                    </div>
                    <div className='md:w-60 grow bg-white shadow-md p-3 flex flex-col gap-3 rounded-md'>
                        <div className='w-7/12'>
                            <img src={layer2} alt="" />
                        </div>
                        <h3 className='font-bold '>Review & Shortlist</h3>
                        <p className='font-light'>Create a position on Hired and specify the skills and experience you ‘re looking for</p>
                    </div>
                    <div className='md:w-60 grow bg-white shadow-md p-3 flex flex-col gap-3 rounded-md'>
                        <div className='w-7/12'>
                            <img src={layer3} alt="" />
                        </div>
                        <h3 className='font-bold '>Interview & Hire</h3>
                        <p className='font-light'>Create an account and a befitting profile to attract job offers with ease.</p>
                    </div>
                </div>    
            </div>
        </div>

        <div className='page-width mt-5 md:mt-16 mx-auto flex flex-col gap-10'>
        <h3 className='font-bold text-2xl md:text-3xl text-customBlue-200 text-center'>Hire to fill the most in-demand roles</h3>
        <div className='flex flex-wrap w-full md:gap-32 gap-10 mb-20' >
            <div className='flex flex-col gap-3 md:w-60 grow'>
                <div className='w-7/12'>
                        <img src={vector1} alt="" />
                </div>
                    <h3 className='font-bold text-2xl '>Software Engineers</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
            <div className='flex flex-col gap-3 md:w-60 grow'>
                <div className='w-7/12'>
                        <img src={vector2} alt="" />
                </div>
                    <h3 className='font-bold text-2xl '>Front-end Developers</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
            <div className='flex flex-col gap-3 md:w-60 grow'>
                <div className='w-7/12'>
                        <img src={vector3} alt="" />
                </div>
                    <h3 className='font-bold text-2xl '>UI/UX Designers</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
            <div className='flex flex-col gap-3 md:w-60 grow'>
                <div className='w-7/12'>
                        <img src={vector4} alt="" />
                </div>
                    <h3 className='font-bold text-2xl '>Back-end Developers</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
            <div className='flex flex-col gap-3 md:w-60 grow '>
                <div className='w-7/12'>
                        <img src={vector5} alt="" />
                </div>
                    <h3 className='font-bold text-2xl '>Data Analyst</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
            <div className=' flex-col gap-3 md:w-60 grow invisible hidden md:flex'>
                <div className='w-7/12'>
                        <img src={vector5} alt="" />
                </div>
                    <h3 className='font-bold  text-2xl'>Software Engineers</h3>
                    <p className='font-light'>Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
            </div>
        </div>
        </div>

        <div className='bg-[#DCE9FA] md:py-16 py-10'>
            <div className='page-width flex flex-col md:flex-row justify-between'>
                <div className='flex items-center md:w-1/2 mb-5'>
                    <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-customBlue-200 text-2xl '>Let’s help you hire</h3>
                    <p className='font-light md:pr-28'>
                    Let our team of recruitment experts find the right talents fit for you. Based on your requirements, we will shortlist talents with matching skills and help you schedule interviews with them. We will assist you every step of the way.
                    </p>
                    </div>
                </div>
                <form className='bg-white flex flex-col gap-8  md:p-10 lg:p-20 md:shadow-xl md:w-1/2 rounded-lg p-5' >
                <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='Your Name'
                    />
                    <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='Company Name'
                    />

                    <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='Company Email'
                    />
                    <input type="text"
                    className="h-[45px] outline-none px-2 rounded-md border-black/50 border-[0.794px] placeholder:text-black/75"
                    placeholder='What role do you want to fill?'
                    />

                    <button className="authenication-btn py-3">Send Message</button>  
                </form>
            </div>
        </div>
    </div>
  )
}

export default FindTalent