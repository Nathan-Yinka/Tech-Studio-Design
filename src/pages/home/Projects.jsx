import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { communityProjects } from "./db";
import { Select, Option } from "@material-tailwind/react";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import ProfileModal from "./profileModal";
import { ProjectModal } from "./ProjectModal";
import SkeletonLoader from "../loaders/SkeletonLoader";

const Projects = () => {
  const [modal,setModal] = useState(false)
  const [projectModal,setProjectModal] = useState(false)

  const handleProjectModal = () => setProjectModal((cur) => !cur);
  return (
   <div>
    <ProjectModal open={projectModal} setOpen={setProjectModal}/>
    <ProfileModal open={modal} setOpen={setModal}/>
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
        {/* <SkeletonLoader /> */}
        {communityProjects.map((project) => {
          const { id, image, profilePicture, name, likes, views } = project;

          return (
            <div key={id} className="max-w-[386px] w-full mx-auto">
              <div onClick={handleProjectModal}
                className="w-full h-[272px] border border-[#D9D9D9] rounded-[10px] bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <img src={profilePicture} alt="profilePicture " className="cursor-pointer" onClick={()=>setModal(!modal)} />
                  <p className="tracking-[0.4px] cursor-pointer" onClick={()=>setModal(!modal)}>{name}</p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="flex items-center gap-2">
                    <IoHeartOutline /> <span>{likes}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <IoEyeOutline /> <span>{views}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination />
    </div>
   </div>
  );
};

export default Projects;
