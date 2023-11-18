import React from "react";
import { motion } from "framer-motion";
import mark from "../assets/signup/Mark.svg"

const Modal = ({ children }) => {
  return (
    <div className="bg-black/80 h-screen w-screen fixed top-0 flex items-center transition-all">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="md:w-8/12 lg:w-5/12 m-auto "
      >
        <div className=" bg-customBlue-200 flex justify-center p-5">
          <img src={mark} alt="" />
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
