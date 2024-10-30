import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 shadow-lg fixed top-0 left-0 w-full p-5 border-b border-gray-500 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-titleFont ml-4" style={{ color: '#7851a9' }}>PIYAMANTHA</h1>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <a href="#home" className="text-gray-950 hover:text-gray-500 px-3 py-2 text-lg font-titleFont">Home</a>
            <a href="#features" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Features</a>
            <a href="#projects" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Projects</a>
            <a href="#resume" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Resume</a>
            <a href="#contact" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Contact</a>
          </div>

          {/* Social Icons - Right Aligned */}
          <div className="hidden md:flex space-x-4 ml-auto">
            <a href="https://www.linkedin.com/in/piyamantha93" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-sky-950 px-3 py-2">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/piyamantha93" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-slate-950 px-3 py-2">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div onClick={toggleMenu} className="block md:hidden">
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-gray-950 hover:text-gray-500 px-3 py-2 text-lg font-titleFont">Home</a>
            <a href="#features" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Features</a>
            <a href="#projects" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Projects</a>
            <a href="#resume" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Resume</a>
            <a href="#contact" className="text-gray-950 hover:text-gray-600 px-3 py-2 text-lg font-titleFont">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
