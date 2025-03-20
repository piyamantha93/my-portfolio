import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/images/logo.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-200 shadow-lg fixed top-0 left-0 w-full p-5 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        
             <div className="ml-4">
              <img src={logo} alt="logo" style={{ height: '110px', width: 'auto' }} />
            </div>

            {/* Centered Navigation Links */}
            <div className="hidden md:flex space-x-8 mx-auto">
              <a href="#home" className="text-gray-950 hover:text-gray-500 px-3 py-2 text-lg font-titleFont">Home</a>
              <a href="#features" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Features</a>
              <a href="#projects" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Projects</a>
              <a href="#resume" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Resume</a>
              <a href="#contact" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Contact</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="https://github.com/piyamantha93"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 hover:text-gray-600 text-3xl transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="http://linkedin.com/in/piyamanatha-weerasinghe-36b1aa227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
              {isOpen ? (
                <AiOutlineClose className="text-black" size={25} />
              ) : (
                <AiOutlineMenu className="text-black" size={25} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-200 p-4 space-y-2">
            <a href="#home" className="block text-gray-950 hover:text-gray-500 px-3 py-2 text-lg font-titleFont">Home</a>
            <a href="#features" className="block text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Features</a>
            <a href="#projects" className="block text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Projects</a>
            <a href="#resume" className="block text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Resume</a>
            <a href="#contact" className="block text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Contact</a>
          </div>
        )}
      </nav>

      {/* Horizontal Line */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-7xl h-[2px] bg-gray-500"></div>
      </div>
    </>
  );
};

export default Navbar;


