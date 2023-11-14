import React, { useState } from 'react'
import dropIcon from "../assets/login/dropdownicon.svg"

const CustomSelect = ({dropDownData,className,dropDownValue,setDropDownValue}) => {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = (value)=>{
        setDropDownValue(value);
        setShowDropDown(false);
    }
  return (
    <div className='relative'>
        <div className={`flex  items-center px-2 bg-white justify-between relative ${className}`} onClick={()=>setShowDropDown(!showDropDown)}>
            <div>{dropDownValue?dropDownValue.name:"Select Community"}</div>
            <div className={`pr-3  ${showDropDown && "rotate-180 pl-3 transition"}`}><img src={dropIcon} alt="" /></div>
        </div>
        {showDropDown && (
            <div className=' absolute top-[45px] w-full bg-white left-0 z-10 flex flex-col space-y-2 px-2 last:pb-2 pt-1'>
                {dropDownData && dropDownData.map(({id,name})=>
                    <div onClick={()=>handleClick({id,name})} className=' cursor-pointer' key={id}>{name}</div>
                )}
            </div>
            )}
    </div>
  )
}

export default CustomSelect