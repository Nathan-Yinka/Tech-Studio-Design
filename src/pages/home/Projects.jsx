import React from "react";
import coverImg from "../../assets/homePage/responsive-website.png";
import profilePicture from "../../assets/homePage/profilePic.svg";
import coverImg2 from "../../assets/homePage/critick.svg";
import { Select, Option } from "@material-tailwind/react";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import Pagination from "../../components/Pagination";

const Projects = () => {
  return (
    <div className="w-full my-20">
      <div className="flex flex-wrap gap-5 justify-center md:justify-between items-center border-b pb-2">
        <h2 className="text-[30px] text-center font-[700] text-fadedBlack">
          Community Projects
        </h2>

        <div className="w-72">
          <Select label="Filter By">
            <Option value="product-design">Product Design</Option>
            <Option value="web-development">Web Development</Option>
            <Option value="data-analysis">Data Analysis</Option>
          </Select>
        </div>
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

        <div className="max-w-[386px] w-full mx-auto">
          <div
            className="w-full h-[272px] border border-[#D9D9D9] rounded-[10px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${coverImg2})` }}
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
            style={{ backgroundImage: `url(${coverImg2})` }}
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
            style={{ backgroundImage: `url(${coverImg2})` }}
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

      <Pagination />
    </div>
  );
};

export default Projects;
