import React from "react";
import banner from "../../assets/community/banner.png";
import Members from "./Members";

const Community = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center md:h-[calc(100svh-94px)] text-white text-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="page-width space-y-5 md:space-y-3 py-40">
          <h1 className="text-[40px] md:text-[48px] font-[700]">
            Explore Community
          </h1>
          <h3 className="text-[#FF031F] text-[30px] md:text-[40px] font-[600]">
            Meet the Tech Innovators who fuel our community’s growth.
          </h3>
          <p className="text-[20px] md:text-[35px] font-[400]">
            {" "}
            Whether you're seeking collaboration, finding talents, or simply
            looking to expand your network, you've come to the right place.{" "}
          </p>
        </div>
      </div>
      <Members />
    </div>
  );
};

export default Community;
