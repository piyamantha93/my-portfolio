

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub ,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-stone-900">Piyamantha Weerasinghe</h2>
          <p className="text-sm text-stone-900">Full Stack Developer | UI Designer</p>
        </div>
        
      
          
        <div className="flex space-x-6">

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/piyamantha99?igsh=dzM0dHprOThwM3Bs&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-600 transition">
            <FaInstagram size={24} />
          </a>
          <a href="http://linkedin.com/in/piyamanatha-weerasinghe-36b1aa227" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/piyamantha93?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400 transition">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-black mt-4 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Piyamantha Weerasinghe. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="hover:underline mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
