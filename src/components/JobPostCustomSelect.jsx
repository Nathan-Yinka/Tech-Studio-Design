import React, { useEffect, useState } from 'react'
import dropIcon from "../assets/login/dropdownicon.svg"
import { motion } from "framer-motion";
import "../styles/JobPoster.css"

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

const customSlideVariants = {
    open: {
        height: "auto",
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.7,
          delayChildren: 0.3,
          staggerChildren: 0.05
        }
      },
      closed: {
          height: 0,
          overflow: "hidden",
        clipPath: "inset(0% 0% 100% 0%)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        }
      }
}

const JobPostCustomSelect = ({dropDownValue,setDropDownValue,className,dropDownData,placeholder}) => {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = (value)=>{
        setDropDownValue(value);
        setShowDropDown(false);
    }

  return (
   <motion.div animate={showDropDown ? "open" : "closed"} className='w-full'>
     <motion.div 
     initial={false}
     whileTap={{ scale: 0.97 }}
     className={`w-full outline-none px-2 py-2.5 rounded-md border-black/50 border-[0.794px] ${!dropDownValue && "text-black/75 font-light"} ${className}`}>
        <div className='flex   items-center' onClick={()=>setShowDropDown(!showDropDown)} >
            <div className=' cursor-default truncate grow'>{dropDownValue?dropDownValue:placeholder}</div>
            <div className={`pr-3  ${showDropDown && "rotate-180 pl-3 transition"}`}><img src={dropIcon} alt="" /></div>
        </div>
    </motion.div>
        <motion.div 
        variants={customSlideVariants}
        className={`flex flex-col divide-y bg-[#C6C6C6] ${showDropDown && "mt-4"} border-1`}>
        {dropDownData && dropDownData.map((item,index)=>{
            return(
        <motion.div variants={itemVariants} className='p-3 font-light' key={index} onClick={()=>handleClick(item)} >{item}</motion.div>)
        })}
    </motion.div>
   </motion.div>
  )
}

export default JobPostCustomSelect