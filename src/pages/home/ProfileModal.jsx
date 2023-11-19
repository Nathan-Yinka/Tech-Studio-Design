import React, { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import project1 from "../../assets/homePage/Screenshot (11) 2.png"
import project2 from "../../assets/homePage/screenshot(12).png"
import project3 from "../../assets/homePage/screenshot13.png"
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/homePage/modalavater.png"
import {
  Dialog,
} from "@material-tailwind/react";
import { dialogTheme } from "./dialogStyle";

const ProfileModal = ({open,setOpen}) => {

  const handleOpen = () => setOpen(!open);
  return (
    <ThemeProvider value={dialogTheme}>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className=" outline-none !backdrop-filter-none p-5 rounded-2xl"
      >
        <div className="flex h-[120px] relative mb-[50px]">
            <div className="w-1/3"><img src={project1} alt="" className="h-full w-full" /></div>
            <div className="w-1/3"><img src={project2} alt="" className="h-full w-full"/></div>
            <div className="w-1/3"><img src={project3} alt="" className="h-full w-full"/></div>

            <div className=" absolute left-1/2 bottom-[-100px] transform -translate-x-1/2 -translate-y-1/2">
                <Avatar src={avatar} className="h-[100px] w-[100px]"/>
            </div>
        </div>
        <div>
            <h3 className="text-[18px] font-[800] text-black text-center">Faith Johnny</h3>
            <p className="text-[16px] font-[600] text-black text-center">Data Analysis</p>
            <p className="text-[14px] font-[400] text-black text-center">Cohort - September, 2023. </p>
        </div>

        <div  className="flex flex-col gap-5 mt-12">
            <div className="flex md:w-1/2 md:mx-auto">
                <div className="w-1/2 border-r border-black/25">
                    <h3 className="text-[18px] font-[700] text-black text-center">400</h3>
                    <h3 className="text-[17px] font-[700] text-black/50 text-center">Followers</h3>
                </div>
                <div className="w-1/2">
                    <h3 className="text-[18px] font-[700] text-black text-center ">65</h3>
                    <h3 className="text-[17px] font-[700] text-black/50 text-center">Projects</h3>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <button className="default-btn w-full font-[700]">Hire Me</button>
            </div>
        </div>
      </Dialog>
    </ThemeProvider>
  );
};

export default ProfileModal;
