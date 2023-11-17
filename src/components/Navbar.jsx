import React, { useState } from "react";
import logo from "../assets/navbar/TSA community 1.svg";
import { Link,NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
  };
  return (
    <div
      className={`sticky z-40 inset-x-0 top-0 bg-customBlue-200 text-white py-5`}
    >
      <div
        className={`page-width ${
          hamburger ? "block" : "flex"
        } justify-between items-center`}
      >
        <div className="w-full lg:w-auto flex justify-between items-center">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <div onClick={handleClick} className="lg:hidden text-2xl">
            {hamburger ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Previous Mobile nav style */}
        <div>
          {/* 
        className={`flex flex-1 items-center ${
            hamburger
              ? "absolute z-50 right-0 top-[5.6rem] max-w-[450px] text-lg w-full bg-[rgba(31,38,102,.8)] backdrop-blur-lg p-10 flex flex-col items-baseline mt-1 space-y-10 lg:space-y-0"
              : "hidden lg:flex"
          }`}
         */}
        </div>

        <div
          className={`flex flex-1 items-center ${
            hamburger
              ? "text-lg w-full p-5 flex flex-col items-baseline mt-1 space-y-10 lg:space-y-0"
              : "hidden lg:flex"
          }`}
        >
          <ul
            className={`flex flex-1 justify-center items-center gap-5 ${
              hamburger ? "items-baseline gap-10 flex-col-reverse" : ""
            }`}
          >
            <li onClick={hamburger && handleClick}>Explore Community</li>
            <NavLink to={"/talent"} onClick={hamburger && handleClick}><li>Find Talent</li></NavLink>
            <li onClick={hamburger && handleClick}>For You</li>
          </ul>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="signup">
              <button
                type="button"
                className={`default-btn`}
                onClick={hamburger && handleClick}
              >
                Register
              </button>
            </Link>
            <Link to="login">
              <button
                type="button"
                onClick={hamburger && handleClick}
                className={`${
                  hamburger
                    ? "default-btn bg-white hover:bg-slate-200 text-customBlue-100"
                    : ""
                }`}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
