import React from 'react'
import LoaderGif from "../../assets/homePage/d o t _ _ II.gif"

const LoaderPage1 = () => {
  return (
    <div className='h-screen w-screen fixed bg-white top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center'>
        <img src={LoaderGif} alt="" />
    </div>
  )
}

export default LoaderPage1