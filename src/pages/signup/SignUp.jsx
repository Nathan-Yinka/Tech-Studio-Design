import React, { useState } from "react";
import logo from "../../assets/login/TSA community 3.svg";
import eyeOpen from "../../assets/login/eye-open.svg";
import eyeClose from "../../assets/login/eye-close.svg";
import fotter from  "../../assets/login/Frame 1171275462.svg";
import twitter from "../../assets/login/twitter.svg";
import facebook from "../../assets/login/facebook.svg";
import goggle from "../../assets/login/goggle.svg";
import CustomSelect from "../../components/CustomSelect";
import hint from "../../assets/signup/Group 1171274927.svg"
import "./signup.css"
import { Link } from "react-router-dom";
import hero from "../../assets/signup/logo.svg"
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [dropDownValue,setDropDownValue] = useState("")

    const dropDownData = [
        {
            id:1,
            name:"Data Analysis"
        },
        {
            id:2,
            name:"Web Development"
        },
        {
            id:3,
            name:"Product Design"
        }
    ]

  return (
    <div className=" flex  flex-col lg:flex-row h-screen overflow-auto">
    {/* The login logo */}
    <div className="bg-[#0266F4] lg:w-1/2 lg:h-[100vh]" >
      <div className="flex flex-col space-y-5 h-full justify-around items-center">
        <div className="pt-2 lg:pt-0">
          <img src={logo} alt="logo"/>
        </div>
        <div>
          <img src={hero} alt="Hero Image" className="hidden lg:block"/>
        </div>
      </div>
    </div>

    {/* the SignUp Form */}
    <div className="lg:w-1/2 flex overflow-auto">
    <div className="lg:bg-[#D9D9D9] w-full lg:mx-10 rounded-xl h-full overflow-auto signup-container">
        <div className="h-[10px] bg-[#0266F4] w-full hidden lg:block"></div>
        <div className="w-11/12 lg:w-10/12 m-auto ">
          <h3 className="font-bold text-3xl mt-5 lg:mt-12 mb-3">Register</h3>
          <p className="">Enter details to create account.</p>

          {/* The Form */}
          <form action="" className=" mt-4 ">
            <div className="flex gap-4 w-full flex-col md:flex-row">
                <div className="flex flex-col gap-2 md:w-1/2">
                <label htmlFor="firstName" className=" text-sm font-bold">
                    First Name
                </label>
                <input
                    type="text"
                    className="h-[45px] outline-none px-2 rounded-sm border-black/50 border-[0.794px]"
                    id="firstName"
                />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                <label htmlFor="lastName" className=" text-sm font-bold">
                    Last Name
                </label>
                <input
                    type="text"
                    className="h-[45px] outline-none px-2 rounded-sm border-black/50 border-[0.794px]"
                    id="lastName"
                />
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="Community" className=" text-sm font-bold">
                  Community Group
                </label>
                <CustomSelect dropDownData={dropDownData} className="h-[45px] rounded-sm border-black/50 border-[0.794px]" dropDownValue={dropDownValue} setDropDownValue={setDropDownValue}/>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="email" className=" text-sm font-bold">
                  Email Address
                </label>
                <div className="flex gap-1 items-center">
                    <div><img src={hint} alt="" /></div>
                    <div className=" font-light text-[10px]">Input the email you used in registering at TechStudio.</div>
                </div>
                <input
                  type="email"
                  className="h-[45px] outline-none px-2 rounded-sm border-black/50 border-[0.794px]"
                  id="email"
                />
              </div>

            <div className="flex flex-col gap-2  relative mt-4">
              <label htmlFor="password" className=" text-sm font-bold">
                Password
              </label>
              <input
                type={showPassword?"text":"password"}
                className="h-[45px] outline-none pl-2 pr-[40px] rounded-sm border-black/50 border-[0.794px]"
                id="password"
              />
              {showPassword ? (
                <div className=" absolute w-6 h-6 top-[52%] right-[10px] cursor-pointer">
                  <img src={eyeOpen} alt="" onClick={()=>setShowPassword(!showPassword)} className="img-fluid object-fill w-[100%]" />
                </div>
              ) : (
                <div className=" absolute w-6 h-6 top-[52%] right-[10px] cursor-pointer">
                  <img src={eyeClose} alt="" onClick={()=>setShowPassword(!showPassword)} className="w-[100%]"/>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2  relative mt-4">
              <label htmlFor="password" className=" text-sm font-bold">
               Confirm Password 
              </label>
              <input
                type={showConfirmPassword?"text":"password"}
                className="h-[45px] outline-none pl-2 pr-[40px] rounded-sm border-black/50 border-[0.794px]"
                id="password"
              />
              {showConfirmPassword ? (
                <div className=" absolute w-6 h-6 top-[52%] right-[10px] cursor-pointer">
                  <img src={eyeOpen} alt="" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="img-fluid object-fill w-[100%]" />
                </div>
              ) : (
                <div className=" absolute w-6 h-6 top-[52%] right-[10px] cursor-pointer">
                  <img src={eyeClose} alt="" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="w-[100%]"/>
                </div>
              )}
            </div>
            
            <button className="bg-[#0266F4] w-full rounded-sm text-white py-2.5 font-bold mt-8  hover:opacity-90">Register</button>
          </form>

          <div className="mt-10">
            <p className="text-center">Already have an account?? <Link to="/login"><span className="text-[#0266F4] font-light"> Login</span></Link></p>
          </div>

          <div className="mt-5 lg:bg-[#D9D9D9]">
             <div className="flex justify-center w-full">
             <img src={fotter} alt="" className="w-full"/>
             </div>

             <div className="flex justify-center space-x-4 my-10">
                <img src={twitter} alt="" className=" hover:scale-125 transition ease-in-out"/>
                <img src={facebook} alt="" className=" hover:scale-125 transition ease-in-out"/>
                <img src={goggle} alt="" className=" hover:scale-125 transition ease-in-out"/>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp