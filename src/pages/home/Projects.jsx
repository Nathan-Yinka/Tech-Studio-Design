import React from "react";
import coverImg from "../../assets/homePage/responsive-website.png";
import profilePicture from "../../assets/homePage/profilePic.svg";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="w-full my-20">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-[30px] font-[700] text-fadedBlack">
          Community Projects
        </h2>

        <select
          name="project"
          id="project"
          className="border border-[rgba(30,30,30,0.50)] rounded-[0.3rem] p-1"
        >
          <option value="filter-by">Filter By</option>
          <option value="product-design">Product Design</option>
          <option value="web-development">Web Development</option>
          <option value="data-analysis">Data Analysis</option>
        </select>
      </div>

      {/* Project Mapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        <div className="max-w-[386px] w-full mx-auto">
          <div
            className="w-full h-[272px] border border-[#D9D9D9] rounded-[10px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${coverImg})` }}
          ></div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <img src={profilePicture} alt="profilePicture" />
              <p className="tracking-[0.4px]">User Name</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <IoHeartOutline /> <span>232</span>
              </p>
              <p className="flex items-center gap-2">
                <IoEyeOutline /> <span>1.4k</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[386px] w-full mx-auto">
          <div
            className="w-full h-[272px] border border-[#D9D9D9] rounded-[10px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${coverImg})` }}
          ></div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <img src={profilePicture} alt="profilePicture" />
              <p className="tracking-[0.4px]">User Name</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <IoHeartOutline /> <span>232</span>
              </p>
              <p className="flex items-center gap-2">
                <IoEyeOutline /> <span>1.4k</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[386px] w-full mx-auto">
          <div
            className="w-full h-[272px] border border-[#D9D9D9] rounded-[10px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${coverImg})` }}
          ></div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <img src={profilePicture} alt="profilePicture" />
              <p className="tracking-[0.4px]">User Name</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <IoHeartOutline /> <span>232</span>
              </p>
              <p className="flex items-center gap-2">
                <IoEyeOutline /> <span>1.4k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
