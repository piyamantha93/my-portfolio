
import React from "react";
import { motion } from "framer-motion"; 
import { fadeIn } from "../../variants";

const Line = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      className="flex justify-center items-center bg-gray-200 m-0 p-0"
    >
      {/* Horizontal Line */}
      <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
    </motion.div>
  );
}
export default Line;



