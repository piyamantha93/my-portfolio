import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://github.com/piyamantha93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/piyamantha93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* Add more social links as needed */}
        </div>

        {/* Contact Information */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Piyamantha Weerasingha</p>
          <p>Email: piyamantha@example.com</p>
        </div>
        <div className="flex gap-8 mt-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-400">FIND ME IN</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" className="p-5 bg-gray-700 rounded-full hover:bg-gray-600">
                <i className="FaInstagram text-white"></i>
              </a>
              <a href="https://linkedin.com" className="p-5 bg-gray-700 rounded-full hover:bg-gray-600">
                <i className="FaLinkedinIn text-white"></i>
              </a>
              <a href="https://github.com" className="p-5 bg-gray-700 rounded-full hover:bg-gray-600">
                <i className="FaGithub text-white"></i>
              </a>
            </div>
          </div>
          <div>

        {/* Privacy Policy Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#privacy" className="text-gray-400 hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white transition duration-300">
            Terms of Service
          </a>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

