import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ id, title, des, src, githubLink, websiteLink, isExpanded, toggleText }) => {
  return (
    <div className="bg-gray-500 w-[80%] sm:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-5 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 mx-auto">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer" src={src} alt={title} />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
          <div className="flex gap-2">
            <a 
              href={githubLink}  
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            {websiteLink && (
              <a 
                href={websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {isExpanded ? des : `${des.split(" ").slice(0, 50).join(" ")}...`}
        </p>
        {des.split(" ").length > 50 && (
          <button className="text-blue-400 mt-2 hover:underline" onClick={() => toggleText(id)}>
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
