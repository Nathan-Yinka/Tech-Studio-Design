import React, { useState } from "react";
import logo from "../assets/navbar/TSA community 1.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="sticky z-40 inset-x-0 top-0 bg-customBlue-200 text-white py-3">
      <div className="page-width flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div onClick={handleClick} className="lg:hidden text-2xl">
          {hamburger ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div
          className={`flex flex-1 items-center ${
            hamburger
              ? "absolute z-50 right-0 top-[4.6rem] max-w-[450px] text-lg w-full bg-[rgba(31,38,102,.8)] backdrop-blur-lg p-10 flex flex-col items-baseline mt-1 space-y-10 lg:space-y-0"
              : "hidden lg:flex"
          }`}
        >
          <ul
            className={`flex flex-1 justify-center items-center gap-5 ${
              hamburger ? "items-baseline gap-10 flex-col-reverse" : ""
            }`}
          >
            <li>Explore Community</li>
            <li>Find Talent</li>
            <li>For You</li>
          </ul>
          <div className="lg:flex items-center gap-5">
            <Link to="signup">
              <button
                type="button"
                className={`default-btn ${hamburger ? "block w-[200px]" : ""}`}
              >
                Register
              </button>
            </Link>
            <Link to="login">
              <button
                type="button"
                className={`${
                  hamburger
                    ? "default-btn w-[200px] bg-white hover:bg-slate-200 text-customBlue-100 mt-5"
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
