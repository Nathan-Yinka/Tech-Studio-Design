import React from "react";
import heroImg from "../../assets/homePage/Hero section Image.svg";

const Banner = () => {
  return (
    <div className="w-full lg:flex flex-row-reverse justify-between items-center space-y-10 lg:space-y-0 my-5">
      <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
        <img src={heroImg} alt="" />
      </div>

      <div className="w-full lg:w-[45%] text-fadedBlack space-y-5 text-center lg:text-left">
        <h1 className="text-[48px] font-[700] capitalize">
          Explore, connect and innovate
        </h1>
        <p className="text-[20px] font-[400]">
          Dive into a world of limitless possibilities, where coding languages
          speak louder than words and digital innovations shape the future.
          Engage in discussions, collaborate on projects, and build lasting
          relationships that could shape your tech journey.
        </p>
        <button type="button" className="default-btn">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Banner;
