import React, { useState } from "react";
import logo from "./../../../assets/login/TSA community 3.svg"
import hero from "../../../assets/login/Vector.svg";
import eyeOpen from "../../../assets/login/eye-open.svg";
import eyeClose from "../../../assets/login/eye-close.svg";
import fotter from  "../../../assets/login/Frame 1171275462.svg"
import twitter from "../../../assets/login/twitter.svg";
import facebook from "../../../assets/login/facebook.svg"
import goggle from "../../../assets/login/goggle.svg"
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex lg:h-[100vh] flex-col lg:flex-row">
      {/* The login logo */}
      <div className="bg-[#0266F4] lg:w-1/2">
        <div className="flex flex-col space-y-5 h-full justify-around items-center">
          <div className="pt-2 lg:pt-0">
            <img src={logo} alt="logo"/>
          </div>
          <div>
            <img src={hero} alt="Hero Image" className="hidden lg:block"/>
          </div>
        </div>
      </div>

      {/* the Login Form */}
      <div className="lg:w-1/2 flex items-center">
        <div className="min-h-[650px] lg:bg-[#D9D9D9] w-full lg:mx-10 rounded-xl overflow-hidden">
          <div className="h-[10px] bg-[#0266F4] w-full hidden lg:block"></div>
          <div className="w-11/12 lg:w-10/12 m-auto">
            <h3 className="font-bold text-3xl mt-5 lg:mt-12 mb-3">Welcome Back!</h3>
            <p className="">Let’s help you get into your account.</p>

            {/* The Form */}
            <form action="" className=" mt-12">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className=" text-sm font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-[45px] outline-none px-2 rounded-sm border-black/50 border-[0.794px]"
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-2 mt-8 relative">
                <label htmlFor="password" className=" text-sm font-bold">
                  Password
                </label>
                <input
                  type={showPassword?"text":"password"}
                  className="h-[45px] outline-none pl-2 pr-[40px] rounded-sm border-black/50 border-[0.794px]"
                  id="password"
                />
                <p className="text-[#0266F4] font-light text-sm">
                  <Link to={"/password-reset"}>Forgot Password?</Link>
                </p>
                {showPassword ? (
                  <div className=" absolute w-6 h-6 top-[40%] right-[10px] cursor-pointer">
                    <img src={eyeOpen} alt="" onClick={()=>setShowPassword(!showPassword)} className="img-fluid object-fill w-[100%]" />
                  </div>
                ) : (
                  <div className=" absolute w-6 h-6 top-[40%] right-[10px] cursor-pointer">
                    <img src={eyeClose} alt="" onClick={()=>setShowPassword(!showPassword)} className="w-[100%]"/>
                  </div>
                )}
              </div>
              
              <button className="bg-[#0266F4] w-full rounded-sm text-white py-2.5 font-bold mt-8 hover:opacity-90">Login</button>
            </form>

            <div className="mt-3">
              <p className="text-center">New User? <Link to="/signup"><span className="text-[#0266F4] font-light"> Register</span></Link></p>
            </div>

            <div className="mt-5">
               <div className="flex justify-center w-full">
               <img src={fotter} alt="" className="w-full"/>
               </div>

               <div className="flex justify-center space-x-4 my-3">
                  <img src={twitter} alt="" className=" hover:scale-125 transition ease-in-out"/>
                  <img src={facebook} alt="" className=" hover:scale-125 transition ease-in-out"/>
                  <img src={goggle} alt="" className=" hover:scale-125 transition ease-in-out"/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
