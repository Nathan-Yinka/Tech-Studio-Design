import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../assets/navbar/TSA community 1.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-customBlue-200 py-10">
      <div className="page-width text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-slate-200 border-b pb-10">
          <div className="mx-auto">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p className="leading-[150%] mt-3">
              Welcome to Tech studio community hub, where you connect with
              fellow tech enthusiasts, share knowledge, and explore endless
              possibilities.
            </p>
          </div>

          <ul className="mx-auto">
            <h3 className="font-[700] mb-3 mt-5 text-white">Quick Links</h3>
            <li>Community</li>
            <li>Find Talent</li>
            <li>Go to Main Website</li>
          </ul>

          <div className="mx-auto">
            <h3 className="font-[700] mb-3 mt-5 text-white">
              Subscribe to our newsletter
            </h3>
            <div className="flex items-center bg-white rounded-[5px] p-2">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-transparent py-1 outline-none text-black"
              />
              <button
                type="button"
                className="bg-customBlue-100 text-white py-[5px] px-[10px] rounded-[5px] hover:bg-blue-700 flex items-center gap-3"
              >
                {" "}
                Subscribe <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 pt-5">
          <p className="text-slate-200">Terms and Policy</p>
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
