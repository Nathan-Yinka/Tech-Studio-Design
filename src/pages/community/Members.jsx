import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { communityMembers } from "./db";
import { Select, Option, Input } from "@material-tailwind/react";
import Pagination from "../../components/Pagination";
import ProfileModal from "../home/profileModal";

const Members = () => {
  const [modal,setModal] = useState(false)

  return (
    <div>
       <ProfileModal open={modal} setOpen={setModal}/>
      <div className="page-width py-14">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="w-72 mx-auto md:mx-0">
          <Select color="blue" label="Select Field">
            <Option className="text-blue-500">Product Design</Option>
            <Option className="text-blue-500">Web Development</Option>
            <Option className="text-blue-500">Data Analysis</Option>
          </Select>
        </div>

        {/* Search */}
        <div className="w-72 mx-auto md:mx-0">
          <Input
            label="Search for a member"
            icon={<CiSearch className="cursor-pointer" />}
          />
        </div>
      </div>

      {/* Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 my-14">
        {communityMembers.map((member) => {
          const { id, image, name, role, cohort } = member;

            return (
                <div key={id} className="bg-[#D2D4E0] max-w-[295px] w-full h-fit p-5 text-center mx-auto cursor-pointer" onClick={()=>setModal(!modal)}>
                    <img src={image} alt={name} className="mx-auto" />
                    <h4 className="text-[18px] font-[800]">{name}</h4>
                    <p className="text-[16px] font-[600]">{role}</p>
                    <p>{cohort}</p>
                </div>
            )
        })}
      </div>

      <Pagination />
    </div>
    </div>
  );
};

export default Members;
